import lessonSource from '../components/lessons_programm/lesson.txt?raw';
import type { Lesson } from './lessons';

const sectionHeading = /^(Шаг\s+\d+\..+|Тема:.+|Длительные времена.+|Модальные глаголы.+|Модальные слова.+|Условное предложение.+|Глаголы состояния.+|Глаголы действия.+|Глаголы речи.+|Глаголы конструкции.+|Глаголы герундия.+)/;
const accents = ['coral', 'blue', 'gold', 'mint', 'violet'];

const parseProgram = (source: string) => {
  const sections: { title: string; content: string }[] = [];
  let current: { title: string; content: string } | null = null;

  for (const rawLine of source.split(/\r?\n/)) {
    const line = rawLine.trimEnd();
    const heading = line.trim().match(sectionHeading);
    if (heading) {
      if (current) sections.push(current);
      current = { title: heading[1].trim(), content: '' };
    } else if (current) {
      current.content += `${line}\n`;
    }
  }

  if (current) sections.push(current);
  return sections.filter((section) => section.content.trim());
};

const getLevel = (content: string): string => {
  if (/B2|Upper-Intermediate|продвинут/i.test(content)) return 'B2';
  if (/B1|Intermediate|Perfect|условн|Reported/i.test(content)) return 'B1';
  if (/A2|Continuous|модальн|пассив/i.test(content)) return 'A2';
  return 'A1';
};

const getCaption = (content: string) => content.split(/\r?\n/).map((line) => line.trim()).find((line) => line.length > 15) || 'Полный конспект темы';

const theoryByTopic = [
  { match: /Шаг 1\./i, text: 'Главное: сначала запомни названия 26 букв, затем учись видеть их звуки внутри слов. Название буквы и звук буквы — не одно и то же: A = [eɪ], а в cat буква a даёт [æ].' },
  { match: /Шаг 2\./i, text: 'Главное: читай слово по частям — открытый слог, закрытый слог и частые сочетания букв. Эти правила дают основу чтения, но исключения лучше запоминать вместе с озвучкой.' },
  { match: /Шаг 3\./i, text: 'Главное: начинаем строить словарный запас маленькими блоками: местоимение + слово, прилагательное + существительное, готовое словосочетание. Не учи слово изолированно.' },
  { match: /Шаг 4\./i, text: 'Главное: Simple описывает факт, привычку или событие как целое. Для Present используются do/does, для Past — did, а Future строится с will. После do, does и did основной глагол остаётся в форме V1.' },
  { match: /Шаг 5\./i, text: 'Главное: английское предложение требует понятного порядка слов. Базовая схема: Subject + Verb + Object. Если действия нет и мы описываем состояние, профессию или место, используем to be: I am at home. She is a tester.' },
  { match: /Шаг 6\./i, text: 'Главное: эта тема расширяет базовый словарь словами о доме, работе, времени, погоде и состояниях. Учи каждое слово вместе с переводом, транскрипцией и коротким примером.' },
  { match: /Части речи/i, text: 'Главное: каждое слово выполняет роль в предложении. Noun называет предмет или идею, verb — действие или состояние, adjective — признак, pronoun — заменяет существительное. Остальные части речи помогают связывать и уточнять смысл.' },
  { match: /Perfect Continuous/i, text: 'Главное: Perfect Continuous показывает длительность процесса до определённого момента. Основа: have/has/had/will have + been + V-ing. For показывает длительность, since — момент начала.' },
  { match: /Continuous/i, text: 'Главное: Continuous показывает процесс в определённый момент. Основа одна: форма to be + V-ing. Меняется только время: am/is/are, was/were или will be.' },
  { match: /Глаголы состояния/i, text: 'Главное: stative verbs описывают состояние, мнение, чувство или владение, поэтому обычно используются в Simple: I know, I want, I understand. Не ставь их автоматически в Continuous.' },
  { match: /Глаголы действия/i, text: 'Главное: action verbs называют реальные действия: test, write, build, read. Для процесса они легко переходят в Continuous: I am testing. Для привычки — в Simple: I test every day.' },
  { match: /Глаголы конструкции/i, text: 'Главное: некоторые глаголы меняют грамматическую конструкцию вместе со смыслом. Сначала определи, что именно означает глагол в контексте, и только потом выбирай Simple или Continuous.' },
  { match: /Perfect/i, text: 'Главное: Perfect связывает прошлое действие с точкой отсчёта или результатом. Основа: have/has/had/will have + V3. Важно не просто «когда произошло», а что уже получено к нужному моменту.' },
  { match: /Модальные глаголы/i, text: 'Главное: модальные глаголы показывают возможность, необходимость, совет, разрешение или вероятность. После can, could, must, should, may и might основной глагол обычно идёт без to.' },
  { match: /Модальные слова/i, text: 'Главное: эти конструкции помогают уточнить степень уверенности и отношение говорящего к действию — от уверенного утверждения до предположения или вежливой просьбы.' },
  { match: /Условное предложение/i, text: 'Главное: условное предложение состоит из условия и результата. Тип выбирай по смыслу: факт, реальная возможность, нереальная ситуация сейчас или сожаление о прошлом.' },
  { match: /Глаголы речи/i, text: 'Главное: reported speech передаёт чужие слова или мысли не дословно. Обрати внимание на say, tell, explain и на изменение времени, местоимений и указателей времени.' },
  { match: /Глаголы конструкции/i, text: 'Главное: Complex Object и Complex Subject позволяют компактно соединить действие, объект и инфинитив. Сначала распознай конструкцию, затем проверь форму глагола после объекта или пассивной конструкции.' },
  { match: /Глаголы герундия/i, text: 'Главное: после разных глаголов используется либо V-ing, либо to + V. Учи управление целиком: enjoy reading, avoid making, want to learn, decide to test.' },
];

const getTheory = (title: string) => {
  const match = theoryByTopic.find((item) => item.match.test(title));
  return match?.text || 'Главное: изучи правило, затем прочитай примеры и проговори их вслух. Теория должна помогать понять именно эту тему, а не повторять материал соседнего модуля.';
};

const alphabetSpeech: Record<string, string> = {
  A: 'ay', B: 'bee', C: 'see', D: 'dee', E: 'ee', F: 'ef', G: 'gee', H: 'aitch',
  I: 'eye', J: 'jay', K: 'kay', L: 'el', M: 'em', N: 'en', O: 'oh', P: 'pee',
  Q: 'cue', R: 'ar', S: 'ess', T: 'tee', U: 'you', V: 'vee', W: 'double you',
  X: 'ex', Y: 'why', Z: 'zed',
};

const getAudioItems = (content: string, title: string) => {
  if (title.startsWith('Шаг 1')) return content.split(/\r?\n/).flatMap((line) => {
    const match = line.trim().match(/^([A-Z][a-z])\s+\[([^\]]+)\]\s+—\s*\(([^()]*)\)/);
    return match ? [{ label: match[1], text: alphabetSpeech[match[1][0]] || match[1][0], phonetic: match[3] }] : [];
  }).slice(0, 26);
  if (title.startsWith('Шаг 2')) return [
    { label: 'make', text: 'make', phonetic: 'мейк' }, { label: 'hide', text: 'hide', phonetic: 'хайд' },
    { label: 'go', text: 'go', phonetic: 'гоу' }, { label: 'cat', text: 'cat', phonetic: 'кэт' },
    { label: 'pen', text: 'pen', phonetic: 'пен' }, { label: 'sit', text: 'sit', phonetic: 'сит' },
    { label: 'ship', text: 'ship', phonetic: 'шип' }, { label: 'chess', text: 'chess', phonetic: 'чес' },
    { label: 'this', text: 'this', phonetic: 'зис' }, { label: 'think', text: 'think', phonetic: 'финк' },
  ];
  return content.split(/\r?\n/).flatMap((line) => {
  const match = line.trim().match(/^(?:\d+\.\s*)?(.+?)\s+\[([^\]]+)\]\s+—\s*(?:.*?\s+)?\(([^()]*)\)\s*$/);
  if (!match || match[1].includes(':') || match[1].includes('→') || match[1].includes('/')) return [];
  const text = match[1].replace(/^[-•]\s*/, '').trim();
  return [{ label: text, text, phonetic: match[3] }];
  }).slice(0, 24);
};

const parsedLessons: Lesson[] = parseProgram(lessonSource).map((section, index) => ({
  id: index + 1,
  title: index === 0 ? 'Английский алфавит' : section.title,
  caption: index === 0 ? 'Алфавит и звуки' : getCaption(section.content),
  level: getLevel(`${section.title} ${section.content}`),
  duration: `${Math.max(12, Math.min(35, Math.round(section.content.length / 180)))} мин`,
  accent: accents[index % accents.length],
  module: index < 6 ? 'Старт · программа' : index < 11 ? 'Грамматический фундамент' : 'Продвинутые конструкции',
  explanation: getTheory(section.title),
  formula: 'Открой карточку, чтобы изучить правило, таблицы, примеры и лексику.',
  examples: [],
  practice: 'Пройди весь материал темы и проговори примеры вслух.',
  tip: 'Используй кнопки озвучивания рядом со словами, где они доступны.',
  audioItems: getAudioItems(section.content, section.title),
  programContent: section.content.trim(),
}));

const pronounsLesson: Lesson = {
  id: 4,
  title: 'Местоимения',
  caption: 'Кто выполняет действие и кому оно адресовано',
  level: 'A1',
  duration: '18 мин',
  accent: 'blue',
  module: 'Старт · программа',
  explanation: 'Местоимения заменяют существительные и показывают лицо, число и роль слова в предложении.',
  formula: 'I / you / he / she / it / we / they · me / him / her / us / them',
  examples: [{ en: 'She helps me. They know us.', ru: 'Она помогает мне. Они знают нас.' }],
  practice: 'Составь по одному предложению с I, he, she, we и they, затем замени местоимение на object form.',
  tip: 'После глагола используется object form: help me, tell him, invite us.',
  audioItems: [
    { label: 'I', text: 'I', phonetic: 'ай' }, { label: 'you', text: 'you', phonetic: 'ю' },
    { label: 'he', text: 'he', phonetic: 'хи' }, { label: 'she', text: 'she', phonetic: 'ши' },
    { label: 'it', text: 'it', phonetic: 'ит' }, { label: 'we', text: 'we', phonetic: 'уи' },
    { label: 'they', text: 'they', phonetic: 'зэй' }, { label: 'me', text: 'me', phonetic: 'ми' },
    { label: 'him', text: 'him', phonetic: 'хим' }, { label: 'her', text: 'her', phonetic: 'хёр' },
    { label: 'us', text: 'us', phonetic: 'ас' }, { label: 'them', text: 'them', phonetic: 'зэм' },
  ],
  programContent: `Личные местоимения (Subject Pronouns)\nI [aɪ] — я (ай)\nyou [juː] — ты / вы (ю)\nhe [hiː] — он (хи)\nshe [ʃiː] — она (ши)\nit [ɪt] — оно / это (ит)\nwe [wiː] — мы (уи)\nthey [ðeɪ] — они (зэй)\n\nОбъектные формы (Object Pronouns)\nme [miː] — меня / мне (ми)\nyou [juː] — тебя / вам (ю)\nhim [hɪm] — его / ему (хим)\nher [hɜː(r)] — её / ей (хёр)\nus [ʌs] — нас / нам (ас)\nthem [ðem] — их / им (зэм)\n\nПримеры\nShe helps me. [ʃiː helps miː] — Она помогает мне (ши хэлпс ми).\nThey know us. [ðeɪ nəʊ ʌs] — Они знают нас (зэй ноу ас).`,
};



const foundationLessons: Lesson[] = [
  {
    id: 100,
    title: 'Артикли a / an / the',
    caption: 'Как сказать «какой-то» и «конкретный»',
    level: 'A1',
    duration: '18 мин',
    accent: 'gold',
    module: 'Старт · программа',
    explanation: 'Артикль стоит перед существительным и помогает понять, говорим ли мы об одном предмете вообще или о конкретном предмете. A используется перед согласным звуком: a tester. An — перед гласным звуком: an app. The — когда предмет уже известен или конкретен: the tester, the app we discussed.',
    formula: 'a + согласный звук · an + гласный звук · the + конкретный предмет',
    examples: [
      { en: 'I need a laptop.', ru: 'Мне нужен ноутбук (любой подходящий).' },
      { en: 'The laptop is on the desk.', ru: 'Этот ноутбук на столе (конкретный).' },
    ],
    practice: 'Вставь a, an или the в десять простых предложений о работе и доме.',
    tip: 'Выбирай a/an по звуку, а не по букве: an hour, но a university.',
  },
  {
    id: 101,
    title: 'Множественное число и countable / uncountable',
    caption: 'Один предмет, несколько предметов и неисчисляемые слова',
    level: 'A1',
    duration: '18 мин',
    accent: 'blue',
    module: 'Старт · программа',
    explanation: 'Большинство исчисляемых существительных образуют множественное число через -s: test → tests. После -s, -sh, -ch, -x часто добавляется -es: box → boxes. Некоторые формы неправильные: child → children, person → people, man → men. Неисчисляемые слова обычно не получают -s: information, advice, software, equipment.',
    formula: 'one test → two tests · much information · many tests',
    examples: [
      { en: 'I have two test cases.', ru: 'У меня два тест-кейса.' },
      { en: 'We need more information.', ru: 'Нам нужно больше информации.' },
    ],
    practice: 'Раздели двадцать слов на countable и uncountable и составь по пять предложений.',
    tip: 'Не говори informations или advices. Используй some information / a piece of advice.',
  },
  {
    id: 102,
    title: 'There is / There are и have / has',
    caption: 'Как сказать, что что-то существует или принадлежит кому-то',
    level: 'A1',
    duration: '18 мин',
    accent: 'mint',
    module: 'Старт · программа',
    explanation: 'There is/are сообщает, что где-то что-то есть: There is a bug in the app. There are three bugs. Have/has говорит о владении или наличии: I have a laptop. She has a task. Вопросы: Is there...? Are there...? Do you have...? Does she have...?',
    formula: 'There is + one · There are + many · I/you/we/they have · he/she/it has',
    examples: [
      { en: 'There is a problem in production.', ru: 'В продакшене есть проблема.' },
      { en: 'Does she have access?', ru: 'У неё есть доступ?' },
    ],
    practice: 'Опиши рабочий стол и тестовый проект через there is/are и have/has.',
    tip: 'There is = «есть/находится», have = «имеет/у кого-то есть».',
  },
  {
    id: 103,
    title: 'Вопросы, отрицания и вспомогательные глаголы',
    caption: 'Do, does, did, be, have и will',
    level: 'A1',
    duration: '22 мин',
    accent: 'violet',
    module: 'Старт · программа',
    explanation: 'Английский часто строит вопрос с помощью вспомогательного глагола. Present Simple: Do you work? Does she work? Past Simple: Did you work? С to be: Are you ready? Was he there? Future: Will you test it? Present Perfect: Have you finished? В отрицании тот же помощник получает not: do not, does not, did not, is not, have not.',
    formula: 'Do/Does + V1 · Did + V1 · Be + subject · Have/Has + V3 · Will + V1',
    examples: [
      { en: 'Did you test the fix?', ru: 'Ты протестировал исправление?' },
      { en: 'Have you finished the report?', ru: 'Ты закончил отчёт?' },
    ],
    practice: 'Преврати десять утверждений в вопросы и отрицания.',
    tip: 'Если в предложении уже есть am/is/are/was/were, do/does/did не добавляем.',
  },
  {
    id: 104,
    title: 'Предлоги, сравнение и частые неправильные глаголы',
    caption: 'Маленькие слова, которые сильно меняют смысл',
    level: 'A2',
    duration: '24 мин',
    accent: 'coral',
    module: 'Грамматический фундамент',
    explanation: 'Предлоги лучше учить в готовых сочетаниях: work on a project, work at a company, work from home, interested in testing, responsible for QA. Для сравнения: faster than, more reliable than, the most useful. Неправильные глаголы нельзя строить через -ed: go → went → gone, write → wrote → written, find → found → found.',
    formula: 'work on · responsible for · interested in · -er + than · more + adjective + than',
    examples: [
      { en: 'This tool is more reliable than the old one.', ru: 'Этот инструмент надёжнее старого.' },
      { en: 'I am responsible for regression testing.', ru: 'Я отвечаю за регрессионное тестирование.' },
    ],
    practice: 'Выучи десять неправильных глаголов в трёх формах и составь пять сравнений.',
    tip: 'Учи предлог вместе со словом: depend on, look for, listen to, wait for.',
  },
];

export const programLessons: Lesson[] = [...parsedLessons.slice(0, 3), pronounsLesson, ...foundationLessons, ...parsedLessons.slice(3)].map((lesson, index) => ({ ...lesson, id: index + 1 }));
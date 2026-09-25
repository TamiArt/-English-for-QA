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

const theoryByCard = [
  'Суть: в английском 26 букв, но букв и звуков нельзя сравнивать один к одному. Название буквы A — [eɪ] («эй»), а звук в слове cat — [æ]. Поэтому сначала учим название буквы, затем её частые звуки и сочетания. Это нормальная особенность английского, а не ошибка.',
  'Суть: закрытый слог обычно даёт короткий гласный звук: cat, pen, sit. Открытый слог и немая e часто дают звук, похожий на название буквы: go, make, hide. Частые сочетания тоже нужно узнавать целиком: sh = «ш», ch = «ч», th = [θ]/[ð], ee = «и». Правила помогают читать новые слова, но у английского есть исключения — их лучше сразу слушать.',
  'Суть: учим не отдельные слова, а маленькие готовые блоки. a big house = большой дом, work from home = работать из дома, make a mistake = совершить ошибку. Прилагательное обычно стоит перед существительным: a new phone. Запоминай слово вместе с типичным соседом — так B2 будет строиться намного легче.',
  'Суть: местоимение показывает, кто делает действие и на кого оно направлено. Subject: I, you, he, she, it, we, they. Object: me, you, him, her, it, us, them. Possessive: my, your, his, her, its, our, their. Сравни: She helps me — она помогает мне; This is my laptop — это мой ноутбук.',
  'Суть: Simple выбираем, когда важен факт, привычка или завершённое событие, а не процесс. Present: I work / She works. Past: I worked / I went. Future: I will work. В Present вопрос/отрицание используют do/does, в Past — did. После do/does/did главный глагол всегда V1: Does she work? Did she work?',
  'Суть: базовый порядок — Subject + Verb + Object + Place + Time. I bought a phone yesterday. Если это состояние, профессия или место, нужен to be: I am tired. She is a tester. Are you ready? — вопрос с to be. Если есть обычный глагол, вопрос строится иначе: Do you work?',
  'Суть: слово должно сразу превращаться в фразу. Для каждого слова учи: перевод + IPA + русское приближение произношения + типичное сочетание + короткое предложение. Например: requirement — требование; meet a requirement — соответствовать требованию; The feature meets the requirement.',
  'Суть: части речи — это роли слов. Noun называет объект или идею; verb показывает действие/состояние; adjective описывает noun; adverb описывает действие; pronoun заменяет noun; preposition связывает слова; conjunction соединяет идеи. Отдельно запомни articles a/an/the и determiners this, that, some, any — они помогают понять, о каком количестве или предмете мы говорим.',
  'Суть: Continuous — это «камера»: мы смотрим на действие в процессе. I am testing now. At 5 yesterday, I was testing. At 5 tomorrow, I will be testing. Формула всех трёх форм: to be + V-ing. Сравни I test every day — привычка и I am testing now — процесс.',
  "Суть: сначала выбери точку времени, затем форму to be. Present: am/is/are + V-ing. Past: was/were + V-ing. Future: will be + V-ing. Отрицание: am not / isn't / aren't + V-ing. Вопрос: Am/Is/Are + subject + V-ing? Для Past — Was/Were, для Future — Will + subject + be + V-ing.",
  'Суть: stative verbs называют состояние, а не действие в процессе: know, believe, understand, want, need, own, belong, remember. Обычно говорим I know, I understand, I want. Но некоторые слова меняют смысл: I think it is good — я считаю; I am thinking about it — я сейчас обдумываю.',
  'Суть: action verbs называют действия: test, write, build, run, read. Они легко работают в Continuous: I am testing. Если действие повторяется как привычка — I test every day. Если происходит прямо сейчас — I am testing now.',
  'Суть: один и тот же глагол иногда меняет грамматику вместе со смыслом. I think you are right — мнение. I am thinking about the problem — процесс размышления. I have a car — владение. I am having lunch — действие. Поэтому сначала определяй смысл, потом выбирай Simple или Continuous.',
  'Суть: Perfect отвечает на вопрос «что уже произошло к моменту отсчёта?». Present Perfect: have/has + V3 — результат важен сейчас. Past Perfect: had + V3 — одно прошлое раньше другого. Future Perfect: will have + V3 — результат будет готов к сроку. V3 — третья форма глагола: worked, gone, written, seen.',
  'Суть: Perfect Continuous = длительность процесса до точки отсчёта. Present: have/has been + V-ing; Past: had been + V-ing; Future: will have been + V-ing. For показывает период: for two hours. Since показывает начало: since Monday. Сравни: I have tested it — результат; I have been testing it for two hours — длительность.',
  'Суть: модальные глаголы выражают отношение к действию — возможность, необходимость, разрешение или совет. После большинства модальных глаголов смысловой глагол ставится без to: can swim, must stop, should rest.',
  'Can / Could выражают способность или возможность: I can swim. Must — строгая обязанность: You must stop. Should — совет: You should rest. May / Might — вероятность или вежливое разрешение: It may rain; May I come in?',
  'Суть: conditionals с if состоят из условия и результата. Zero: If + Present, Present — факты. First: If + Present, will + V — реальное будущее. Second: If + Past, would + V — нереальное настоящее или мечта. Third: If + Past Perfect, would have + V3 — сожаление о прошлом.',
  'Суть: reporting verbs передают чужие слова, мысли и косвенную речь. Если главное предложение в прошлом, действует Sequence of Tenses — сдвиг времён назад. Основные глаголы: say [seɪ], tell, explain, agree, deny, suggest. Пример: He said he was tired.',
  'Суть: Complex Object и Complex Subject сокращают предложения. Complex Object: глагол + объект + инфинитив — I expect him to come. Complex Subject: субъект + пассивный глагол + инфинитив — He is expected to arrive.',
  'Суть: выбираем между V-ing и to + V после определённых глаголов. Герундий используется после предлогов и enjoy, finish, avoid, suggest: enjoy reading. Инфинитив используется после want, decide, hope, promise: I decided to learn.',
];

const getTheory = (title: string, index: number) => theoryByCard[index] || (title.includes('Финальная') ? 'Грамматика курса выстроена от фундамента A0-A1 к свободной речи B2. Закрепляй результат регулярным чтением, слушанием и говорением.' : 'Изучи ключевое правило, формулу и примеры темы.');

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
  explanation: getTheory(section.title, index),
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
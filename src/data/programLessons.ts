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
  'Суть: фундамент языка — 26 букв (6 гласных и 20 согласных). Главное правило: буквы и звуки в английском не совпадают. Одна буква может читаться по-разному в зависимости от типа слога. Пример: A читается как [æ] в cat (кошка), но как [eɪ] в make (делать).',
  'Суть: чтение гласных зависит от типа слога. Открытый слог заканчивается на гласную или немую e, поэтому гласная читается как в алфавите: make [meɪk], hide [haɪd], go [ɡəʊ]. Закрытый слог заканчивается на согласную, поэтому гласная читается кратко: cat [kæt], pen [pen], sit [sɪt].',
  'Суть: формирование первого словарного запаса из частых существительных, прилагательных и базовых фраз. Базовые конструкции: Good morning / Hello — приветствие; Thank you / Please — вежливость; a big house, a new car — прилагательное стоит перед существительным.',
  'Суть: местоимения заменяют имена и предметы, чтобы избегать повторов. Субъектные: I (я), you (ты/вы), he (он), she (она), it (оно/предмет/животное), we (мы), they (они). Объектные: me (мне/меня), him (ему), her (ей), us (нам), them (им). Пример: She sees me — Она видит меня.',
  'Суть: Simple передаёт регулярные действия, привычки и постоянные факты. Present Simple: V / V-s для he, she, it; do/does в вопросах и отрицаниях. Past Simple: V2 или V-ed; did в вопросах и отрицаниях. Future Simple: will + V. Примеры: I work / She works; Did you work?; I will work.',
  'Суть: английский использует строгий прямой порядок слов. Схема: Кто/что (подлежащее) + что делает (сказуемое) + кого/что (дополнение) + где/когда (обстоятельство). Пример: I bought a phone yesterday — Я купил телефон вчера.',
  'Суть: накопление фундаментального словарного запаса: глаголы движения, предметы быта и описательные прилагательные. Учим слово вместе с транскрипцией, чтением, переводом и короткой фразой, чтобы сразу использовать его в речи.',
  'Суть: предложение строится из 8 частей речи: Noun — существительное (cat, city); Verb — глагол (run, think); Adjective — прилагательное (red, big); Adverb — наречие (quickly, well); Pronoun — местоимение (he, it); Preposition — предлог (in, on, at); Conjunction — союз (and, but); Interjection — междометие (oh, wow).',
  'Суть: Continuous описывает процесс в конкретный момент — сейчас, в определённый момент прошлого или будущего. Главный принцип: действие ещё не завершено в выбранной точке времени.',
  'Суть: общая формула Continuous — to be + V-ing. Present: am/is/are + V-ing — I am reading now. Past: was/were + V-ing — I was reading at 5 PM yesterday. Future: will be + V-ing — I will be reading tomorrow at 5 PM.',
  'Суть: stative verbs описывают чувства, мысли, владение и восприятие, а не физическое действие. Они обычно не употребляются в Continuous, поэтому используется Simple: I know this, а не I am knowing. Основные глаголы: love, hate, know, understand, believe, want, remember, have в значении владения.',
  'Суть: action verbs обозначают физические и динамические действия, у которых есть начало и конец. Они могут употребляться во всех временах, включая Continuous: read, run, cook, build, write. Пример: I am reading now.',
  'Суть: некоторые глаголы могут быть и stative, и action, но с разным смыслом. I think it is good — состояние, моё мнение. I am thinking about the test — действие, я обдумываю это прямо сейчас.',
  'Суть: Perfect описывает действие, завершённое к определённому моменту, когда важен результат. Формула: have / has / had + V3. Present Perfect связан с настоящим: I have lost my key. Past Perfect произошло раньше другого прошлого события: He had left before I came. Future Perfect завершится к моменту в будущем: I will have finished by 5 PM.',
  'Суть: Perfect Continuous описывает процесс, который начался раньше и длится до определённого момента; акцент на продолжительности. Формула: have / has / had + been + V-ing. Пример: I have been working here for 5 years.',
  'Суть: модальные глаголы выражают отношение к действию — возможность, необходимость, разрешение или совет. После большинства модальных глаголов смысловой глагол ставится без to: can swim, must stop, should rest.',
  'Can / Could выражают способность или возможность: I can swim. Must — строгая обязанность: You must stop. Should — совет: You should rest. May / Might — вероятность или вежливое разрешение: It may rain; May I come in?',
  'Суть: conditionals с if состоят из условия и результата. Zero: If + Present, Present — факты. First: If + Present, will + V — реальное будущее. Second: If + Past, would + V — нереальное настоящее или мечта. Third: If + Past Perfect, would have + V3 — сожаление о прошлом.',
  'Суть: reporting verbs передают чужие слова, мысли и косвенную речь. Если главное предложение в прошлом, действует Sequence of Tenses — сдвиг времён назад. Основные глаголы: say [seɪ], tell, explain, agree, deny, suggest. Пример: He said he was tired.',
  'Суть: Complex Object и Complex Subject сокращают предложения. Complex Object: глагол + объект + инфинитив — I expect him to come. Complex Subject: субъект + пассивный глагол + инфинитив — He is expected to arrive.',
  'Суть: выбираем между V-ing и to + V после определённых глаголов. Герундий используется после предлогов и enjoy, finish, avoid, suggest: enjoy reading. Инфинитив используется после want, decide, hope, promise: I decided to learn.',
];

const getTheory = (title: string, index: number) => theoryByCard[index] || (title.includes('Финальная') ? 'Грамматика курса выстроена от фундамента A0-A1 к свободной речи B2. Закрепляй результат регулярным чтением, слушанием и говорением.' : 'Изучи ключевое правило, формулу и примеры темы.');

const getAudioItems = (content: string, title: string) => {
  if (title.startsWith('Шаг 1')) return content.split(/\r?\n/).flatMap((line) => {
    const match = line.trim().match(/^([A-Z][a-z])\s+\[([^\]]+)\]\s+—\s*\(([^()]*)\)/);
    return match ? [{ label: match[1], text: match[1][0], phonetic: match[3] }] : [];
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

export const programLessons: Lesson[] = [...parsedLessons.slice(0, 3), pronounsLesson, ...parsedLessons.slice(3)].map((lesson, index) => ({ ...lesson, id: index + 1, explanation: index === 3 ? pronounsLesson.explanation : getTheory(lesson.title, index) }));
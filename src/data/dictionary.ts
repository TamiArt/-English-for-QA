import type { DictionaryEntry } from '../types';
import dictionarySource from '../dictionary/dictA.txt?raw';
import advancedDictionarySource from '../dictionary/dictB.txt?raw';

const starterDictionary: DictionaryEntry[] = [
  { id: 1, word: 'Hello', ipa: 'həˈləʊ', translation: 'привет', phoneticRu: 'хэлОу', level: 'A1', category: 'general', examples: [{ en: 'Hello, my name is Alex.', ru: 'Привет, меня зовут Алекс.', phoneticRu: 'хэлОу, май нЭйм из Эликс' }] },
  { id: 2, word: 'Weather', ipa: 'ˈweðə', translation: 'погода', phoneticRu: 'уЭзэ', level: 'A1', category: 'general', examples: [{ en: 'Nice weather today, isn’t it?', ru: 'Хорошая сегодня погода, не правда ли?', phoneticRu: 'найс уЭзэ тудЭй, изнт ит' }] },
  { id: 3, word: 'Understand', ipa: 'ˌʌndəˈstænd', translation: 'понимать', phoneticRu: 'андэстЭнд', level: 'A2', category: 'general' },
  { id: 4, word: 'Improve', ipa: 'ɪmˈpruːv', translation: 'улучшать', phoneticRu: 'импрУв', level: 'B1', category: 'general' },
  { id: 5, word: 'Issue', ipa: 'ˈɪʃuː', translation: 'проблема, задача, баг', phoneticRu: 'Ишью', level: 'A2', category: 'it', examples: [{ en: 'I found an issue in the checkout flow.', ru: 'Я нашёл проблему в процессе оплаты.', phoneticRu: 'ай фАунд эн Ишью ин зэ чЕкаут флоу' }] },
  { id: 6, word: 'Deploy', ipa: 'dɪˈplɔɪ', translation: 'разворачивать, публиковать код', phoneticRu: 'диплОй', level: 'B1', category: 'it' },
  { id: 7, word: 'Requirement', ipa: 'rɪˈkwaɪəmənt', translation: 'требование', phoneticRu: 'риквАйэмэнт', level: 'B1', category: 'it' },
  { id: 8, word: 'Interview', ipa: 'ˈɪntəvjuː', translation: 'собеседование', phoneticRu: 'Интэвью', level: 'B2', category: 'it' },
];

const normalize = (value: string) => value.trim().toLocaleLowerCase('ru-RU');

const parseDictionarySource = (source: string, defaultLevel: DictionaryEntry['level']): DictionaryEntry[] => {
  const records: { text: string; level: DictionaryEntry['level']; block: string }[] = [];
  let currentRecord = '';
  let level: DictionaryEntry['level'] = defaultLevel;
  let block = '';

  const flushRecord = () => {
    if (currentRecord) records.push({ text: currentRecord, level, block });
    currentRecord = '';
  };

  for (const rawLine of source.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line) continue;

    const levelMatch = line.match(/(?:УРОВЕНЬ|уровня)\s+(B2|B1|A2|A1|C1)(?:–C1)?\b/i);
    if (levelMatch) {
      flushRecord();
      level = levelMatch[1] as DictionaryEntry['level'];
      continue;
    }

    const blockMatch = line.match(/^Блок(?:\s+[^:]+)?:\s*(.+)$/);
    if (blockMatch) {
      flushRecord();
      block = blockMatch[1];
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      flushRecord();
      currentRecord = line;
    } else if (currentRecord) {
      currentRecord += ` ${line}`;
    }
  }
  flushRecord();

  const parsed: DictionaryEntry[] = [];

  for (const record of records) {
    const entryMatch = record.text.match(/^\d+\.\s+(.+?)\s+\[([^\]]+)\]\s+—\s+(.+)$/);
    if (!entryMatch) continue;

    const pronunciationMatch = entryMatch[3].match(/^(.*)\s+\(([^()]*)\)\s*$/);
    if (!pronunciationMatch) continue;

    const word = entryMatch[1].trim();
    const ipa = entryMatch[2].trim();
    const translation = pronunciationMatch[1].trim();
    const phoneticRu = pronunciationMatch[2].trim();
    const category: DictionaryEntry['category'] = /tech|code|qa|software|digital|office|work|career|program|testing|debug/i.test(`${word} ${record.block}`) ? 'it' : 'general';

    parsed.push({
      id: 1000 + parsed.length,
      word,
      ipa,
      translation,
      phoneticRu,
      level: record.level,
      category,
      topic: record.block || 'Основное',
    });
  }

  return parsed;
};

const importedDictionary = [
  ...parseDictionarySource(dictionarySource, 'A1'),
  ...parseDictionarySource(advancedDictionarySource, 'B1'),
];
const existingWords = new Set(starterDictionary.map((entry) => normalize(entry.word)));

export const dictionary: DictionaryEntry[] = [
  ...starterDictionary,
  ...importedDictionary.filter((entry) => {
    const key = normalize(entry.word);
    if (existingWords.has(key)) return false;
    existingWords.add(key);
    return true;
  }),
];

export const formatDictionaryLine = (entry: DictionaryEntry) => `${entry.word} [${entry.ipa}] – ${entry.translation} [${entry.phoneticRu}]`;
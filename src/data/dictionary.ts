import type { DictionaryEntry } from '../types';

export const dictionary: DictionaryEntry[] = [
  { id: 1, word: 'Hello', ipa: 'həˈləʊ', translation: 'привет', phoneticRu: 'хэлОу', level: 'A1', category: 'general', examples: [{ en: 'Hello, my name is Alex.', ru: 'Привет, меня зовут Алекс.', phoneticRu: 'хэлОу, май нЭйм из Эликс' }] },
  { id: 2, word: 'Weather', ipa: 'ˈweðə', translation: 'погода', phoneticRu: 'уЭзэ', level: 'A1', category: 'general', examples: [{ en: 'Nice weather today, isn’t it?', ru: 'Хорошая сегодня погода, не правда ли?', phoneticRu: 'найс уЭзэ тудЭй, изнт ит' }] },
  { id: 3, word: 'Understand', ipa: 'ˌʌndəˈstænd', translation: 'понимать', phoneticRu: 'андэстЭнд', level: 'A2', category: 'general' },
  { id: 4, word: 'Improve', ipa: 'ɪmˈpruːv', translation: 'улучшать', phoneticRu: 'импрУв', level: 'B1', category: 'general' },
  { id: 5, word: 'Issue', ipa: 'ˈɪʃuː', translation: 'проблема, задача, баг', phoneticRu: 'Ишью', level: 'A2', category: 'it', examples: [{ en: 'I found an issue in the checkout flow.', ru: 'Я нашёл проблему в процессе оплаты.', phoneticRu: 'ай фАунд эн Ишью ин зэ чЕкаут флоу' }] },
  { id: 6, word: 'Deploy', ipa: 'dɪˈplɔɪ', translation: 'разворачивать, публиковать код', phoneticRu: 'диплОй', level: 'B1', category: 'it' },
  { id: 7, word: 'Requirement', ipa: 'rɪˈkwaɪəmənt', translation: 'требование', phoneticRu: 'риквАйэмэнт', level: 'B1', category: 'it' },
  { id: 8, word: 'Interview', ipa: 'ˈɪntəvjuː', translation: 'собеседование', phoneticRu: 'Интэвью', level: 'B2', category: 'it' },
];

export const formatDictionaryLine = (entry: DictionaryEntry) => `${entry.word} [${entry.ipa}] – ${entry.translation} [${entry.phoneticRu}]`;
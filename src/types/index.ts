export type VocabularyLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
export type VocabularyCategory = 'general' | 'it';

export interface DictionaryEntry {
  id: number;
  word: string;
  ipa: string;
  translation: string;
  phoneticRu: string;
  level: VocabularyLevel;
  category: VocabularyCategory;
  topic?: string;
  examples?: { en: string; ru: string; phoneticRu: string }[];
}

export interface ProgressState {
  xp: number;
  streak: number;
  completedLessons: number[];
}
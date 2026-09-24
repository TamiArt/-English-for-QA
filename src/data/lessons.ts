export interface Lesson {
  id: number;
  title: string;
  caption: string;
  level: string;
  duration: string;
  accent: string;
}

export const lessons: Lesson[] = [
  { id: 1, title: 'Первые буквы', caption: 'Алфавит и звуки', level: 'START', duration: '5 мин', accent: 'coral' },
  { id: 2, title: 'Знакомство', caption: 'I am / You are', level: 'A1', duration: '8 мин', accent: 'blue' },
  { id: 3, title: 'Мой день', caption: 'Present Simple', level: 'A1', duration: '12 мин', accent: 'gold' },
  { id: 4, title: 'Рабочий ритм', caption: 'Daily standup', level: 'A2', duration: '15 мин', accent: 'mint' },
  { id: 5, title: 'Bug report', caption: 'Ясно о проблеме', level: 'B1', duration: '18 мин', accent: 'violet' },
];
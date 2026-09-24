import { useEffect, useState } from 'react';
import type { ProgressState } from '../types';

const storageKey = 'artami-progress';
const initial: ProgressState = { xp: 120, streak: 3, completedLessons: [] };

export const useProgress = () => {
  const [progress, setProgress] = useState<ProgressState>(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? { ...initial, ...JSON.parse(saved) } : initial;
  });

  useEffect(() => localStorage.setItem(storageKey, JSON.stringify(progress)), [progress]);

  const completeLesson = (lessonId: number) => setProgress((current) => current.completedLessons.includes(lessonId) ? current : ({ ...current, xp: current.xp + 30, completedLessons: [...current.completedLessons, lessonId] }));
  return { progress, completeLesson };
};
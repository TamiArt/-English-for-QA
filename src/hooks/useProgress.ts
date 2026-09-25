import { useEffect, useState } from 'react';
import type { ProgressState } from '../types';

const initial: ProgressState = { xp: 120, streak: 3, completedLessons: [] };

export const useProgress = (email = '') => {
  const storageKey = `artami-progress:${email || 'guest'}`;
  const syncUrl = import.meta.env.VITE_SYNC_URL || 'http://localhost:8787';
  const loadProgress = () => {
    const saved = localStorage.getItem(storageKey);
    if (!saved) return initial;
    try { return { ...initial, ...JSON.parse(saved) }; } catch { return initial; }
  };
  const [progress, setProgress] = useState<ProgressState>(loadProgress);

  useEffect(() => setProgress(loadProgress()), [email]);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(progress));
    if (!email) return;
    fetch(`${syncUrl}/profiles/${encodeURIComponent(email)}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(progress) }).catch(() => undefined);
  }, [progress, email]);

  useEffect(() => {
    if (!email) return;
    fetch(`${syncUrl}/profiles/${encodeURIComponent(email)}`).then((response) => response.ok ? response.json() : null).then((remote) => { if (remote) setProgress({ ...initial, ...remote }); }).catch(() => undefined);
  }, [email]);

  const completeLesson = (lessonId: number) => setProgress((current) => current.completedLessons.includes(lessonId) ? current : ({ ...current, xp: current.xp + 30, completedLessons: [...current.completedLessons, lessonId] }));
  return { progress, completeLesson };
};
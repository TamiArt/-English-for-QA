import { useCallback, useEffect, useRef, useState } from 'react';

let activeSpeechId = 0;

const stopSpeech = () => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
};

const FEMALE_VOICE_NAMES = [
  'microsoft hazel',
  'microsoft zira',
  'microsoft aria',
  'microsoft jenny',
  'google uk english female',
  'google us english female',
  'google english female',
  'samantha',
  'karen',
  'susan',
  'serena',
  'ava',
  'jenny',
  'aria',
  'libby',
  'hazel',
  'zira',
];

const MALE_VOICE_NAMES = [
  'microsoft david',
  'microsoft george',
  'microsoft mark',
  'microsoft guy',
  'microsoft daniel',
  'google uk english male',
  'google us english male',
  'daniel',
  'alex',
  'david',
  'mark',
  'george',
];

const femaleVoiceScore = (voice: SpeechSynthesisVoice, lang: string) => {
  const name = voice.name.toLowerCase();
  const voiceLang = voice.lang.toLowerCase();
  const target = lang.toLowerCase();

  if (!voiceLang.startsWith(target.split('-')[0])) return -100;

  let score = voiceLang === target ? 40 : 20;

  if (FEMALE_VOICE_NAMES.some((known) => name.includes(known))) score += 1000;
  if (MALE_VOICE_NAMES.some((known) => name.includes(known))) score -= 1000;

  if (/female|woman|girl/i.test(name)) score += 500;
  if (/male|man/i.test(name)) score -= 500;
  if (/natural|online|premium|enhanced/i.test(name)) score += 25;

  return score;
};

const letterSpeech: Record<string, string> = {
  A: 'ay',
  B: 'bee',
  C: 'see',
  D: 'dee',
  E: 'ee',
  F: 'ef',
  G: 'gee',
  H: 'aitch',
  I: 'eye',
  J: 'jay',
  K: 'kay',
  L: 'el',
  M: 'em',
  N: 'en',
  O: 'oh',
  P: 'pee',
  Q: 'cue',
  R: 'ar',
  S: 'ess',
  T: 'tee',
  U: 'you',
  V: 'vee',
  W: 'double you',
  X: 'ex',
  Y: 'why',
  Z: 'zed',
};

const normalizeSpeechText = (text: string) => {
  const value = text.trim();
  if (/^[A-Z]$/.test(value)) return letterSpeech[value];
  return text;
};

const getEnglishVoices = (lang: string) => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return [];

  const voices = window.speechSynthesis.getVoices();
  const target = lang.toLowerCase();

  return voices.filter((voice) => {
    const voiceLang = voice.lang.toLowerCase();
    return voiceLang === target || voiceLang.startsWith(target.split('-')[0]);
  });
};

const selectFemaleVoice = (voices: SpeechSynthesisVoice[], lang: string) =>
  [...voices]
    .map((voice) => ({ voice, score: femaleVoiceScore(voice, lang) }))
    .filter((item) => item.score >= 0)
    .sort((a, b) => b.score - a.score)[0]?.voice ?? null;

export const useSpeech = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playingText, setPlayingText] = useState('');
  const timeoutRef = useRef<number | null>(null);
  const speechIdRef = useRef(0);

  const stop = useCallback(() => {
    activeSpeechId += 1;
    speechIdRef.current = activeSpeechId;

    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    stopSpeech();
    setIsPlaying(false);
    setPlayingText('');
  }, []);

  const speak = useCallback((text: string, lang = 'en-GB') => {
    const speechText = normalizeSpeechText(text);

    if (
      typeof window === 'undefined' ||
      !('speechSynthesis' in window) ||
      !speechText.trim()
    ) {
      return;
    }

    activeSpeechId += 1;
    const speechId = activeSpeechId;
    speechIdRef.current = speechId;

    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }

    stopSpeech();

    // Voices can load asynchronously in Chrome/Edge. Give the browser time
    // to expose the same female English voice that was available before.
    timeoutRef.current = window.setTimeout(() => {
      timeoutRef.current = null;

      if (speechIdRef.current !== speechId) return;

      const voices = getEnglishVoices(lang);
      const femaleVoice = selectFemaleVoice(voices, lang);

      const utterance = new SpeechSynthesisUtterance(speechText);
      utterance.lang = lang;
      utterance.rate = 0.82;
      utterance.pitch = 1.04;

      // Never deliberately choose a known male voice. If the browser has a
      // female English voice, it is always selected explicitly.
      if (femaleVoice) {
        utterance.voice = femaleVoice;
      }

      utterance.onstart = () => {
        if (speechIdRef.current !== speechId) return;
        setIsPlaying(true);
        setPlayingText(text);
      };

      utterance.onend = () => {
        if (speechIdRef.current !== speechId) return;
        setIsPlaying(false);
        setPlayingText('');
      };

      utterance.onerror = () => {
        if (speechIdRef.current !== speechId) return;
        setIsPlaying(false);
        setPlayingText('');
      };

      window.speechSynthesis.speak(utterance);
    }, 80);
  }, []);

  useEffect(() => {
    const handleVoicesChanged = () => {
      // Force the browser to refresh its voice list while the hook is mounted.
      if ('speechSynthesis' in window) window.speechSynthesis.getVoices();
    };

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.addEventListener('voiceschanged', handleVoicesChanged);
    }

    return () => {
      if (
        typeof window !== 'undefined' &&
        'speechSynthesis' in window
      ) {
        window.speechSynthesis.removeEventListener('voiceschanged', handleVoicesChanged);
      }

      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }

      stopSpeech();
    };
  }, []);

  return { speak, stop, isPlaying, playingText };
};

import { useCallback, useEffect, useRef, useState } from 'react';

let activeSpeechId = 0;

const stopSpeech = () => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
};

const femaleVoiceScore = (voice: SpeechSynthesisVoice, lang: string) => {
  const name = voice.name.toLowerCase();
  const voiceLang = voice.lang.toLowerCase();
  const target = lang.toLowerCase();

  if (voiceLang !== target && !voiceLang.startsWith(target.split('-')[0])) return -100;

  let score = voiceLang === target ? 30 : 10;
  if (/female|woman|girl|hazel|zira|samantha|susan|karen|sara|serena|ava|aria|jenny|libby|google uk english female|google us english female/i.test(name)) score += 100;
  if (/male|man|daniel|david|mark|george|guy|alex/i.test(name)) score -= 40;
  if (/natural|online|premium|enhanced|google|microsoft/i.test(name)) score += 15;

  return score;
};

const selectVoice = (voices: SpeechSynthesisVoice[], lang: string) =>
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
    if (typeof window === 'undefined' || !('speechSynthesis' in window) || !text.trim()) {
      return;
    }

    activeSpeechId += 1;
    const speechId = activeSpeechId;
    speechIdRef.current = speechId;

    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }

    stopSpeech();

    timeoutRef.current = window.setTimeout(() => {
      timeoutRef.current = null;

      if (speechIdRef.current !== speechId) return;

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 0.82;
      utterance.pitch = 1.03;

      const voices = window.speechSynthesis.getVoices();
      utterance.voice = selectVoice(voices, lang);

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
    }, 30);
  }, []);

  useEffect(() => () => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }
    stopSpeech();
  }, []);

  return { speak, stop, isPlaying, playingText };
};

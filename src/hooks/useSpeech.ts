import { useCallback, useEffect, useRef, useState } from 'react';

let activeSpeechId = 0;

const stopSpeech = () => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
};

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

  const speak = useCallback((text: string, lang = 'en-US') => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window) || !text.trim()) {
      return;
    }

    activeSpeechId += 1;
    const speechId = activeSpeechId;
    speechIdRef.current = speechId;

    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }

    // Cancel first, then schedule a fresh utterance. This avoids a Chromium
    // speechSynthesis race where a cancelled utterance can be spoken twice.
    stopSpeech();

    timeoutRef.current = window.setTimeout(() => {
      timeoutRef.current = null;

      if (speechIdRef.current !== speechId) return;

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 0.85;
      utterance.pitch = 1;

      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(
        (voice) =>
          voice.lang.toLowerCase() === lang.toLowerCase() &&
          /google|microsoft|natural|premium/i.test(voice.name),
      );
      const fallbackVoice = voices.find((voice) =>
        voice.lang.toLowerCase().startsWith(lang.split('-')[0].toLowerCase()),
      );
      utterance.voice = preferredVoice ?? fallbackVoice ?? null;

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
  }, []);

  return { speak, stop, isPlaying, playingText };
};

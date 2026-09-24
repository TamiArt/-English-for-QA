import { useEffect } from 'react';

interface TelegramWebApp {
  ready: () => void;
  expand: () => void;
}

declare global {
  interface Window { Telegram?: { WebApp?: TelegramWebApp } }
}

export const useTelegram = () => {
  useEffect(() => {
    const webApp = window.Telegram?.WebApp;
    webApp?.ready();
    webApp?.expand();
  }, []);
};
import { lazy, Suspense, useEffect, useState } from 'react';
const DashboardPanel = lazy(() => import('./components/dashboard/DashboardPanel').then((module) => ({ default: module.DashboardPanel })));
const DictionaryPanel = lazy(() => import('./components/vocabulary/DictionaryPanel').then((module) => ({ default: module.DictionaryPanel })));
const AccountPanel = lazy(() => import('./components/account/AccountPanel').then((module) => ({ default: module.AccountPanel })));
const LessonProgramPanel = lazy(() => import('./components/lesson/LessonProgramPanel').then((module) => ({ default: module.LessonProgramPanel })));
import type { ReactNode } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { Topbar } from './components/layout/Topbar';
import { useProgress } from './hooks/useProgress';
import { useAccount } from './hooks/useAccount';
import { useTelegram } from './hooks/useTelegram';

const panelFallback = (label: string): ReactNode => (
  <div className="panel-loading" role="status" aria-live="polite">{label}</div>
);

export default function App() {
  useTelegram();

  const account = useAccount();
  const { progress, completeLesson } = useProgress(account.email);

  const [active, setActive] = useState('Обзор');
  const [accountOpen, setAccountOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const scrollTo = (label: string, target: string) => {
    setActive(label);
    setMobileMenuOpen(false);

    if (label === 'Словарь' || label === 'Программа') {
      return;
    }

    document
      .getElementById(target)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const breadcrumb = active === 'Мой путь' ? 'Мой путь' : active;
  const showDictionary = active === 'Словарь';
  const showProgram = active === 'Программа';

  return (
    <div className="app-shell" id="top">
      <Sidebar
        active={active}
        onNavigate={scrollTo}
        mobileOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      <main className="main-content">
        <Topbar
          streak={progress.streak}
          email={account.email}
          onAccount={() => setAccountOpen(true)}
          onMenu={() => setMobileMenuOpen((open) => !open)}
          menuOpen={mobileMenuOpen}
        />

        {showDictionary ? (
          <Suspense fallback={panelFallback('Загружаем словарь…')}>
            <DictionaryPanel />
          </Suspense>
        ) : showProgram ? (
          <Suspense fallback={panelFallback('Загружаем программу…')}>
            <LessonProgramPanel />
          </Suspense>
        ) : (
          <Suspense fallback={panelFallback('Загружаем обучение…')}>
            <DashboardPanel
              streak={progress.streak}
              xp={progress.xp}
              completedLessons={progress.completedLessons.length}
              completedLessonIds={progress.completedLessons}
              onComplete={completeLesson}
              onContinue={() => scrollTo('Мой путь', 'roadmap')}
            />
          </Suspense>
        )}
      </main>

      {accountOpen && (
        <Suspense fallback={panelFallback('Загружаем профиль…')}>
          <AccountPanel
          email={account.email}
          onRegister={account.register}
          onLogout={account.logout}
          onClose={() => setAccountOpen(false)}
          />
        </Suspense>
      )}
    </div>
  );
}

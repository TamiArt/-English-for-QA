import { useState } from 'react';
import { DictionaryPanel } from './components/vocabulary/DictionaryPanel';
import { AccountPanel } from './components/account/AccountPanel';
import { Hero } from './components/dashboard/Hero';
import { PracticeSection } from './components/dashboard/PracticeSection';
import { StatsRow } from './components/dashboard/StatsRow';
import { Sidebar } from './components/layout/Sidebar';
import { Topbar } from './components/layout/Topbar';
import { LessonRoadmap } from './components/lesson/LessonRoadmap';
import { LessonProgramPanel } from './components/lesson/LessonProgramPanel';
import { Button } from './components/ui/Button';
import { SectionHeading } from './components/ui/SectionHeading';
import { programLessons } from './data/programLessons';
import { useProgress } from './hooks/useProgress';
import { useAccount } from './hooks/useAccount';
import { useTelegram } from './hooks/useTelegram';

export default function App() {
  useTelegram();
  const account = useAccount();
  const { progress, completeLesson } = useProgress(account.email);
  const [active, setActive] = useState('Обзор');
  const [accountOpen, setAccountOpen] = useState(false);
  const scrollTo = (label: string, target: string) => { setActive(label); if (label === 'Словарь') return; document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' }); };

  const showDictionary = active === 'Словарь';
  const showProgram = active === 'Программа';
  return <div className="app-shell" id="top"><Sidebar active={active} onNavigate={scrollTo} /><main className="main-content"><Topbar streak={progress.streak} email={account.email} onAccount={() => setAccountOpen(true)} />{showDictionary ? <DictionaryPanel /> : showProgram ? <LessonProgramPanel /> : <><Hero onContinue={() => scrollTo('Мой путь', 'roadmap')} /><StatsRow streak={progress.streak} xp={progress.xp} lessons={progress.completedLessons.length} total={programLessons.length} /><section className="roadmap-section" id="roadmap"><SectionHeading eyebrow="Блок 01 · Lessons & Practice" title="Твой маршрут" action={<span className="progress-label">{progress.completedLessons.length} из {programLessons.length} уроков</span>} /><LessonRoadmap lessons={programLessons} completed={progress.completedLessons} onComplete={completeLesson} /></section><PracticeSection /><div className="footer-note"><Button variant="ghost">arTami · учимся говорить о важном</Button></div></>}</main>{accountOpen && <AccountPanel email={account.email} onRegister={account.register} onLogout={account.logout} onClose={() => setAccountOpen(false)} />}</div>;
}
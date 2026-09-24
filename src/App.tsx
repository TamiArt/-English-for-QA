import { useState } from 'react';
import { DictionaryPanel } from './components/vocabulary/DictionaryPanel';
import { Hero } from './components/dashboard/Hero';
import { PracticeSection } from './components/dashboard/PracticeSection';
import { StatsRow } from './components/dashboard/StatsRow';
import { Sidebar } from './components/layout/Sidebar';
import { Topbar } from './components/layout/Topbar';
import { LessonRoadmap } from './components/lesson/LessonRoadmap';
import { Button } from './components/ui/Button';
import { SectionHeading } from './components/ui/SectionHeading';
import { lessons } from './data/lessons';
import { useProgress } from './hooks/useProgress';
import { useTelegram } from './hooks/useTelegram';

export default function App() {
  useTelegram();
  const { progress, completeLesson } = useProgress();
  const [active, setActive] = useState('Обзор');
  const scrollTo = (label: string, target: string) => { setActive(label); document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' }); };

  return <div className="app-shell" id="top"><Sidebar active={active} onNavigate={scrollTo} /><main className="main-content"><Topbar streak={progress.streak} /><Hero onContinue={() => scrollTo('Мой путь', 'roadmap')} /><StatsRow streak={progress.streak} xp={progress.xp} lessons={progress.completedLessons.length} /><section className="roadmap-section" id="roadmap"><SectionHeading eyebrow="Блок 01 · Lessons & Practice" title="Твой маршрут" action={<span className="progress-label">{progress.completedLessons.length} из {lessons.length} уроков</span>} /><LessonRoadmap lessons={lessons} completed={progress.completedLessons} onComplete={completeLesson} /></section><PracticeSection /><DictionaryPanel /><div className="footer-note"><Button variant="ghost">arTami · учимся говорить о важном</Button></div></main></div>;
}
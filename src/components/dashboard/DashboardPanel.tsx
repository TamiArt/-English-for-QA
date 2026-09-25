import { Hero } from './Hero';
import { PracticeSection } from './PracticeSection';
import { StatsRow } from './StatsRow';
import { LessonRoadmap } from '../lesson/LessonRoadmap';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';
import { programLessons } from '../../data/programLessons';

type DashboardPanelProps = {
  streak: number;
  xp: number;
  completedLessons: number;
  completedLessonIds: number[];
  onComplete: (lessonId: number) => void;
  onContinue: () => void;
};

export const DashboardPanel = ({
  streak,
  xp,
  completedLessons,
  completedLessonIds,
  onComplete,
  onContinue,
}: DashboardPanelProps) => (
  <>
    <Hero onContinue={onContinue} />

    <StatsRow
      streak={streak}
      xp={xp}
      lessons={completedLessons}
      total={programLessons.length}
    />

    <section className="roadmap-section" id="roadmap">
      <SectionHeading
        eyebrow="Блок 01 · Lessons & Practice"
        title="Твой маршрут"
        action={
          <span className="progress-label">
            {completedLessons} из {programLessons.length} уроков
          </span>
        }
      />

      <LessonRoadmap
        lessons={programLessons}
        completed={completedLessonIds}
        onComplete={onComplete}
      />
    </section>

    <PracticeSection />

    <div className="footer-note">
      <Button variant="ghost">
        arTami · учимся говорить о важном
      </Button>
    </div>
  </>
);

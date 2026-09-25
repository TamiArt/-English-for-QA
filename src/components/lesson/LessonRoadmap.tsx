import { BookOpen, Check, ChevronDown, ChevronRight, Lock, Play, Star, X } from 'lucide-react';
import { Fragment, useEffect, useState } from 'react';
import type { Lesson } from '../../data/lessons';
import { useSpeech } from '../../hooks/useSpeech';
import { Badge3D } from '../ui/Badge3D';
import { Button } from '../ui/Button';
import { SpeechButton } from '../ui/SpeechButton';
import { getTable, ProgramTableView } from './LessonProgramPanel';

type LessonRoadmapProps = {
  lessons: Lesson[];
  completed: number[];
  onComplete: (id: number) => void;
};

type LessonCardProps = {
  lesson: Lesson;
  done: boolean;
  locked: boolean;
  expanded: boolean;
  onToggleExpanded: () => void;
  onComplete: () => void;
  onNext: () => void;
  hasNext: boolean;
};

const LessonCard = ({
  lesson,
  done,
  locked,
  expanded,
  onToggleExpanded,
  onComplete,
  onNext,
  hasNext,
}: LessonCardProps) => {
  const { speak, stop, isPlaying, playingText } = useSpeech();
  const cardTable = lesson.programContent
    ? getTable({ title: lesson.title, content: lesson.programContent })
    : null;

  const handleSpeechToggle = (text: string) => {
    if (playingText === text && isPlaying) {
      stop();
      return;
    }

    speak(text);
  };

  return (
    <article
      className={[
        'lesson-card',
        lesson.accent,
        locked ? 'locked' : '',
        expanded ? 'expanded' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="lesson-number">
        {done ? <Check size={16} /> : String(lesson.id).padStart(2, '0')}
      </div>

      <div className="lesson-body">
        <div className="lesson-meta">
          <Badge3D tone={lesson.accent === 'coral' ? 'coral' : 'blue'}>
            {lesson.level}
          </Badge3D>
          <span>{lesson.duration}</span>
        </div>

        <h3>{lesson.title}</h3>
        <p>{lesson.caption}</p>

        <div className="stars" aria-label={done ? 'Урок выполнен' : 'Урок не завершён'}>
          {[0, 1, 2].map((star) => (
            <Star
              key={star}
              size={14}
              fill={done && star < 2 ? 'currentColor' : 'none'}
            />
          ))}
        </div>

        {expanded && (
          <>
            <button
              className="lesson-close"
              type="button"
              onClick={onToggleExpanded}
              aria-label={'Закрыть урок ' + lesson.title}
              title="Закрыть"
            >
              <X size={16} />
            </button>

            <div className="lesson-detail">
              {lesson.explanation && <p>{lesson.explanation}</p>}

              {lesson.formula && !lesson.programContent && (
                <strong>{lesson.formula}</strong>
              )}

              {lesson.programContent &&
                (cardTable ? (
                  <>
                    {cardTable.before.trim() && (
                      <pre className="lesson-program-content">
                        {cardTable.before.trim()}
                      </pre>
                    )}
                    <ProgramTableView table={cardTable.table} />
                    {cardTable.after.trim() && (
                      <pre className="lesson-program-content">
                        {cardTable.after.trim()}
                      </pre>
                    )}
                  </>
                ) : (
                  <pre className="lesson-program-content">
                    {lesson.programContent}
                  </pre>
                ))}

              {lesson.audioItems && (
                <div className="lesson-audio-grid">
                  <small>Послушай произношение</small>
                  <div>
                    {lesson.audioItems.map((item) => (
                      <SpeechButton
                        key={item.label}
                        label={item.label}
                        phonetic={item.phonetic}
                        isPlaying={playingText === item.text && isPlaying}
                        onToggle={() => handleSpeechToggle(item.text)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {lesson.examples.length > 0 && (
                <div className="lesson-examples">
                  {lesson.examples.map((example) => (
                    <div key={example.en}>
                      <span>{example.en}</span>
                      <small>{example.ru}</small>
                    </div>
                  ))}
                </div>
              )}

              <p>
                <b>Практика:</b> {lesson.practice}
              </p>
              <p>
                <b>Подсказка:</b> {lesson.tip}
              </p>

              {hasNext && (
                <button className="lesson-next" type="button" onClick={onNext}>
                  Следующий модуль <ChevronRight size={16} />
                </button>
              )}
            </div>
          </>
        )}
      </div>

      <div className="lesson-actions">
        <button
          className="lesson-expand"
          type="button"
          onClick={onToggleExpanded}
          aria-expanded={expanded}
          aria-label={
            (expanded ? 'Скрыть' : 'Открыть') +
            ' содержание урока ' +
            lesson.title
          }
        >
          <BookOpen size={16} />
          <ChevronDown size={15} className={expanded ? 'rotated' : ''} />
        </button>

        <Button
          variant={locked ? 'ghost' : done ? 'soft' : 'primary'}
          disabled={locked}
          onClick={onComplete}
          aria-label={
            locked
              ? 'Урок закрыт'
              : done
                ? 'Урок завершён'
                : 'Завершить урок ' + lesson.title
          }
        >
          {locked ? (
            <Lock size={16} />
          ) : done ? (
            <Check size={17} />
          ) : (
            <Play size={16} fill="currentColor" />
          )}
        </Button>
      </div>
    </article>
  );
};

export const LessonRoadmap = ({
  lessons,
  completed,
  onComplete,
}: LessonRoadmapProps) => {
  const [openLesson, setOpenLesson] = useState<number | null>(null);

  useEffect(() => {
    if (openLesson === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [openLesson]);

  return (
    <div className="roadmap">
      {lessons.map((lesson, index) => {
        const done = completed.includes(lesson.id);
        const previousLesson = lessons[index - 1];
        const locked =
          index > 0 && previousLesson
            ? !completed.includes(previousLesson.id)
            : false;
        const expanded = openLesson === lesson.id;
        const previousModule = lessons[index - 1]?.module;
        const showModuleHeading = lesson.module !== previousModule;

        return (
          <Fragment key={lesson.id}>
            {showModuleHeading && (
              <h3 className="module-heading">{lesson.module}</h3>
            )}

            <LessonCard
              lesson={lesson}
              done={done}
              locked={locked}
              expanded={expanded}
              onToggleExpanded={() =>
                setOpenLesson(expanded ? null : lesson.id)
              }
              onComplete={() => onComplete(lesson.id)}
              onNext={() => {
                const nextLesson = lessons[index + 1];
                if (nextLesson) setOpenLesson(nextLesson.id);
              }}
              hasNext={index < lessons.length - 1}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

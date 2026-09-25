import { BookOpen, ChevronLeft, ChevronRight, Layers3, Search, Shuffle, SlidersHorizontal } from 'lucide-react';
import { useMemo, useState } from 'react';
import { dictionary } from '../../data/dictionary';
import type { VocabularyCategory, VocabularyLevel } from '../../types';
import { VocabularyCard } from './VocabularyCard';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';

const levels: VocabularyLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1'];

export const DictionaryPanel = () => {
  const [query, setQuery] = useState('');
  const [level, setLevel] = useState<VocabularyLevel | 'all'>('all');
  const [category, setCategory] = useState<VocabularyCategory | 'all'>('all');
  const [topic, setTopic] = useState('all');
  const [page, setPage] = useState(0);
  const [studyMode, setStudyMode] = useState(false);
  const [studyIndex, setStudyIndex] = useState(0);

  const topics = useMemo(
    () => [...new Set(dictionary.map((entry) => entry.topic || 'Основное'))].sort((a, b) => a.localeCompare(b, 'ru')),
    [],
  );

  const levelCounts = useMemo(
    () => Object.fromEntries(levels.map((item) => [item, dictionary.filter((entry) => entry.level === item).length])),
    [],
  );

  const filtered = useMemo(() => dictionary.filter((entry) => {
    const text = `${entry.word} ${entry.translation} ${entry.topic || ''}`.toLowerCase();
    const matchesQuery = text.includes(query.toLowerCase());
    return matchesQuery
      && (level === 'all' || entry.level === level)
      && (category === 'all' || entry.category === category)
      && (topic === 'all' || entry.topic === topic);
  }), [query, level, category, topic]);

  const pageSize = 8;
  const visibleEntries = filtered.slice(page * pageSize, page * pageSize + pageSize);
  const pageStart = visibleEntries.length ? page * pageSize + 1 : 0;
  const studyEntry = filtered[studyIndex] || filtered[0];

  const reset = () => {
    setPage(0);
    setStudyIndex(0);
  };

  const selectLevel = (value: VocabularyLevel | 'all') => {
    setLevel(value);
    reset();
  };

  const selectTopic = (value: string) => {
    setTopic(value);
    reset();
  };

  const shuffleStudy = () => {
    if (!filtered.length) return;
    setStudyIndex(Math.floor(Math.random() * filtered.length));
    setStudyMode(true);
  };

  return (
    <section className="dictionary-panel" id="dictionary">
      <SectionHeading
        eyebrow="Блок 02 · Dictionary"
        title="Слова, которые остаются"
        action={<span className="progress-label">{filtered.length} слов найдено</span>}
      />

      <div className="dictionary-learning-head">
        <div>
          <span className="dictionary-kicker">Учебная траектория</span>
          <h3>Выбери уровень → тему → учи словами</h3>
          <p>Начинай с A1 и переходи дальше, когда базовые слова становятся знакомыми.</p>
        </div>
        <Button variant="soft" onClick={() => setStudyMode((value) => !value)}>
          <BookOpen size={15} />
          {studyMode ? 'Сетка слов' : 'Режим карточек'}
        </Button>
      </div>

      <div className="dictionary-levels" aria-label="Уровень словаря">
        <button className={level === 'all' ? 'active' : ''} onClick={() => selectLevel('all')} type="button">
          <strong>Все</strong><small>{dictionary.length}</small>
        </button>
        {levels.map((item) => (
          <button className={level === item ? 'active' : ''} onClick={() => selectLevel(item)} type="button" key={item}>
            <strong>{item}</strong><small>{levelCounts[item] || 0} слов</small>
          </button>
        ))}
      </div>

      <div className="dictionary-topic-strip">
        <span><Layers3 size={14} /> Темы</span>
        <div>
          <button className={topic === 'all' ? 'active' : ''} onClick={() => selectTopic('all')} type="button">Все темы</button>
          {topics.map((item) => (
            <button className={topic === item ? 'active' : ''} onClick={() => selectTopic(item)} type="button" key={item}>
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="search-box">
        <Search size={18} />
        <input
          value={query}
          onChange={(event) => { setQuery(event.target.value); reset(); }}
          placeholder="Найти слово, перевод или тему"
          aria-label="Поиск по словарю"
        />
      </div>

      <div className="filter-row">
        <div className="segmented">
          {(['all', 'general', 'it'] as const).map((value) => (
            <button className={category === value ? 'active' : ''} onClick={() => { setCategory(value); reset(); }} key={value} type="button">
              {value === 'all' ? 'Все' : value === 'general' ? 'Разговорный' : 'IT & работа'}
            </button>
          ))}
        </div>
        <div className="dictionary-filter-note">
          <SlidersHorizontal size={13} />
          {level === 'all' ? 'Все уровни' : `Уровень ${level}`} · {topic === 'all' ? 'Все темы' : topic}
        </div>
      </div>

      {studyMode && studyEntry ? (
        <div className="dictionary-study-card">
          <div className="dictionary-study-top">
            <span>Слово {studyIndex + 1} из {filtered.length}</span>
            <Button variant="ghost" onClick={shuffleStudy} aria-label="Перемешать слова">
              <Shuffle size={15} /> Перемешать
            </Button>
          </div>
          <VocabularyCard entry={studyEntry} />
          <div className="dictionary-study-nav">
            <Button variant="ghost" disabled={studyIndex === 0} onClick={() => setStudyIndex((value) => Math.max(0, value - 1))}>
              <ChevronLeft size={16} /> Предыдущее
            </Button>
            <Button variant="soft" disabled={studyIndex >= filtered.length - 1} onClick={() => setStudyIndex((value) => Math.min(filtered.length - 1, value + 1))}>
              Следующее <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      ) : (
        <>
          <div className="dictionary-page-label">Слова {pageStart}–{Math.min(page * pageSize + pageSize, filtered.length)} из {filtered.length}</div>
          <div className="dictionary-grid">
            {visibleEntries.map((entry) => <VocabularyCard entry={entry} key={entry.id} />)}
          </div>
          {filtered.length === 0 && <div className="empty-state">Слов пока нет. Попробуйте другой запрос или тему.</div>}
          {filtered.length > pageSize && (
            <div className="dictionary-pagination">
              <Button variant="ghost" disabled={page === 0} onClick={() => setPage(Math.max(0, page - 1))}>
                <ChevronLeft size={16} /> Назад
              </Button>
              <span>Порция {page + 1} из {Math.ceil(filtered.length / pageSize)}</span>
              <Button variant="soft" disabled={page >= Math.ceil(filtered.length / pageSize) - 1} onClick={() => setPage(Math.min(Math.ceil(filtered.length / pageSize) - 1, page + 1))}>
                Ещё 8 <ChevronRight size={16} />
              </Button>
            </div>
          )}
        </>
      )}
    </section>
  );
};

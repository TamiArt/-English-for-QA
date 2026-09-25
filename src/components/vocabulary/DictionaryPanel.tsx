import { ChevronLeft, ChevronRight, Search, SlidersHorizontal } from 'lucide-react';
import { useMemo, useState } from 'react';
import { dictionary } from '../../data/dictionary';
import type { VocabularyCategory, VocabularyLevel } from '../../types';
import { VocabularyCard } from './VocabularyCard';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';

export const DictionaryPanel = () => {
  const [query, setQuery] = useState('');
  const [level, setLevel] = useState<VocabularyLevel | 'all'>('all');
  const [category, setCategory] = useState<VocabularyCategory | 'all'>('all');
  const [topic, setTopic] = useState('all');
  const [page, setPage] = useState(0);
  const filtered = useMemo(() => dictionary.filter((entry) => {
    const matchesQuery = `${entry.word} ${entry.translation}`.toLowerCase().includes(query.toLowerCase());
    return matchesQuery && (level === 'all' || entry.level === level) && (category === 'all' || entry.category === category) && (topic === 'all' || entry.topic === topic);
  }), [query, level, category, topic]);
  const topics = useMemo(() => [...new Set(dictionary.map((entry) => entry.topic || 'Основное'))].sort((first, second) => first.localeCompare(second, 'ru')), []);
  const visibleEntries = filtered.slice(page * 8, page * 8 + 8);
  const pageStart = visibleEntries.length ? page * 8 + 1 : 0;

  const resetCategory = (value: VocabularyCategory | 'all') => { setCategory(value); setPage(0); };
  const resetLevel = (value: VocabularyLevel | 'all') => { setLevel(value); setPage(0); };
  return <section className="dictionary-panel" id="dictionary"><SectionHeading eyebrow="Блок 02 · Dictionary" title="Слова, которые остаются" action={<span className="progress-label">{filtered.length} слов найдено</span>} /><div className="search-box"><Search size={18} /><input value={query} onChange={(event) => { setQuery(event.target.value); setPage(0); }} placeholder="Найти слово или перевод" /></div><div className="filter-row"><div className="segmented">{(['all', 'general', 'it'] as const).map((value) => <button className={category === value ? 'active' : ''} onClick={() => resetCategory(value)} key={value}>{value === 'all' ? 'Все' : value === 'general' ? 'Разговорный' : 'IT & работа'}</button>)}</div><div className="level-filter">{(['all', 'A1', 'A2', 'B1', 'B2', 'C1'] as const).map((value) => <button className={level === value ? 'active' : ''} onClick={() => resetLevel(value)} key={value}>{value === 'all' ? 'Все уровни' : value}</button>)}</div><select className="topic-filter" value={topic} onChange={(event) => { setTopic(event.target.value); setPage(0); }} aria-label="Выбрать тему"><option value="all">Все темы</option>{topics.map((value) => <option value={value} key={value}>{value}</option>)}</select></div><div className="dictionary-page-label">Слова {pageStart}–{Math.min(page * 8 + 8, filtered.length)} из {filtered.length}</div><div className="dictionary-grid">{visibleEntries.map((entry) => <VocabularyCard entry={entry} key={entry.id} />)}</div>{filtered.length === 0 && <div className="empty-state">Слов пока нет. Попробуйте другой запрос.</div>}{filtered.length > 8 && <div className="dictionary-pagination"><Button variant="ghost" disabled={page === 0} onClick={() => setPage(Math.max(0, page - 1))}><ChevronLeft size={16} /> Назад</Button><span>Порция {page + 1} из {Math.ceil(filtered.length / 8)}</span><Button variant="soft" disabled={page >= Math.ceil(filtered.length / 8) - 1} onClick={() => setPage(Math.min(Math.ceil(filtered.length / 8) - 1, page + 1))}>Ещё 8 <ChevronRight size={16} /></Button></div>}</section>;
};
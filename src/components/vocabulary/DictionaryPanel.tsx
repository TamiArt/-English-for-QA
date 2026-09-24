import { Search, SlidersHorizontal } from 'lucide-react';
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
  const filtered = useMemo(() => dictionary.filter((entry) => {
    const matchesQuery = `${entry.word} ${entry.translation}`.toLowerCase().includes(query.toLowerCase());
    return matchesQuery && (level === 'all' || entry.level === level) && (category === 'all' || entry.category === category);
  }), [query, level, category]);

  return <section className="dictionary-panel" id="dictionary"><SectionHeading eyebrow="Блок 02 · Dictionary" title="Слова, которые остаются" action={<Button variant="ghost"><SlidersHorizontal size={16} /> Фильтры</Button>} /><div className="search-box"><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Найти слово или перевод" /></div><div className="filter-row"><div className="segmented">{(['all', 'general', 'it'] as const).map((value) => <button className={category === value ? 'active' : ''} onClick={() => setCategory(value)} key={value}>{value === 'all' ? 'Все' : value === 'general' ? 'Разговорный' : 'IT & работа'}</button>)}</div><div className="level-filter">{(['all', 'A1', 'A2', 'B1', 'B2'] as const).map((value) => <button className={level === value ? 'active' : ''} onClick={() => setLevel(value)} key={value}>{value === 'all' ? 'Все уровни' : value}</button>)}</div></div><div className="dictionary-grid">{filtered.map((entry) => <VocabularyCard entry={entry} key={entry.id} />)}</div>{filtered.length === 0 && <div className="empty-state">Слов пока нет. Попробуйте другой запрос.</div>}</section>;
};
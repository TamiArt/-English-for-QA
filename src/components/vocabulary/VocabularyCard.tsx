import { Volume2 } from 'lucide-react';
import type { DictionaryEntry } from '../../types';
import { useSpeech } from '../../hooks/useSpeech';
import { Badge3D } from '../ui/Badge3D';
import { Button } from '../ui/Button';

export const VocabularyCard = ({ entry }: { entry: DictionaryEntry }) => {
  const { speak, isPlaying } = useSpeech();
  return <article className="word-card">
    <div className="word-top"><Badge3D tone={entry.category === 'it' ? 'dark' : 'blue'}>{entry.level}</Badge3D><div className="word-name"><div><h3>{entry.word}</h3><Button variant="soft" aria-label={`Произнести ${entry.word}`} onClick={() => speak(entry.word)}><Volume2 size={17} className={isPlaying ? 'pulse' : ''} /></Button></div><span>[{entry.ipa}]</span></div></div>
    <div className="word-translation"><strong>{entry.translation}</strong><span>[{entry.phoneticRu}]</span></div>
    {entry.examples?.map((example) => <button className="example" key={example.en} onClick={() => speak(example.en)}><span className="example-dot" /><span><b>{example.en}</b><small>[{example.phoneticRu}]</small><small>{example.ru}</small></span><Volume2 size={15} /></button>)}
  </article>;
};
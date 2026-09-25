import { Volume2 } from 'lucide-react';
import type { MouseEventHandler } from 'react';

type SpeechButtonProps = {
  label: string;
  text: string;
  phonetic: string;
  isPlaying: boolean;
  onToggle: MouseEventHandler<HTMLButtonElement>;
};

export const SpeechButton = ({
  label,
  text,
  phonetic,
  isPlaying,
  onToggle,
}: SpeechButtonProps) => (
  <button
    className="lesson-audio-item"
    type="button"
    onClick={onToggle}
    aria-label={isPlaying ? 'Остановить ' + label : 'Прослушать ' + label}
    title={isPlaying ? 'Остановить' : 'Прослушать'}
  >
    <span>{label}</span>
    <em>[{phonetic}]</em>
    <Volume2 size={14} className={isPlaying ? 'pulse' : ''} />
  </button>
);

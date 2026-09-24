import { Volume2 } from 'lucide-react';
import { useSpeech } from '../../hooks/useSpeech';

const cells = [
  { label: 'Вопрос', focus: 'DO', phrase: 'Do you work in IT?', ru: 'Ты работаешь в IT?' },
  { label: 'Утверждение', focus: 'WORK', phrase: 'I work in IT.', ru: 'Я работаю в IT.' },
  { label: 'Отрицание', focus: "DON'T", phrase: "I don't work in IT.", ru: 'Я не работаю в IT.' },
];

export const PetrovMatrix = () => {
  const { speak } = useSpeech();
  return <div className="matrix"><div className="matrix-heading"><span>Present Simple · work</span><small>Нажмите на ячейку, чтобы услышать фразу</small></div><div className="matrix-grid">{cells.map((cell) => <button className="matrix-cell" key={cell.label} onClick={() => speak(cell.phrase)}><span>{cell.label}</span><strong>{cell.phrase.replace(cell.focus, '').trim()} <em>{cell.focus}</em></strong><small>{cell.ru}</small><Volume2 size={15} /></button>)}</div></div>;
};
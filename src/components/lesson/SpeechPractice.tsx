import { Mic, Volume2 } from 'lucide-react';
import { useState } from 'react';
import { useSpeech } from '../../hooks/useSpeech';
import { Button } from '../ui/Button';

export const SpeechPractice = () => {
  const { speak } = useSpeech();
  const [isListening, setIsListening] = useState(false);
  const [result, setResult] = useState('');
  const phrase = 'I found an issue.';

  const listen = () => {
    const Recognition = window.webkitSpeechRecognition;
    if (!Recognition) { setResult('Распознавание доступно в Chrome'); return; }
    const recognition = new Recognition();
    recognition.lang = 'en-US';
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event: SpeechRecognitionResultEvent) => setResult(event.results[0][0].transcript);
    recognition.start();
  };

  return <div className="speech-card"><div><span className="eyebrow">Говорим вслух</span><h3>Проверим рабочую фразу?</h3><p>{phrase}</p>{result && <small className="speech-result">Вы сказали: {result}</small>}</div><div className="speech-actions"><Button variant="soft" onClick={() => speak(phrase)} aria-label="Прослушать фразу"><Volume2 size={18} /></Button><Button className={isListening ? 'listening' : ''} onClick={listen}><Mic size={17} /> {isListening ? 'Слушаю' : 'Говорю'}</Button></div></div>;
};
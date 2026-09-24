import { PetrovMatrix } from '../lesson/PetrovMatrix';
import { SpeechPractice } from '../lesson/SpeechPractice';
import { SectionHeading } from '../ui/SectionHeading';

export const PracticeSection = () => <section className="practice-section"><div><SectionHeading eyebrow="Практика речи" title="Сначала услышать, потом сказать" /><PetrovMatrix /></div><SpeechPractice /></section>;
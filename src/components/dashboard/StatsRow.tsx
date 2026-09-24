import { Flame, Trophy, Zap } from 'lucide-react';
import { StatCard } from '../ui/StatCard';

export const StatsRow = ({ streak, xp, lessons }: { streak: number; xp: number; lessons: number }) => <div className="stats"><StatCard icon={<Flame size={18} />} value={`${streak}`} label="дня подряд" tone="stat-coral" /><StatCard icon={<Zap size={18} />} value={`${xp}`} label="опыта собрано" tone="stat-blue" /><StatCard icon={<Trophy size={18} />} value={`${lessons}/5`} label="уроков пройдено" tone="stat-gold" /></div>;
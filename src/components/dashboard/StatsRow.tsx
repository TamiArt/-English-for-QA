import { Flame, Trophy, Zap } from 'lucide-react';
import { StatCard } from '../ui/StatCard';

export const StatsRow = ({ streak, xp, lessons, total }: { streak: number; xp: number; lessons: number; total: number }) => <div className="stats"><StatCard icon={<Flame size={18} />} value={`${streak}`} label="дня подряд" tone="stat-coral" /><StatCard icon={<Zap size={18} />} value={`${xp}`} label="опыта собрано" tone="stat-blue" /><StatCard icon={<Trophy size={18} />} value={`${lessons}/${total}`} label="уроков пройдено" tone="stat-gold" /></div>;
import type { ReactNode } from 'react';

export const StatCard = ({ icon, value, label, tone }: { icon: ReactNode; value: string; label: string; tone: string }) => <div className={`stat-card ${tone}`}><span className="stat-icon">{icon}</span><strong>{value}</strong><span>{label}</span></div>;
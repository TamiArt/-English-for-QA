import type { ReactNode } from 'react';

export const Badge3D = ({ children, tone = 'blue' }: { children: ReactNode; tone?: 'blue' | 'coral' | 'dark' }) => <span className={`badge badge-${tone}`}>{children}</span>;
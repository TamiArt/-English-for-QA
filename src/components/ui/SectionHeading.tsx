import type { ReactNode } from 'react';

export const SectionHeading = ({ eyebrow, title, action }: { eyebrow?: string; title: string; action?: ReactNode }) => <div className="section-heading"><div>{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2></div>{action}</div>;
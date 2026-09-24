import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' | 'soft' };

export const Button = ({ variant = 'primary', className = '', ...props }: ButtonProps) => <button className={`button button-${variant} ${className}`} {...props} />;
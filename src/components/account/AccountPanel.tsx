import { LogIn, LogOut, X } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { Button } from '../ui/Button';

export const AccountPanel = ({ email, onRegister, onLogout, onClose }: { email: string; onRegister: (email: string) => void; onLogout: () => void; onClose: () => void }) => {
  const [value, setValue] = useState(email);
  const submit = (event: FormEvent) => { event.preventDefault(); if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) { onRegister(value); onClose(); } };
  return <div className="account-backdrop" role="presentation" onClick={onClose}><section className="account-panel" role="dialog" aria-modal="true" aria-labelledby="account-title" onClick={(event) => event.stopPropagation()}><button className="account-close" type="button" onClick={onClose} aria-label="Закрыть"><X size={17} /></button><span className="eyebrow">Ваш профиль</span><h2 id="account-title">Сохрани свой прогресс</h2><p>Введи e-mail, чтобы получать один и тот же прогресс на телефоне и компьютере.</p>{email ? <><strong className="account-email">{email}</strong><Button variant="ghost" onClick={onLogout}><LogOut size={16} /> Выйти</Button></> : <form onSubmit={submit}><input type="email" value={value} onChange={(event) => setValue(event.target.value)} placeholder="you@example.com" required /><Button type="submit"><LogIn size={16} /> Зарегистрироваться</Button></form>}</section></div>;
};

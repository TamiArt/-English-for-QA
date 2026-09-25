import { Flame, Menu, Settings, X } from 'lucide-react';

interface TopbarProps {
  streak: number;
  email: string;
  onAccount: () => void;
  onMenu: () => void;
  menuOpen: boolean;
}

export const Topbar = ({
  streak,
  email,
  onAccount,
  onMenu,
  menuOpen,
}: TopbarProps) => (
  <header className="topbar">
    <button
      className="mobile-menu"
      type="button"
      onClick={onMenu}
      aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
      aria-expanded={menuOpen}
      aria-controls="mobile-navigation"
    >
      {menuOpen ? <X size={20} /> : <Menu size={20} />}
    </button>

    <span className="breadcrumb">
      Путь обучения <b>/</b> Обзор
    </span>

    <div className="top-actions">
      <span className="streak">
        <Flame size={17} fill="currentColor" />
        {streak} дня
      </span>

      <button
        className="icon-button"
        type="button"
        aria-label="Настройки"
      >
        <Settings size={18} />
      </button>

      <button
        className="mini-avatar"
        type="button"
        onClick={onAccount}
        aria-label={email ? `Профиль ${email}` : 'Зарегистрироваться'}
      >
        {email ? email.slice(0, 1).toUpperCase() : 'A'}
      </button>
    </div>
  </header>
);

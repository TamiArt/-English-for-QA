import { BookOpen, GraduationCap, LayoutDashboard, Settings, Sparkles, Target } from 'lucide-react';

const items = [
  { label: 'Обзор', icon: LayoutDashboard, target: 'top' },
  { label: 'Мой путь', icon: Target, target: 'roadmap' },
  { label: 'Программа', icon: GraduationCap, target: 'program' },
  { label: 'Словарь', icon: BookOpen, target: 'dictionary' },
];

interface SidebarProps {
  active: string;
  onNavigate: (label: string, target: string) => void;
  mobileOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({
  active,
  onNavigate,
  mobileOpen,
  onClose,
}: SidebarProps) => (
  <>
    {mobileOpen && (
      <button
        className="mobile-menu-backdrop"
        type="button"
        aria-label="Закрыть меню"
        onClick={onClose}
      />
    )}

    <aside
      id="mobile-navigation"
      className={`sidebar ${mobileOpen ? 'mobile-open' : ''}`}
    >
      <div className="brand">
        <span className="brand-mark">a</span>
        <span>arTami</span>
      </div>

      <div className="profile">
        <div className="avatar">QA</div>
        <div>
          <strong>Привет, Алекс</strong>
          <small>Твой уровень · START</small>
        </div>
      </div>

      <nav aria-label="Основная навигация">
        {items.map(({ label, icon: Icon, target }) => (
          <button
            className={active === label ? 'active' : ''}
            type="button"
            onClick={() => onNavigate(label, target)}
            key={label}
          >
            <Icon size={18} />
            {label}
          </button>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <button type="button">
          <Settings size={17} />
          Настройки
        </button>

        <div className="free-note">
          <Sparkles size={16} />
          <span>
            <b>Учись в своём темпе</b>
            <small>Все материалы бесплатны</small>
          </span>
        </div>
      </div>
    </aside>
  </>
);

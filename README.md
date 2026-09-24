# Сводный проектный документ и технические требования

**Название проекта:** Telegram Mini App & Web-платформа «Английский с нуля до собеседования в IT»

**Брендинг UI:** arTami

**Целевая платформа:** Telegram Mini App (TWA) & Web (кроссплатформенная интеграция)

**Концепция:** Автономное, высокопроизводительное и полностью бесплатное приложение для изучения английского языка без использования платных API и локальных нейросетей (LLM).

---

## 1. Архитектура приложения и 2-блочная структура

Приложение разделено на два ключевых взаимосвязанных модуля:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         TELEGRAM MINI APP / WEB                         │
├────────────────────────────────────┬────────────────────────────────────┤
│    БЛОК 1: УРОКИ И ПРАКТИКА        │    БЛОК 2: СЛОВАРЬ (DICTIONARY)     │
│    (Теория + Интерактив)           │    (Общий + Профильный IT)         │
│  • Грамматические матрицы          │  • Категория 1: Разговорный (A1-B2)│
│  • Конструктор фраз и тесты        │  • Категория 2: IT & Работа (A1-B2)│
│  • Голосовая практика (STT / TTS)  │  • 3D-карточки слов с озвучкой     │
│  • Геймификация (XP, Streak)       │  • Стандарт вывода транскрипции    │
└────────────────────────────────────┴────────────────────────────────────┘

```

### 📗 Блок 1: Уроки по английскому (Теория и Практика)

1. **Теоретический модуль:**
* **Грамматические матрицы:** Наглядная система временных форм и конструкций (на базе тренажеров Петрова) с контрастным выделением глаголов и служебных частей речи.
* **Аудио-сопровождение:** Воспроизведение американского произношения при нажатии на любой элемент матрицы.


2. **Практический модуль:**
* **Конструктор фраз:** Интерактивная сборка предложений из атомарных кнопок-слов.
* **Речевой тренажер:** Произношение ключевых фраз в микрофон с проверкой через `webkitSpeechRecognition`.
* **Симуляции задач:** Моделирование рабочих ситуаций (Daily Standup, Bug Reporting, Code Review).


3. **Геймификация:**
* Дорожка уроков с системой звёзд (от 0 до 3).
* Учёт серий дней обучения (Streak Days) и очков опыта (XP).



### 📘 Блок 2: Интерактивный словарь (Разговорный + IT)

1. **Разделение лексики на 2 потока:**
* **🗣 Разговорный (Small Talk / General):** Бытовые темы, эмоции, погода, отдых, глаголы-связки для свободного общения, диалогов и перевода текста.
* **💻 IT & Работа (Workplace):** Специализированная терминология, командная разработка, Git, таски, деплой, архитектура и прохождение собеседований.


2. **Фильтрация и поиск:**
* Переключение между уровнями (**A1, A2, B1, B2**) и категориями (**Все / Разговорный / IT & Работа**).
* Мгновенный поиск по английским словам и русскому переводу.



---

## 2. Принципы разработки и архитектурные ограничения

> **⛔ КРИТИЧЕСКИЕ ПРАВИЛА КОДИНГА:**
> 1. **Запрет на "раздувание" (Overengineering & Code Bloat):** Запрещено писать длинные, монолитные компоненты и дублировать логику. Код должен быть сухим (DRY), чисто оформленным и легко читаемым.
> 2. **Принцип жесткой модульности:** Каждая фича, UI-элемент и логический блок выносятся в отдельный изолированный модуль.
> 3. **Переиспользуемость (Atomics & Composability):** Все кнопки, плашки, карточки, модальные окна, звуковые хелперы и фильтры создаются как атомарные переиспользуемые React-компоненты. При изменении дизайна в одном месте изменения должны автоматически применять ко всему приложению.
> 
> 

---

## 3. Технологический стек (Pure React Stack)

| Компонент | Технология / Библиотека | Назначение |
| --- | --- | --- |
| **Frontend UI** | **React (SPA)** + **TypeScript** | Основной фреймворк для сборки быстрых клиентоориентированных SPA |
| **Build Tool** | **Vite** | Сверхбыстрый бандлер и среда разработки |
| **Styling Kit** | **Tailwind CSS** + Soft 3D Utilities | Объемный стильный UI arTami (градиенты, внутренние тени, мягкие блики) |
| **State & Modules** | React Context / Zustand | Модульное управление состоянием (профиль, прогресс, слова) |
| **Telegram Integration** | `@twa-dev/sdk` | Валидация `initData`, Haptic Feedback, полноэкранный режим TWA |
| **Speech Engine** | Web Speech API (`speechSynthesis`, `webkitSpeechRecognition`) | Нативный бесплатный TTS (озвучка) и STT (распознавание речи) |
| **Database & Persistence** | LocalStorage + Supabase / Firebase Free Tier | Сохранение прогресса, очков опыта и настроек пользователя |
| **Hosting & Deploy** | Vercel / GitHub Pages / Render | Статический бесплатный хостинг с автоматическим CI/CD |

---

## 4. Стандарт вывода данных словаря (Dictionary Standard)

Все элементы словаря, карточки и списки в приложении строго следуют единому стандарту оформления:

> **`[Слово]` `[[IPA транскрипция]]` – `[перевод]` `[[русская транскрипция]]**`
> 

### Правила оформления:

1. **Слово:** Начинается с заглавной буквы.
2. **Английская транскрипция (IPA):** Размещается в квадратных скобках.
3. **Перевод:** Отделяется тире `–` с пробелами.
4. **Русская транскрипция:** Помещается в конце строки в квадратных скобках. Ударная гласная буква **обязательно выделяется ЗАГЛАВНОЙ**.



*Пример (General):* **Weather** [ˈweðə] – погода [уЭзэ]

*Пример (IT):* **Issue** [ˈɪʃuː] – проблема, задача, баг [Ишью]

---

## 5. Модульная структура проекта React (Vite)

```text
src/
├── assets/             # Иконки, изображения, стили
├── components/         # Переиспользуемые UI-компоненты (Атомы)
│   ├── ui/             # Button, Badge, Card, Modal, Input
│   ├── vocabulary/     # VocabularyCard, LevelFilter, CategorySwitch
│   └── lesson/         # MatrixCell, PhraseBuilder, SpeechChecker
├── context/            # Модули состояния (UserContext, DictionaryContext)
├── hooks/              # Кастомные хуки (useSpeech, useTelegram, useProgress)
├── data/               # Модули данных (dictionary.ts, lessons.ts)
├── types/              # Типы TypeScript
├── App.tsx             # Главный роутер / переключатель блоков
└── main.tsx            # Точка входа React

```

---

## 6. Пример переиспользуемых модулей (Code Example)

### 6.1. Кастомный хук озвучки (`src/hooks/useSpeech.ts`)

```typescript
import { useState } from 'react';

export const useSpeech = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const speak = (text: string, lang = 'en-US') => {
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.85;

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  };

  return { speak, isPlaying };
};

```

### 6.2. Атомарный 3D-Badge (`src/components/ui/Badge3D.tsx`)

```tsx
import React from 'react';

interface Badge3DProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export const Badge3D: React.FC<Badge3DProps> = ({ children, subtitle, className = '' }) => {
  return (
    <div className={`badge-3d-blue px-3 py-2 text-center min-w-[56px] inline-flex flex-col items-center justify-center ${className}`}>
      <span className="text-xl font-black tracking-tight leading-none">{children}</span>
      {subtitle && (
        <div className="text-[9px] opacity-80 uppercase tracking-widest font-semibold mt-0.5">
          {subtitle}
        </div>
      )}
    </div>
  );
};

```

### 6.3. Переиспользуемая 3D-Карточка слова (`src/components/vocabulary/VocabularyCard.tsx`)

```tsx
import React from 'react';
import { Volume2 } from 'lucide-react';
import { Badge3D } from '../ui/Badge3D';
import { useSpeech } from '../../hooks/useSpeech';

interface VocabularyCardProps {
  idNumber: number;
  word: string;
  ipa: string;
  translation: string;
  phoneticRu: string;
  imageUrl?: string;
  examples?: { en: string; ru: string; phoneticRu: string }[];
}

export const VocabularyCard: React.FC<VocabularyCardProps> = ({
  idNumber,
  word,
  ipa,
  translation,
  phoneticRu,
  imageUrl,
  examples = [],
}) => {
  const { speak, isPlaying } = useSpeech();

  return (
    <div className="max-w-md mx-auto p-5 card-3d my-4 font-sans text-slate-800">
      <div className="flex items-center gap-3 mb-4">
        <Badge3D subtitle="arTami">{idNumber}</Badge3D>

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h2 className="text-3xl font-extrabold text-[#1E40AF] tracking-tight">{word}</h2>
            <button
              onClick={() => speak(word)}
              className={`p-2 rounded-full badge-3d-blue hover:scale-105 active:scale-95 transition-transform ${
                isPlaying ? 'animate-bounce' : ''
              }`}
            >
              <Volume2 className="w-5 h-5 text-white" />
            </button>
          </div>
          <p className="text-slate-500 font-mono text-sm tracking-wide mt-0.5">[{ipa}]</p>
        </div>
      </div>

      <div className="info-box-3d p-3.5 mb-4 text-[#1E3A8A] text-base font-semibold flex items-center justify-between">
        <span>{translation}</span>
        <span className="text-blue-600 font-mono text-sm">[{phoneticRu}]</span>
      </div>

      {imageUrl && (
        <div className="relative w-full h-48 mb-5 rounded-2xl overflow-hidden border-2 border-white shadow-md">
          <img src={imageUrl} alt={word} className="w-full h-full object-cover" />
        </div>
      )}

      {examples.length > 0 && (
        <div className="space-y-2.5">
          <span className="text-sm font-bold text-[#1E40AF]">Примеры контекста</span>
          {examples.map((item, idx) => (
            <div
              key={idx}
              onClick={() => speak(item.en)}
              className="p-3 bg-white/80 hover:bg-white rounded-xl border border-slate-200 shadow-sm transition-all cursor-pointer flex items-start gap-3 active:scale-[0.99]"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
              <div className="flex-1">
                <p className="font-semibold text-slate-900 text-sm">{item.en}</p>
                <p className="text-xs text-blue-600 font-mono mt-0.5">[{item.phoneticRu}]</p>
                <p className="text-xs text-slate-500 mt-0.5">{item.ru}</p>
              </div>
              <Volume2 className="w-4 h-4 text-slate-400 self-center" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

```

---

## 7. Деплой и подсоединение к Telegram

1. **Сборка проекта (Vite):** `npm run build` создает оптимизированный статический билд в папке `dist`.
2. **Деплой:** Папка `dist` бесплатно хостится на Vercel / GitHub Pages / Render.
3. **Telegram Mini App:** Указанный HTTPS-URL привязывается в `@BotFather` через команду `/newapp`. Приложение мгновенно готово к работе на устройствах пользователей.
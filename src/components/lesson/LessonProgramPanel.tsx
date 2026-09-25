import { ChevronDown, GraduationCap } from 'lucide-react';
import { useMemo, useState } from 'react';
import lessonSource from '../lessons_programm/lesson.txt?raw';

export interface ProgramSection {
  title: string;
  content: string;
}

export interface ProgramTable {
  headers: string[];
  rows: string[][];
}

const sectionHeading = /^(Шаг\s+\d+\..+|Тема:.+|Длительные времена.+|Модальные глаголы.+|Модальные слова.+|Условное предложение.+|Глаголы состояния.+|Глаголы действия.+|Глаголы речи.+|Глаголы конструкции.+|Глаголы герундия.+)/;

const parseProgram = (source: string): ProgramSection[] => {
  const sections: ProgramSection[] = [];
  let current: ProgramSection | null = null;

  for (const rawLine of source.split(/\r?\n/)) {
    const line = rawLine.trimEnd();
    const heading = line.trim().match(sectionHeading);
    if (heading) {
      if (current) sections.push(current);
      current = { title: heading[1].trim(), content: '' };
    } else if (current) {
      current.content += `${line}\n`;
    }
  }

  if (current) sections.push(current);
  return sections.filter((section) => section.content.trim());
};

const simpleTable: ProgramTable = {
  headers: ['Время', 'Вопрос', 'Утверждение', 'Отрицание'],
  rows: [
    ['БУДУЩЕЕ\n(Future Simple)', 'WILL + I / YOU / WE / THEY / HE / SHE + LOVE?', 'I / YOU / WE / THEY / HE / SHE + WILL LOVE', 'I / YOU / WE / THEY / HE / SHE + WILL NOT (WON\'T) LOVE'],
    ['НАСТОЯЩЕЕ\n(Present Simple)', 'DO + I / YOU / WE / THEY + LOVE?\n\nDOES + HE / SHE + LOVE?', 'I / YOU / WE / THEY + LOVE\n\nHE / SHE + LOVES', 'I / YOU / WE / THEY + DON\'T LOVE\n\nHE / SHE + DOESN\'T LOVE'],
    ['ПРОШЕДШЕЕ\n(Past Simple)', 'DID + I / YOU / WE / THEY / HE / SHE + LOVE?', 'I / YOU / WE / THEY / HE / SHE + LOVED', 'I / YOU / WE / THEY / HE / SHE + DID NOT (DIDN\'T) LOVE'],
  ],
};

const continuousTable: ProgramTable = {
  headers: ['Время', 'Вопрос', 'Утверждение', 'Отрицание'],
  rows: [
    ['БУДУЩЕЕ\n(Future Continuous)', 'WILL + I / YOU / WE / THEY / HE / SHE + BE WORKING?', 'I / YOU / WE / THEY / HE / SHE + WILL BE WORKING', 'I / YOU / WE / THEY / HE / SHE + WILL NOT (WON\'T) BE WORKING'],
    ['НАСТОЯЩЕЕ\n(Present Continuous)', 'AM + I + WORKING?\n\nIS + HE / SHE / IT + WORKING?\n\nARE + YOU / WE / THEY + WORKING?', 'I + AM WORKING\n\nHE / SHE / IT + IS WORKING\n\nYOU / WE / THEY + ARE WORKING', 'I + AM NOT WORKING\n\nHE / SHE / IT + IS NOT (ISN\'T) WORKING\n\nYOU / WE / THEY + ARE NOT (AREN\'T) WORKING'],
    ['ПРОШЕДШЕЕ\n(Past Continuous)', 'WAS + I / HE / SHE / IT + WORKING?\n\nWERE + YOU / WE / THEY + WORKING?', 'I / HE / SHE / IT + WAS WORKING\n\nYOU / WE / THEY + WERE WORKING', 'I / HE / SHE / IT + WAS NOT (WASN\'T) WORKING\n\nYOU / WE / THEY + WERE NOT (WEREN\'T) WORKING'],
  ],
};

const perfectTable: ProgramTable = {
  headers: ['Время', 'Вопрос', 'Утверждение', 'Отрицание'],
  rows: [
    ['БУДУЩЕЕ\n(Future Perfect)', 'WILL + I / YOU / WE / THEY / HE / SHE + HAVE DONE?', 'I / YOU / WE / THEY / HE / SHE + WILL HAVE DONE', 'I / YOU / WE / THEY / HE / SHE + WILL NOT (WON\'T) HAVE DONE'],
    ['НАСТОЯЩЕЕ\n(Present Perfect)', 'HAVE + I / YOU / WE / THEY + DONE?\n\nHAS + HE / SHE / IT + DONE?', 'I / YOU / WE / THEY + HAVE DONE\n\nHE / SHE / IT + HAS DONE', 'I / YOU / WE / THEY + HAVEN\'T DONE\n\nHE / SHE / IT + HASN\'T DONE'],
    ['ПРОШЕДШЕЕ\n(Past Perfect)', 'HAD + I / YOU / WE / THEY / HE / SHE + DONE?', 'I / YOU / WE / THEY / HE / SHE + HAD DONE', 'I / YOU / WE / THEY / HE / SHE + HAD NOT (HADN\'T) DONE'],
  ],
};

const perfectContinuousTable: ProgramTable = {
  headers: ['Время', 'Вопрос', 'Утверждение', 'Отрицание'],
  rows: [
    ['БУДУЩЕЕ\n(Future Perfect Continuous)', 'WILL + I / YOU / WE / THEY / HE / SHE + HAVE BEEN WORKING?', 'I / YOU / WE / THEY / HE / SHE + WILL HAVE BEEN WORKING', 'I / YOU / WE / THEY / HE / SHE + WILL NOT (WON\'T) HAVE BEEN WORKING'],
    ['НАСТОЯЩЕЕ\n(Present Perfect Continuous)', 'HAVE + I / YOU / WE / THEY + BEEN WORKING?\n\nHAS + HE / SHE / IT + BEEN WORKING?', 'I / YOU / WE / THEY + HAVE BEEN WORKING\n\nHE / SHE / IT + HAS BEEN WORKING', 'I / YOU / WE / THEY + HAVEN\'T BEEN WORKING\n\nHE / SHE / IT + HASN\'T BEEN WORKING'],
    ['ПРОШЕДШЕЕ\n(Past Perfect Continuous)', 'HAD + I / YOU / WE / THEY / HE / SHE + BEEN WORKING?', 'I / YOU / WE / THEY / HE / SHE + HAD BEEN WORKING', 'I / YOU / WE / THEY / HE / SHE + HAD NOT (HADN\'T) BEEN WORKING'],
  ],
};

const passiveTable: ProgramTable = {
  headers: ['Время', 'Формула', 'Пример', 'Перевод'],
  rows: [
    ['Present Simple Passive', 'am / is / are + V3', 'The house is built.\n[ðə haʊs ɪz bɪlt]', 'Дом строится / построен\n(зэ хаус из билт)'],
    ['Past Simple Passive', 'was / were + V3', 'The house was built.\n[ðə haʊs wɒz bɪlt]', 'Дом был построен\n(зэ хаус уоз билт)'],
    ['Future Simple Passive', 'will be + V3', 'The house will be built.\n[ðə haʊs wɪl biː bɪlt]', 'Дом будет построен\n(зэ хаус уил би билт)'],
  ],
};

const pronounsTable: ProgramTable = {
  headers: ['Кто?\nSubject', 'Кому? Кого?\nObject', 'Чей?\nPossessive'],
  rows: [
    ['I — я\n[aɪ] — ай', 'me — мне / меня\n[miː] — ми', 'my — мой / моя\n[maɪ] — май'],
    ['you — ты / вы\n[juː] — ю', 'you — тебе / вам\n[juː] — ю', 'your — твой / ваш\n[jɔː(r)] — йор'],
    ['he — он\n[hiː] — хи', 'him — ему / его\n[hɪm] — хим', 'his — его\n[hɪz] — хиз'],
    ['she — она\n[ʃiː] — ши', 'her — ей / её\n[hɜː(r)] — хёр', 'her — её\n[hɜː(r)] — хёр'],
    ['it — оно / предмет\n[ɪt] — ит', 'it — ему / его\n[ɪt] — ит', 'its — его / её для предметов\n[ɪts] — итс'],
    ['we — мы\n[wiː] — уи', 'us — нам / нас\n[ʌs] — ас', 'our — наш\n[ˈaʊə(r)] — ауэр'],
    ['they — они\n[ðeɪ] — зэй', 'them — им / их\n[ðem] — зэм', 'their — их\n[ðeə(r)] — зээр'],
  ],
};

export const getTable = (section: ProgramSection): { table: ProgramTable; before: string; after: string } | null => {
  let table: ProgramTable | null = null;
  let marker = '';
  if (section.title.startsWith('Шаг 4.')) { table = simpleTable; marker = 'Время\tВОПРОС'; }
  else if (section.title.includes('Continuous')) { table = section.title.includes('Perfect Continuous') ? perfectContinuousTable : continuousTable; marker = 'Время\tВОПРОС'; }
  else if (section.title.includes('Perfect')) { table = perfectTable; marker = 'Время\tВОПРОС'; }
  else if (section.content.includes('Таблица пассивного залога по временам')) { table = passiveTable; marker = 'Время\tФормула'; }
  else if (section.title === 'Местоимения') return { table: pronounsTable, before: '', after: section.content };
  if (!table) return null;
  const tableStart = section.content.indexOf(marker);
  if (tableStart < 0) return { table, before: section.content, after: '' };
  const afterHeader = section.content.indexOf('\n', tableStart);
  const afterTableMarker = section.content.slice(afterHeader < 0 ? section.content.length : afterHeader);
  const nextText = afterTableMarker.search(/\n(?:Разбор|Если нужно указать)/);
  const tableEnd = nextText >= 0 ? afterHeader + nextText : section.content.length;
  return { table, before: section.content.slice(0, tableStart), after: section.content.slice(tableEnd) };
};

export const ProgramTableView = ({ table }: { table: ProgramTable }) => <div className="program-table-wrap"><table className="program-table"><thead><tr>{table.headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{table.rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td className={index === 0 ? 'table-label' : ''} key={`${row[0]}-${index}`}>{cell}</td>)}</tr>)}</tbody></table></div>;

export const LessonProgramPanel = () => {
  const sections = useMemo(() => parseProgram(lessonSource), []);
  const [openSection, setOpenSection] = useState(0);

  return <section className="program-panel" id="program"><div className="program-intro"><div className="program-icon"><GraduationCap size={22} /></div><div><span className="eyebrow">Блок 01 · Full course</span><h1>Программа обучения</h1><p>Полный курс из файла lesson.txt: чтение, базовая грамматика, времена, части речи, модальные конструкции и условные предложения.</p></div></div><div className="program-sections">{sections.map((section, index) => { const isOpen = openSection === index; const formatted = getTable(section); return <article className={`program-section ${isOpen ? 'open' : ''}`} key={`${section.title}-${index}`}><button className="program-section-toggle" type="button" onClick={() => setOpenSection(isOpen ? -1 : index)} aria-expanded={isOpen}><span><small>Тема {String(index + 1).padStart(2, '0')}</small><strong>{section.title}</strong></span><ChevronDown size={18} /></button>{isOpen && <div className="program-body">{formatted ? <><pre className="program-content">{formatted.before.trim()}</pre><ProgramTableView table={formatted.table} /><pre className="program-content">{formatted.after.trim()}</pre></> : <pre className="program-content">{section.content.trim()}</pre>}</div>}</article>; })}</div></section>;
};

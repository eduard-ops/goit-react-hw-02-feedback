import s from './Section.module.css';

export default function Section({ title, children }) {
  return (
    <div>
      <h1 className={s.title}>{title}</h1>
      {children}
    </div>
  );
}

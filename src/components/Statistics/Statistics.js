import s from './Statistics.module.css';

export default function Statistics({ good, neutral, bad, total, percent }) {
  return (
    <ul>
      <li className={s.item}>
        <p>
          Good: <span>{good}</span>
        </p>
      </li>
      <li className={s.item}>
        <p>
          Neutral: <span>{neutral}</span>
        </p>
      </li>
      <li className={s.item}>
        <p>
          Bad: <span>{bad}</span>
        </p>
      </li>
      <li className={s.item}>
        <p>
          Total: <span>{total}</span>
        </p>
      </li>
      <li className={s.item}>
        <p>
          Positive feedback: <span>{percent}</span>
        </p>
      </li>
    </ul>
  );
}

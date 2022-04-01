import s from './Feedback.module.css';

export default function FeedbackOptions({ clickBad, clickNeutral, clickGood }) {
  return (
    <ul className={s.list}>
      <li className={s.list__item}>
        <button className={s.list__button} onClick={clickGood}>
          Good
        </button>
      </li>
      <li className={s.list__item}>
        <button className={s.list__button} onClick={clickNeutral}>
          Neutral
        </button>
      </li>
      <li className={s.list__item}>
        <button className={s.list__button} onClick={clickBad}>
          Bad
        </button>
      </li>
    </ul>
  );
}

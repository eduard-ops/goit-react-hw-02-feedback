export default function FeedbackOptions({ clickBad, clickNeutral, clickGood }) {
  return (
    <ul className="button-list">
      <li className="button-list__item">
        <button className="button-list__button" onClick={clickGood}>
          Good
        </button>
      </li>
      <li className="button-list__item">
        <button className="button-list__button" onClick={clickNeutral}>
          Neutral
        </button>
      </li>
      <li className="button-list__item">
        <button className="button-list__button" onClick={clickBad}>
          Bad
        </button>
      </li>
    </ul>
  );
}

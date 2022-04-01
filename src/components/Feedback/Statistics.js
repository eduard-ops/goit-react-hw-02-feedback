export default function Statistics({ good, neutral, bad, total, percent }) {
  return (
    <ul className="statistic-list">
      <li className="statistic-list__item">
        <p className="statistic-list__text">
          Good: <span>{good}</span>
        </p>
      </li>
      <li className="statistic-list__item">
        <p className="statistic-list__text">
          Neutral: <span>{neutral}</span>
        </p>
      </li>
      <li className="statistic-list__item">
        <p className="statistic-list__text">
          Bad: <span>{bad}</span>
        </p>
      </li>
      <li className="statistic-list__item">
        <p className="statistic-list__text">
          Total: <span>{total}</span>
        </p>
      </li>
      <li className="statistic-list__item">
        <p className="statistic-list__text">
          Positive feedback: <span>{percent}</span>
        </p>
      </li>
    </ul>
  );
}

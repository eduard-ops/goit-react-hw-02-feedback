export default function Section({ title, children }) {
  return (
    <div>
      <h1 className="section-title">{title}</h1>
      {children}
    </div>
  );
}

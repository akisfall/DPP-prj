function Section({ eyebrow, title, description, children }) {
  return (
    <section className="section">
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <div className="section-header">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {children}
    </section>
  );
}

export default Section;

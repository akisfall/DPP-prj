function InfoCard({ title, children, accent = "blue" }) {
  return (
    <div className={`info-card info-card--${accent}`}>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}

export default InfoCard;

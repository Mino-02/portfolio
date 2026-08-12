type SectionHeadingProps = {
  id?: string;
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
  dark?: boolean;
  level?: 1 | 2;
};

export function SectionHeading({
  id,
  index,
  eyebrow,
  title,
  intro,
  dark = false,
  level = 2,
}: SectionHeadingProps) {
  const Heading = level === 1 ? "h1" : "h2";

  return (
    <header
      className={`section-heading${dark ? " section-heading--dark" : ""}`}
    >
      <div className="section-heading__meta">
        <span>{index}</span>
        <strong>{eyebrow}</strong>
      </div>

      <div className="section-heading__content">
        <Heading id={id}>{title}</Heading>
        {intro ? <p>{intro}</p> : null}
      </div>
    </header>
  );
}

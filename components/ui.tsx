import { ReactNode } from "react";

export function Section({ children }: { children: ReactNode }) {
  return <section className="section"><div className="container">{children}</div></section>;
}

export function SectionTitle({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-title">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p className="lede">{text}</p> : null}
    </div>
  );
}

export function PlaceholderImage({ label }: { label: string }) {
  return <div className="placeholder-image">{label}</div>;
}

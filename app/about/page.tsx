import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PlaceholderImage, Section, SectionTitle } from "@/components/ui";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero page-hero">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">Company</p>
              <h1>Formulation expertise with a manufacturing mindset.</h1>
              <p className="lede">
                The Flavor Factory supports emerging and established brands with practical flavor development,
                responsive service, and production-ready systems.
              </p>
            </div>
            <PlaceholderImage label="Company + lab culture image placeholder" />
          </div>
        </section>

        <Section>
          <SectionTitle eyebrow="Who We Are" title="A collaborative team focused on performance, flavor clarity, and consistency." />
          <p className="lede">
            We pair sensory creativity with technical process knowledge so every profile is built for real manufacturing
            conditions—not just bench-top results.
          </p>
        </Section>

        <Section>
          <SectionTitle eyebrow="How We Work" title="Clear communication, rapid sampling, and straightforward decisions." />
          <div className="card-grid three">
            <article className="card"><h3>Technical consultation</h3><p>We align on targets, processing, and constraints at project kickoff.</p></article>
            <article className="card"><h3>Practical development</h3><p>Each formula is tuned for both flavor impact and production feasibility.</p></article>
            <article className="card"><h3>Long-term partnership</h3><p>We stay involved through revisions, scale-up, and future line extensions.</p></article>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

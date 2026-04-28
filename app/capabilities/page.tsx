import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { capabilities, processSteps } from "@/components/site-data";
import { Section, SectionTitle } from "@/components/ui";

export default function CapabilitiesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero page-hero compact">
          <div className="container">
            <p className="eyebrow">Capabilities</p>
            <h1>Technical flavor development backed by dependable manufacturing support.</h1>
          </div>
        </section>

        <Section>
          <SectionTitle eyebrow="Services" title="Built for formulation teams, founders, and contract manufacturers." />
          <div className="card-grid two">
            {capabilities.map((item) => (
              <article key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section>
          <SectionTitle eyebrow="From concept to commercial production" title="A structured path that keeps projects moving." />
          <div className="process-grid">
            {processSteps.map((item) => (
              <article key={item.step} className="process-item">
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <Link className="btn btn-primary" href="/contact">Request a sample</Link>
        </Section>
      </main>
      <Footer />
    </>
  );
}

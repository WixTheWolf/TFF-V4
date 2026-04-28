import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { applicationCards } from "@/components/site-data";
import { Section, SectionTitle } from "@/components/ui";

export default function ApplicationsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero page-hero compact">
          <div className="container">
            <p className="eyebrow">Applications</p>
            <h1>Flavor systems matched to the way your product is made.</h1>
            <p className="lede">From beverages to bakery to savory, we build systems around process, stability, and sensory goals.</p>
          </div>
        </section>

        <Section>
          <SectionTitle eyebrow="Formats We Support" title="Application-first development for real-world production." />
          <div className="card-grid two">
            {applicationCards.map((item) => (
              <article className="card" key={item}><h3>{item}</h3></article>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

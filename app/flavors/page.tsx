import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Section, SectionTitle } from "@/components/ui";

const featuredFlavors = [
  "Blood Orange",
  "Madagascar Vanilla",
  "Toasted Coconut",
  "Wild Berry",
  "Honey Graham",
  "Roasted Caramel",
  "Mango Chili",
  "Lemon Ginger"
];

export default function FlavorsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero page-hero compact">
          <div className="container">
            <p className="eyebrow">Flavor Library</p>
            <h1>Reference profiles to guide your custom flavor direction.</h1>
          </div>
        </section>

        <Section>
          <SectionTitle eyebrow="Starting Points" title="Use these profiles as a briefing foundation for custom development." />
          <div className="card-grid two">
            {featuredFlavors.map((flavor) => (
              <article className="card" key={flavor}><h3>{flavor}</h3></article>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

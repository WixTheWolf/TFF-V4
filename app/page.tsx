import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PlaceholderImage, Section, SectionTitle } from "@/components/ui";
import { capabilities, industries, processSteps, whatWeMake } from "@/components/site-data";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">Custom Flavor Manufacturing</p>
              <h1>Flavor systems designed for products that need to perform and sell.</h1>
              <p className="lede">
                The Flavor Factory develops and manufactures custom flavors and extracts for beverage,
                bakery, confectionery, dairy, nutraceutical, and savory applications.
              </p>
              <div className="hero-cta">
                <Link href="/contact" className="btn btn-primary">Request a Sample</Link>
                <Link href="/capabilities" className="btn btn-light">View Capabilities</Link>
              </div>
            </div>
            <PlaceholderImage label="Formulation lab + production image placeholder" />
          </div>
        </section>

        <Section>
          <SectionTitle eyebrow="What We Make" title="Custom flavors and extracts across high-demand product categories." />
          <div className="chip-grid">
            {whatWeMake.map((item) => <div key={item} className="chip">{item}</div>)}
          </div>
        </Section>

        <Section>
          <SectionTitle eyebrow="Industries We Serve" title="Built for teams in food, beverage, and wellness manufacturing." />
          <div className="card-grid three">
            {industries.map((industry) => <article key={industry} className="card"><h3>{industry}</h3></article>)}
          </div>
        </Section>

        <Section>
          <SectionTitle
            eyebrow="Why The Flavor Factory"
            title="Fast collaboration, technical depth, and reliable scale-up support."
          />
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
          <SectionTitle eyebrow="From Concept to Commercial Production" title="A clear process from first brief to launch-ready supply." />
          <div className="process-grid">
            {processSteps.map((step) => (
              <article key={step.step} className="process-item">
                <span>{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </Section>

        <section className="section cta-band">
          <div className="container cta-wrap">
            <div>
              <p className="eyebrow">Request a sample / start a project</p>
              <h2>Bring us your profile target and production parameters.</h2>
              <p className="lede">We will guide flavor direction, sample options, and commercialization planning.</p>
            </div>
            <Link href="/contact" className="btn btn-primary">Talk to our team</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

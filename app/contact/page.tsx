import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero page-hero compact">
          <div className="container">
            <p className="eyebrow">Contact</p>
            <h1>Request a sample or start your next flavor project.</h1>
            <p className="lede">Share your product type, preferred profile, target market, and timeline. We will follow up quickly.</p>
          </div>
        </section>

        <section className="section">
          <div className="container contact-layout">
            <form className="contact-form">
              <label>Name<input type="text" name="name" /></label>
              <label>Company<input type="text" name="company" /></label>
              <label>Email<input type="email" name="email" /></label>
              <label>Project Details<textarea name="details" rows={5} /></label>
              <button type="button" className="btn btn-primary">Submit Inquiry</button>
            </form>
            <aside className="card">
              <h3>Direct Contact</h3>
              <p>sales@flavorfactory.net</p>
              <p>(800) 555-0139</p>
              <p>1720 Flavor Way, Orlando, FL</p>
              <p>Available Monday–Friday, 8:30 AM–5:00 PM ET.</p>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

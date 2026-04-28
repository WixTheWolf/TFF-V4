import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>The Flavor Factory</h3>
          <p>
            Premium flavor development and manufacturing support for modern food,
            beverage, and wellness brands.
          </p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>1720 Flavor Way, Orlando, FL</p>
          <p>sales@flavorfactory.net</p>
          <p>(800) 555-0139</p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link href="/applications">Applications</Link></li>
            <li><Link href="/capabilities">Capabilities</Link></li>
            <li><Link href="/about">Company</Link></li>
            <li><Link href="/contact">Request Samples</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/components/site-data";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand-mark">
          <span className="brand-dot" aria-hidden />
          <span>
            The Flavor Factory
            <small>Custom Flavor Manufacturing</small>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "active" : ""}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn btn-dark">
          Start a Project
        </Link>
      </div>
    </header>
  );
}

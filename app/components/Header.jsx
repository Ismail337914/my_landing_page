"use client";

import { useState } from "react";
import { navLinks } from "../data/content";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a href="#hero" className="brand" onClick={closeMenu}>
          WebZaBiznis
        </a>

        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="#kontakt" className="button button-primary">
            Besplatna Konsultacija
          </a>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Otvori meni"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      <div className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a href="#kontakt" className="button button-primary" onClick={closeMenu}>
          Besplatna Konsultacija
        </a>
      </div>
    </header>
  );
}

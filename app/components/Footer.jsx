import { navLinks } from "../data/content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-brand">WebZaBiznis</div>
        <p>Jednostavne web stranice za male biznise u BiH</p>
        <div className="footer-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="#kontakt">Kontakt</a>
        </div>
        <small>© {new Date().getFullYear()} WebZaBiznis. Sva prava zadržana.</small>
      </div>
    </footer>
  );
}

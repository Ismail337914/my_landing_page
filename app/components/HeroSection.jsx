export default function HeroSection() {
  return (
    <section id="hero" className="hero">
      <div className="hero-shape hero-shape-one" />
      <div className="hero-shape hero-shape-two" />
      <div className="container hero-content reveal-up">
        <span className="eyebrow">Web rješenja za lokalni rast</span>
        <h1>Profesionalne web stranice za male biznise</h1>
        <p className="hero-lead">
          Jednostavna web stranica sa kontaktom i mapom, gotovo za 3 dana.
        </p>
        <p className="hero-subtitle">
          Kontakt forma + Google mapa + live link, gotovo za 72 sata.
        </p>
        <div className="hero-actions">
          <a href="#kontakt" className="button button-primary">
            Pošalj poruku
          </a>
          <a href="#primjeri" className="button button-secondary">
            Pogledaj Primjere
          </a>
        </div>
      </div>
    </section>
  );
}

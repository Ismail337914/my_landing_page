import { examples, mapEmbedSrc } from "../data/content";

export default function ExamplesSection() {
  return (
    <section id="primjeri" className="section section-muted">
      <div className="container">
        <h2 className="section-title">Kako Bi Vaša Stranica Izgledala</h2>
        <p className="section-subtitle">Ovo su samo primjeri za lokalne biznise:</p>

        <div className="cards-grid examples-grid">
          {examples.map((example, index) => (
            <article key={example.title} className="example-card reveal-up">
              <div className={`example-banner example-${index + 1}`}>
                <span>
                  {example.emoji} {example.typeLabel}
                </span>
              </div>
              <div className="example-content">
                <h3>{example.title}</h3>
                <p>{example.description}</p>
                <a href="#kontakt">Pogledaj demo →</a>
              </div>
            </article>
          ))}
        </div>

        <div className="map-card reveal-up">
          <h3>Evo kako će vaša lokacija izgledati</h3>
          <p>Vaša adresa će biti jasno prikazana na karti.</p>
          <iframe
            src={mapEmbedSrc}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Primjer lokacije biznisa"
          />
        </div>
      </div>
    </section>
  );
}

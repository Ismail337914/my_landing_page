import { pricingFeatures } from "../data/content";

export default function PricingSection() {
  return (
    <section id="cijene" className="section section-light">
      <div className="container">
        <h2 className="section-title">Jednostavna Cijena</h2>
        <div className="pricing-card reveal-up">
          <h3>Komplet Web Stranica</h3>
          <div className="price">100 KM</div>
          <p className="price-note">*Početna cijena, zavisi od kompleksnosti</p>
          <ul>
            {pricingFeatures.map((feature) => (
              <li key={feature}>✓ {feature}</li>
            ))}
          </ul>
          <a
            href="https://wa.me/387603474556?text=Pozdrav!%20Želim%20web%20stranicu."
            className="button button-ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            📱 Pošalji poruku na WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

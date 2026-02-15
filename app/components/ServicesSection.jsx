import { services } from "../data/content";

export default function ServicesSection() {
  return (
    <section id="usluge" className="section section-light">
      <div className="container">
        <h2 className="section-title">Šta Dobijate</h2>
        <div className="cards-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card reveal-up">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

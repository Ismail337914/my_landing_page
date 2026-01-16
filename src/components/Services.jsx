import React from 'react';

const Services = () => {
const usluge = [
  {
    ikona: "🌐",
    naslov: "Stranica koja prima poruke",
    opis: "Kontakt forma koja šalje upite direktno na WhatsApp i email."
  },
  {
    ikona: "📱",
    naslov: "Izgleda savršeno i na telefonu",
    opis: "Svi će vidjeti vaš biznis — bez obzira koji uređaj koriste."
  },
  {
    ikona: "⚡",
    naslov: "Radio za 3 dana, ne 3 mjeseca",
    opis: "Od priče do live linka — bez čekanja i odgađanja."
  }
];

  return (
    <section id="usluge" style={styles.section}>
      <div className="container">
        <h2 className="section-title">Šta Dobijate</h2>
        <div style={styles.grid}>
          {usluge.map((service, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.icon}>{service.ikona}</div>
              <h3 style={styles.cardTitle}>{service.naslov}</h3>
              <p style={styles.cardDescription}>{service.opis}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '5rem 0',
    background: 'var(--white)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  card: {
    background: 'var(--background-light)',
    padding: '2rem',
    borderRadius: 'var(--border-radius)',
    textAlign: 'center',
    border: '1px solid #e2e8f0',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  icon: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  cardTitle: {
    fontSize: '1.4rem',
    marginBottom: '1rem',
    color: 'var(--text-dark)',
  },
  cardDescription: {
    color: 'var(--text-light)',
  },
};

// Dodaj za hover efekat u index.css ili inline
Services.defaultProps = {
  cardHover: {
    transform: 'translateY(-5px)',
    boxShadow: 'var(--shadow)',
  },
};

export default Services;
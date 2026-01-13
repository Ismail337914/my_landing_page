import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '🌐',
      title: 'Modern Web Dizajn',
      description: 'Čista, profesionalna stranica koja radi na svim uređajima.',
    },
    {
      icon: '📱',
      title: 'Mobile Friendly',
      description: 'Stranica koja savršeno izgleda i na telefonu i na desktopu.',
    },
    {
      icon: '⚡',
      title: 'Brza Iskoruka',
      description: 'Gotovo za 3 radna dana. Bez čekanja mjesecima.',
    },
  ];

  return (
    <section id="usluge" style={styles.section}>
      <div className="container">
        <h2 className="section-title">Šta Dobijate</h2>
        <div style={styles.grid}>
          {services.map((service, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.icon}>{service.icon}</div>
              <h3 style={styles.cardTitle}>{service.title}</h3>
              <p style={styles.cardDescription}>{service.description}</p>
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
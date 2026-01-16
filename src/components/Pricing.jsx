import React from 'react';

const Pricing = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cijene" style={styles.section}>
      <div className="container">
        <h2 className="section-title">Jednostavna Cijena</h2>
        <div style={styles.priceBox}>
          <h3 style={styles.priceTitle}>Komplet Web Stranica</h3>
          <div style={styles.price}>100 KM</div>
          <p style={styles.priceNote}>*Početna cijena, zavisi od kompleksnosti</p>
          <ul style={styles.featureList}>
            <li>✓ Modern dizajn</li>
            <li>✓ Responsive (za mobile)</li>
            <li>✓ Kontakt forma</li>
            <li>✓ Google Maps</li>
            <li>✓ Deployment i hosting setup</li>
            <li>✓ 7 dana podrške</li>
          </ul>
            <a 
                href="https://wa.me/387603474556?text=Pozdrav!%20Želim%20web%20stranicu." 
                className="cta-button"
                target="_blank"
                rel="noopener noreferrer"
            >
            📱 Pošalji poruku na WhatsApp
            </a>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '5rem 0',
    background: 'var(--white)',
    textAlign: 'center',
  },
  priceBox: {
    background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)',
    color: 'var(--white)',
    padding: '3rem',
    borderRadius: '16px',
    maxWidth: '600px',
    margin: '0 auto',
  },
  priceTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  price: {
    fontSize: '3rem',
    fontWeight: '700',
    margin: '1rem 0',
  },
  priceNote: {
    fontSize: '1rem',
    opacity: '0.9',
    marginBottom: '2rem',
  },
  featureList: {
    textAlign: 'left',
    margin: '2rem 0',
    listStyle: 'none',
    fontSize: '1.1rem',
  },
  priceButton: {
    background: 'var(--white)',
    color: 'var(--primary-color)',
    padding: '1rem 2rem',
    borderRadius: '8px',
    border: 'none',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    width: '100%',
    marginTop: '1rem',
  },
};

export default Pricing;
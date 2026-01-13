import React from 'react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" style={styles.hero}>
      <div className="container">
        <h1 style={styles.title}>Jednostavne Web Stranice za Male Biznise</h1>
        <p style={styles.subtitle}>
          Napravim vam profesionalnu web stranicu za 3 dana. Brzo, jednostavno, bez komplikacija.
        </p>
        <div style={styles.buttonContainer}>
          <button 
            onClick={() => scrollToSection('kontakt')} 
            className="cta-button"
          >
            Počni Odmah
          </button>
          <button 
            onClick={() => scrollToSection('primjeri')} 
            className="secondary-button"
          >
            Pogledaj Primjere
          </button>
        </div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    padding: '8rem 0 4rem',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #f0f4ff 0%, #e6f0ff 100%)',
  },
  title: {
    fontSize: '2.8rem',
    marginBottom: '1rem',
    color: 'var(--text-dark)',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: 'var(--text-light)',
    maxWidth: '700px',
    margin: '0 auto 2rem',
  },
  buttonContainer: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
};

export default Hero;

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
      <div className="container" style={{textAlign: "center", padding:"4rem 1rem 3rem"}}>
        <h1 style={{fontSize: "2.5rem", marginBottom: "2.5rem"
        }}>Profesionalne web stranice za male biznise</h1>
        <p style={styles.subtitle}>
          Jednostavna web stranica sa kontaktom i mapom — gotovo za 3 dana
        </p>
        <p className="podnaslov" style={{fontSize:"1.2rem", marginBottom:"2.5rem", opacity:0.8}}>
            Kontakt forma + Google mapa + live link — gotovo za 72 sata
        </p>
        <div style={styles.buttonContainer}>
          <button 
            onClick={() => scrollToSection('kontakt')} 
            className="cta-button"
          >
            Pošalj poruku
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

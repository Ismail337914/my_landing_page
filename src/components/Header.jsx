import React from 'react';

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header style={styles.header}>
      <div className="container" style={styles.navContainer}>
        <div style={styles.logo}>WebZaBiznis</div>
        <nav style={styles.nav}>
          <button 
            onClick={() => scrollToSection('usluge')} 
            style={styles.navLink}
          >
            Usluge
          </button>
          <button 
            onClick={() => scrollToSection('primjeri')} 
            style={styles.navLink}
          >
            Primjeri
          </button>
          <button 
            onClick={() => scrollToSection('cijene')} 
            style={styles.navLink}
          >
            Cijene
          </button>
          <button 
            onClick={() => scrollToSection('kontakt')} 
            className="cta-button"
          >
            Besplatna Konsultacija
          </button>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    background: 'var(--white)',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 0',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'var(--primary-color)',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
  },
  navLink: {
    background: 'none',
    border: 'none',
    color: '#4b5563',
    fontWeight: '500',
    cursor: 'pointer',
    fontSize: '1rem',
    padding: '0.5rem',
  },
};

export default Header;
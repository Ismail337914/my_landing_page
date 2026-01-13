import React from 'react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={styles.footer}>
      <div className="container">
        <div style={styles.logo}>WebZaBiznis</div>
        <p style={styles.tagline}>Jednostavne web stranice za male biznise u BiH</p>
        <div style={styles.links}>
          <button 
            onClick={() => scrollToSection('usluge')} 
            style={styles.footerLink}
          >
            Usluge
          </button>
          <button 
            onClick={() => scrollToSection('primjeri')} 
            style={styles.footerLink}
          >
            Primjeri
          </button>
          <button 
            onClick={() => scrollToSection('cijene')} 
            style={styles.footerLink}
          >
            Cijene
          </button>
          <button 
            onClick={() => scrollToSection('kontakt')} 
            style={styles.footerLink}
          >
            Kontakt
          </button>
        </div>
        <p style={styles.copyright}>
          © {new Date().getFullYear()} WebZaBiznis. Sva prava zadržana.
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: '#1e293b',
    color: 'var(--white)',
    padding: '3rem 0',
    textAlign: 'center',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'var(--white)',
    marginBottom: '1rem',
  },
  tagline: {
    color: '#94a3b8',
    marginBottom: '2rem',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    margin: '2rem 0',
    flexWrap: 'wrap',
  },
  footerLink: {
    background: 'none',
    border: 'none',
    color: '#cbd5e1',
    cursor: 'pointer',
    fontSize: '1rem',
    padding: '0.5rem',
  },
  copyright: {
    marginTop: '2rem',
    color: '#94a3b8',
  },
};

export default Footer;
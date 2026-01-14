import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Zatvori menu nakon klika
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header style={styles.header}>
      <div className="container" style={styles.navContainer}>
        <div style={styles.logo}>WebZaBiznis</div>
        
        {/* Desktop Navigation */}
        <nav style={styles.desktopNav}>
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
            style={styles.ctaButton}
          >
            Besplatna Konsultacija
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          style={styles.menuButton}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div style={styles.mobileMenu}>
            <button 
              onClick={() => scrollToSection('usluge')} 
              style={styles.mobileNavLink}
            >
              Usluge
            </button>
            <button 
              onClick={() => scrollToSection('primjeri')} 
              style={styles.mobileNavLink}
            >
              Primjeri
            </button>
            <button 
              onClick={() => scrollToSection('cijene')} 
              style={styles.mobileNavLink}
            >
              Cijene
            </button>
            <button 
              onClick={() => scrollToSection('kontakt')} 
              className="cta-button"
              style={styles.mobileCtaButton}
            >
              Besplatna Konsultacija
            </button>
          </div>
        )}
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
    position: 'relative',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'var(--primary-color)',
    zIndex: 1001,
  },
  desktopNav: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  },
  navLink: {
    background: 'none',
    border: 'none',
    color: '#4b5563',
    fontWeight: '500',
    cursor: 'pointer',
    fontSize: '1rem',
    padding: '0.5rem',
    transition: 'color 0.3s',
  },
  ctaButton: {
    padding: '0.75rem 1.5rem',
    whiteSpace: 'nowrap', // Sprečava prelamanje teksta
  },
  menuButton: {
    display: 'none', // Sakriven na desktopu
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: '#4b5563',
    padding: '0.5rem',
    zIndex: 1001,
  },
  mobileMenu: {
    position: 'fixed',
    top: '70px', // Ispod header-a
    left: 0,
    right: 0,
    background: 'var(--white)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1.5rem',
    gap: '1rem',
    zIndex: 1000,
    animation: 'slideDown 0.3s ease-out',
  },
  mobileNavLink: {
    background: 'none',
    border: 'none',
    color: '#4b5563',
    fontWeight: '500',
    cursor: 'pointer',
    fontSize: '1.1rem',
    padding: '0.75rem',
    width: '100%',
    textAlign: 'center',
    transition: 'background 0.3s',
  },
  mobileCtaButton: {
    width: '100%',
    padding: '1rem',
    marginTop: '0.5rem',
    fontSize: '1.1rem',
  },

  // Media queries za responsive design
  '@media (max-width: 768px)': {
    desktopNav: {
      display: 'none', // Sakrij desktop nav na mobilnom
    },
    menuButton: {
      display: 'block', // Prikaži hamburger menu
    },
    navContainer: {
      padding: '0.75rem 0',
    },
  },
  '@media (max-width: 480px)': {
    logo: {
      fontSize: '1.3rem',
    },
    mobileMenu: {
      top: '60px',
    },
  },
};

// Dodaj animaciju
const globalStyles = `
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive styles */
@media (max-width: 768px) {
  .desktop-nav {
    display: none !important;
  }
  
  .menu-button {
    display: block !important;
  }
}

@media (min-width: 769px) {
  .mobile-menu {
    display: none !important;
  }
  
  .menu-button {
    display: none !important;
  }
}

/* Poboljšaj hover efekte */
.nav-link:hover {
  color: var(--primary-color) !important;
}

.mobile-nav-link:hover {
  background: #f8fafc !important;
  border-radius: 6px;
}
`;

// Inject global styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = globalStyles;
  document.head.appendChild(styleSheet);
}

export default Header;
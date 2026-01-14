import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    message: '',
    email: '', // Dodao email polje
  });
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Ime je obavezno';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Ime je prekratko';
    }
    
    if (!formData.business.trim()) {
      newErrors.business = 'Vrsta biznisa je obavezna';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Poruka je obavezna';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Poruka je prekratka (min. 10 karaktera)';
    }
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email nije validan';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    // Tvoj Formspree URL
    const formspreeURL = 'https://formspree.io/f/xnjjnpyq';
    
    try {
      const response = await fetch(formspreeURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          business: formData.business,
          email: formData.email,
          message: formData.message,
          _subject: `Nova poruka sa landing page: ${formData.business}`,
          _replyto: formData.email || 'no-reply@example.com',
        }),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', business: '', message: '', email: '' });
      } else {
        const errorData = await response.json();
        console.error('Formspree error:', errorData);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Network error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="kontakt" style={styles.section}>
      <div className="container">
        <h2 className="section-title">Kontaktirajte Me</h2>
        <div style={styles.container}>
          <div style={styles.form}>
            
            {submitStatus === 'success' && (
              <div style={styles.successMessage}>
                ✅ Hvala {formData.name}! Poruka je poslana. Kontaktirat ću vas uskoro.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div style={styles.errorMessage}>
                ❌ Došlo je do greške. Pokušajte ponovo ili pišite direktno na WhatsApp.
              </div>
            )}
            
            <form onSubmit={handleSubmit} noValidate>
              <div style={styles.formGroup}>
                <label htmlFor="name" style={styles.label}>
                  Vaše ime *
                  {errors.name && <span style={styles.errorText}> - {errors.name}</span>}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    ...styles.input,
                    borderColor: errors.name ? '#ef4444' : '#cbd5e1'
                  }}
                  placeholder="Unesite vaše puno ime"
                  required
                />
              </div>
              
              <div style={styles.formGroup}>
                <label htmlFor="business" style={styles.label}>
                  Vrsta biznisa *
                  {errors.business && <span style={styles.errorText}> - {errors.business}</span>}
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  style={{
                    ...styles.input,
                    borderColor: errors.business ? '#ef4444' : '#cbd5e1'
                  }}
                  placeholder="npr. frizerski salon, autoservis, stomatologija..."
                  required
                />
              </div>
              
              <div style={styles.formGroup}>
                <label htmlFor="email" style={styles.label}>
                  Vaš email {errors.email && <span style={styles.errorText}> - {errors.email}</span>}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    ...styles.input,
                    borderColor: errors.email ? '#ef4444' : '#cbd5e1'
                  }}
                  placeholder="vas@email.com (opcionalno)"
                />
              </div>
              
              <div style={styles.formGroup}>
                <label htmlFor="message" style={styles.label}>
                  Šta vam treba? *
                  {errors.message && <span style={styles.errorText}> - {errors.message}</span>}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    ...styles.textarea,
                    borderColor: errors.message ? '#ef4444' : '#cbd5e1'
                  }}
                  placeholder="Opišite šta želite od web stranice (cilj, funkcionalnosti, rokovi...)"
                  rows="5"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="cta-button" 
                style={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span style={styles.buttonContent}>
                    <span style={styles.spinner}></span>
                    Šalje se...
                  </span>
                ) : 'Pošalji Poruku'}
              </button>
            </form>
            
            <div style={styles.whatsappSection}>
              <p style={styles.whatsappText}>Ili mi pišite direktno na WhatsApp:</p>
              <a 
                href="https://wa.me/387603474556" 
                className="whatsapp-button" 
                target="_blank" 
                rel="noopener noreferrer"
                style={styles.whatsappLink}
              >
                <span style={styles.whatsappIcon}>📱</span>
                Piši na WhatsApp
              </a>
              <p style={styles.responseTime}>
                Odgovaram u roku od 24 sata, radnim danima.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '5rem 0',
    background: 'var(--background-light)',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  form: {
    background: 'var(--white)',
    padding: '2.5rem',
    borderRadius: 'var(--border-radius)',
    boxShadow: 'var(--shadow)',
    position: 'relative',
  },
  formGroup: {
    marginBottom: '1.5rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: '600',
    color: '#475569',
    fontSize: '1rem',
  },
  errorText: {
    color: '#ef4444',
    fontWeight: 'normal',
    fontSize: '0.9rem',
  },
  input: {
    width: '100%',
    padding: '0.75rem 1rem',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    fontFamily: 'inherit',
  },
  textarea: {
    width: '100%',
    padding: '0.75rem 1rem',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    fontSize: '1rem',
    fontFamily: 'inherit',
    resize: 'vertical',
    minHeight: '120px',
    transition: 'border-color 0.3s, box-shadow 0.3s',
  },
  submitButton: {
    width: '100%',
    fontSize: '1.1rem',
    padding: '1rem',
    marginTop: '0.5rem',
    position: 'relative',
  },
  buttonContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
  },
  spinner: {
    width: '1rem',
    height: '1rem',
    border: '2px solid rgba(255,255,255,0.3)',
    borderRadius: '50%',
    borderTopColor: 'white',
    animation: 'spin 1s linear infinite',
  },
  whatsappSection: {
    textAlign: 'center',
    marginTop: '2rem',
    paddingTop: '2rem',
    borderTop: '1px solid #e2e8f0',
  },
  whatsappText: {
    marginBottom: '1rem',
    color: '#475569',
  },
  whatsappLink: {
    background: '#25D366',
    color: 'white',
    padding: '1rem 2rem',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontSize: '1.1rem',
    transition: 'all 0.3s',
    boxShadow: '0 4px 6px rgba(37, 211, 102, 0.2)',
  },
  whatsappIcon: {
    fontSize: '1.2rem',
  },
  responseTime: {
    marginTop: '1rem',
    fontSize: '0.9rem',
    color: '#64748b',
    fontStyle: 'italic',
  },
  successMessage: {
    background: '#d1fae5',
    color: '#065f46',
    padding: '1rem 1.5rem',
    borderRadius: '8px',
    marginBottom: '1.5rem',
    textAlign: 'center',
    border: '1px solid #34d399',
    fontSize: '1rem',
    animation: 'fadeIn 0.5s ease-in',
  },
  errorMessage: {
    background: '#fee2e2',
    color: '#991b1b',
    padding: '1rem 1.5rem',
    borderRadius: '8px',
    marginBottom: '1.5rem',
    textAlign: 'center',
    border: '1px solid #f87171',
    fontSize: '1rem',
    animation: 'fadeIn 0.5s ease-in',
  },
};

// Dodaj animacije u globalni CSS
const globalStyles = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.whatsapp-link:hover {
  background: #128C7E;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(37, 211, 102, 0.3);
}

input:focus, textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}
`;

// Inject global styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = globalStyles;
  document.head.appendChild(styleSheet);
}

export default Contact;
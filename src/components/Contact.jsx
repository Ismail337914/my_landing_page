import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hvala ${formData.name}! Poruka za vaš ${formData.business} je poslana. Kontaktirat ću vas uskoro.`);
    setFormData({ name: '', business: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <section id="kontakt" style={styles.section}>
      <div className="container">
        <h2 className="section-title">Kontaktirajte Me</h2>
        <div style={styles.container}>
          <div style={styles.form}>
            <form onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label htmlFor="name" style={styles.label}>Vaše ime</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="business" style={styles.label}>Vrsta biznisa</label>
                <input
                  type="text"
                  id="business"
                  value={formData.business}
                  onChange={handleChange}
                  placeholder="npr. frizerski salon, autoservis..."
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="message" style={styles.label}>Šta vam treba?</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Opišite šta želite od web stranice..."
                  style={styles.textarea}
                  required
                />
              </div>
              <button type="submit" className="cta-button" style={styles.submitButton}>
                Pošalji Poruku
              </button>
            </form>
            
            <div style={styles.whatsappSection}>
              <p>Ili mi pišite direktno na WhatsApp:</p>
              <a href="https://wa.me/38762123456" className="whatsapp-button">
                📱 Piši na WhatsApp
              </a>
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
  },
  formGroup: {
    marginBottom: '1.5rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: '600',
    color: '#475569',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    fontSize: '1rem',
  },
  textarea: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    fontSize: '1rem',
    height: '150px',
    resize: 'vertical',
  },
  submitButton: {
    width: '100%',
  },
  whatsappSection: {
    textAlign: 'center',
    marginTop: '2rem',
  },
};

export default Contact;
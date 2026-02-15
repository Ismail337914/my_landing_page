"use client";

import { useState } from "react";

const initialFormData = {
  name: "",
  business: "",
  email: "",
  message: "",
};

function validateForm(formData) {
  const nextErrors = {};

  if (!formData.name.trim()) {
    nextErrors.name = "Ime je obavezno";
  } else if (formData.name.trim().length < 2) {
    nextErrors.name = "Ime je prekratko";
  }

  if (!formData.business.trim()) {
    nextErrors.business = "Vrsta biznisa je obavezna";
  }

  if (!formData.message.trim()) {
    nextErrors.message = "Poruka je obavezna";
  } else if (formData.message.trim().length < 10) {
    nextErrors.message = "Poruka je prekratka (min. 10 karaktera)";
  }

  if (
    formData.email &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
  ) {
    nextErrors.email = "Email nije validan";
  }

  return nextErrors;
}

export default function ContactSection() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch("https://formspree.io/f/xnjjnpyq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          business: formData.business,
          email: formData.email,
          message: formData.message,
          _subject: `Nova poruka sa landing page: ${formData.business}`,
          _replyto: formData.email || "no-reply@example.com",
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      const sentName = formData.name;
      setFormData(initialFormData);
      setSubmitStatus({ kind: "success", name: sentName });
    } catch {
      setSubmitStatus({ kind: "error" });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="kontakt" className="section section-muted">
      <div className="container contact-wrap">
        <h2 className="section-title">Kontaktirajte Me</h2>

        <div className="contact-card reveal-up">
          {submitStatus?.kind === "success" && (
            <p className="form-alert success">
              ✅ Hvala {submitStatus.name}! Poruka je poslana. Kontaktirat ću vas uskoro.
            </p>
          )}
          {submitStatus?.kind === "error" && (
            <p className="form-alert error">
              ❌ Došlo je do greške. Pokušajte ponovo ili pišite direktno na WhatsApp.
            </p>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="name">
              Vaše ime *
              {errors.name ? <span> - {errors.name}</span> : null}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Unesite vaše puno ime"
              className={errors.name ? "invalid" : ""}
              required
            />

            <label htmlFor="business">
              Vrsta biznisa *
              {errors.business ? <span> - {errors.business}</span> : null}
            </label>
            <input
              id="business"
              name="business"
              type="text"
              value={formData.business}
              onChange={handleChange}
              placeholder="npr. frizerski salon, autoservis, stomatologija..."
              className={errors.business ? "invalid" : ""}
              required
            />

            <label htmlFor="email">
              Vaš email
              {errors.email ? <span> - {errors.email}</span> : null}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="vas@email.com (opcionalno)"
              className={errors.email ? "invalid" : ""}
            />

            <label htmlFor="message">
              Šta vam treba? *
              {errors.message ? <span> - {errors.message}</span> : null}
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Opišite šta želite od web stranice (cilj, funkcionalnosti, rokovi...)"
              className={errors.message ? "invalid" : ""}
              required
            />

            <button
              type="submit"
              className="button button-primary submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Šalje se..." : "Pošalji Poruku"}
            </button>
          </form>

          <div className="whatsapp-panel">
            <p>Ili mi pišite direktno na WhatsApp:</p>
            <a href="https://wa.me/387603474556" target="_blank" rel="noopener noreferrer">
              📱 Piši na WhatsApp
            </a>
            <small>Odgovaram u roku od 24 sata, radnim danima.</small>
          </div>
        </div>
      </div>
    </section>
  );
}

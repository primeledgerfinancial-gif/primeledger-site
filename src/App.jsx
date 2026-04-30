import React, { useState } from "react";
import "./styles.css";

const WHATSAPP = "https://wa.me/27686350987";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `New Client Inquiry:
Name: ${form.name}
Business: ${form.business}
Phone: ${form.phone}
Message: ${form.message}`;

    window.open(`${WHATSAPP}?text=${encodeURIComponent(text)}`);
  };

  return (
    <div className="container">
      {/* HEADER */}
      <header className="header">
        <img src="/logo.png" alt="PrimeLedger Financial" className="logo" />
        <a href={WHATSAPP}>
          <button className="nav-btn">WhatsApp Us</button>
        </a>
      </header>

      {/* HERO */}
      <section className="hero">
        <h1>Affordable Bookkeeping & VAT Services in Port Shepstone</h1>
        <p>
          We help small businesses stay organized, compliant, and stress-free.
        </p>

        <a href={WHATSAPP}>
          <button className="primary">Get Free Consultation</button>
        </a>
      </section>

      {/* TRUST */}
      <section className="trust">
        <p>✔ Local & Trusted</p>
        <p>✔ Affordable Packages</p>
        <p>✔ Fast Response</p>
        <p>✔ No Contracts</p>
      </section>

      {/* SERVICES */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="grid">
          <div className="card">
            <h3>Bookkeeping</h3>
            <p>Monthly financial records & reports</p>
          </div>

          <div className="card">
            <h3>VAT Submissions</h3>
            <p>Accurate SARS submissions</p>
          </div>

          <div className="card">
            <h3>Payroll</h3>
            <p>Payslips & employee management</p>
          </div>

          <div className="card">
            <h3>Catch-up Work</h3>
            <p>We fix your books if you're behind</p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing">
        <h2>Simple Pricing</h2>

        <div className="grid">
          <div className="price-card">
            <h3>Starter</h3>
            <p className="price">From R750</p>
            <p>Monthly Bookkeeping</p>
          </div>

          <div className="price-card highlight">
            <h3>Growth</h3>
            <p className="price">R1200 – R1800</p>
            <p>Bookkeeping + VAT</p>
          </div>

          <div className="price-card">
            <h3>Business</h3>
            <p className="price">From R2000</p>
            <p>Bookkeeping + VAT + Payroll</p>
          </div>
        </div>

        <p className="free">FREE consultation – No contracts</p>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <h2>What Clients Say</h2>
        <p>“Professional, fast, and reliable service.”</p>
        <p>“Helped us get compliant with SARS quickly.”</p>
      </section>

      {/* CONTACT */}
      <section className="contact">
        <h2>Get Started Today</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
          />

          <input
            name="business"
            placeholder="Business Name"
            onChange={handleChange}
          />

          <input
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="How can we help?"
            onChange={handleChange}
          />

          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to get your finances in order?</h2>
        <a href={WHATSAPP}>
          <button className="cta-btn">Chat on WhatsApp</button>
        </a>
      </section>

      {/* FLOATING WHATSAPP */}
      <a href={WHATSAPP} className="whatsapp">
        💬
      </a>
    </div>
  );
      }

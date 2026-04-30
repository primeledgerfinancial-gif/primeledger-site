import React, { useState } from "react";
import "./styles.css";

const WHATSAPP = "https://wa.me/27686350987";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `New Client Inquiry:
Name: ${form.name}
Business: ${form.business}
Phone: ${form.phone}
Message: ${form.message}`;

    window.open(`https://wa.me/27686350987?text=${encodeURIComponent(text)}`);
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
        <p>We help small businesses stay compliant and stress-free.</p>

        <a href={WHATSAPP}>
          <button className="primary">Get Free Consultation</button>
        </a>
      </section>

      {/* SERVICES */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="grid">
          <div className="card">Bookkeeping</div>
          <div className="card">VAT Submissions</div>
          <div className="card">Payroll</div>
          <div className="card">Catch-up Work</div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing">
        <h2>Pricing</h2>
        <div className="grid">
          <div className="price-card">
            <h3>Starter</h3>
            <p>From R750</p>
          </div>

          <div className="price-card highlight">
            <h3>Growth</h3>
            <p>R1200 – R1800</p>
          </div>

          <div className="price-card">
            <h3>Business</h3>
            <p>From R2000</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <h2>What Clients Say</h2>
        <p>“Professional and reliable service!”</p>
        <p>“Helped us get our books in order fast.”</p>
      </section>

      {/* CONTACT FORM */}
      <section className="contact">
        <h2>Get Started Today</h2>

        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Your Name" onChange={handleChange} required />
          <input name="business" placeholder="Business Name" onChange={handleChange} />
          <input name="phone" placeholder="Phone Number" onChange={handleChange} required />
          <textarea name="message" placeholder="How can we help?" onChange={handleChange}></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* WHATSAPP FLOAT */}
      <a href={WHATSAPP} className="whatsapp">💬</a>

    </div>
  );
}

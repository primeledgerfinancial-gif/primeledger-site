import React, { useState } from "react";
import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/27686350987";

const colors = {
  primary: "#0B3F3F",
  secondary: "#2E8B57",
  accent: "#D4AF37",
  bgLight: "#F5F5F5",
  white: "#FFFFFF",
  text: "#2B2B2B"
};

export default function PrimeLedgerWebsite() {
  const [currency, setCurrency] = useState("ZAR");

  const prices = {
    Starter: { USD: 120, GBP: 95, EUR: 110, ZAR: 2200 },
    Growth: { USD: 250, GBP: 200, EUR: 230, ZAR: 4500 },
  };

  const software = ["Xero", "QuickBooks", "Sage Pastel", "Excel", "GoodX"];

  return (
    <div className="min-h-screen font-sans" style={{ color: colors.text }}>

      {/* NAV */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src="https://raw.githubusercontent.com/primeledgerfinancial-gif/primeledger-site/main/image_0.png" className="h-12" />
            <span className="font-bold tracking-[0.2em] text-sm" style={{ color: colors.primary }}>
              PRIMELEDGER
            </span>
          </div>

          <a href={WHATSAPP_LINK}
            className="px-6 py-2 rounded-full text-white font-bold"
            style={{ backgroundColor: colors.primary }}>
            GET STARTED
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-24 px-6 text-center" style={{ backgroundColor: colors.bgLight }}>
        <motion.h1 className="text-4xl md:text-6xl font-black mb-6" style={{ color: colors.primary }}>
          Affordable Expert Bookkeeping <br />
          <span style={{ color: colors.secondary }}>for Businesses Worldwide 🌍</span>
        </motion.h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Certified remote bookkeeping that keeps your business organised, compliant, and stress-free — wherever you are.
        </p>

        {/* TRUST BADGES */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <span className="px-4 py-2 bg-white rounded-full text-xs font-bold border shadow-sm">✔ ICB Certified</span>
          <span className="px-4 py-2 bg-white rounded-full text-xs font-bold border shadow-sm">✔ IQB Qualified</span>
          <span className="px-4 py-2 bg-white rounded-full text-xs font-bold border shadow-sm">✔ Remote Global Service</span>
        </div>

        {/* MAIN CTA */}
        <a href={WHATSAPP_LINK}
          className="px-10 py-4 text-white rounded-xl font-bold shadow-lg"
          style={{ backgroundColor: colors.primary }}>
          Get My Free Financial Review
        </a>

        {/* 🔥 NEW CONVERSION LINE */}
        <p className="mt-4 text-sm text-gray-500 max-w-xl mx-auto">
          Get a free 10-minute review of your bookkeeping to identify errors, missing records, or money leaks in your business.
        </p>
      </section>

      {/* SOFTWARE */}
      <section className="py-12 text-center">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">
          Software & Systems We Work With
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {software.map((tool) => (
            <span key={tool} className="px-6 py-2 bg-gray-100 rounded-full font-semibold text-sm">
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: colors.primary }}>
          How We Help Your Business
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Monthly Bookkeeping",
            "Catch-up & Clean-up",
            "Financial Reports",
            "VAT & Tax Support",
            "Payroll Processing",
            "Remote Bookkeeping"
          ].map((s) => (
            <div key={s} className="p-8 bg-white border rounded-xl shadow-sm">
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-24 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6">Simple Monthly Packages</h2>

        {/* 🔥 NEW VALUE LINE */}
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          ⚡ Most businesses save more money than they spend by staying organised, compliant, and tax-ready.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[
            { name: "Starter", price: "$100 / R1800", desc: "Perfect for new businesses and startups" },
            { name: "Monthly", price: "$150 / R2500", desc: "Full monthly bookkeeping support" },
            { name: "Full Support", price: "$250 / R4500", desc: "Complete financial management" }
          ].map((p) => (
            <div key={p.name} className="bg-white p-8 rounded-xl shadow">
              <h3 className="font-bold text-lg mb-2">{p.name}</h3>
              <p className="text-2xl font-black mb-4" style={{ color: colors.primary }}>{p.price}</p>
              <p className="text-gray-600 mb-6">{p.desc}</p>
              <a href={WHATSAPP_LINK}
                className="block bg-green-600 text-white py-3 rounded-xl font-bold">
                Get Started
              </a>
            </div>
          ))}

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 text-center" style={{ backgroundColor: colors.bgLight }}>
        <h2 className="text-3xl font-bold mb-10">What Clients Say</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Saved me hours every month and fixed my books.",
            "Professional, fast and very reliable service.",
            "Now I finally understand my business finances."
          ].map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 text-center text-white" style={{ backgroundColor: colors.primary }}>
        <h2 className="text-3xl font-bold mb-6">
          Ready to get your finances under control?
        </h2>

        <p className="mb-8 text-white/80 max-w-xl mx-auto">
          Start with a free financial review and see exactly where your business stands.
        </p>

        <a href={WHATSAPP_LINK}
          className="px-10 py-4 bg-white rounded-xl font-black"
          style={{ color: colors.primary }}>
          Chat on WhatsApp Now
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-sm text-gray-500">
        primeledgerfinancial@gmail.com • +27 68 635 0987
      </footer>

    </div>
  );
}

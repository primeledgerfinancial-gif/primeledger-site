import React, { useState } from "react";
import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/27686350987";

const colors = {
  primary: "#0B3F3F",
  secondary: "#2E8B57",
  accent: "#D4AF37",
  bgLight: "#F5F5F5",
  text: "#2B2B2B"
};

export default function PrimeLedgerWebsite() {
  const [currency, setCurrency] = useState("ZAR");

  const prices = {
    Starter: { USD: 120, GBP: 95, EUR: 110, ZAR: 2200 },
    Growth: { USD: 250, GBP: 200, EUR: 230, ZAR: 4500 },
  };

  return (
    <div className="min-h-screen bg-white font-sans" style={{ color: colors.text }}>

      {/* Floating WhatsApp */}
      <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-full shadow-2xl z-50 font-bold hover:scale-105 transition-all">
        Chat Now
      </a>

      {/* HERO */}
      <section className="text-center pt-20 pb-24 px-6" style={{ backgroundColor: colors.bgLight }}>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
          style={{ color: colors.primary }}>
          
          Affordable Expert Bookkeeping for Businesses Worldwide 🌍
        </motion.h1>

        <p className="text-xl mb-6 max-w-2xl mx-auto text-gray-600">
          Save time, reduce stress, and stay financially organized — without the high cost of traditional accountants.
        </p>

        <p className="mb-6 font-semibold" style={{ color: colors.secondary }}>
          ✔ Certified (ICB & IQB) • ✔ Remote • ✔ Reliable
        </p>

        <a href={WHATSAPP_LINK}
          className="inline-block text-white px-10 py-4 rounded-xl font-bold shadow-lg"
          style={{ backgroundColor: colors.primary }}>
          Book Free Consultation
        </a>
      </section>

      {/* PAIN SECTION */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Struggling with your bookkeeping?</h2>

        <div className="text-lg space-y-3 text-gray-600">
          <p>❌ Falling behind on your records</p>
          <p>❌ Not sure if your numbers are accurate</p>
          <p>❌ Spending too much time on admin</p>
        </div>

        <p className="mt-6 font-semibold">
          👉 Let us take it off your hands so you can focus on growing your business.
        </p>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6" style={{ backgroundColor: colors.primary }}>
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-12">Our Services</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Monthly Bookkeeping",
              "Catch-up & Clean-up",
              "Financial Reports",
              "VAT & Tax Support",
              "Payroll",
              "Remote Bookkeeping"
            ].map((service) => (
              <div key={service} className="bg-white/10 p-6 rounded-xl">
                {service}
              </div>
            ))}
          </div>

          <a href={WHATSAPP_LINK}
            className="inline-block mt-10 px-8 py-3 bg-white text-black rounded-xl font-bold">
            Get Help Now
          </a>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Who We Help</h2>

        <p className="text-lg text-gray-600">
          Small business owners • Startups • Online businesses • Entrepreneurs
        </p>
      </section>

      {/* PRICING */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">Simple, Transparent Pricing</h2>

        <select value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="mb-8 p-3 rounded">
          <option value="ZAR">ZAR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {["Starter", "Growth"].map((plan) => (
            <div key={plan} className="border p-10 rounded-2xl shadow">
              <h3 className="text-xl font-bold mb-4">{plan}</h3>

              <p className="text-4xl font-bold mb-6">
                {currency === "ZAR" ? "R" : currency === "USD" ? "$" : currency === "GBP" ? "£" : "€"}
                {prices[plan][currency]}/month
              </p>

              <a href={WHATSAPP_LINK}
                className="block bg-green-600 text-white py-3 rounded-xl font-bold">
                Get Started
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Why Choose PrimeLedger?</h2>

        <div className="text-lg space-y-3 text-gray-600">
          <p>✔ Certified Bookkeeper (ICB & IQB)</p>
          <p>✔ Affordable international pricing</p>
          <p>✔ Fast & reliable communication</p>
          <p>✔ Personalized support</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6 text-center" style={{ backgroundColor: colors.bgLight }}>
        <h2 className="text-3xl font-bold mb-6">
          Ready to take control of your finances?
        </h2>

        <p className="mb-6 text-gray-600">
          Let us handle your bookkeeping so you can focus on growing your business.
        </p>

        <a href={WHATSAPP_LINK}
          className="px-10 py-4 rounded-xl text-white font-bold"
          style={{ backgroundColor: colors.primary }}>
          Chat on WhatsApp Now
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-sm text-gray-500">
        primeledgerfinancial@gmail.com • +27 68 635 0987
        <br />
        © {new Date().getFullYear()} PrimeLedger Financial
      </footer>

    </div>
  );
    }

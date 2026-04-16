import React, { useState } from "react";
import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/27686350987";

const colors = {
  primary: "#0B3F3F",
  secondary: "#2E8B57",
  accent: "#D4AF37",
  bgLight: "#F7F7F7",
  text: "#1F2937"
};

export default function PrimeLedgerWebsite() {
  const [currency, setCurrency] = useState("ZAR");

  const prices = {
    Starter: { USD: 120, GBP: 95, EUR: 110, ZAR: 2200 },
    Growth: { USD: 250, GBP: 200, EUR: 230, ZAR: 4500 },
  };

  return (
    <div className="min-h-screen font-sans" style={{ color: colors.text }}>

      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="https://raw.githubusercontent.com/primeledgerfinancial-gif/primeledger-site/main/image_0.png"
              alt="Logo"
              className="h-10"
            />
            <span className="font-bold text-sm tracking-widest">PRIMELEDGER</span>
          </div>

          <a href={WHATSAPP_LINK}
            className="px-5 py-2 rounded-lg text-white font-semibold"
            style={{ backgroundColor: colors.primary }}>
            Contact
          </a>
        </div>
      </div>

      {/* FLOATING BUTTON */}
      <a href={WHATSAPP_LINK}
        className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-full shadow-xl z-50 font-semibold hover:scale-105 transition">
        WhatsApp
      </a>

      {/* HERO */}
      <section className="pt-32 pb-24 px-6 text-center" style={{ backgroundColor: colors.bgLight }}>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          style={{ color: colors.primary }}>
          Premium Remote Bookkeeping for <br /> Small Businesses Worldwide 🌍
        </motion.h1>

        <p className="text-lg md:text-xl mb-6 text-gray-600 max-w-2xl mx-auto">
          Stay compliant, save time, and gain financial clarity — without the high cost.
        </p>

        <p className="mb-8 font-medium" style={{ color: colors.secondary }}>
          ✔ Certified (ICB & IQB) • ✔ Accurate • ✔ Reliable
        </p>

        <a href={WHATSAPP_LINK}
          className="inline-block px-10 py-4 rounded-xl text-white font-semibold shadow-lg"
          style={{ backgroundColor: colors.primary }}>
          Book Free Consultation
        </a>
      </section>

      {/* PAIN */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Behind on your bookkeeping?</h2>
        <p className="text-gray-600 text-lg mb-6">
          Many business owners struggle with messy records, wasted time, and financial uncertainty.
        </p>

        <div className="space-y-3 text-gray-500">
          <p>❌ Falling behind</p>
          <p>❌ Unsure about your numbers</p>
          <p>❌ Spending hours on admin</p>
        </div>

        <p className="mt-6 font-semibold">
          👉 We take it off your hands — so you can focus on growth.
        </p>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6" style={{ backgroundColor: colors.primary }}>
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-12">Services</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {["Monthly Bookkeeping","Cleanup & Catch-up","Reports","VAT Support","Payroll","Remote Services"].map((s) => (
              <div key={s} className="bg-white/10 p-6 rounded-xl">{s}</div>
            ))}
          </div>

          <a href={WHATSAPP_LINK}
            className="inline-block mt-10 px-8 py-3 bg-white text-black rounded-xl font-semibold">
            Get Started
          </a>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Pricing</h2>

        <select value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="mb-10 p-3 border rounded-lg">
          <option value="ZAR">ZAR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {["Starter","Growth"].map((plan) => (
            <div key={plan} className="border p-10 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{plan}</h3>
              <p className="text-4xl font-bold mb-6">
                {currency==="ZAR"?"R":currency==="USD"?"$":currency==="GBP"?"£":"€"}
                {prices[plan][currency]}/mo
              </p>
              <a href={WHATSAPP_LINK}
                className="block bg-green-600 text-white py-3 rounded-xl font-semibold">
                Start Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
        <div className="space-y-3 text-gray-600">
          <p>✔ Certified Bookkeeper</p>
          <p>✔ Affordable global pricing</p>
          <p>✔ Fast communication</p>
          <p>✔ Reliable & accurate</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center" style={{ backgroundColor: colors.bgLight }}>
        <h2 className="text-3xl font-bold mb-6">
          Ready to simplify your finances?
        </h2>

        <a href={WHATSAPP_LINK}
          className="px-10 py-4 rounded-xl text-white font-semibold"
          style={{ backgroundColor: colors.primary }}>
          Chat on WhatsApp
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

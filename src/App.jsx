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
      <div className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="https://raw.githubusercontent.com/primeledgerfinancial-gif/primeledger-site/main/image_0.png" className="h-10" />
            <span className="font-bold tracking-widest">PRIMELEDGER</span>
          </div>
          <a href={WHATSAPP_LINK} className="px-5 py-2 rounded-lg text-white font-semibold" style={{ backgroundColor: colors.primary }}>
            Contact
          </a>
        </div>
      </div>

      {/* FLOATING BUTTON */}
      <a href={WHATSAPP_LINK} className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-full shadow-xl z-50">
        WhatsApp
      </a>

      {/* HERO */}
      <section className="pt-32 pb-24 px-6 text-center" style={{ backgroundColor: colors.bgLight }}>
        <motion.h1 className="text-5xl font-bold mb-6" style={{ color: colors.primary }}>
          Affordable Expert Bookkeeping for Businesses Worldwide 🌍
        </motion.h1>

        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          Save time, reduce stress, and stay financially organized with reliable, remote bookkeeping.
        </p>

        <p className="mb-8 text-sm font-semibold" style={{ color: colors.secondary }}>
          ✔ Certified (ICB & IQB) • ✔ Accurate • ✔ Reliable
        </p>

        <a href={WHATSAPP_LINK} className="px-10 py-4 rounded-xl text-white font-semibold" style={{ backgroundColor: colors.primary }}>
          Book Free Consultation
        </a>
      </section>

      {/* PAIN */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Struggling with your bookkeeping?</h2>
        <p className="text-gray-600 mb-6">You’re not alone.</p>
        <div className="space-y-2 text-gray-500">
          <p>❌ Behind on records</p>
          <p>❌ Unsure about finances</p>
          <p>❌ Wasting time on admin</p>
        </div>
        <p className="mt-6 font-semibold">👉 We handle it for you.</p>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 text-center" style={{ backgroundColor: colors.primary }}>
        <h2 className="text-3xl text-white font-bold mb-12">Services</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-white">
          {["Monthly Bookkeeping","Cleanup","Reports","VAT","Payroll","Remote Support"].map(s => (
            <div key={s} className="bg-white/10 p-6 rounded-xl">{s}</div>
          ))}
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-24 px-6 bg-white">
        <h2 className="text-3xl text-center font-bold mb-12">Packages</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Starter", price: "$100", desc: "Basic bookkeeping for startups" },
            { name: "Monthly", price: "$150", desc: "Full monthly bookkeeping support" },
            { name: "Full Support", price: "$250", desc: "Complete financial management" }
          ].map(p => (
            <div key={p.name} className="border p-8 rounded-2xl shadow text-center">
              <h3 className="text-xl font-bold mb-2">{p.name}</h3>
              <p className="text-3xl mb-4">{p.price}</p>
              <p className="text-gray-600 mb-6">{p.desc}</p>
              <a href={WHATSAPP_LINK} className="block bg-green-600 text-white py-3 rounded-xl">
                Get Started
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 text-center" style={{ backgroundColor: colors.bgLight }}>
        <h2 className="text-3xl font-bold mb-12">What Clients Say</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Saved me hours every month!",
            "Professional and reliable service.",
            "Highly recommend for small businesses."
          ].map((t,i)=>(
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
        <a href={WHATSAPP_LINK} className="px-10 py-4 bg-green-600 text-white rounded-xl">
          Chat on WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-gray-500">
        primeledgerfinancial@gmail.com • +27 68 635 0987
      </footer>

    </div>
  );
}

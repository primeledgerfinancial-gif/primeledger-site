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
        <div className="max

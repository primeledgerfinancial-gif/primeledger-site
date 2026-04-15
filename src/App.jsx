import React, { useState } from "react";
import { motion } from "framer-motion";

// Simple Icon Components to replace Lucide-React
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
);

const WHATSAPP_LINK = "https://wa.me/27686350987";

// Define the PrimeLedger Brand Teal color in Tailwind format
const brandColor = "#28626A";

export default function PrimeLedgerWebsite() {
  const [currency, setCurrency] = useState("USD");

  const prices = {
    Starter: { USD: 120, GBP: 95, EUR: 110 },
    Growth: { USD: 250, GBP: 200, EUR: 230 },
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      
      {/* PROFESSIONAL NAVBAR with LOGO */}
      <nav className="bg-white border-b border-gray-100 py-4 px-6 fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-center items-center">
          <img 
            src="https://raw.githubusercontent.com/primeledgerfinancial-gif/primeledger-site/main/image_0.png" 
            alt="PrimeLedger Financial Logo" 
            className="h-32 w-auto mx-auto mb-4" 
            
          />     
        </div>
      </nav>

      {/* Floating WhatsApp */}
      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-full shadow-2xl z-50 font-bold hover:bg-green-600 transition-all"
      >
        Chat on WhatsApp
      </a>

      {/* Hero with BACKGROUND PATTERN */}
      <section className="text-center pt-48 pb-24 px-6 bg-white border-b border-gray-100 relative overflow-hidden" style={{
        backgroundImage: 'linear-gradient(rgba(40, 98, 106, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(40, 98, 106, 0.03) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900 tracking-tight"
        >
          PrimeLedger Financial
        </motion.h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
          Premium Certified Bookkeeping Services for Small Businesses Worldwide 🌍
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a href={WHATSAPP_LINK} className="text-white rounded-xl text-lg px-8 py-4 font-semibold transition" style={{ backgroundColor: brandColor }}>
            Book Free Consultation
          </a>
          <a href={WHATSAPP_LINK} className="border-2 text-gray-900 rounded-xl text-lg px-8 py-4 font-semibold hover:bg-gray-50 transition" style={{ borderColor: brandColor, color: brandColor }}>
            Global Pricing
          </a>
        </div>
      </section>

      {/* Currency Switcher (ACCENTED) */}
      <div className="flex justify-center items-center gap-3 mt-10">
        <span className="text-sm font-medium uppercase tracking-wide" style={{ color: brandColor }}>Select Currency:</span>
        <select 
          value={currency} 
          onChange={(e) => setCurrency(e.target.value)} 
          className="p-3 bg-white border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-opacity-50 outline-none cursor-pointer" style={{
            focusColor: brandColor
          }}
        >
          <option value="USD">USD ($)</option>
          <option value="GBP">GBP (£)</option>
          <option value="EUR">EUR (€)</option>
        </select>
      </div>

      {/* Services */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Expert Solutions</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["Monthly Bookkeeping", "Catch-Up & Clean-Up", "Financial Reports"].map((title, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="font-bold text-xl mb-3" style={{ color: brandColor }}>{title}</h3>
              <p className="text-gray-600 leading-relaxed">Professional, ICB-standard service tailored to your specific business needs.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing with COLORED PLAN CARDS */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Simple International Plans</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {["Starter", "Growth"].map((plan, i) => (
            <div key={i} className="bg-gray-50 border border-gray-200 rounded-3xl p-10 text-center hover:border-blue-900 transition-colors">
              <h3 className="text-2xl font-bold mb-4">{plan}</h3>
              <p className="text-4xl font-black mb-6" style={{ color: brandColor }}>
                {currency === "USD" && "$"}
                {currency === "GBP" && "£"}
                {currency === "EUR" && "€"}
                {prices[plan][currency]}<span className="text-lg font-normal text-gray-500">/mo</span>
              </p>
              <a href={WHATSAPP_LINK} className="block w-full text-white rounded-xl px-6 py-3 font-bold transition" style={{ backgroundColor: brandColor }}>
                Get Started
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24 px-6 text-center text-white" style={{ backgroundColor: brandColor }}>
        <h2 className="text-4xl font-bold mb-4">Ready to Scale?</h2>
        <p className="mb-10 text-white text-opacity-80 text-lg">Schedule a quick call to discuss your international bookkeeping needs.</p>
        <a href={WHATSAPP_LINK} className="inline-flex items-center gap-2 bg-white rounded-full px-10 py-4 text-xl font-bold hover:bg-gray-100 transition" style={{ color: brandColor }}>
          <CalendarIcon /> Book Now
        </a>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-gray-400">Contact</h2>
        <p className="text-xl font-medium mb-2">primeledgerfinancial@gmail.com</p>
        <p className="text-xl font-medium">📱 +27 68 635 0987</p>
      </section>

      <footer className="text-center py-10 bg-white border-t border-gray-100 text-gray-400 text-sm">
        © {new Date().getFullYear()} PrimeLedger Financial | Certified Bookkeeping
      </footer>
    </div>
  );
}

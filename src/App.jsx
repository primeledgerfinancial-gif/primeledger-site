import React, { useState } from "react";
import { motion } from "framer-motion";

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
);

const WHATSAPP_LINK = "https://wa.me/27686350987";
const brandColor = "#28626A";

export default function PrimeLedgerWebsite() {
  const [currency, setCurrency] = useState("USD");

  const prices = {
    Starter: { USD: 120, GBP: 95, EUR: 110, ZAR: 2200 },
    Growth: { USD: 250, GBP: 200, EUR: 230, ZAR: 4500 },
  };

  const partners = ["QuickBooks", "Xero", "Sage Pastel", "Excel", "GoodX", "ICB Certified", "IQB Qualified"];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      
      {/* Floating WhatsApp */}
      <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-full shadow-2xl z-50 font-bold hover:bg-green-600 transition-all">
        Chat on WhatsApp
      </a>

      {/* Hero Section */}
      <section className="text-center pt-20 pb-20 px-6 bg-white border-b border-gray-100 relative overflow-hidden" style={{
        backgroundImage: 'linear-gradient(rgba(40, 98, 106, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(40, 98, 106, 0.03) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}>
        <div className="max-w-4xl mx-auto">
          <img 
            src="https://raw.githubusercontent.com/primeledgerfinancial-gif/primeledger-site/main/image_0.png" 
            alt="PrimeLedger Financial Logo" 
            className="h-32 w-auto mx-auto mb-6" 
          />
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-900 tracking-tight">
            Global Financial Clarity
          </motion.h1>
          <p className="text-xl mb-8 text-gray-600">
            Certified Bookkeeping Services for Small Businesses & Medical Practices.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href={WHATSAPP_LINK} className="text-white rounded-xl text-lg px-8 py-4 font-semibold transition" style={{ backgroundColor: brandColor }}>
              Book Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Expertise in World-Class Systems</p>
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-80 grayscale hover:grayscale-0 transition-all">
             {partners.map((item) => (
               <span key={item} className="text-sm md:text-base font-bold text-gray-600 border border-gray-200 px-4 py-2 rounded-lg bg-white shadow-sm">
                 {item}
               </span>
             ))}
          </div>
        </div>
      </section>

      {/* Currency Switcher (Updated for ZAR) */}
      <div className="flex flex-col items-center gap-3 mt-12 px-6">
        <span className="text-sm font-bold uppercase tracking-widest" style={{ color: brandColor }}>Select Billing Currency:</span>
        <select 
          value={currency} 
          onChange={(e) => setCurrency(e.target.value)} 
          className="p-3 bg-white border-2 border-gray-200 rounded-xl shadow-sm focus:ring-2 outline-none cursor-pointer text-lg font-semibold"
          style={{ borderColor: brandColor }}
        >
          <option value="ZAR">ZAR (R) - South Africa</option>
          <option value="USD">USD ($) - International</option>
          <option value="GBP">GBP (£) - United Kingdom</option>
          <option value="EUR">EUR (€) - Europe</option>
        </select>
      </div>

      {/* Pricing Section */}
      <section className="py-16 px-6 bg-white mt-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 underline decoration-teal-500 decoration-4 underline-offset-8">Our Packages</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {["Starter", "Growth"].map((plan, i) => (
            <div key={i} className="bg-gray-50 border border-gray-200 rounded-3xl p-10 text-center hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">{plan}</h3>
              <p className="text-5xl font-black mb-6" style={{ color: brandColor }}>
                {currency === "ZAR" && "R"}
                {currency === "USD" && "$"}
                {currency === "GBP" && "£"}
                {currency === "EUR" && "€"}
                {prices[plan][currency]}<span className="text-lg font-normal text-gray-500">/mo</span>
              </p>
              <ul className="text-left mb-8 space-y-3 text-gray-600 font-medium">
                <li className="flex items-center gap-2">✓ Monthly Reconciliations</li>
                <li className="flex items-center gap-2">✓ Financial Reporting</li>
                <li className="flex items-center gap-2">✓ Software Support</li>
              </ul>
              <a href={WHATSAPP_LINK} className="block w-full text-white rounded-xl px-6 py-4 font-bold transition shadow-md" style={{ backgroundColor: brandColor }}>
                Select {plan} Plan
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center text-white" style={{ backgroundColor: brandColor }}>
        <h2 className="text-4xl font-bold mb-4 italic">PrimeLedger Financial</h2>
        <p className="mb-10 text-white text-opacity-90 text-xl font-light">From Port Shepstone to the World. Let's get your books in order.</p>
        <a href={WHATSAPP_LINK} className="inline-flex items-center gap-2 bg-white rounded-full px-10 py-4 text-xl font-bold hover:bg-gray-100 transition shadow-lg" style={{ color: brandColor }}>
          <CalendarIcon /> Get Started
        </a>
      </section>

      <footer className="text-center py-10 bg-white border-t border-gray-100 text-gray-400 text-sm">
        © {new Date().getFullYear()} PrimeLedger Financial | ICB & IQB Certified Professional Bookkeeper
      </footer>
    </div>
  );
}

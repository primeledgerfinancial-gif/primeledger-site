import React, { useState } from "react";
import { motion } from "framer-motion";

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
);

const WHATSAPP_LINK = "https://wa.me/27686350987";
const brandColor = "#28626A";

export default function PrimeLedgerWebsite() {
  const [currency, setCurrency] = useState("ZAR");

  const prices = {
    Starter: { USD: 120, GBP: 95, EUR: 110, ZAR: 2200 },
    Growth: { USD: 250, GBP: 200, EUR: 230, ZAR: 4500 },
  };

  const software = [
    { name: "QuickBooks", color: "#2CA01C" },
    { name: "Xero", color: "#13B5EA" },
    { name: "Sage Pastel", color: "#00BA4A" },
    { name: "Excel", color: "#217346" },
    { name: "GoodX", color: "#005696" }
  ];

  const services = [
    "Monthly Bookkeeping & Accounting",
    "Clean-up & Catch-up Projects",
    "Medical Suite Financial Management",
    "VAT, PAYE & Tax Submissions",
    "Management Accounts & Reporting",
    "Payroll Processing"
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans scroll-smooth">
      
      {/* Floating WhatsApp */}
      <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-full shadow-2xl z-50 font-bold hover:bg-green-600 transition-all flex items-center gap-2">
        <span>Chat with Monique</span>
      </a>

      {/* Hero Section */}
      <section className="text-center pt-16 pb-20 px-6 bg-gray-50 border-b border-gray-100 relative" style={{
        backgroundImage: 'linear-gradient(rgba(40, 98, 106, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(40, 98, 106, 0.04) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}>
        <div className="max-w-4xl mx-auto">
          <img 
            src="https://raw.githubusercontent.com/primeledgerfinancial-gif/primeledger-site/main/image_0.png" 
            alt="PrimeLedger Financial Logo" 
            className="h-32 w-auto mx-auto mb-6" 
          />
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-900 tracking-tight">
            Professional Financial Solutions
          </h1>
          <p className="text-xl mb-8 text-gray-600 font-light">
            Certified Bookkeeping and Business Support based in Port Shepstone, serving clients globally.
          </p>
        </div>
      </section>

      {/* SOFTWARE BADGES (The "Logos") */}
      <section className="py-10 bg-white shadow-inner">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Preferred Software Expert</p>
          <div className="flex flex-wrap justify-center items-center gap-4">
             {software.map((item) => (
               <span key={item.name} className="px-5 py-2 rounded-full border-2 font-bold text-sm shadow-sm transition hover:scale-105" style={{ borderColor: item.color, color: item.color }}>
                 {item.name}
               </span>
             ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6" style={{ color: brandColor }}>About PrimeLedger</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Founded by <strong>Monique</strong>, PrimeLedger Financial was born out of a passion for helping business owners regain control of their time and their numbers.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With <strong>ICB and IQB qualifications</strong>, I provide more than just data entry. I offer strategic bookkeeping that helps you understand where your money is going, ensuring your business is healthy, compliant, and ready to grow.
          </p>
        </div>
        <div className="bg-gray-100 p-8 rounded-3xl border-l-8" style={{ borderColor: brandColor }}>
          <h3 className="text-xl font-bold mb-4 italic">"My mission is to take the stress out of your month-end, so you can focus on what you do best—running your business."</h3>
          <p className="font-bold">— Monique, Founder</p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-gray-900 text-white px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Comprehensive Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-teal-500 transition">
                <p className="text-lg font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING & CURRENCY */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: brandColor }}>Transparent Monthly Plans</h2>
          <div className="flex justify-center items-center gap-3 mb-10 mt-6">
            <span className="text-sm font-bold text-gray-400">Currency:</span>
            <select 
              value={currency} 
              onChange={(e) => setCurrency(e.target.value)} 
              className="p-2 border-2 rounded-lg font-bold outline-none"
              style={{ borderColor: brandColor }}
            >
              <option value="ZAR">ZAR (R)</option>
              <option value="USD">USD ($)</option>
              <option value="GBP">GBP (£)</option>
              <option value="EUR">EUR (€)</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {["Starter", "Growth"].map((plan) => (
              <div key={plan} className="border-2 rounded-3xl p-10 hover:shadow-2xl transition" style={{ borderColor: '#eee' }}>
                <h3 className="text-2xl font-bold mb-4">{plan}</h3>
                <p className="text-5xl font-black mb-8" style={{ color: brandColor }}>
                  {currency === "ZAR" ? "R" : (currency === "USD" ? "$" : (currency === "GBP" ? "£" : "€"))}
                  {prices[plan][currency]}<span className="text-sm font-normal text-gray-400">/mo</span>
                </p>
                <a href={WHATSAPP_LINK} className="block w-full py-4 rounded-xl text-white font-bold transition" style={{ backgroundColor: brandColor }}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12" style={{ color: brandColor }}>Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h4 className="font-bold mb-2">Direct Contact</h4>
              <p className="text-gray-600 mb-1">primeledgerfinancial@gmail.com</p>
              <p className="text-gray-600">+27 68 635 0987</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h4 className="font-bold mb-2">Location</h4>
              <p className="text-gray-600">Port Shepstone</p>
              <p className="text-gray-600">KwaZulu-Natal, South Africa</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-gray-400 text-sm border-t">
        © {new Date().getFullYear()} PrimeLedger Financial | Professional Bookkeeper
      </footer>
    </div>
  );
}

import React, { useState } from "react";
import { motion } from "framer-motion";

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
);

const WHATSAPP_LINK = "https://wa.me/27686350987";

// YOUR OFFICIAL BRAND PALETTE
const colors = {
  primary: "#0B3F3F",    // Deep Teal
  secondary: "#2E8B57",  // Emerald Green
  accent: "#D4AF37",     // Premium Gold
  bgLight: "#F5F5F5",    // Light Grey
  text: "#2B2B2B"        // Dark Charcoal
};

export default function PrimeLedgerWebsite() {
  const [currency, setCurrency] = useState("ZAR");

  const prices = {
    Starter: { USD: 120, GBP: 95, EUR: 110, ZAR: 2200 },
    Growth: { USD: 250, GBP: 200, EUR: 230, ZAR: 4500 },
  };

  const software = ["QuickBooks", "Xero", "Sage Pastel", "Excel", "GoodX"];

  return (
    <div className="min-h-screen bg-white font-sans scroll-smooth" style={{ color: colors.text }}>
      
      {/* Floating WhatsApp */}
      <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-full shadow-2xl z-50 font-bold hover:scale-105 transition-all flex items-center gap-2">
        <span>Connect on WhatsApp</span>
      </a>

      {/* Hero Section */}
      <section className="text-center pt-20 pb-24 px-6 relative border-b border-gray-100" style={{ backgroundColor: colors.bgLight }}>
        <div className="max-w-4xl mx-auto">
          <img 
            src="https://raw.githubusercontent.com/primeledgerfinancial-gif/primeledger-site/main/image_0.png" 
            alt="PrimeLedger Financial Logo" 
            className="h-32 w-auto mx-auto mb-8 drop-shadow-md" 
          />
          <motion.h1 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight" 
            style={{ color: colors.primary }}
          >
            Elite Remote <span style={{ color: colors.secondary }}>Bookkeeping</span>
          </motion.h1>
          <p className="text-xl mb-10 text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Certified financial support for global businesses and medical practices. <br/>
            <span className="font-semibold" style={{ color: colors.primary }}>Based in South Africa. Serving the World.</span>
          </p>
          <a href={WHATSAPP_LINK} className="inline-block text-white rounded-xl text-lg px-10 py-4 font-bold transition-all shadow-lg hover:brightness-110" style={{ backgroundColor: colors.primary }}>
            Book Free Consultation
          </a>
        </div>
      </section>

      {/* Expertise Bar */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-xs font-bold uppercase tracking-[0.3em] mb-8" style={{ color: colors.accent }}>Software Proficiency</p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
             {software.map((name) => (
               <span key={name} className="px-6 py-2 rounded-md border-l-4 font-bold text-sm bg-gray-50 shadow-sm" style={{ borderLeftColor: colors.secondary }}>
                 {name}
               </span>
             ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="bg-gray-50 p-10 rounded-2xl border-t-8 shadow-sm" style={{ borderColor: colors.primary }}>
          <h2 className="text-3xl font-bold mb-6" style={{ color: colors.primary }}>Precision in Every Entry</h2>
          <p className="text-lg leading-relaxed mb-6">
            PrimeLedger Financial, led by <strong>Monique</strong>, provides certified expertise (ICB & IQB) tailored for the modern, remote-first business landscape.
          </p>
          <p className="text-lg leading-relaxed">
            We specialize in bridging the gap between complex data and clear, actionable financial insights—ensuring your practice or business is always compliant and ready for growth.
          </p>
        </div>
        <div className="border-l-4 p-10" style={{ borderColor: colors.accent }}>
          <h3 className="text-2xl italic font-serif mb-6" style={{ color: colors.text }}>
            "Financial clarity is the foundation of every successful business. Our job is to build that foundation for you, remotely and reliably."
          </h3>
          <p className="font-bold uppercase tracking-widest" style={{ color: colors.secondary }}>— Monique, Founder</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6" style={{ backgroundColor: colors.primary }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16 text-white tracking-wide">Our Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Monthly Bookkeeping", "Medical Suite Management", "VAT & Tax Submissions", 
              "Clean-up Projects", "Management Accounts", "Payroll Processing"
            ].map((service) => (
              <div key={service} className="p-8 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-left group">
                <div className="w-8 h-1 mb-4 rounded-full transition-all group-hover:w-full" style={{ backgroundColor: colors.accent }}></div>
                <p className="text-lg font-semibold text-white">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Currency */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12" style={{ color: colors.primary }}>Remote Monthly Retainers</h2>
          
          <div className="inline-flex items-center gap-4 p-2 rounded-2xl mb-12" style={{ backgroundColor: colors.bgLight }}>
            <span className="pl-4 text-xs font-bold uppercase tracking-widest text-gray-400">Currency</span>
            <select 
              value={currency} 
              onChange={(e) => setCurrency(e.target.value)} 
              className="p-3 rounded-xl font-bold outline-none bg-white shadow-sm cursor-pointer"
              style={{ color: colors.primary }}
            >
              <option value="ZAR">ZAR (R)</option>
              <option value="USD">USD ($)</option>
              <option value="GBP">GBP (£)</option>
              <option value="EUR">EUR (€)</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {["Starter", "Growth"].map((plan) => (
              <div key={plan} className="border-2 rounded-[2.5rem] p-12 hover:shadow-2xl transition-all relative overflow-hidden group" style={{ borderColor: colors.bgLight }}>
                <h3 className="text-lg font-bold mb-4 uppercase tracking-[0.2em] text-gray-400">{plan}</h3>
                <p className="text-6xl font-black mb-10" style={{ color: colors.primary }}>
                  {currency === "ZAR" ? "R" : (currency === "USD" ? "$" : (currency === "GBP" ? "£" : "€"))}
                  {prices[plan][currency]}
                </p>
                <a href={WHATSAPP_LINK} className="block w-full py-4 rounded-xl text-white font-bold transition-all shadow-lg" style={{ backgroundColor: colors.secondary }}>
                  Inquire Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="py-20 px-6 border-t border-gray-100" style={{ backgroundColor: colors.bgLight }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest" style={{ color: colors.primary }}>Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12 font-medium">
            <p>primeledgerfinancial@gmail.com</p>
            <p>+27 68 635 0987</p>
            <p>South Africa (GMT+2)</p>
          </div>
          <div className="w-16 h-1 mx-auto mb-8" style={{ backgroundColor: colors.accent }}></div>
          <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
            © {new Date().getFullYear()} PrimeLedger Financial | ICB & IQB Certified
          </p>
        </div>
      </footer>
    </div>
  );
}

import React, { useState } from "react";
import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/27686350987";

// YOUR PREMIUM BRAND PALETTE
const colors = {
  primary: "#0B3F3F",    // Deep Teal
  secondary: "#2E8B57",  // Emerald Green
  accent: "#D4AF37",     // Gold
  bgLight: "#F5F5F5",    // Light Grey
  white: "#FFFFFF",
  text: "#2B2B2B"        // Dark Charcoal
};

export default function PrimeLedgerWebsite() {
  const [currency, setCurrency] = useState("ZAR");

  const prices = {
    Starter: { USD: 120, GBP: 95, EUR: 110, ZAR: 2200 },
    Growth: { USD: 250, GBP: 200, EUR: 230, ZAR: 4500 },
  };

  return (
    <div className="min-h-screen font-sans antialiased" style={{ color: colors.text, backgroundColor: colors.white }}>

      {/* NAVIGATION BAR */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img 
              src="https://raw.githubusercontent.com/primeledgerfinancial-gif/primeledger-site/main/image_0.png" 
              alt="Logo" 
              className="h-12 w-auto" 
            />
            <span className="font-bold tracking-[0.2em] text-sm hidden sm:block" style={{ color: colors.primary }}>PRIMELEDGER</span>
          </div>
          <a href={WHATSAPP_LINK} className="px-6 py-2 rounded-full text-white text-sm font-bold transition hover:opacity-90" style={{ backgroundColor: colors.primary }}>
            GET STARTED
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-40 pb-24 px-6 text-center" style={{ backgroundColor: colors.bgLight }}>
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight" style={{ color: colors.primary }}>
              Financial Clarity <br/> <span style={{ color: colors.secondary }}>Without the Stress.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Certified remote bookkeeping for small businesses and medical practices. Based in South Africa, serving clients globally.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <span className="px-4 py-2 bg-white rounded-full text-xs font-bold border shadow-sm" style={{ color: colors.primary, borderColor: colors.accent }}>✓ ICB CERTIFIED</span>
              <span className="px-4 py-2 bg-white rounded-full text-xs font-bold border shadow-sm" style={{ color: colors.primary, borderColor: colors.accent }}>✓ IQB QUALIFIED</span>
              <span className="px-4 py-2 bg-white rounded-full text-xs font-bold border shadow-sm" style={{ color: colors.primary, borderColor: colors.accent }}>✓ REMOTE EXPERT</span>
            </div>
            <a href={WHATSAPP_LINK} className="inline-block px-12 py-5 rounded-2xl text-white font-bold text-lg shadow-xl hover:scale-105 transition-transform" style={{ backgroundColor: colors.primary }}>
              Book Free Consultation
            </a>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: colors.primary }}>How We Help</h2>
            <div className="w-20 h-1 mx-auto" style={{ backgroundColor: colors.accent }}></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Monthly Bookkeeping", desc: "Keep your records up-to-date and ready for tax season." },
              { title: "Medical Support", desc: "Specialized financial management for medical suites and practitioners." },
              { title: "Clean-up Projects", desc: "We fix the backlog and get your messy books back in order." },
              { title: "Financial Reports", desc: "Clear, monthly reports so you know exactly where your money is." },
              { title: "VAT & Tax", desc: "Stay compliant with regular submissions and reliable record keeping." },
              { title: "Global Payroll", desc: "Accurate payroll processing for teams of all sizes." }
            ].map((s, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-bold mb-3" style={{ color: colors.secondary }}>{s.title}</h3>
                <p className="text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Simple, Scalable Packages</h2>
          
          {/* CURRENCY SELECTOR */}
          <div className="mb-12 inline-flex items-center bg-white p-2 rounded-2xl border shadow-sm">
            <span className="px-4 text-xs font-bold text-gray-400 uppercase">Select Currency</span>
            <select 
              value={currency} 
              onChange={(e) => setCurrency(e.target.value)} 
              className="p-3 bg-white font-bold outline-none cursor-pointer"
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
              <div key={plan} className="bg-white border-2 rounded-[2.5rem] p-12 hover:border-teal-900 transition-all shadow-sm">
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-4">{plan} Plan</h3>
                <p className="text-6xl font-black mb-8" style={{ color: colors.primary }}>
                  {currency === "ZAR" ? "R" : (currency === "USD" ? "$" : (currency === "GBP" ? "£" : "€"))}
                  {prices[plan][currency]}
                </p>
                <ul className="text-left space-y-4 mb-10 text-gray-600">
                  <li className="flex items-center gap-2 font-medium">✓ Monthly Reconciliations</li>
                  <li className="flex items-center gap-2 font-medium">✓ Management Accounts</li>
                  <li className="flex items-center gap-2 font-medium">✓ Software Support</li>
                </ul>
                <a href={WHATSAPP_LINK} className="block py-4 rounded-xl text-white font-bold transition shadow-lg hover:brightness-110" style={{ backgroundColor: colors.secondary }}>
                  Inquire Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-24 px-6 text-center text-white" style={{ backgroundColor: colors.primary }}>
        <h2 className="text-4xl font-bold mb-6">Ready to Scale Your Business?</h2>
        <p className="text-xl mb-10 opacity-80 max-w-xl mx-auto">Take the first step toward financial freedom. Let's chat about your needs.</p>
        <a href={WHATSAPP_LINK} className="inline-block px-12 py-5 bg-white rounded-2xl font-black text-lg transition hover:scale-105" style={{ color: colors.primary }}>
          CHAT ON WHATSAPP
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-16 text-center border-t border-gray-100 bg-white">
        <img 
          src="https://raw.githubusercontent.com/primeledgerfinancial-gif/primeledger-site/main/image_0.png" 
          alt="Logo" 
          className="h-12 mx-auto mb-6 grayscale opacity-50" 
        />
        <div className="space-y-2 mb-8 font-medium">
          <p>primeledgerfinancial@gmail.com</p>
          <p>+27 68 635 0987</p>
          <p className="text-xs text-gray-400 mt-4 uppercase tracking-widest">South Africa • Remote Globally</p>
        </div>
        <p className="text-[10px] text-gray-300 uppercase tracking-[0.5em]">
          © {new Date().getFullYear()} PrimeLedger Financial
        </p>
      </footer>

      {/* FLOATING WHATSAPP BUTTON (MOBILE) */}
      <a 
        href={WHATSAPP_LINK} 
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform md:px-8 md:py-4 md:rounded-2xl flex items-center gap-2"
      >
        <span className="font-bold text-sm">WHATSAPP</span>
      </a>

    </div>
  );
}

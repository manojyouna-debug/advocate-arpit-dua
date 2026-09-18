import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Scale } from 'lucide-react';
import { ADVOCATE_CONFIG } from '../data/advocateData';
import { GoldSealLogo } from './GoldSealLogo';
import { ThemeSwitcher } from './ThemeSwitcher';

interface HeaderProps {
  onConsultClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onConsultClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Practice Areas', href: '#practice-areas' },
    { label: 'How We Help', href: '#how-we-help' },
    { label: 'Our Approach', href: '#approach' },
    { label: 'High Court', href: '#high-court' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Articles', href: '#articles' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Professional Utility Bar */}
      <div className="bg-[#070c1b] text-white text-xs border-b border-slate-800 px-4 py-2 hidden md:block shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-white font-medium">
              <Scale className="w-3.5 h-3.5 text-[#e2c882]" />
              <span>Litigation Counsel • Punjab &amp; Haryana High Court &amp; District Courts</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-white font-medium">
              Office: <strong className="text-[#e2c882] font-semibold">Sector 43-B, Chandigarh</strong>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-amber-200 font-semibold tracking-wide">
              Service Areas: Chandigarh • Mohali • Panchkula • Yamunanagar
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={ADVOCATE_CONFIG.telUrl}
              className="text-white hover:text-[#b47a34] transition-colors flex items-center gap-1.5 font-bold"
            >
              <Phone className="w-3.5 h-3.5 text-[#e2c882]" />
              <span>{ADVOCATE_CONFIG.phoneDisplay}</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-white font-medium flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
              24 × 7 Legal Assistance
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0b132b]/95 backdrop-blur-md shadow-xl border-b border-[#c5a059]/20 py-2.5'
            : 'bg-[#0b132b]/90 backdrop-blur-sm border-b border-slate-800/60 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Identity */}
          <a
            href="#"
            className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#c5a059] rounded-lg p-1"
            aria-label="Advocate Arpit Dua Home"
          >
            <GoldSealLogo size={46} showText={true} />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm font-sans font-medium text-white hover:text-[#b47a34] transition-colors rounded-md hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Header Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop Theme Switcher */}
            <div className="hidden sm:block">
              <ThemeSwitcher variant="compact" />
            </div>

            <a
              href={ADVOCATE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10 text-xs font-semibold tracking-wide transition-all"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onConsultClick}
              id="header-consult-btn"
              className="inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-[#d4af37] hover:bg-[#e2c882] text-[#070c1b] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-[0_0_20px_rgba(212,175,55,0.45)] border border-[#ffe082]/60 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2 focus:ring-offset-[#0b132b]"
            >
              Consult Now
            </button>
          </div>

          {/* Mobile Action Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
            {/* Mobile Icon Theme Switcher */}
            <div className="sm:hidden">
              <ThemeSwitcher variant="icon-only" />
            </div>

            <a
              href={ADVOCATE_CONFIG.telUrl}
              className="p-2 rounded-lg bg-[#c5a059]/10 text-[#c5a059] border border-[#c5a059]/30"
              aria-label="Call Advocate Arpit Dua"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none focus:ring-2 focus:ring-[#c5a059]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#070c1b] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="grid grid-cols-2 gap-2 pt-2 border-b border-slate-800/80 pb-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-sm text-white hover:text-[#b47a34] active:text-[#b47a34] hover:bg-slate-900/80 rounded-md font-semibold tracking-wide transition-colors duration-150"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              {/* Mobile Theme Toggle */}
              <ThemeSwitcher variant="full" />

              <div className="text-xs text-slate-200 text-center font-medium">
                Office: <span className="text-white font-semibold">Sector 43-B, Chandigarh</span> • High Court Litigation
              </div>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={ADVOCATE_CONFIG.telUrl}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-slate-900 border border-slate-700 text-white hover:text-[#c5a059] hover:border-[#c5a059]/60 text-xs font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                  Call 8059288086
                </a>
                <a
                  href={ADVOCATE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/25 text-xs font-semibold transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  WhatsApp
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onConsultClick();
                }}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-[#c5a059] to-[#b08a42] text-[#070c1b] text-xs font-bold uppercase tracking-wider shadow-md"
              >
                Request Legal Consultation
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

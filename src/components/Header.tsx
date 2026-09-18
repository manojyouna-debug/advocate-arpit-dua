import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Scale, ChevronDown } from 'lucide-react';
import { ADVOCATE_CONFIG } from '../data/advocateData';
import { GoldSealLogo } from './GoldSealLogo';
import { ThemeSwitcher } from './ThemeSwitcher';

interface HeaderProps {
  onConsultClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onConsultClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // All navigation links for full mobile drawer
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

  // Core high-priority links displayed directly on desktop navbar
  const primaryNavLinks = [
    { label: 'About', href: '#about' },
    { label: 'Practice Areas', href: '#practice-areas' },
    { label: 'High Court', href: '#high-court' },
    { label: 'Articles', href: '#articles' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '#contact' },
  ];

  // Secondary links housed neatly in a dropdown to prevent crowding
  const moreNavLinks = [
    { label: 'How We Help', href: '#how-we-help', desc: 'Urgent checklists & situational guides' },
    { label: 'Our Approach', href: '#approach', desc: '5-step litigation strategy & process' },
    { label: 'Testimonials', href: '#testimonials', desc: 'Client trust & verified feedback' },
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
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-3 xl:gap-6">
          {/* Logo & Identity - Guaranteed shrink-0 with dedicated right clearance */}
          <a
            href="#"
            className="group flex items-center gap-2 sm:gap-3 focus:outline-none focus:ring-2 focus:ring-[#c5a059] rounded-lg p-1 shrink-0 mr-2 xl:mr-6"
            aria-label="Advocate Arpit Dua Home"
          >
            <GoldSealLogo size={42} showText={true} />
          </a>

          {/* Desktop Navigation Links with Zero Overlap */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 shrink-0">
            {primaryNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-sans font-medium text-slate-200 hover:text-[#d4af37] transition-colors rounded-md hover:bg-white/5 whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}

            {/* More Dropdown for Secondary Links */}
            <div
              className="relative"
              onMouseEnter={() => setMoreDropdownOpen(true)}
              onMouseLeave={() => setMoreDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className="inline-flex items-center gap-1 px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-sans font-medium text-slate-200 hover:text-[#d4af37] transition-colors rounded-md hover:bg-white/5 whitespace-nowrap focus:outline-none cursor-pointer"
                aria-expanded={moreDropdownOpen}
                aria-haspopup="true"
              >
                <span>More</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180 text-[#d4af37]' : ''}`} />
              </button>

              {moreDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 py-2 rounded-xl bg-[#0b132b] border border-[#c5a059]/40 shadow-2xl backdrop-blur-md z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  {moreNavLinks.map((subLink) => (
                    <a
                      key={subLink.label}
                      href={subLink.href}
                      onClick={() => setMoreDropdownOpen(false)}
                      className="block px-4 py-2.5 hover:bg-[#c5a059]/15 transition-colors group"
                    >
                      <div className="text-xs font-semibold text-slate-100 group-hover:text-[#e2c882]">
                        {subLink.label}
                      </div>
                      {subLink.desc && (
                        <div className="text-[10px] text-slate-400 group-hover:text-slate-300 mt-0.5">
                          {subLink.desc}
                        </div>
                      )}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop & Tablet Action CTAs */}
          <div className="hidden sm:flex items-center gap-2 lg:gap-3 shrink-0 ml-2">
            <div className="hidden xl:block">
              <ThemeSwitcher variant="compact" />
            </div>
            <div className="hidden lg:block xl:hidden">
              <ThemeSwitcher variant="icon-only" />
            </div>

            <a
              href={ADVOCATE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10 text-xs font-semibold tracking-wide transition-all shrink-0"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onConsultClick}
              id="header-consult-btn"
              className="inline-flex items-center justify-center px-3.5 sm:px-4 xl:px-5 py-2 sm:py-2.5 rounded-lg bg-[#d4af37] hover:bg-[#e2c882] text-[#070c1b] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-[0_0_20px_rgba(212,175,55,0.45)] border border-[#ffe082]/60 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap shrink-0 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            >
              Consult Now
            </button>
          </div>

          {/* Mobile Action Controls */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            {/* Mobile Theme Switcher */}
            <div className="sm:hidden">
              <ThemeSwitcher variant="icon-only" />
            </div>

            {/* Mobile Call CTA */}
            <a
              href={ADVOCATE_CONFIG.telUrl}
              className="p-2 rounded-lg bg-[#c5a059]/15 text-[#e2c882] border border-[#c5a059]/30 hover:bg-[#c5a059]/25 transition-colors"
              aria-label="Call Advocate Arpit Dua"
              title="Call Office"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Clean Hamburger Menu Button for Mobile */}
            <button
              type="button"
              id="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-slate-800/80 border border-[#c5a059]/40 text-[#e2c882] hover:text-white hover:bg-[#c5a059]/20 active:scale-95 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#c5a059]"
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

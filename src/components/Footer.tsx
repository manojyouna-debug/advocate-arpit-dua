import React from 'react';
import { Phone, Mail, MapPin, Scale, ArrowUp, Instagram, Facebook, Linkedin, Youtube, ShieldAlert } from 'lucide-react';
import { ADVOCATE_CONFIG, PRACTICE_AREAS } from '../data/advocateData';
import { GoldSealLogo } from './GoldSealLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070c1b] text-white border-t border-slate-800 relative z-20 pb-20 md:pb-8">
      {/* Upper Footer: Identity & Quick Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Col 1: Identity & Chambers */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <GoldSealLogo size={52} showText={true} />
            </div>
            
            <p className="text-xs text-slate-300 font-sans leading-relaxed pt-2">
              Litigation counsel practising before the <strong className="text-white">Punjab &amp; Haryana High Court</strong> and District Courts across <strong className="text-white">Chandigarh, Mohali, Panchkula, and Yamunanagar</strong>.
            </p>

            <div className="space-y-2 text-xs text-white font-sans pt-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span className="text-slate-200">{ADVOCATE_CONFIG.officeAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a href={ADVOCATE_CONFIG.telUrl} className="text-white hover:text-[#b47a34] transition-colors">
                  {ADVOCATE_CONFIG.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a href={ADVOCATE_CONFIG.emailUrl} className="text-white hover:text-[#b47a34] transition-colors break-all">
                  {ADVOCATE_CONFIG.email}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-3">
              <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                Connect on Official Channels:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={ADVOCATE_CONFIG.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile of Advocate Arpit Dua"
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-[#d4af37] hover:border-[#c5a059] transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={ADVOCATE_CONFIG.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Profile of Advocate Arpit Dua"
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-[#d4af37] hover:border-[#c5a059] transition-all"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={ADVOCATE_CONFIG.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile of Advocate Arpit Dua"
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-[#d4af37] hover:border-[#c5a059] transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={ADVOCATE_CONFIG.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube Channel of Advocate Arpit Dua"
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-[#d4af37] hover:border-[#c5a059] transition-all"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Practice Areas */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Practice Forums
            </h4>
            <ul className="space-y-2 text-xs text-white font-sans">
              {PRACTICE_AREAS.map((area) => (
                <li key={area.id}>
                  <a
                    href="#practice-areas"
                    className="text-white hover:text-[#b47a34] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#c5a059]">›</span>
                    <span>{area.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links & Regional Areas */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-white font-sans">
              <li><a href="#about" className="text-white hover:text-[#b47a34] transition-colors">About Counsel</a></li>
              <li><a href="#practice-areas" className="text-white hover:text-[#b47a34] transition-colors">Practice Areas</a></li>
              <li><a href="#how-we-help" className="text-white hover:text-[#b47a34] transition-colors">How We Help</a></li>
              <li><a href="#approach" className="text-white hover:text-[#b47a34] transition-colors">Our Approach</a></li>
              <li><a href="#high-court" className="text-white hover:text-[#b47a34] transition-colors">High Court Practice</a></li>
              <li><a href="#articles" className="text-white hover:text-[#b47a34] transition-colors">Legal Articles</a></li>
              <li><a href="#faqs" className="text-white hover:text-[#b47a34] transition-colors">FAQs</a></li>
              <li><a href="#contact" className="text-white hover:text-[#b47a34] transition-colors">Contact Chambers</a></li>
            </ul>
          </div>

          {/* Col 4: Jurisdictions & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Court Jurisdictions
            </h4>
            <div className="space-y-2 text-xs text-slate-200 font-sans">
              <p><strong className="text-white">High Court:</strong> Hon&apos;ble Punjab &amp; Haryana High Court, Chandigarh</p>
              <p><strong className="text-white">Chandigarh:</strong> District &amp; Sessions Courts, Sector 43</p>
              <p><strong className="text-white">Mohali:</strong> District Courts Complex, SAS Nagar</p>
              <p><strong className="text-white">Panchkula:</strong> District Courts, Sector 1</p>
              <p><strong className="text-white">Yamunanagar:</strong> District Courts, Jagadhri</p>
              <p className="pt-2 text-[11px] text-[#c5a059] font-semibold">Availability: 24 × 7 Legal Inquiries</p>
            </div>
          </div>

        </div>

        {/* Bar Council of India Mandatory Disclaimer */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800/80 text-[11px] text-slate-400 leading-relaxed font-sans space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300">
              <ShieldAlert className="w-4 h-4 text-[#c5a059]" />
              <span>Bar Council of India Disclaimer</span>
            </div>
            <p>
              As per the rules of the Bar Council of India, advocates are not permitted to solicit work or advertise. This website is meant solely for the purpose of providing information and not for advertising or solicitation. The contents of this website should not be construed as legal advice. The viewer acknowledges that the information provided is solely on their own request and any reliance on the information is solely at their own risk.
            </p>
          </div>
        </div>

        {/* Bottom Strip: Copyright & Back to Top */}
        <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-sans">
          <p>
            Copyright &copy; 2026 <strong className="text-slate-400">Advocate Arpit Dua</strong>. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-[#d4af37] transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

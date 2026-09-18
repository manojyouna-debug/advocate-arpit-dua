import React from 'react';
import { HeartHandshake, ShieldCheck, Scale, AlertCircle } from 'lucide-react';
import { ADVOCATE_CONFIG } from '../data/advocateData';
import { useTheme } from '../context/ThemeContext';

export const BeyondTheBrief: React.FC = () => {
  const { isMidnight } = useTheme();

  return (
    <section
      className={`py-16 md:py-24 relative transition-colors duration-300 ${
        isMidnight ? 'bg-[#0b132b] text-white border-b border-[#c5a059]/15' : 'bg-[#fdfbf7] text-slate-900 border-b border-slate-200/80'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`rounded-2xl p-8 sm:p-12 border shadow-sm relative overflow-hidden transition-colors ${
          isMidnight ? 'bg-[#0e1838] border-[#1c2541]' : 'bg-white border-slate-200/90'
        }`}>
          
          {/* Subtle Accent Edge */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#c5a059] via-[#d4af37] to-[#b08a42]" />

          <div className="flex flex-col md:flex-row gap-8 items-start">
            
            <div className="p-4 rounded-2xl bg-[#0b132b] text-[#d4af37] shrink-0 shadow-md border border-[#c5a059]/20">
              <HeartHandshake className="w-8 h-8" />
            </div>

            <div className="space-y-4 flex-1">
              <span className={`text-xs font-sans font-bold uppercase tracking-[0.2em] block ${
                isMidnight ? 'text-[#e2c882]' : 'text-[#b08a42]'
              }`}>
                Public Trust &amp; Access to Justice
              </span>

              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-tight ${
                isMidnight ? 'text-white' : 'text-[#0b132b]'
              }`}>
                Beyond the Brief
              </h2>

              <blockquote className={`font-serif text-lg sm:text-xl italic border-l-2 border-[#c5a059] pl-4 py-1 my-3 ${
                isMidnight ? 'text-slate-200' : 'text-slate-800'
              }`}>
                &ldquo;{ADVOCATE_CONFIG.philosophyQuote}&rdquo;
              </blockquote>

              <div className={`space-y-3 text-sm sm:text-base font-sans leading-relaxed ${
                isMidnight ? 'text-slate-300' : 'text-slate-700'
              }`}>
                <p>
                  Guided by the core conviction that access to justice should not become a privilege reserved exclusively for those with substantial financial means, Advocate Arpit Dua actively dedicates professional attention to public interest and need-based matters.
                </p>
                <p>
                  <strong className={isMidnight ? 'text-white' : 'text-slate-900'}>
                    Where appropriate, need-based or pro-bono assistance may be considered in cases involving genuine financial hardship.
                  </strong>
                </p>
                <p className={`text-xs sm:text-sm ${isMidnight ? 'text-slate-400' : 'text-slate-600'}`}>
                  Every application for need-based assistance is evaluated strictly on its factual merits, gravity of legal issues involved, and verified financial need, maintaining uncompromising standards of professional diligence.
                </p>
              </div>

              {/* Note / Safeguard */}
              <div className={`mt-4 p-4 rounded-xl border flex items-start gap-3 text-xs font-sans ${
                isMidnight
                  ? 'bg-[#131d3b] border-[#c5a059]/30 text-amber-200'
                  : 'bg-amber-50 border-amber-200/80 text-amber-900'
              }`}>
                <AlertCircle className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span>
                  <strong>Ethical Notice:</strong> Need-based assistance is subject to individual evaluation, availability, and alignment with Bar Council of India standards. Submitting a request does not establish an attorney-client relationship until mutually formalized.
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

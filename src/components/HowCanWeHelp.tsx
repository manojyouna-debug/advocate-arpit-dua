import React, { useState } from 'react';
import { HelpCircle, CheckSquare, ArrowRight, Shield, AlertCircle, FileCheck, Phone } from 'lucide-react';
import { HELP_OPTIONS, ADVOCATE_CONFIG } from '../data/advocateData';

interface HowCanWeHelpProps {
  onConsultClick: (category?: string) => void;
}

export const HowCanWeHelp: React.FC<HowCanWeHelpProps> = ({ onConsultClick }) => {
  const [selectedId, setSelectedId] = useState<string>(HELP_OPTIONS[0].id);

  const currentOption = HELP_OPTIONS.find((opt) => opt.id === selectedId) || HELP_OPTIONS[0];

  return (
    <section id="how-we-help" className="py-20 md:py-28 bg-[#070c1b] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#d4af37] block mb-2">
            Case Assessment &amp; Guidance
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            How Can We Help?
          </h2>
          <div className="w-16 h-1 bg-[#c5a059] mx-auto mt-4 mb-6" />
          <p className="text-sm sm:text-base text-slate-300 font-sans font-light leading-relaxed">
            Select your specific situation below for practical guidance on immediate procedural steps and essential case records required for review.
          </p>
        </div>

        {/* 5 Interactive Selectors */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {HELP_OPTIONS.map((option) => {
            const isSelected = option.id === selectedId;
            return (
              <button
                key={option.id}
                onClick={() => setSelectedId(option.id)}
                className={`p-4 rounded-xl text-left transition-all duration-200 cursor-pointer border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#1c2541] border-[#c5a059] shadow-lg shadow-[#c5a059]/10'
                    : 'bg-[#0b132b] border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isSelected ? 'bg-[#d4af37]' : 'bg-slate-700'
                    }`}
                  />
                  {isSelected && (
                    <span className="text-[10px] font-sans font-bold text-[#e2c882] tracking-wider uppercase">
                      Active
                    </span>
                  )}
                </div>
                <div>
                  <h3
                    className={`font-serif text-sm sm:text-base font-bold leading-snug ${
                      isSelected ? 'text-white' : 'text-slate-300'
                    }`}
                  >
                    {option.label}
                  </h3>
                  <p className="text-[11px] text-slate-400 line-clamp-1 mt-1 font-sans">
                    {option.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Detail Display Card */}
        <div className="bg-[#0b132b] border border-[#c5a059]/40 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Description */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#c5a059]/15 border border-[#c5a059]/30 text-[#e2c882] text-xs font-semibold">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Situation Overview</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                {currentOption.label}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                {currentOption.description}
              </p>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-[#d4af37] mb-1.5 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Recommended Legal Course</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  {currentOption.recommendedStep}
                </p>
              </div>
            </div>

            {/* Right Checklist & Action */}
            <div className="lg:col-span-5 bg-[#070c1b]/80 border border-slate-800 p-6 rounded-xl space-y-5">
              <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-[#c5a059]" />
                <span>Helpful Documents to Carry:</span>
              </h4>

              <ul className="space-y-2.5">
                {currentOption.documentsToBring.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 font-sans">
                    <CheckSquare className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <button
                  onClick={() => onConsultClick(currentOption.label)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#c5a059] hover:bg-[#d4af37] text-[#070c1b] text-xs font-sans font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
                >
                  <span>Discuss Your Matter</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={ADVOCATE_CONFIG.telUrl}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-sans font-medium transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Call Counsel: {ADVOCATE_CONFIG.phone}</span>
                </a>
              </div>
            </div>

          </div>

          {/* Mandatory Disclaimer from Section 13 */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 text-center">
            <p className="text-xs text-slate-400 italic font-sans max-w-3xl mx-auto">
              &ldquo;Every legal matter is different. The appropriate legal course depends on the facts, applicable law and circumstances of the case.&rdquo;
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

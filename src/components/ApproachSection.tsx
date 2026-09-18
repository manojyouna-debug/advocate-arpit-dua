import React from 'react';
import { Ear, BookOpen, FileCheck, Shield, Anchor } from 'lucide-react';
import { APPROACH_STEPS } from '../data/advocateData';
import { useTheme } from '../context/ThemeContext';

export const ApproachSection: React.FC = () => {
  const { isMidnight } = useTheme();

  const getStepIcon = (number: string) => {
    switch (number) {
      case '01':
        return <Ear className="w-5 h-5 text-[#c5a059]" />;
      case '02':
        return <BookOpen className="w-5 h-5 text-[#c5a059]" />;
      case '03':
        return <FileCheck className="w-5 h-5 text-[#c5a059]" />;
      case '04':
        return <Shield className="w-5 h-5 text-[#c5a059]" />;
      case '05':
        return <Anchor className="w-5 h-5 text-[#c5a059]" />;
      default:
        return <Shield className="w-5 h-5 text-[#c5a059]" />;
    }
  };

  return (
    <section
      id="approach"
      className={`py-20 md:py-28 relative transition-colors duration-300 ${
        isMidnight ? 'bg-[#070c1b] text-white border-b border-[#c5a059]/15' : 'bg-[#fdfbf7] text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`text-xs font-sans font-bold uppercase tracking-[0.2em] block mb-2 ${
            isMidnight ? 'text-[#e2c882]' : 'text-[#b08a42]'
          }`}>
            Methodology &amp; Practice Standards
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight ${
            isMidnight ? 'text-white' : 'text-[#0b132b]'
          }`}>
            The Approach
          </h2>
          <div className="w-16 h-1 bg-[#c5a059] mx-auto mt-4 mb-6" />
          <p className={`text-base sm:text-lg font-serif italic leading-relaxed ${
            isMidnight ? 'text-slate-200' : 'text-slate-700'
          }`}>
            &ldquo;Every matter is different. Every client has a different story. And every case demands its own strategy.&rdquo;
          </p>
        </div>

        {/* 5-Step Visual Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {APPROACH_STEPS.map((step) => (
            <div
              key={step.number}
              className={`rounded-2xl p-6 border shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group relative ${
                isMidnight
                  ? 'bg-[#0e1838] border-[#1c2541] hover:border-[#c5a059]'
                  : 'bg-white border-slate-200/80 hover:border-[#c5a059]/60'
              }`}
            >
              {/* Step Number & Connector */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-mono text-2xl font-bold tracking-wider ${
                    isMidnight ? 'text-[#e2c882]' : 'text-[#b08a42]'
                  }`}>
                    {step.number}
                  </span>
                  <div className={`p-2.5 rounded-xl transition-colors ${
                    isMidnight ? 'bg-[#131d3b] group-hover:bg-[#1c2541]' : 'bg-[#0b132b] group-hover:bg-[#1c2541]'
                  }`}>
                    {getStepIcon(step.number)}
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className={`font-serif text-xl font-bold mb-1 transition-colors ${
                  isMidnight ? 'text-white group-hover:text-[#e2c882]' : 'text-[#0b132b] group-hover:text-[#b08a42]'
                }`}>
                  {step.title}
                </h3>
                <p className={`text-xs font-sans font-semibold mb-3 ${
                  isMidnight ? 'text-[#e2c882]' : 'text-[#b08a42]'
                }`}>
                  {step.tagline}
                </p>

                {/* Description */}
                <p className={`text-xs font-sans leading-relaxed mb-4 ${
                  isMidnight ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {step.description}
                </p>
              </div>

              {/* Step Micro-Details */}
              <div className={`pt-3 border-t space-y-1.5 ${
                isMidnight ? 'border-slate-800' : 'border-slate-100'
              }`}>
                {step.details.map((item, dIdx) => (
                  <div key={dIdx} className={`text-[11px] font-sans flex items-start gap-1.5 ${
                    isMidnight ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    <span className="w-1 h-1 rounded-full bg-[#c5a059] mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Approach Summary Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-[#0b132b] text-white border border-[#c5a059]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-lg font-bold text-white">
              A Litigation-First Discipline Across Chandigarh Tricity &amp; Yamunanagar
            </h4>
            <p className="text-xs text-slate-300 font-sans">
              Appellate research, responsible advice, and clear courtroom articulation for every client matter.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-5 py-2.5 rounded-lg bg-[#c5a059] hover:bg-[#d4af37] text-[#070c1b] text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
          >
            Consult With Counsel
          </a>
        </div>

      </div>
    </section>
  );
};

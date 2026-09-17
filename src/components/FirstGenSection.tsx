import React from 'react';
import { BookOpen, Scale, Search, ShieldAlert, Award, ArrowUpRight } from 'lucide-react';
import { ADVOCATE_CONFIG } from '../data/advocateData';

export const FirstGenSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0b132b] text-white relative overflow-hidden border-y border-[#c5a059]/20">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#d4af37] block">
              Core Legal Heritage &amp; Ethos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              A First-Generation Lawyer.<br />
              <span className="text-[#c5a059] italic">A Litigation-First Approach.</span>
            </h2>
            <div className="w-16 h-1 bg-[#c5a059]" />

            <p className="text-base sm:text-lg text-slate-300 font-sans font-light leading-relaxed">
              Coming from a first-generation legal background, Arpit understands that entering the profession without an established legacy comes with its own challenges. It demands discipline, perseverance, continuous learning and the courage to build one’s own path.
            </p>

            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              That journey has shaped his approach to advocacy. For him, being a lawyer is not merely about knowing the law. It is about understanding the person behind the case, identifying the legal issue that truly matters, preparing with precision and presenting the client&apos;s case with clarity and conviction.
            </p>

            {/* 4 Tenets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                <Search className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-base font-bold text-white">Thorough Legal Research</h3>
                  <p className="text-xs text-slate-400 mt-0.5 leading-normal">Deep exploration of relevant statutory enactments and binding High Court/Apex Court precedents.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-base font-bold text-white">Strategic Preparation</h3>
                  <p className="text-xs text-slate-400 mt-0.5 leading-normal">Meticulous brief analysis and carefully structured grounds of petition or appeal.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-base font-bold text-white">Responsible Advice</h3>
                  <p className="text-xs text-slate-400 mt-0.5 leading-normal">Objective counsel focused on genuine legal remedies rather than speculative claims.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                <Scale className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-base font-bold text-white">Courtroom Representation</h3>
                  <p className="text-xs text-slate-400 mt-0.5 leading-normal">Vigorous, ethical, and fearless presentation of client facts before the bench.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Quote Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#1c2541] to-[#070c1b] border-2 border-[#c5a059]/40 shadow-2xl space-y-6">
              <div className="w-12 h-12 rounded-xl bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center text-[#d4af37]">
                <Scale className="w-6 h-6" />
              </div>

              <blockquote className="font-serif text-2xl sm:text-3xl italic text-[#f8fafc] leading-snug">
                &ldquo;{ADVOCATE_CONFIG.philosophyQuote}&rdquo;
              </blockquote>

              <div className="pt-4 border-t border-slate-700/80">
                <p className="font-serif text-lg font-bold text-[#c5a059]">
                  Advocate Arpit Dua
                </p>
                <p className="text-xs text-slate-400 font-sans uppercase tracking-wider mt-0.5">
                  Litigation Counsel • High Court Practice
                </p>
              </div>

              {/* Decorative Corner Accents */}
              <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#c5a059]" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#c5a059]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

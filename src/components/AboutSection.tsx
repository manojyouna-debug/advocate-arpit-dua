import React, { useState, useEffect } from 'react';
import { Calendar, GraduationCap, Scale, Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ADVOCATE_CONFIG } from '../data/advocateData';

interface AboutSectionProps {
  onConsultClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onConsultClick }) => {
  const [photoSrc, setPhotoSrc] = useState<string>(() => {
    return localStorage.getItem('advocate_custom_photo') || '/assets/advocate_arpit_real.jpg';
  });

  useEffect(() => {
    const handleStorage = () => {
      const saved = localStorage.getItem('advocate_custom_photo');
      if (saved) setPhotoSrc(saved);
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);
  return (
    <section id="about" className="py-20 md:py-28 bg-[#fdfbf7] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#b08a42] block mb-2">
            Professional Profile &amp; Background
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0b132b] tracking-tight">
            Meet Advocate Arpit Dua
          </h2>
          <div className="w-16 h-1 bg-[#c5a059] mt-4 mb-6" />
          <p className="text-lg font-serif italic text-slate-700">
            &ldquo;{ADVOCATE_CONFIG.slogan}&rdquo;
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Photograph & Visual Credibility Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-white">
              <img
                src={photoSrc}
                alt="Advocate Arpit Dua - Litigation Counsel Chandigarh High Court"
                className="w-full aspect-[4/3] sm:aspect-square object-cover object-[center_20%] filter contrast-[1.02] brightness-[1.01]"
                referrerPolicy="no-referrer"
                onError={() => {
                  if (photoSrc !== '/assets/advocate_arpit_real.jpg') {
                    setPhotoSrc('/assets/advocate_arpit_real.jpg');
                  }
                }}
              />
              <div className="p-6 bg-white">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#0b132b]">
                      Advocate Arpit Dua
                    </h3>
                    <p className="text-xs font-sans text-slate-500">
                      Litigation Counsel • High Court Practice
                    </p>
                  </div>
                  <span className="p-2.5 rounded-full bg-[#c5a059]/10 text-[#b08a42]">
                    <Scale className="w-5 h-5" />
                  </span>
                </div>

                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
                    <span>Enrolled Advocate (2022)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
                    <span>Office: House No. 1741/2, Sector 43-B, Chandigarh</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
                    <span>Practice: Punjab &amp; Haryana High Court &amp; District Courts</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Philosophy Callout Card */}
            <div className="p-6 rounded-2xl bg-[#0b132b] text-white border border-[#c5a059]/30 relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a059]/10 rounded-full blur-2xl pointer-events-none" />
              <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#e2c882] block mb-2">
                Guiding Philosophy
              </span>
              <blockquote className="font-serif text-lg italic leading-relaxed text-slate-100">
                &ldquo;{ADVOCATE_CONFIG.philosophyQuote}&rdquo;
              </blockquote>
              <p className="text-xs text-slate-400 mt-3">
                — Advocate Arpit Dua, Stated Practice Principle
              </p>
            </div>
          </div>

          {/* Right Column: Verified Narrative & Education Timeline */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="prose prose-slate max-w-none text-slate-700 font-sans space-y-4 leading-relaxed text-base">
              <p>
                <strong className="text-[#0b132b] font-semibold">Advocate Arpit Dua</strong> is a Chandigarh-based litigation counsel practising before the <strong className="text-[#0b132b]">Punjab &amp; Haryana High Court</strong> and District Courts across <strong className="text-[#0b132b]">Chandigarh, Mohali, Panchkula, and Yamunanagar</strong>.
              </p>
              
              <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/60 my-4">
                <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold tracking-wider uppercase bg-[#c5a059] text-white mb-2">
                  First-Generation Lawyer
                </span>
                <p className="text-sm text-slate-800 leading-relaxed m-0">
                  Arpit’s journey into the legal profession has been built from the ground up — through learning, persistence, courtroom experience, and an unwavering belief in the power of law to make a meaningful difference in people’s lives.
                </p>
              </div>

              <p>
                Coming from a first-generation legal background, Arpit understands that entering the profession without an established legacy comes with its own challenges. It demands discipline, perseverance, continuous learning, and the courage to build one’s own path. That journey has shaped his approach to advocacy:
              </p>

              <blockquote className="border-l-4 border-[#c5a059] pl-4 italic text-slate-800 my-4 font-serif text-lg">
                &ldquo;For him, being a lawyer is not merely about knowing the law. It is about understanding the person behind the case, identifying the legal issue that truly matters, preparing with precision, and presenting the client&apos;s case with clarity and conviction.&rdquo;
              </blockquote>

              <p>
                His practice is built around thorough legal research, strategic preparation, responsible advice, and effective courtroom representation, with the objective of pursuing every legitimate legal remedy available to the client under the law.
              </p>
            </div>

            {/* Verified Education & Practice Timeline */}
            <div className="pt-4 border-t border-slate-200">
              <h3 className="text-sm font-sans font-bold uppercase tracking-widest text-[#b08a42] mb-6 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>Academic &amp; Professional Timeline</span>
              </h3>

              <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#c5a059]/40">
                {ADVOCATE_CONFIG.timeline.map((item, index) => (
                  <div key={item.year + index} className="relative group">
                    {/* Circle Node */}
                    <div className="absolute -left-6 sm:-left-8 top-1.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white border-2 border-[#c5a059] group-hover:bg-[#c5a059] transition-colors flex items-center justify-center" />
                    
                    <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm hover:border-[#c5a059]/60 transition-all">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded bg-[#0b132b] text-white text-xs font-mono font-bold">
                          {item.year}
                        </span>
                        <span className="text-xs font-sans font-semibold text-[#b08a42]">
                          {item.institution}
                        </span>
                      </div>
                      <h4 className="font-serif text-base sm:text-lg font-bold text-[#0b132b]">
                        {item.degree}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Consultation Trigger */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onConsultClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0b132b] hover:bg-[#1c2541] text-white font-sans text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                <span>Discuss Your Legal Matter</span>
                <ArrowRight className="w-4 h-4 text-[#c5a059]" />
              </button>
              <span className="text-xs text-slate-500">
                Direct consultation: <strong className="text-slate-800">{ADVOCATE_CONFIG.phoneDisplay}</strong>
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

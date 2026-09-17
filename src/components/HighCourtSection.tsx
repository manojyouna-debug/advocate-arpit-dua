import React from 'react';
import { Building, Scale, Shield, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { ADVOCATE_CONFIG } from '../data/advocateData';

interface HighCourtSectionProps {
  onConsultClick: () => void;
}

export const HighCourtSection: React.FC<HighCourtSectionProps> = ({ onConsultClick }) => {
  return (
    <section id="high-court" className="py-20 md:py-28 bg-[#0b132b] text-white relative overflow-hidden">
      {/* Background Architectural Texture with Deep Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/law-library.jpg"
          alt="Punjab & Haryana High Court legal research and judicial jurisprudence"
          className="w-full h-full object-cover object-center opacity-15 filter brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070c1b] via-[#0b132b]/95 to-[#0b132b]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Focused High Court Identity */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#d4af37] block">
              Judicial Forum &amp; Jurisdiction
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Advocate in <span className="text-[#c5a059] italic">Chandigarh</span> High Court
            </h2>

            <div className="w-16 h-1 bg-[#c5a059]" />

            <p className="text-base sm:text-lg text-slate-200 font-sans font-light leading-relaxed">
              <strong className="text-white font-semibold">Advocate Arpit Dua</strong> is a Chandigarh-based litigation counsel practising before the <strong className="text-slate-100 font-medium">Punjab &amp; Haryana High Court</strong>.
            </p>

            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              Litigation before the High Court demands an acute grasp of constitutional law, supervisory writ jurisdiction under Articles 226/227, criminal miscellaneous applications under Section 482 CrPC / BNSS, appellate procedures, and strict adherence to High Court rules and orders.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm text-slate-200">
                <CheckCircle className="w-4 h-4 text-[#c5a059] shrink-0 mt-1" />
                <span><strong>Appellate &amp; Revisionary Proceedings:</strong> Preparing structured challenges against Trial Court orders and judgments across Punjab, Haryana, and Chandigarh.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-200">
                <CheckCircle className="w-4 h-4 text-[#c5a059] shrink-0 mt-1" />
                <span><strong>Bail Jurisprudence:</strong> Regular bail and anticipatory bail petitions argued with comprehensive citation of High Court and Supreme Court precedents.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-200">
                <CheckCircle className="w-4 h-4 text-[#c5a059] shrink-0 mt-1" />
                <span><strong>Writ &amp; Miscellaneous Petitions:</strong> Protection of fundamental rights, quashing of FIRs/complaints, and urgent interim relief.</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onConsultClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#c5a059] hover:bg-[#d4af37] text-[#070c1b] font-sans font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
              >
                <span>Discuss Your Legal Matter</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={ADVOCATE_CONFIG.telUrl}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-slate-900/90 border border-slate-700 text-slate-200 text-xs font-semibold hover:border-[#c5a059] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#c5a059]" />
                <span>{ADVOCATE_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Court Info Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-gradient-to-b from-[#1c2541] to-[#070c1b] border border-[#c5a059]/40 rounded-2xl p-8 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-4">
                <div>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#d4af37]">
                    Primary Seat of Practice
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white mt-0.5">
                    Punjab &amp; Haryana High Court
                  </h3>
                </div>
                <div className="p-3 rounded-xl bg-[#c5a059]/15 text-[#d4af37]">
                  <Building className="w-6 h-6" />
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-300 font-sans">
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Jurisdiction</span>
                  <span className="text-slate-100 font-medium text-right">Punjab, Haryana &amp; Chandigarh (UT)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Litigation Scope</span>
                  <span className="text-slate-100 font-medium text-right">Appellate, Revisional, Writ, Bail</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Office Location</span>
                  <span className="text-slate-100 font-medium text-right">Sector 43-B, Chandigarh</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-400">Regional Reach</span>
                  <span className="text-slate-100 font-medium text-right">Tricity &amp; Yamunanagar</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 leading-relaxed font-sans">
                <strong className="text-slate-200 block mb-1 font-semibold">Pre-Litigation Assessment:</strong>
                Litigation counsel reviews certified orders, lower court records, and procedural merits prior to High Court filing.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

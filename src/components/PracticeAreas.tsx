import React from 'react';
import { Scale, ShieldCheck, FileText, Gavel, FileCheck, ArrowRight, Building } from 'lucide-react';
import { PRACTICE_AREAS } from '../data/advocateData';
import { PracticeArea } from '../types';

interface PracticeAreasProps {
  onSelectArea: (area: PracticeArea) => void;
  onConsultClick: (areaTitle?: string) => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ onConsultClick }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'high-court-litigation':
        return <Building className="w-6 h-6 text-[#c5a059]" />;
      case 'appellate-work':
        return <Scale className="w-6 h-6 text-[#c5a059]" />;
      case 'bail-matters':
        return <ShieldCheck className="w-6 h-6 text-[#c5a059]" />;
      case 'criminal-proceedings':
        return <Gavel className="w-6 h-6 text-[#c5a059]" />;
      case 'civil-proceedings':
        return <FileText className="w-6 h-6 text-[#c5a059]" />;
      default:
        return <FileCheck className="w-6 h-6 text-[#c5a059]" />;
    }
  };

  return (
    <section id="practice-areas" className="py-20 md:py-28 bg-[#f8fafc] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#b08a42] block mb-2">
            Court Litigation &amp; Legal Advisory
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0b132b] tracking-tight">
            Areas of Legal Practice
          </h2>
          <div className="w-16 h-1 bg-[#c5a059] mx-auto mt-4 mb-6" />
          <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            Litigation-focused legal representation before the Punjab &amp; Haryana High Court and District Courts across Chandigarh, Mohali, Panchkula, and Yamunanagar. Grounded in thorough research and responsible counsel.
          </p>
        </div>

        {/* Practice Area Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRACTICE_AREAS.map((area) => (
            <div
              key={area.id}
              className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#c5a059]/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Icon & Court Forum */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-[#0b132b] group-hover:bg-[#1c2541] transition-colors shadow-sm">
                    {getIcon(area.id)}
                  </div>
                  <span className="text-[11px] font-sans font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                    {area.courtForum}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl font-bold text-[#0b132b] group-hover:text-[#b08a42] transition-colors mb-3">
                  {area.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-5">
                  {area.shortDesc}
                </p>

                {/* Focus Areas List */}
                <div className="space-y-2 border-t border-slate-100 pt-4 mb-6">
                  {area.focusAreas.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => onConsultClick(area.title)}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-lg bg-slate-50 hover:bg-[#0b132b] text-[#0b132b] hover:text-white text-xs font-sans font-bold uppercase tracking-wider transition-all duration-200 group/btn cursor-pointer"
                >
                  <span>Discuss Your Matter</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#c5a059] group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Legal Disclaimer Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-600 max-w-2xl mx-auto italic">
            * Legal services are rendered in accordance with the Advocates Act, 1961 and Bar Council of India rules. Each matter depends strictly upon its specific factual matrix and applicable legal provisions.
          </p>
        </div>

      </div>
    </section>
  );
};

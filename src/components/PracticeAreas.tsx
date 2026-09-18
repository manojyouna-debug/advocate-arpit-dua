import React from 'react';
import { Scale, ShieldCheck, FileText, Gavel, FileCheck, ArrowRight, Building } from 'lucide-react';
import { PRACTICE_AREAS } from '../data/advocateData';
import { PracticeArea } from '../types';
import { useTheme } from '../context/ThemeContext';

interface PracticeAreasProps {
  onSelectArea: (area: PracticeArea) => void;
  onConsultClick: (areaTitle?: string) => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ onConsultClick }) => {
  const { isMidnight } = useTheme();

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
    <section
      id="practice-areas"
      className={`py-20 md:py-28 relative transition-colors duration-300 ${
        isMidnight ? 'bg-[#0b132b] text-white border-b border-[#c5a059]/15' : 'bg-[#f8fafc] text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`text-xs font-sans font-bold uppercase tracking-[0.2em] block mb-2 ${
            isMidnight ? 'text-[#e2c882]' : 'text-[#b08a42]'
          }`}>
            Court Litigation &amp; Legal Advisory
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight ${
            isMidnight ? 'text-white' : 'text-[#0b132b]'
          }`}>
            Areas of Legal Practice
          </h2>
          <div className="w-16 h-1 bg-[#c5a059] mx-auto mt-4 mb-6" />
          <p className={`text-sm sm:text-base font-sans leading-relaxed ${
            isMidnight ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Litigation-focused legal representation before the Punjab &amp; Haryana High Court and District Courts across Chandigarh, Mohali, Panchkula, and Yamunanagar. Grounded in thorough research and responsible counsel.
          </p>
        </div>

        {/* Practice Area Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRACTICE_AREAS.map((area) => (
            <div
              key={area.id}
              className={`rounded-2xl p-7 border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${
                isMidnight
                  ? 'bg-[#0e1838] border-[#1c2541] hover:border-[#c5a059]'
                  : 'bg-white border-slate-200/80 hover:border-[#c5a059]/60'
              }`}
            >
              <div>
                {/* Top Icon & Court Forum */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`p-3 rounded-xl transition-colors shadow-sm ${
                    isMidnight ? 'bg-[#131d3b] group-hover:bg-[#1c2541]' : 'bg-[#0b132b] group-hover:bg-[#1c2541]'
                  }`}>
                    {getIcon(area.id)}
                  </div>
                  <span className={`text-[11px] font-sans font-medium px-2.5 py-1 rounded-full border ${
                    isMidnight
                      ? 'bg-[#1c2541] text-[#e2c882] border-[#c5a059]/30'
                      : 'text-slate-600 bg-slate-100 border-slate-200'
                  }`}>
                    {area.courtForum}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`font-serif text-2xl font-bold transition-colors mb-3 ${
                  isMidnight ? 'text-white group-hover:text-[#e2c882]' : 'text-[#0b132b] group-hover:text-[#b08a42]'
                }`}>
                  {area.title}
                </h3>

                {/* Short Description */}
                <p className={`text-xs sm:text-sm font-sans leading-relaxed mb-5 ${
                  isMidnight ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {area.shortDesc}
                </p>

                {/* Focus Areas List */}
                <div className={`space-y-2 border-t pt-4 mb-6 ${
                  isMidnight ? 'border-slate-800' : 'border-slate-100'
                }`}>
                  {area.focusAreas.map((item, idx) => (
                    <div key={idx} className={`flex items-start gap-2 text-xs font-sans ${
                      isMidnight ? 'text-slate-200' : 'text-slate-700'
                    }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className={`pt-4 border-t ${isMidnight ? 'border-slate-800' : 'border-slate-100'}`}>
                <button
                  onClick={() => onConsultClick(area.title)}
                  className={`w-full inline-flex items-center justify-between px-4 py-2.5 rounded-lg text-xs font-sans font-bold uppercase tracking-wider transition-all duration-200 group/btn cursor-pointer ${
                    isMidnight
                      ? 'bg-[#131d3b] hover:bg-[#d4af37] text-white hover:text-[#070c1b]'
                      : 'bg-slate-50 hover:bg-[#0b132b] text-[#0b132b] hover:text-white'
                  }`}
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
          <p className={`text-xs max-w-2xl mx-auto italic ${
            isMidnight ? 'text-slate-400' : 'text-slate-600'
          }`}>
            * Legal services are rendered in accordance with the Advocates Act, 1961 and Bar Council of India rules. Each matter depends strictly upon its specific factual matrix and applicable legal provisions.
          </p>
        </div>

      </div>
    </section>
  );
};

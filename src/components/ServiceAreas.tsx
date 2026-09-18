import React from 'react';
import { MapPin, Building, Scale, Navigation, ArrowRight } from 'lucide-react';
import { ADVOCATE_CONFIG } from '../data/advocateData';
import { useTheme } from '../context/ThemeContext';

export const ServiceAreas: React.FC = () => {
  const { isMidnight } = useTheme();
  const areas = [
    {
      city: "Chandigarh",
      type: "Primary Office & High Court Seat",
      courts: "Punjab & Haryana High Court • District & Sessions Courts, Sector 43",
      description: "Physical chamber & office headquarters located at House No. 1741/2, Sector 43-B, Chandigarh. Primary jurisdiction for High Court writ petitions, revisions, criminal appeals, and Tricity proceedings.",
      isPrimaryOffice: true
    },
    {
      city: "Mohali (SAS Nagar)",
      type: "Active Practice Jurisdiction",
      courts: "District & Sessions Court Complex, SAS Nagar Mohali",
      description: "Regular legal representation and litigation defence for matters pending before the District and Sub-Divisional Courts in Mohali.",
      isPrimaryOffice: false
    },
    {
      city: "Panchkula",
      type: "Active Practice Jurisdiction",
      courts: "District & Sessions Courts, Sector 1, Panchkula",
      description: "Court advocacy, bail hearings, civil suits, and criminal trial defence before the District Judiciary of Panchkula (Haryana).",
      isPrimaryOffice: false
    },
    {
      city: "Yamunanagar",
      type: "Active Practice Jurisdiction",
      courts: "District & Sessions Courts, Jagadhri / Yamunanagar",
      description: "Litigation counsel and representation across trial and appellate matters before the District Court Complex in Yamunanagar & Jagadhri.",
      isPrimaryOffice: false
    }
  ];

  return (
    <section
      className={`py-20 relative transition-colors duration-300 ${
        isMidnight ? 'bg-[#070c1b] text-white border-b border-[#c5a059]/15' : 'bg-[#f8fafc] text-slate-900 border-b border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className={`text-xs font-sans font-bold uppercase tracking-[0.2em] block mb-2 ${
            isMidnight ? 'text-[#e2c882]' : 'text-[#b08a42]'
          }`}>
            Regional Jurisdictions &amp; Chambers
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight ${
            isMidnight ? 'text-white' : 'text-[#0b132b]'
          }`}>
            Areas Served
          </h2>
          <div className="w-16 h-1 bg-[#c5a059] mx-auto mt-4 mb-6" />
          <p className={`text-sm sm:text-base font-sans leading-relaxed ${
            isMidnight ? 'text-slate-300' : 'text-slate-600'
          }`}>
            While our physical chambers are based in Sector 43-B Chandigarh, Advocate Arpit Dua actively represents clients across connected judicial forums throughout the Tricity and Yamunanagar.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area) => (
            <div
              key={area.city}
              className={`rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between ${
                area.isPrimaryOffice
                  ? 'bg-[#0b132b] text-white border-2 border-[#c5a059] shadow-xl relative'
                  : isMidnight
                  ? 'bg-[#0e1838] text-slate-200 border border-[#1c2541] shadow-sm hover:border-[#c5a059]/60 hover:shadow-md'
                  : 'bg-white text-slate-800 border border-slate-200/80 shadow-sm hover:border-[#c5a059]/60 hover:shadow-md'
              }`}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[10px] font-sans font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      area.isPrimaryOffice
                        ? 'bg-[#c5a059] text-[#070c1b]'
                        : isMidnight
                        ? 'bg-[#131d3b] text-[#e2c882] border border-[#c5a059]/30'
                        : 'bg-slate-100 text-slate-600 border border-slate-200'
                    }`}
                  >
                    {area.type}
                  </span>
                  <MapPin
                    className={`w-4 h-4 ${
                      area.isPrimaryOffice ? 'text-[#d4af37]' : isMidnight ? 'text-[#c5a059]' : 'text-slate-400'
                    }`}
                  />
                </div>

                <h3
                  className={`font-serif text-2xl font-bold mb-2 ${
                    area.isPrimaryOffice ? 'text-white' : isMidnight ? 'text-white' : 'text-[#0b132b]'
                  }`}
                >
                  {area.city}
                </h3>

                <div
                  className={`text-xs font-semibold font-sans mb-3 pb-3 border-b ${
                    area.isPrimaryOffice
                      ? 'text-[#e2c882] border-slate-700'
                      : isMidnight
                      ? 'text-[#e2c882] border-slate-800'
                      : 'text-[#b08a42] border-slate-100'
                  }`}
                >
                  {area.courts}
                </div>

                <p
                  className={`text-xs leading-relaxed font-sans ${
                    area.isPrimaryOffice ? 'text-slate-300' : isMidnight ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {area.description}
                </p>
              </div>

              {area.isPrimaryOffice && (
                <div className="mt-6 pt-4 border-t border-slate-700/80">
                  <a
                    href="https://maps.google.com/?q=House+No.+1741/2,+Sector+43-B,+Chandigarh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d4af37] hover:underline"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>Get Directions to Chambers</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Physical Office Notice */}
        <div className={`mt-10 p-4 rounded-xl border text-center max-w-2xl mx-auto ${
          isMidnight ? 'bg-[#0e1838] border-[#1c2541] text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
        }`}>
          <p className="text-xs font-sans">
            <strong className={isMidnight ? 'text-white' : 'text-[#0b132b]'}>Note on Chamber Consultations:</strong> All in-person client conferences and brief discussions are conducted at our primary office in <strong>Sector 43-B, Chandigarh</strong>, or scheduled near court complexes.
          </p>
        </div>

      </div>
    </section>
  );
};

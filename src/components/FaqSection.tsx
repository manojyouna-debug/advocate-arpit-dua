import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search, Sparkles } from 'lucide-react';
import { FAQS } from '../data/advocateData';
import { useTheme } from '../context/ThemeContext';

export const FaqSection: React.FC = () => {
  const { isMidnight } = useTheme();
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'who-is-advocate-arpit-dua': true,
    'which-court-practise': true,
  });
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFaqs = FAQS.filter((faq) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      faq.question.toLowerCase().includes(q) ||
      faq.detailedAnswer.toLowerCase().includes(q) ||
      faq.shortAnswer.toLowerCase().includes(q)
    );
  });

  return (
    <section
      id="faqs"
      className={`py-20 md:py-28 relative transition-colors duration-300 ${
        isMidnight ? 'bg-[#0b132b] text-white border-t border-[#c5a059]/15' : 'bg-[#f8fafc] text-slate-900 border-t border-slate-200'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className={`text-xs font-sans font-bold uppercase tracking-[0.2em] block mb-2 ${
            isMidnight ? 'text-[#e2c882]' : 'text-[#b08a42]'
          }`}>
            Clear Answers &amp; Guidance
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight ${
            isMidnight ? 'text-white' : 'text-[#0b132b]'
          }`}>
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-[#c5a059] mx-auto mt-4 mb-6" />
          <p className={`text-sm font-sans leading-relaxed ${
            isMidnight ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Direct, factual answers to common questions regarding our legal practice, court jurisdiction, consultation procedure, and key legal remedies.
          </p>

          {/* Quick Search */}
          <div className="mt-6 relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search questions (e.g. bail, High Court, office)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs font-sans focus:outline-none focus:ring-2 focus:ring-[#c5a059] shadow-sm transition-colors ${
                isMidnight
                  ? 'bg-[#0e1838] border-slate-700 text-white placeholder-slate-400'
                  : 'bg-white border-slate-200 text-slate-800 placeholder-slate-400'
              }`}
            />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className={`text-center py-8 text-xs font-sans ${isMidnight ? 'text-slate-400' : 'text-slate-500'}`}>
              No matching questions found for &quot;{searchQuery}&quot;. Please contact our office directly at 8059288086.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = !!openIds[faq.id];
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border shadow-sm overflow-hidden transition-all duration-200 ${
                    isMidnight
                      ? 'bg-[#0e1838] border-[#1c2541]'
                      : 'bg-white border-slate-200/90'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer group"
                  >
                    <div className="flex items-start gap-3">
                      <span className={`p-1 rounded-md transition-colors mt-0.5 shrink-0 ${
                        isMidnight
                          ? 'bg-[#131d3b] text-[#e2c882] group-hover:bg-[#c5a059] group-hover:text-[#070c1b]'
                          : 'bg-[#0b132b]/5 text-[#b08a42] group-hover:bg-[#0b132b] group-hover:text-white'
                      }`}>
                        <HelpCircle className="w-4 h-4" />
                      </span>
                      <h3 className={`font-serif text-lg sm:text-xl font-bold transition-colors leading-snug ${
                        isMidnight
                          ? 'text-white group-hover:text-[#e2c882]'
                          : 'text-[#0b132b] group-hover:text-[#b08a42]'
                      }`}>
                        {faq.question}
                      </h3>
                    </div>

                    <div
                      className={`p-1.5 rounded-full border transition-all shrink-0 ${
                        isMidnight
                          ? 'border-slate-700 text-slate-400 group-hover:border-[#c5a059] group-hover:text-[#e2c882]'
                          : 'border-slate-200 text-slate-500 group-hover:border-[#c5a059] group-hover:text-[#b08a42]'
                      } ${isOpen ? (isMidnight ? 'rotate-180 bg-[#131d3b]' : 'rotate-180 bg-slate-50') : ''}`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className={`px-5 sm:px-6 pb-6 pt-1 font-sans text-xs sm:text-sm leading-relaxed border-t space-y-3 animate-in fade-in duration-200 ${
                      isMidnight ? 'border-slate-800 text-slate-300' : 'border-slate-100 text-slate-700'
                    }`}>
                      {/* Short Answer Pill for AEO */}
                      <div className={`p-3 rounded-xl border flex items-start gap-2 ${
                        isMidnight
                          ? 'bg-[#131d3b] border-[#c5a059]/30 text-amber-200'
                          : 'bg-amber-50/70 border-amber-200/60 text-slate-900'
                      }`}>
                        <Sparkles className={`w-4 h-4 shrink-0 mt-0.5 ${isMidnight ? 'text-[#e2c882]' : 'text-[#b08a42]'}`} />
                        <span className={`font-medium ${isMidnight ? 'text-amber-200' : 'text-slate-900'}`}>
                          {faq.shortAnswer}
                        </span>
                      </div>

                      <p className={isMidnight ? 'text-slate-300' : 'text-slate-600'}>
                        {faq.detailedAnswer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Notice */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0b132b] text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left border border-[#c5a059]/30">
          <div>
            <h4 className="font-serif text-lg font-bold text-white">
              Have a Specific Legal Question?
            </h4>
            <p className="text-xs text-slate-300 font-sans mt-0.5">
              Contact Advocate Arpit Dua directly for procedural advice regarding your matter.
            </p>
          </div>
          <a
            href="tel:8059288086"
            className="px-5 py-2.5 rounded-lg bg-[#c5a059] hover:bg-[#d4af37] text-[#070c1b] text-xs font-bold uppercase tracking-wider transition-colors shadow-md shrink-0"
          >
            Call 8059288086
          </a>
        </div>

      </div>
    </section>
  );
};

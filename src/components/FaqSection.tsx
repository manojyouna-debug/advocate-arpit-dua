import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search, Sparkles } from 'lucide-react';
import { FAQS } from '../data/advocateData';

export const FaqSection: React.FC = () => {
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
    <section id="faqs" className="py-20 md:py-28 bg-[#f8fafc] text-slate-900 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#b08a42] block mb-2">
            Clear Answers &amp; Guidance
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0b132b] tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-[#c5a059] mx-auto mt-4 mb-6" />
          <p className="text-sm text-slate-600 font-sans leading-relaxed">
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
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-sans text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#c5a059] shadow-sm"
            />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-8 text-slate-500 text-xs font-sans">
              No matching questions found for &quot;{searchQuery}&quot;. Please contact our office directly at 8059288086.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = !!openIds[faq.id];
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer group"
                  >
                    <div className="flex items-start gap-3">
                      <span className="p-1 rounded-md bg-[#0b132b]/5 text-[#b08a42] group-hover:bg-[#0b132b] group-hover:text-white transition-colors mt-0.5 shrink-0">
                        <HelpCircle className="w-4 h-4" />
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0b132b] group-hover:text-[#b08a42] transition-colors leading-snug">
                        {faq.question}
                      </h3>
                    </div>

                    <div
                      className={`p-1.5 rounded-full border border-slate-200 text-slate-500 group-hover:border-[#c5a059] group-hover:text-[#b08a42] transition-all shrink-0 ${
                        isOpen ? 'rotate-180 bg-slate-50' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-700 font-sans text-xs sm:text-sm leading-relaxed border-t border-slate-100 space-y-3 animate-in fade-in duration-200">
                      {/* Short Answer Pill for AEO */}
                      <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/60 flex items-start gap-2">
                        <Sparkles className="w-4 h-4 text-[#b08a42] shrink-0 mt-0.5" />
                        <span className="font-medium text-slate-900">
                          {faq.shortAnswer}
                        </span>
                      </div>

                      <p className="text-slate-600">
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
        <div className="mt-12 p-6 rounded-2xl bg-[#0b132b] text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
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

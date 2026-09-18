import React, { useEffect } from 'react';
import { X, Clock, Tag, ArrowRight, ShieldAlert, Phone, MessageSquare, Share2 } from 'lucide-react';
import { LegalArticle } from '../types';
import { ADVOCATE_CONFIG } from '../data/advocateData';
import { useTheme } from '../context/ThemeContext';

interface ArticleModalProps {
  article: LegalArticle | null;
  onClose: () => void;
  onConsultClick: (topic?: string) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose, onConsultClick }) => {
  const { isMidnight } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-article-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className={`relative w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col border transition-colors ${
        isMidnight ? 'bg-[#070c1b] border-[#c5a059]/40 text-white' : 'bg-white border-slate-200 text-slate-800'
      }`}>
        
        {/* Sticky Header with Title & Close */}
        <div className={`sticky top-0 z-10 px-6 py-4 flex items-center justify-between border-b ${
          isMidnight ? 'bg-[#0b132b] text-white border-slate-800' : 'bg-[#0b132b] text-white border-slate-800'
        }`}>
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded-full bg-[#c5a059]/20 text-[#e2c882] text-[11px] font-sans font-semibold border border-[#c5a059]/30">
              {article.category}
            </span>
            <span className="text-xs text-slate-300 font-sans flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{article.readTime}</span>
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#c5a059] cursor-pointer"
            aria-label="Close article modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Article Body */}
        <div className={`overflow-y-auto px-6 sm:px-10 py-8 space-y-8 font-sans ${
          isMidnight ? 'text-slate-300' : 'text-slate-800'
        }`}>
          
          {/* Article Header */}
          <div className={`space-y-3 border-b pb-6 ${isMidnight ? 'border-slate-800' : 'border-slate-100'}`}>
            <h1 id="modal-article-title" className={`text-2xl sm:text-3xl lg:text-4xl font-serif font-bold leading-tight ${
              isMidnight ? 'text-white' : 'text-[#0b132b]'
            }`}>
              {article.title}
            </h1>
            <p className={`text-base font-serif italic ${isMidnight ? 'text-slate-400' : 'text-slate-600'}`}>
              {article.subtitle}
            </p>
            <div className={`text-xs pt-2 ${isMidnight ? 'text-slate-400' : 'text-slate-500'}`}>
              Authored by <strong className={isMidnight ? 'text-[#e2c882]' : 'text-[#0b132b]'}>Advocate Arpit Dua</strong>, Litigation Counsel • Punjab &amp; Haryana High Court
            </div>
          </div>

          {/* Introduction */}
          <div className={`prose prose-slate max-w-none text-base sm:text-lg leading-relaxed font-sans ${
            isMidnight ? 'text-slate-300' : 'text-slate-700'
          }`}>
            {article.introduction.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Sections */}
          {article.sections.map((section, sIdx) => (
            <div key={sIdx} className="space-y-4 pt-2">
              <h2 className={`text-xl sm:text-2xl font-serif font-bold border-l-4 border-[#c5a059] pl-3 ${
                isMidnight ? 'text-white' : 'text-[#0b132b]'
              }`}>
                {section.heading}
              </h2>
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className={`leading-relaxed text-sm sm:text-base ${
                  isMidnight ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {p}
                </p>
              ))}

              {section.bulletPoints && (
                <ul className="space-y-2 pl-2 sm:pl-4 pt-2">
                  {section.bulletPoints.map((bp, bIdx) => (
                    <li key={bIdx} className={`flex items-start gap-2.5 text-xs sm:text-sm ${
                      isMidnight ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] mt-2 shrink-0" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Key Takeaways Card */}
          <div className={`p-6 rounded-xl border space-y-3 ${
            isMidnight
              ? 'bg-[#0e1838] border-[#c5a059]/30'
              : 'bg-amber-50/70 border-amber-200/80'
          }`}>
            <h3 className={`text-xs font-sans font-bold uppercase tracking-wider ${
              isMidnight ? 'text-[#e2c882]' : 'text-amber-900'
            }`}>
              Key Legal Takeaways
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {article.keyTakeaways.map((takeaway, tIdx) => (
                <div key={tIdx} className={`flex items-start gap-2 text-xs ${
                  isMidnight ? 'text-slate-200' : 'text-slate-800'
                }`}>
                  <span className="font-bold text-[#c5a059] shrink-0">✓</span>
                  <span>{takeaway}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Conclusion */}
          <div className={`pt-2 border-t ${isMidnight ? 'border-slate-800 text-slate-300' : 'border-slate-100 text-slate-800'}`}>
            <p className="text-sm sm:text-base leading-relaxed font-sans">
              {article.conclusion}
            </p>
          </div>

          {/* Mandatory Section 18 Disclaimer */}
          <div className={`p-4 rounded-xl border text-xs italic flex items-start gap-3 ${
            isMidnight ? 'bg-[#0b132b] border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
          }`}>
            <ShieldAlert className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
            <p>
              <strong>Legal Notice:</strong> This article is for general informational purposes only and does not constitute legal advice. If you require legal assistance, please consult a qualified advocate.
            </p>
          </div>

          {/* Callout Action Box */}
          <div className="p-6 rounded-2xl bg-[#0b132b] border border-[#c5a059]/30 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-serif text-lg font-bold text-white">
                Facing a Similar Legal Matter?
              </h4>
              <p className="text-xs text-slate-300 mt-0.5 font-sans">
                Schedule a confidential consultation with Advocate Arpit Dua.
              </p>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  onConsultClick(article.title);
                }}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-lg bg-[#c5a059] hover:bg-[#d4af37] text-[#070c1b] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Consult on This Matter
              </button>

              <a
                href={ADVOCATE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/30 transition-colors border border-[#25D366]/40"
                title="Discuss on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

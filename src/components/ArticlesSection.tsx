import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, FileText, ChevronRight } from 'lucide-react';
import { LEGAL_ARTICLES } from '../data/advocateData';
import { LegalArticle } from '../types';
import { ArticleModal } from './ArticleModal';
import { useTheme } from '../context/ThemeContext';

interface ArticlesSectionProps {
  onConsultClick: (topic?: string) => void;
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({ onConsultClick }) => {
  const { isMidnight } = useTheme();
  const [activeArticle, setActiveArticle] = useState<LegalArticle | null>(null);

  return (
    <section
      id="articles"
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
            Legal Insights &amp; Practical Guides
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight ${
            isMidnight ? 'text-white' : 'text-[#0b132b]'
          }`}>
            Legal Insights &amp; Practical Guides
          </h2>
          <div className="w-16 h-1 bg-[#c5a059] mx-auto mt-4 mb-6" />
          <p className={`text-sm sm:text-base font-sans leading-relaxed ${
            isMidnight ? 'text-slate-300' : 'text-slate-600'
          }`}>
            In-depth legal analyses authored by Advocate Arpit Dua explaining key safeguards, constitutional liberty provisions, and appellate remedies in criminal and trial jurisprudence.
          </p>
        </div>

        {/* 2 Featured Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {LEGAL_ARTICLES.map((article) => (
            <div
              key={article.id}
              className={`rounded-2xl p-7 sm:p-8 border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${
                isMidnight
                  ? 'bg-[#0e1838] border-[#1c2541] hover:border-[#c5a059]'
                  : 'bg-white border-slate-200/90 hover:border-[#c5a059]/60'
              }`}
            >
              <div>
                {/* Category & Read Time */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[11px] font-sans font-semibold px-3 py-1 rounded-full border ${
                    isMidnight
                      ? 'bg-[#131d3b] text-[#e2c882] border-[#c5a059]/30'
                      : 'text-[#b08a42] bg-amber-50 border-amber-200/60'
                  }`}>
                    {article.category}
                  </span>
                  <span className={`text-xs font-sans flex items-center gap-1 ${
                    isMidnight ? 'text-slate-400' : 'text-slate-400'
                  }`}>
                    <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className={`font-serif text-2xl font-bold transition-colors leading-tight mb-3 ${
                  isMidnight ? 'text-white group-hover:text-[#e2c882]' : 'text-[#0b132b] group-hover:text-[#b08a42]'
                }`}>
                  {article.title}
                </h3>

                {/* Subtitle / Teaser */}
                <p className={`text-xs font-serif italic mb-4 ${
                  isMidnight ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  {article.subtitle}
                </p>

                {/* Summary */}
                <p className={`text-xs sm:text-sm font-sans leading-relaxed mb-6 line-clamp-3 ${
                  isMidnight ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {article.summary}
                </p>

                {/* Bullet Highlights Preview */}
                <div className={`p-4 rounded-xl space-y-2 mb-6 border ${
                  isMidnight ? 'bg-[#131d3b] border-slate-800' : 'bg-slate-50 border-slate-100'
                }`}>
                  <span className={`text-[11px] font-sans font-bold uppercase tracking-wider block ${
                    isMidnight ? 'text-slate-200' : 'text-slate-700'
                  }`}>
                    Core Topics Covered:
                  </span>
                  {article.keyTakeaways.slice(0, 2).map((takeaway, idx) => (
                    <div key={idx} className={`text-xs flex items-start gap-2 ${
                      isMidnight ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      <span className="text-[#c5a059] font-bold">›</span>
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className={`pt-4 border-t flex items-center justify-between ${
                isMidnight ? 'border-slate-800' : 'border-slate-100'
              }`}>
                <button
                  onClick={() => setActiveArticle(article)}
                  className={`inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    isMidnight
                      ? 'text-white group-hover:text-[#e2c882]'
                      : 'text-[#0b132b] group-hover:text-[#b08a42]'
                  }`}
                >
                  <span>Read Full Article</span>
                  <ChevronRight className="w-4 h-4 text-[#c5a059] group-hover:translate-x-1 transition-transform" />
                </button>

                <span className={`text-[11px] font-sans ${isMidnight ? 'text-slate-400' : 'text-slate-400'}`}>
                  Complete text available
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for full reading */}
        <ArticleModal
          article={activeArticle}
          onClose={() => setActiveArticle(null)}
          onConsultClick={onConsultClick}
        />

      </div>
    </section>
  );
};

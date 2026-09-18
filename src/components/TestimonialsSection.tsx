import React, { useState, useEffect, useRef } from 'react';
import { 
  Quote, 
  Star, 
  ShieldCheck, 
  Scale, 
  ChevronLeft, 
  ChevronRight, 
  LayoutGrid, 
  SlidersHorizontal, 
  Lock, 
  Building2, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { CLIENT_TESTIMONIALS } from '../data/advocateData';
import { ClientTestimonial } from '../types';

interface TestimonialsSectionProps {
  onConsultClick: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onConsultClick }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [layoutMode, setLayoutMode] = useState<'carousel' | 'grid'>('carousel');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const categories = [
    'All',
    'High Court',
    'Criminal & Bail',
    'Civil & Property',
    'Commercial & NI Act'
  ];

  const filteredTestimonials = activeCategory === 'All' 
    ? CLIENT_TESTIMONIALS 
    : CLIENT_TESTIMONIALS.filter(t => t.matterCategory === activeCategory);

  // Keep index in valid range when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  const maxIndex = Math.max(0, filteredTestimonials.length - 1);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section 
      id="testimonials" 
      className="py-20 md:py-28 bg-[#070c1b] text-white relative overflow-hidden border-t border-b border-[#c5a059]/20"
      aria-labelledby="testimonials-heading"
    >
      {/* Subtle architectural ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#1c2541]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-800/80">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#e2c882] text-xs font-sans font-semibold tracking-wider uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Anonymized Client Experiences</span>
            </div>

            <h2 
              id="testimonials-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight"
            >
              Client <span className="text-[#c5a059] italic">Testimonials</span> &amp; Feedback
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              Reflections from individuals, business owners, and families represented before the Punjab &amp; Haryana High Court and Tricity District Courts. All identifying records are anonymized in strict compliance with legal ethics.
            </p>
          </div>

          {/* Layout Toggle (Carousel vs Grid) */}
          <div className="flex items-center gap-2 self-start md:self-end bg-slate-900/90 p-1 rounded-xl border border-slate-800">
            <button
              type="button"
              onClick={() => setLayoutMode('carousel')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-sans font-medium transition-all cursor-pointer ${
                layoutMode === 'carousel'
                  ? 'bg-[#c5a059] text-[#070c1b] font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
              title="Carousel Layout View"
              aria-pressed={layoutMode === 'carousel'}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Carousel</span>
            </button>
            <button
              type="button"
              onClick={() => setLayoutMode('grid')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-sans font-medium transition-all cursor-pointer ${
                layoutMode === 'grid'
                  ? 'bg-[#c5a059] text-[#070c1b] font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
              title="Grid Layout View"
              aria-pressed={layoutMode === 'grid'}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grid View</span>
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="py-6 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none max-w-full">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-medium whitespace-nowrap transition-all cursor-pointer border ${
                  activeCategory === category
                    ? 'bg-[#c5a059]/20 text-[#e2c882] border-[#c5a059] shadow-sm'
                    : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Carousel Arrows (only visible when in Carousel mode) */}
          {layoutMode === 'carousel' && filteredTestimonials.length > 1 && (
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-sans mr-1">
                <span className="text-[#e2c882] font-semibold">{currentIndex + 1}</span> of {filteredTestimonials.length}
              </span>
              <button
                type="button"
                onClick={handlePrev}
                className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-[#c5a059] transition-all cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-[#c5a059] transition-all cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Content Display: Carousel View */}
        {layoutMode === 'carousel' ? (
          <div className="relative">
            {filteredTestimonials.length === 0 ? (
              <div className="py-16 text-center text-slate-400 text-sm">
                No testimonials in this category currently.
              </div>
            ) : (
              <div className="overflow-hidden">
                <div 
                  className="transition-transform duration-500 ease-out flex"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {filteredTestimonials.map((item) => (
                    <div key={item.id} className="w-full flex-shrink-0 px-1 sm:px-2">
                      <div className="bg-gradient-to-b from-[#1c2541]/90 to-[#0b132b]/95 border border-[#c5a059]/35 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl relative">
                        {/* Decorative Quote Icon */}
                        <div className="absolute top-6 right-6 text-[#c5a059]/15 pointer-events-none">
                          <Quote className="w-16 h-16" />
                        </div>

                        {/* Top Metadata Row */}
                        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-800">
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-0.5 text-[#d4af37]">
                              {[...Array(item.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-[#d4af37]" />
                              ))}
                            </div>
                            <span className="text-[11px] font-sans font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50 flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" />
                              Verified Matter
                            </span>
                          </div>

                          <div className="flex items-center gap-2 text-xs font-sans text-slate-400">
                            <span className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 text-[11px]">
                              <Building2 className="w-3 h-3 text-[#c5a059]" />
                              {item.courtForum}
                            </span>
                            <span className="text-slate-500">•</span>
                            <span>{item.year}</span>
                          </div>
                        </div>

                        {/* Main Feedback Content */}
                        <div className="py-6 space-y-4">
                          <h3 className="text-lg sm:text-xl font-serif font-bold text-white leading-snug">
                            "{item.headline}"
                          </h3>
                          <p className="text-slate-300 text-sm sm:text-base font-sans leading-relaxed">
                            {item.feedback}
                          </p>
                        </div>

                        {/* Bottom Row: Client Role & Key Highlight */}
                        <div className="pt-5 border-t border-slate-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div>
                            <span className="text-white font-serif font-bold text-sm sm:text-base block">
                              {item.clientIdentifier}
                            </span>
                            <span className="text-xs text-slate-400 font-sans">
                              {item.clientRole}
                            </span>
                          </div>

                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/40 text-[#e2c882] text-xs font-sans font-medium self-start sm:self-auto">
                            <Scale className="w-3.5 h-3.5 text-[#d4af37]" />
                            <span>{item.keyHighlight}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pagination Indicators */}
            {filteredTestimonials.length > 1 && (
              <div className="flex justify-center items-center gap-2 pt-6">
                {filteredTestimonials.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentIndex === idx 
                        ? 'w-8 bg-[#c5a059]' 
                        : 'w-2 bg-slate-700 hover:bg-slate-600'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Content Display: Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((item) => (
              <div 
                key={item.id}
                className="bg-gradient-to-b from-[#1c2541]/90 to-[#0b132b]/95 border border-[#c5a059]/30 hover:border-[#c5a059]/60 rounded-xl p-6 shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-800 text-xs">
                    <div className="flex items-center gap-0.5 text-[#d4af37]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#d4af37]" />
                      ))}
                    </div>
                    <span className="text-[10px] font-sans text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {item.courtForum}
                    </span>
                  </div>

                  {/* Headline & Quote */}
                  <div className="py-4 space-y-2.5">
                    <h3 className="font-serif font-bold text-white text-base leading-snug">
                      "{item.headline}"
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed line-clamp-5">
                      {item.feedback}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 mt-2 space-y-2">
                  <div className="text-[11px] font-sans font-medium text-[#e2c882] flex items-center gap-1">
                    <Scale className="w-3 h-3 text-[#d4af37] shrink-0" />
                    <span className="truncate">{item.keyHighlight}</span>
                  </div>
                  <div>
                    <span className="text-white font-semibold text-xs block font-serif">
                      {item.clientIdentifier}
                    </span>
                    <span className="text-[11px] text-slate-400 block font-sans">
                      {item.clientRole} • {item.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Ethical Standards & Trust Footnote Strip */}
        <div className="mt-14 p-5 sm:p-6 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-5 text-xs text-slate-400 font-sans">
          <div className="flex items-start sm:items-center gap-3">
            <Lock className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5 sm:mt-0" />
            <p className="leading-relaxed">
              <strong className="text-slate-200">Legal Ethics &amp; Confidentiality Notice:</strong> In accordance with Bar Council of India standards, testimonials reflect individual client experiences and do not constitute an advertisement, solicitation, or guarantee of judicial outcomes. Names and case identifiers have been fully anonymized.
            </p>
          </div>

          <button
            type="button"
            onClick={onConsultClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#c5a059] hover:bg-[#d4af37] text-[#070c1b] font-bold text-xs uppercase tracking-wider whitespace-nowrap shadow-md transition-all shrink-0 cursor-pointer"
          >
            <span>Request Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import { Phone, MessageSquare, ArrowRight, ShieldCheck, Scale, Award, BookOpen, Camera, Upload, Calendar } from 'lucide-react';
import { ADVOCATE_CONFIG, TRUST_STRIP_ITEMS } from '../data/advocateData';

interface HeroProps {
  onConsultClick: () => void;
}

const ADVOCATE_IMAGE_URL = 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnqntMOHO1zorwV_3BCfwSMQNbjHl6z6jmiFyaQq9_y49l2B0rgJnBgMTwlpZr05T9heliOe56KhkP-l2VXBxZwsB2S5SYqJoMzXqydiDqOiOwvTnpRq34UVK-o-ZlE_6vtvWZm5unZNL13=s680-w680-h510-rw';

export const Hero: React.FC<HeroProps> = ({ onConsultClick }) => {
  const [portraitSrc, setPortraitSrc] = useState<string>(() => {
    const saved = localStorage.getItem('advocate_custom_photo');
    if (saved && saved.startsWith('data:image/')) return saved;
    return ADVOCATE_IMAGE_URL;
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleStorage = () => {
      const saved = localStorage.getItem('advocate_custom_photo');
      if (saved) setPortraitSrc(saved);
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setPortraitSrc(result);
          try {
            localStorage.setItem('advocate_custom_photo', result);
            window.dispatchEvent(new Event('storage'));
          } catch {
            // If localStorage is full, state is still updated
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-12 bg-[#070c1b] text-white overflow-hidden">
      {/* Background Architectural Texture with Deep Navy Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/high-court-facade.jpg"
          alt="Punjab and Haryana High Court Chandigarh architecture"
          className="w-full h-full object-cover object-center opacity-25 filter brightness-75 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070c1b] via-[#0b132b]/95 to-[#0b132b]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070c1b] via-transparent to-[#070c1b]/60" />
      </div>

      {/* Decorative Gold Grid Lines */}
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#c5a059]/15 to-transparent pointer-events-none" />
      <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c5a059]/15 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center my-4 lg:my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Slogan & Action CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#e2c882] text-[11px] sm:text-xs font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
              <span>LEGAL COUNSEL • LITIGATION • JUSTICE</span>
            </div>

            {/* Verified Main Primary H1 (Strictly one primary H1) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15]">
              Advocate in <span className="text-[#d4af37] italic">Chandigarh</span> High Court
            </h1>

            {/* Supporting Headline Philosophy */}
            <p className="text-lg sm:text-xl font-serif italic text-slate-200 border-l-2 border-[#c5a059] pl-4 py-1">
              &ldquo;{ADVOCATE_CONFIG.slogan}&rdquo;
            </p>

            {/* Supporting Factual Copy */}
            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-2xl font-light">
              <strong className="font-semibold text-white">Advocate Arpit Dua</strong> is a Chandigarh-based litigation counsel practising before the <strong className="font-medium text-slate-100">Punjab &amp; Haryana High Court</strong> and District Courts across <strong className="font-medium text-slate-100">Chandigarh, Mohali, Panchkula, and Yamunanagar</strong>. Focused on thorough legal research, strategic preparation, and responsible courtroom representation.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={onConsultClick}
                id="hero-schedule-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-4 rounded-xl bg-gradient-to-r from-[#8a6514] via-[#a3791a] to-[#8a6514] hover:from-[#9c7319] hover:via-[#b58820] hover:to-[#9c7319] text-white font-sans font-extrabold text-sm sm:text-base tracking-wide uppercase shadow-[0_0_25px_rgba(212,175,55,0.45),0_4px_12px_rgba(0,0,0,0.5)] border-2 border-[#edd388] transition-all transform hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer whitespace-nowrap min-h-[48px] focus:outline-none focus:ring-4 focus:ring-[#d4af37]/50"
              >
                <Calendar className="w-5 h-5 text-white shrink-0 stroke-[2.5]" />
                <span className="font-extrabold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">Schedule Consultation</span>
              </button>

              <a
                href={ADVOCATE_CONFIG.telUrl}
                id="hero-call-cta"
                className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-[#c5a059]/40 text-white font-sans font-semibold text-xs uppercase tracking-wider transition-all"
              >
                <Phone className="w-4 h-4 text-[#c5a059]" />
                <span>Call: {ADVOCATE_CONFIG.phone}</span>
              </a>

              <a
                href={ADVOCATE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-cta"
                className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-[#25D366]/50 text-[#25D366] font-sans font-semibold text-xs uppercase tracking-wider transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Quick Badges / Verification Facts */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 border-t border-slate-800/80">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                <span>Enrolled Advocate (2022)</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Scale className="w-4 h-4 text-[#c5a059]" />
                <span>First-Generation Counsel</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#c5a059]" />
                <span>Sector 43-B, Chandigarh Office</span>
              </span>
            </div>

          </div>

          {/* Right Column: Advocate Portrait & Visual Anchor */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Decorative Glow & Gold Corner Frames */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#c5a059]/40 via-transparent to-[#c5a059]/30 rounded-2xl blur-sm" />
              
              {/* Hidden File Input for Real Photo Upload */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
                id="advocate-photo-input"
              />

              <div className="relative rounded-2xl overflow-hidden bg-[#0b132b] border border-[#c5a059]/40 shadow-2xl">
                <div className="relative aspect-[3/4] overflow-hidden group">
                  <img
                    src={portraitSrc}
                    alt="Advocate Arpit Dua - Litigation Counsel Chandigarh High Court"
                    className="w-full h-full object-cover object-[center_20%] filter contrast-[1.02] brightness-[1.01] transition-all duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if custom path fails
                      if (portraitSrc !== '/assets/advocate_arpit_real.jpg') {
                        setPortraitSrc('/assets/advocate_arpit_real.jpg');
                      }
                    }}
                  />
                  {/* Subtle Inner Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070c1b] via-[#070c1b]/15 to-transparent pointer-events-none" />

                  {/* Quick Change / Upload Real Photo Action Button */}
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#070c1b]/85 hover:bg-[#070c1b] text-[#e2c882] hover:text-white text-[11px] font-sans font-semibold tracking-wide border border-[#c5a059]/50 shadow-lg backdrop-blur-sm transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
                    title="Upload or replace with Advocate's original photo"
                  >
                    <Camera className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Upload Real Photo</span>
                  </button>
                  
                  {/* Floating Identity Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#070c1b]/90 backdrop-blur-md border border-[#c5a059]/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="font-serif text-lg font-bold text-white">Advocate Arpit Dua</h2>
                        <p className="text-xs font-sans text-[#c5a059] font-medium">BBA (2017) • LL.B. (2022)</p>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-[#c5a059]/20 text-[#e2c882] text-[10px] font-semibold tracking-wider uppercase border border-[#c5a059]/40">
                        High Court
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 mt-2 line-clamp-2">
                      Practising before Punjab &amp; Haryana High Court and District Courts across Tricity &amp; Yamunanagar.
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Accents */}
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#d4af37] pointer-events-none" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#d4af37] pointer-events-none" />
            </div>
          </div>

        </div>
      </div>

      {/* Trust Strip: 4 Elegant Cards below hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TRUST_STRIP_ITEMS.map((item) => (
            <div
              key={item.number}
              className="p-5 rounded-xl bg-[#0b132b]/80 backdrop-blur-sm border border-slate-800 hover:border-[#c5a059]/50 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-[#c5a059] tracking-wider">
                  {item.number}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#c5a059]/60 group-hover:bg-[#d4af37] transition-colors" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#d4af37] transition-colors mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-sans font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

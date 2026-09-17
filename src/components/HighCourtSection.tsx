import React, { useState, useRef, useEffect } from 'react';
import { Building, Scale, Shield, CheckCircle, ArrowRight, Phone, Camera, Check } from 'lucide-react';
import { ADVOCATE_CONFIG } from '../data/advocateData';

interface HighCourtSectionProps {
  onConsultClick: () => void;
}

const DEFAULT_HIGHCOURT_PHOTO = '/assets/advocate-highcourt-official.jpg?v=3';

export const HighCourtSection: React.FC<HighCourtSectionProps> = ({ onConsultClick }) => {
  const [photoSrc, setPhotoSrc] = useState<string>(DEFAULT_HIGHCOURT_PHOTO);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [uploadedSuccess, setUploadedSuccess] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Load user-uploaded photo from localStorage if present
    try {
      const savedPhoto = localStorage.getItem('advocate_highcourt_photo');
      if (savedPhoto && savedPhoto.startsWith('data:image')) {
        setPhotoSrc(savedPhoto);
      }
    } catch {
      // ignore localStorage errors
    }
  }, []);

  const handleFileProcess = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setPhotoSrc(result);
        setUploadedSuccess(true);
        setTimeout(() => setUploadedSuccess(false), 3500);
        try {
          localStorage.setItem('advocate_highcourt_photo', result);
        } catch {
          // storage quota exceeded, state still holds it
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileProcess(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      handleFileProcess(file);
    }
  };

  return (
    <section id="high-court" className="py-20 md:py-28 bg-[#0b132b] text-white relative overflow-hidden">
      {/* Background Architectural Photo with Atmospheric Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={photoSrc}
          alt="Advocate Arpit Dua at Punjab & Haryana High Court, Chandigarh"
          className="w-full h-full object-cover object-[center_20%] opacity-40 filter contrast-105 brightness-95"
          referrerPolicy="no-referrer"
          onError={() => {
            if (photoSrc !== DEFAULT_HIGHCOURT_PHOTO) {
              setPhotoSrc(DEFAULT_HIGHCOURT_PHOTO);
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070c1b] via-[#070c1b]/80 to-[#0b132b]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b132b] via-transparent to-[#070c1b]/85" />
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
            <div className="w-full max-w-md bg-gradient-to-b from-[#1c2541] to-[#070c1b] border border-[#c5a059]/40 rounded-2xl p-6 sm:p-7 shadow-2xl space-y-5">
              
              {/* Hidden file input for uploading the real photo directly */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
                id="highcourt-photo-file-input"
              />

              {/* Real High Court Photo Showcase */}
              <div 
                className={`relative rounded-xl overflow-hidden border transition-all duration-300 shadow-lg group ${
                  isDragging ? 'border-[#d4af37] ring-2 ring-[#c5a059]/50 scale-[1.01]' : 'border-[#c5a059]/30'
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
              >
                <img
                  src={photoSrc}
                  alt="Advocate Arpit Dua standing in front of Punjab & Haryana High Court Chandigarh"
                  className="w-full aspect-[4/3] sm:aspect-[16/11] object-cover object-[center_20%] filter contrast-[1.02] brightness-[1.02] transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={() => {
                    if (photoSrc !== DEFAULT_HIGHCOURT_PHOTO) {
                      setPhotoSrc(DEFAULT_HIGHCOURT_PHOTO);
                    }
                  }}
                />

                {/* Upload / Replace Photo Button */}
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className={`absolute top-2.5 right-2.5 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-sans font-medium tracking-wide border shadow-md backdrop-blur-sm transition-all cursor-pointer ${
                    uploadedSuccess
                      ? 'bg-emerald-950/90 text-emerald-300 border-emerald-500/50'
                      : 'bg-[#070c1b]/85 hover:bg-[#070c1b] text-[#e2c882] hover:text-white border-[#c5a059]/50'
                  }`}
                  title="Click or drag-and-drop to upload original photo file"
                >
                  {uploadedSuccess ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Camera className="w-3.5 h-3.5 text-[#d4af37]" />
                  )}
                  <span>{uploadedSuccess ? 'Photo Uploaded!' : 'Update Photo'}</span>
                </button>

                {isDragging && (
                  <div className="absolute inset-0 z-30 bg-[#070c1b]/80 flex flex-col items-center justify-center p-4 border-2 border-dashed border-[#d4af37] rounded-xl text-center">
                    <Camera className="w-8 h-8 text-[#d4af37] mb-2 animate-bounce" />
                    <p className="text-xs font-semibold text-white">Drop Advocate's photo here</p>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#070c1b]/95 via-[#070c1b]/20 to-transparent flex items-end p-3 pointer-events-none">
                  <div className="flex items-center justify-between w-full text-[11px] font-sans">
                    <span className="text-white font-semibold drop-shadow flex items-center gap-1.5">
                      <Scale className="w-3.5 h-3.5 text-[#c5a059]" />
                      Punjab &amp; Haryana High Court
                    </span>
                    <span className="text-[#c5a059] font-bold uppercase tracking-wider text-[10px] bg-black/70 px-2 py-0.5 rounded border border-[#c5a059]/40">
                      Chandigarh
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
                <div>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#d4af37]">
                    Primary Seat of Practice
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white mt-0.5">
                    Punjab &amp; Haryana High Court
                  </h3>
                </div>
                <div className="p-2.5 rounded-xl bg-[#c5a059]/15 text-[#d4af37]">
                  <Building className="w-5 h-5" />
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

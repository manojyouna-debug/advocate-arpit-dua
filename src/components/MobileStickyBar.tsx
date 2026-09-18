import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { ADVOCATE_CONFIG } from '../data/advocateData';

interface MobileStickyBarProps {
  onConsultClick?: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onConsultClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#070c1b]/95 backdrop-blur-md border-t border-[#c5a059]/30 p-2 shadow-2xl animate-in slide-in-from-bottom duration-300">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* Schedule Consultation Modal CTA */}
        <button
          type="button"
          onClick={onConsultClick}
          className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 py-2.5 px-2 rounded-xl bg-gradient-to-r from-[#c5a059] to-[#d4af37] text-[#070c1b] font-sans font-bold text-[11px] uppercase tracking-wider shadow-md active:scale-95 transition-transform cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Consult</span>
        </button>

        {/* WhatsApp */}
        <a
          href={ADVOCATE_CONFIG.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 py-2.5 px-2 rounded-xl bg-[#25D366] text-white font-sans font-bold text-[11px] uppercase tracking-wider shadow-md active:scale-95 transition-transform"
        >
          <MessageSquare className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">WhatsApp</span>
        </a>

        {/* Call Now */}
        <a
          href={ADVOCATE_CONFIG.telUrl}
          className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 py-2.5 px-2 rounded-xl bg-slate-900 border border-slate-700 text-white font-sans font-bold text-[11px] uppercase tracking-wider shadow-md active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
          <span className="truncate">Call</span>
        </a>
      </div>
    </div>
  );
};

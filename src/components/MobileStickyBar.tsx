import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { ADVOCATE_CONFIG } from '../data/advocateData';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#070c1b]/95 backdrop-blur-md border-t border-[#c5a059]/30 p-2.5 shadow-2xl animate-in slide-in-from-bottom duration-300">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        {/* Call Now */}
        <a
          href={ADVOCATE_CONFIG.telUrl}
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#c5a059] text-[#070c1b] font-sans font-bold text-xs uppercase tracking-wider shadow-md active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 fill-current" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href={ADVOCATE_CONFIG.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] text-white font-sans font-bold text-xs uppercase tracking-wider shadow-md active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

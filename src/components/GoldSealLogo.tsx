import React from 'react';

interface GoldSealLogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export const GoldSealLogo: React.FC<GoldSealLogoProps> = ({ 
  size = 56, 
  className = "",
  showText = false
}) => {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-md"
        aria-label="Advocate Arpit Dua Seal Logo"
      >
        {/* Outer Ring */}
        <circle cx="100" cy="100" r="95" stroke="#c5a059" strokeWidth="4" />
        <circle cx="100" cy="100" r="90" stroke="#c5a059" strokeWidth="1" strokeDasharray="3 3" opacity="0.8" />
        <circle cx="100" cy="100" r="74" stroke="#c5a059" strokeWidth="2" />

        {/* Text Along Path: Top Arc for ADVOCATE ARPIT DUA */}
        <path
          id="topArc"
          d="M 28 100 A 72 72 0 1 1 172 100"
          fill="none"
        />
        <text
          fill="#d4af37"
          fontSize="15"
          fontFamily="Montserrat, sans-serif"
          fontWeight="700"
          letterSpacing="4"
        >
          <textPath href="#topArc" startOffset="50%" textAnchor="middle">
            ADVOCATE ARPIT DUA
          </textPath>
        </text>

        {/* Text Along Path: Bottom Arc for DUA ASSOCIATES */}
        <path
          id="bottomArc"
          d="M 172 100 A 72 72 0 0 1 28 100"
          fill="none"
        />
        <text
          fill="#d4af37"
          fontSize="13"
          fontFamily="Montserrat, sans-serif"
          fontWeight="600"
          letterSpacing="3"
        >
          <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
            ★ DUA ASSOCIATES ★
          </textPath>
        </text>

        {/* Inner Circle Border */}
        <circle cx="100" cy="100" r="62" stroke="#c5a059" strokeWidth="1.5" />

        {/* Laurel Wreath Left Side */}
        <g stroke="#c5a059" fill="#c5a059" opacity="0.85">
          <path d="M 58 126 C 54 114 54 90 64 74" fill="none" strokeWidth="1.5" />
          <ellipse cx="58" cy="116" rx="4" ry="2" transform="rotate(-30 58 116)" />
          <ellipse cx="54" cy="104" rx="4.5" ry="2" transform="rotate(-15 54 104)" />
          <ellipse cx="55" cy="92" rx="4.5" ry="2" transform="rotate(10 55 92)" />
          <ellipse cx="60" cy="81" rx="4.5" ry="2" transform="rotate(30 60 81)" />
          <ellipse cx="68" cy="73" rx="4" ry="2" transform="rotate(50 68 73)" />
        </g>

        {/* Laurel Wreath Right Side */}
        <g stroke="#c5a059" fill="#c5a059" opacity="0.85">
          <path d="M 142 126 C 146 114 146 90 136 74" fill="none" strokeWidth="1.5" />
          <ellipse cx="142" cy="116" rx="4" ry="2" transform="rotate(30 142 116)" />
          <ellipse cx="146" cy="104" rx="4.5" ry="2" transform="rotate(15 146 104)" />
          <ellipse cx="145" cy="92" rx="4.5" ry="2" transform="rotate(-10 145 92)" />
          <ellipse cx="140" cy="81" rx="4.5" ry="2" transform="rotate(-30 140 81)" />
          <ellipse cx="132" cy="73" rx="4" ry="2" transform="rotate(-50 132 73)" />
        </g>

        {/* Laurel Bottom Knot Ribbon */}
        <path d="M 94 135 C 97 132 103 132 106 135 L 109 140 L 102 137 L 98 140 Z" fill="#c5a059" />

        {/* Scales of Justice Central Pillar with Arrowhead */}
        <line x1="100" y1="67" x2="100" y2="130" stroke="#d4af37" strokeWidth="2.5" />
        <polygon points="100,60 95,68 105,68" fill="#d4af37" />
        <circle cx="100" cy="77" r="4" fill="#d4af37" />
        
        {/* Horizontal Balance Beam */}
        <path d="M 76 80 L 100 76 L 124 80" stroke="#d4af37" strokeWidth="2" fill="none" />

        {/* Left Scale Strings & Pan */}
        <line x1="76" y1="80" x2="68" y2="104" stroke="#c5a059" strokeWidth="1" />
        <line x1="76" y1="80" x2="84" y2="104" stroke="#c5a059" strokeWidth="1" />
        <path d="M 66 104 Q 76 112 86 104 Z" fill="#d4af37" />

        {/* Right Scale Strings & Pan */}
        <line x1="124" y1="80" x2="116" y2="104" stroke="#c5a059" strokeWidth="1" />
        <line x1="124" y1="80" x2="132" y2="104" stroke="#c5a059" strokeWidth="1" />
        <path d="M 114 104 Q 124 112 134 104 Z" fill="#d4af37" />

        {/* Base of Pillar */}
        <path d="M 91 130 L 109 130 L 105 127 L 95 127 Z" fill="#d4af37" />
      </svg>

      {showText && (
        <div className="flex flex-col text-left min-w-0">
          <span className="font-serif text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-tight text-white group-hover:text-[#d4af37] transition-colors leading-tight whitespace-nowrap truncate">
            Advocate Arpit Dua
          </span>
          <span className="text-[9px] sm:text-[10px] md:text-[11px] font-sans font-medium uppercase tracking-[0.12em] sm:tracking-[0.18em] text-[#c5a059] leading-tight mt-0.5 whitespace-nowrap truncate">
            Punjab &amp; Haryana High Court
          </span>
        </div>
      )}
    </div>
  );
};

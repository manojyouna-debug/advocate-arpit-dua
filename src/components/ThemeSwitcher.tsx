import React from 'react';
import { Sun, Moon, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeSwitcherProps {
  variant?: 'compact' | 'full' | 'icon-only';
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  variant = 'compact',
  className = '',
}) => {
  const { theme, isMidnight, toggleTheme } = useTheme();

  if (variant === 'icon-only') {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className={`p-2 rounded-xl border transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#c5a059] active:scale-95 ${
          isMidnight
            ? 'bg-[#0e1838] border-[#c5a059]/50 text-[#e2c882] hover:bg-[#131d3b] hover:border-[#d4af37]'
            : 'bg-[#0b132b]/80 border-slate-700 text-slate-200 hover:text-white hover:border-[#c5a059]/50'
        } ${className}`}
        title={isMidnight ? 'Switch to Light Theme' : "Switch to 'Midnight Legal' Dark Theme"}
        aria-label={isMidnight ? 'Switch to Light Theme' : "Switch to 'Midnight Legal' Dark Theme"}
        aria-pressed={isMidnight}
      >
        {isMidnight ? (
          <Sun className="w-4 h-4 text-[#e2c882] animate-in spin-in-90 duration-200" />
        ) : (
          <Moon className="w-4 h-4 text-[#d4af37] animate-in zoom-in-75 duration-200" />
        )}
      </button>
    );
  }

  if (variant === 'full') {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#c5a059] ${
          isMidnight
            ? 'bg-[#0e1838] border-[#c5a059]/40 text-white'
            : 'bg-slate-900 border-slate-800 text-slate-200'
        } ${className}`}
        aria-label={isMidnight ? 'Switch to Light Theme' : "Switch to 'Midnight Legal' Dark Theme"}
      >
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-[#c5a059]/15 text-[#e2c882]">
            {isMidnight ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-[#d4af37]" />}
          </div>
          <div className="text-left">
            <span className="block text-xs font-semibold">
              {isMidnight ? 'Midnight Legal (Active)' : 'Light Theme (Active)'}
            </span>
            <span className="block text-[10px] text-slate-400">
              {isMidnight ? 'Switch to Classic Light Chambers' : 'Switch to Navy & Gold Dark Mode'}
            </span>
          </div>
        </div>

        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-black/40 border border-[#c5a059]/30 text-[#e2c882]">
          {isMidnight ? 'Midnight' : 'Light'}
        </span>
      </button>
    );
  }

  // Default compact pill switcher
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`group inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-sans font-medium transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#c5a059] active:scale-95 ${
        isMidnight
          ? 'bg-[#0e1838]/90 hover:bg-[#131d3b] border-[#c5a059]/50 text-[#e2c882] shadow-[0_0_12px_rgba(212,175,55,0.15)]'
          : 'bg-[#070c1b]/80 hover:bg-[#070c1b] border-slate-700/80 hover:border-[#c5a059]/50 text-slate-300 hover:text-white'
      } ${className}`}
      title={isMidnight ? 'Switch to Light Theme' : "Switch to 'Midnight Legal' Dark Theme"}
      aria-label={isMidnight ? 'Switch to Light Theme' : "Switch to 'Midnight Legal' Dark Theme"}
      aria-pressed={isMidnight}
    >
      <div className="relative flex items-center justify-center">
        {isMidnight ? (
          <Moon className="w-3.5 h-3.5 text-[#d4af37] animate-in zoom-in-75 duration-200" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-[#e2c882] animate-in spin-in-90 duration-200" />
        )}
      </div>

      <span className="font-medium tracking-wide">
        {isMidnight ? (
          <span className="flex items-center gap-1">
            <span>Midnight Legal</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
          </span>
        ) : (
          <span>Light Theme</span>
        )}
      </span>
    </button>
  );
};

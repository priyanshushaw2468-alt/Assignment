import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants.ts';
import { Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`sticky top-0 z-50 w-full transition-all duration-500 border-b ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md border-slate-100 py-3 shadow-sm' 
            : 'bg-navy border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-serif font-bold text-xl shadow-lg ${isScrolled ? 'bg-navy text-gold' : 'bg-gold text-navy'}`}>
              E
            </div>
            <span className={`font-serif font-bold text-xl tracking-tight ${isScrolled ? 'text-navy' : 'text-white'}`}>
              Ecole<span className="text-gold">Globale</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  isScrolled 
                    ? 'text-slate-600 hover:text-navy' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <button className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5 ${
              isScrolled 
                ? 'bg-navy text-white' 
                : 'bg-white text-navy'
            }`}>
              Login
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? (
              <X className={isScrolled ? 'text-navy' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-navy' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 md:hidden flex flex-col p-6 gap-4 animate-in slide-in-from-top-2">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-navy font-medium text-lg py-2 border-b border-slate-50"
              >
                {item.label}
              </a>
            ))}
            <button className="w-full bg-navy text-white py-4 rounded-xl font-semibold mt-2 shadow-lg shadow-navy/20">
              Parent Login
            </button>
          </div>
        )}
      </nav>

      {/* Secondary Category Bar - Minimal */}
      <div className={`sticky top-[68px] md:top-[80px] z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'} overflow-x-auto`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-center gap-8 h-12 no-scrollbar">
           {['Top 10', 'Fee Structure', 'Admission Process', 'Parent Reviews', 'Alumni'].map((cat) => (
             <a key={cat} href="#listings" className="text-sm font-medium text-slate-500 hover:text-navy transition-colors whitespace-nowrap">
               {cat}
             </a>
           ))}
        </div>
      </div>
    </>
  );
};
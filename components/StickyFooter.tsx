import React from 'react';
import { Phone, Mail } from 'lucide-react';

export const StickyFooter: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 md:hidden">
      <div className="flex h-16">
        <a href="tel:+911234567890" className="flex-1 flex flex-col items-center justify-center bg-white text-navy active:bg-gray-50">
          <Phone className="w-5 h-5 mb-1 text-navy" />
          <span className="text-[10px] font-bold uppercase tracking-wide">Call Admissions</span>
        </a>
        <button className="flex-1 flex flex-col items-center justify-center bg-navy text-white active:bg-navy-light">
          <Mail className="w-5 h-5 mb-1 text-gold" />
          <span className="text-[10px] font-bold uppercase tracking-wide text-gold">Enquire Now</span>
        </button>
      </div>
    </div>
  );
};
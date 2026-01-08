import React, { useState } from 'react';
import { List, ChevronUp } from 'lucide-react';

export const FAB: React.FC = () => {
  const [showToc, setShowToc] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-40 flex flex-col gap-3">
      {/* Back to Top */}
      <button 
        onClick={scrollToTop}
        className="w-10 h-10 bg-white text-navy rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 border border-gray-100 transition-transform hover:-translate-y-1"
        aria-label="Back to Top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>

      {/* TOC Toggle */}
      <div className="relative">
        {showToc && (
           <div className="absolute bottom-14 right-0 w-64 bg-white rounded-lg shadow-xl border border-gray-100 p-4 animate-in slide-in-from-bottom-5 origin-bottom-right">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Contents</h4>
              <ul className="space-y-2">
                 <li><a href="#listings" className="text-sm text-navy hover:text-gold block">Top 10 Schools</a></li>
                 <li><a href="#admission" className="text-sm text-navy hover:text-gold block">Admission Criteria</a></li>
                 <li><a href="#fees" className="text-sm text-navy hover:text-gold block">Fee Structure</a></li>
              </ul>
           </div>
        )}
        <button 
            onClick={() => setShowToc(!showToc)}
            className="w-12 h-12 bg-navy text-gold rounded-full shadow-xl flex items-center justify-center hover:bg-navy-light transition-all hover:scale-105"
        >
            <List className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
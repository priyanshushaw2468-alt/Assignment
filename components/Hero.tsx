import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[600px] flex items-center justify-center w-full bg-navy overflow-hidden">
      {/* Background Image with refined gradient */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?random=10" 
          alt="Ecole Globale Campus" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-gold-light text-xs font-medium tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
          Admissions Open 2026-27
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white mb-8 leading-[1.1] tracking-tight">
          Dehradun's <span className="text-gold italic font-serif">Premier</span> <br className="hidden md:block"/>Boarding Schools
        </h1>
        
        <p className="text-slate-300 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          Curated rankings and exclusive insights for parents seeking excellence in education.
        </p>

        {/* Minimal Search Bar */}
        <div className="w-full max-w-2xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 to-white/20 rounded-full blur opacity-30 transition duration-500 group-hover:opacity-60"></div>
          <div className="relative flex items-center bg-white/95 backdrop-blur-xl rounded-full shadow-2xl p-2 transition-transform duration-300 focus-within:scale-[1.01]">
            <Search className="text-slate-400 w-5 h-5 ml-4" />
            <input 
              type="text" 
              placeholder="Find schools by name, board, or curriculum..." 
              className="flex-1 px-4 py-4 bg-transparent outline-none text-navy placeholder-slate-400 text-base font-light"
            />
            <button className="hidden md:flex items-center gap-2 bg-navy text-white px-8 py-3.5 rounded-full hover:bg-navy-light transition-all shadow-lg shadow-navy/20 font-medium text-sm">
              Search
            </button>
            <button className="md:hidden p-3 bg-navy text-white rounded-full">
              <Search className="w-5 h-5" />
            </button>
          </div>
          
          {/* Quick Filters */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
             {['Girls Only', 'Co-Ed', 'CBSE', 'IB Board'].map((filter) => (
               <button key={filter} className="text-xs font-medium text-slate-300 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/10 transition-colors">
                 {filter}
               </button>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};
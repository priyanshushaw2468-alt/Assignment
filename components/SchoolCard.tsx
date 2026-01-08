import React from 'react';
import { School } from '../types';
import { Star, ArrowRight, MapPin, IndianRupee, Users, School as SchoolIcon } from 'lucide-react';

interface SchoolCardProps {
  school: School;
}

export const SchoolCard: React.FC<SchoolCardProps> = ({ school }) => {
  return (
    <div className={`group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:translate-y-[-4px] ${school.isFeatured ? 'shadow-glow ring-1 ring-gold/30' : 'shadow-card hover:shadow-xl'}`}>
      
      {/* Rank Badge - Floating */}
      <div className="absolute top-6 left-6 z-20">
        <div className={`flex items-center justify-center w-12 h-12 rounded-2xl font-serif font-bold text-xl shadow-lg backdrop-blur-md ${school.rank === 1 ? 'bg-gold text-white' : 'bg-white/90 text-navy'}`}>
          #{school.rank}
        </div>
      </div>

      <div className="flex flex-col md:flex-row h-full">
        {/* Image Section */}
        <div className="w-full md:w-[380px] h-64 md:h-auto relative overflow-hidden">
            <img 
              src={school.image} 
              alt={school.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Mobile Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden"></div>
            
            {/* Rating Overlay */}
            <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
                <Star className="w-3.5 h-3.5 fill-gold text-gold" />
                <span className="font-bold text-sm text-navy">{school.rating}</span>
                <span className="text-slate-500 text-xs border-l border-slate-300 pl-1.5 ml-0.5">{school.reviewCount} Reviews</span>
            </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <div>
                <h2 className="text-xl md:text-2xl font-serif font-bold text-navy group-hover:text-gold transition-colors duration-300 leading-tight">
                  {school.name}
                </h2>
                <div className="flex items-center gap-2 mt-2">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-semibold border border-slate-200">
                        {school.board}
                    </span>
                    {school.isFeatured && (
                       <span className="inline-block px-2.5 py-0.5 rounded-md bg-gold/10 text-gold text-xs font-bold uppercase tracking-wider border border-gold/20">Featured</span>
                    )}
                </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-4 h-4 text-slate-400" />
            <p className="text-slate-500 text-sm font-medium">{school.location}</p>
          </div>

          {/* Icon Grid with Tooltips */}
          <div className="flex flex-wrap gap-6 mb-8 pt-4 border-t border-slate-50">
            
            {/* Fees */}
            <div className="group/tooltip relative flex items-center gap-3 cursor-default">
              <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-navy group-hover/tooltip:bg-navy group-hover/tooltip:text-gold transition-colors">
                <IndianRupee className="w-4 h-4" />
              </div>
              <div>
                 <div className="text-sm font-semibold text-navy">{school.fees}</div>
                 <div className="text-[10px] text-slate-400 uppercase tracking-wide">Per Annum</div>
              </div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-navy text-white text-xs rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-all duration-300 translate-y-2 group-hover/tooltip:translate-y-0 pointer-events-none z-20 shadow-xl whitespace-nowrap">
                Tuition & Boarding Fees
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-navy"></div>
              </div>
            </div>

            {/* Ratio */}
            <div className="group/tooltip relative flex items-center gap-3 cursor-default">
              <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-navy group-hover/tooltip:bg-navy group-hover/tooltip:text-gold transition-colors">
                <Users className="w-4 h-4" />
              </div>
              <div>
                 <div className="text-sm font-semibold text-navy">{school.ratio}</div>
                 <div className="text-[10px] text-slate-400 uppercase tracking-wide">Ratio</div>
              </div>

              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-navy text-white text-xs rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-all duration-300 translate-y-2 group-hover/tooltip:translate-y-0 pointer-events-none z-20 shadow-xl whitespace-nowrap">
                Student-Teacher Ratio
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-navy"></div>
              </div>
            </div>

            {/* Type */}
            <div className="group/tooltip relative flex items-center gap-3 cursor-default">
               <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-navy group-hover/tooltip:bg-navy group-hover/tooltip:text-gold transition-colors">
                <SchoolIcon className="w-4 h-4" />
              </div>
              <div>
                 <div className="text-sm font-semibold text-navy">{school.type}</div>
                 <div className="text-[10px] text-slate-400 uppercase tracking-wide">School Type</div>
              </div>

              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-navy text-white text-xs rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-all duration-300 translate-y-2 group-hover/tooltip:translate-y-0 pointer-events-none z-20 shadow-xl whitespace-nowrap">
                Residential Boarding Type
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-navy"></div>
              </div>
            </div>

          </div>

          <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-2xl">
            {school.summary}
          </p>

          {/* Feature Chips */}
          <div className="flex flex-wrap gap-2 mb-8">
            {school.features.map((feature, idx) => (
              <span key={idx} className="bg-slate-50 text-slate-600 text-xs font-medium px-3 py-1.5 rounded-lg border border-slate-100">
                {feature}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
            <div className="text-xs text-slate-400 font-medium">Updated 2 days ago</div>
            <button className="group/btn flex items-center gap-2 text-navy font-semibold text-sm hover:text-gold transition-colors">
              View School Profile 
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
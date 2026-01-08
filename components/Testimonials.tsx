import React from 'react';

const AFFILIATIONS = [
  "CBSE", "CAIE", "I.B.", "GSA", "AFS", "Round Square"
];

const REVIEWS = [
  {
    name: "Dr. Anjali Sharma",
    role: "Parent, Grade 9",
    text: "Ecole Globale has transformed my daughter. The focus on both academics and squash has given her confidence I never imagined."
  },
  {
    name: "Rajiv Malhotra",
    role: "Alumni Parent",
    text: "The pastoral care is exceptional. It truly feels like a home away from home for the children."
  },
  {
    name: "Sarah Jenkins",
    role: "Education Consultant",
    text: "I rank Ecole #1 because of their consistent board results and unmatched campus facilities."
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-white mb-4">
              Voices of <span className="text-gold italic">Trust</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto font-light">
                Hear from the community that makes Ecole Globale a home for excellence.
            </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {REVIEWS.map((review, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300">
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(s => <span key={s} className="text-gold text-sm">★</span>)}
              </div>
              <p className="text-slate-300 italic mb-8 leading-relaxed font-light">"{review.text}"</p>
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-yellow-700 flex items-center justify-center text-white font-serif font-bold shadow-lg">
                    {review.name[0]}
                 </div>
                 <div>
                   <h4 className="font-semibold text-white text-sm">{review.name}</h4>
                   <p className="text-xs text-slate-500 uppercase tracking-wide">{review.role}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Affiliations - Minimal */}
        <div className="border-t border-white/5 pt-12">
            <p className="text-center text-xs text-slate-500 uppercase tracking-[0.2em] mb-10">Accreditations & Affiliations</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 hover:opacity-100 transition-opacity duration-500">
                {AFFILIATIONS.map((org) => (
                    <span key={org} className="text-xl md:text-3xl font-serif font-bold text-white cursor-default">{org}</span>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};
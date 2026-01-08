import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { SchoolCard } from './components/SchoolCard';
import { Testimonials } from './components/Testimonials';
import { StickyFooter } from './components/StickyFooter';
import { FAB } from './components/FAB';
import { SCHOOLS } from './constants';
import { Check, ArrowRight, FileText, GraduationCap, ClipboardList, User } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-surface pb-16 md:pb-0 font-sans text-slate-800 selection:bg-gold/20 selection:text-navy">
      <Navigation />
      
      <main>
        <Hero />

        {/* Minimal Intro with improved visual hierarchy */}
        <section className="relative py-24 px-6 bg-white overflow-hidden">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-slate-200"></div>
           <div className="max-w-3xl mx-auto text-center relative z-10">
              <span className="inline-block py-1 px-3 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-6">
                Welcome to Dehradun
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-medium text-navy mb-8 tracking-tight">
                Excellence <span className="italic text-gold font-serif">Redefined</span>
              </h2>
              <div className="w-16 h-1 bg-gold/30 mx-auto mb-8 rounded-full"></div>
              <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-light">
                Dehradun is home to a varied mix of high-quality day and residential schools. 
                Our expert curated list features institutions that balance modern infrastructure with 
                traditional values, offering <span className="font-medium text-navy border-b border-gold/30">ICSE, CBSE, and IB</span> curriculums.
              </p>
           </div>
        </section>

        {/* Listings Section */}
        <section id="listings" className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="relative">
              <span className="text-gold font-bold tracking-[0.2em] text-xs uppercase mb-3 block pl-1">The Collection</span>
              <h3 className="text-3xl md:text-4xl font-serif font-medium text-navy">Ranked Institutions</h3>
              <div className="absolute -left-6 top-2 bottom-2 w-1 bg-gold/20 rounded-r-full hidden md:block"></div>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500 font-medium bg-white px-5 py-2.5 rounded-full border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-default">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               Showing {SCHOOLS.length} Premium Schools
            </div>
          </div>

          <div className="space-y-12">
            {SCHOOLS.map((school) => (
              <SchoolCard key={school.id} school={school} />
            ))}
          </div>
        </section>

        {/* Refined Admission Section */}
        <section id="admission" className="relative bg-slate-50 py-24 border-t border-slate-100 overflow-hidden">
           {/* Decorative background element */}
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

           <div className="relative max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                  
                  {/* Left Column: Content */}
                  <div>
                     <span className="inline-flex items-center gap-2 text-gold font-bold tracking-[0.2em] text-xs uppercase mb-4">
                        <span className="w-8 h-px bg-gold"></span>
                        Admissions Process
                     </span>
                     <h2 className="text-4xl md:text-5xl font-serif font-medium text-navy mb-8 leading-tight">
                        Start Your <br/> <span className="italic text-slate-400">Journey</span> Today
                     </h2>
                     <p className="text-slate-600 text-lg leading-relaxed mb-8 font-light">
                        Most top schools like Doon and Welham conduct their own entrance exams in November/December. 
                        Ecole Globale offers a rolling admission based on assessment and interaction.
                     </p>
                     
                     <div className="flex flex-col sm:flex-row gap-4">
                        <button className="flex items-center justify-center gap-3 bg-navy text-white px-8 py-4 rounded-xl font-semibold hover:bg-navy-light transition-all shadow-lg shadow-navy/20 hover:-translate-y-1">
                            Download Guide <ArrowRight className="w-4 h-4" />
                        </button>
                        <button className="flex items-center justify-center gap-3 bg-white text-navy px-8 py-4 rounded-xl font-semibold border border-slate-200 hover:border-navy hover:bg-slate-50 transition-all">
                            Contact Support
                        </button>
                     </div>
                  </div>

                  {/* Right Column: Visual Documents Grid */}
                  <div className="relative">
                      <div className="absolute -inset-4 bg-gradient-to-r from-gold/10 to-navy/5 rounded-[2rem] blur-xl opacity-50"></div>
                      <div className="relative bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100">
                          <h3 className="font-serif font-medium text-xl mb-8 text-navy flex items-center gap-3">
                             <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold/10 text-gold text-sm font-bold">1</span>
                             Required Documents
                          </h3>
                          
                          <div className="grid sm:grid-cols-2 gap-4">
                              {[
                                { icon: FileText, label: 'Birth Certificate', sub: 'Original & Copy' },
                                { icon: GraduationCap, label: 'Transfer Cert', sub: 'From last school' },
                                { icon: ClipboardList, label: 'Report Card', sub: 'Last 2 Years' },
                                { icon: User, label: 'Passport Photos', sub: '6 Recent Color' }
                              ].map((item, idx) => (
                                  <div key={idx} className="group p-4 rounded-xl bg-surface border border-slate-50 hover:bg-white hover:border-gold/30 hover:shadow-lg transition-all duration-300 cursor-default">
                                      <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 mb-3 group-hover:text-gold group-hover:scale-110 transition-all">
                                          <item.icon className="w-5 h-5" />
                                      </div>
                                      <h4 className="font-semibold text-navy text-sm mb-1 group-hover:text-navy-light">{item.label}</h4>
                                      <p className="text-xs text-slate-400">{item.sub}</p>
                                  </div>
                              ))}
                          </div>

                          <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between text-xs text-slate-400">
                              <span>* All documents must be attested</span>
                              <span className="text-gold font-medium cursor-pointer hover:underline">View Guidelines</span>
                          </div>
                      </div>
                  </div>

              </div>
           </div>
        </section>

        <Testimonials />
      </main>

      {/* Modern Desktop Footer */}
      <footer className="bg-navy text-slate-400 py-20 hidden md:block border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-4 gap-12">
          <div className="col-span-1">
             <div className="text-2xl font-serif font-bold text-white mb-6">Ecole<span className="text-gold">Globale</span></div>
             <p className="text-sm font-light leading-relaxed opacity-80">The premier guide to boarding education in India's school capital. Discover excellence.</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-6 text-sm tracking-wide">Quick Links</h4>
            <ul className="space-y-3 text-sm font-light">
              <li><a href="#" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Contact Admissions</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Sitemap</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-6 text-sm tracking-wide">Contact</h4>
            <ul className="space-y-3 text-sm font-light">
              <li>info@ecoleglobale.com</li>
              <li>+91 123 456 7890</li>
            </ul>
          </div>
          <div>
             <h4 className="text-white font-medium mb-6 text-sm tracking-wide">Newsletter</h4>
             <div className="flex gap-2">
                <input type="email" placeholder="Your email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 w-full text-sm outline-none focus:border-gold/50 transition-colors text-white" />
                <button className="bg-gold hover:bg-white text-navy font-bold px-4 rounded-lg transition-colors">GO</button>
             </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center text-xs opacity-60">
           © 2025 Ecole Globale. Designed for Excellence.
        </div>
      </footer>

      <StickyFooter />
      <FAB />
    </div>
  );
}

export default App;
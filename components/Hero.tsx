
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <header className="hero-gradient text-white relative overflow-hidden">
      {/* Decorative frost patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 text-9xl"><i className="fas fa-snowflake"></i></div>
        <div className="absolute bottom-10 right-10 text-9xl"><i className="fas fa-snowflake"></i></div>
      </div>

      <div className="container mx-auto px-6 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-blue-900/30 border border-blue-400/30 px-4 py-1.5 rounded-full mb-6 text-sm font-semibold tracking-wide uppercase">
            <i className="fas fa-map-marker-alt mr-2"></i> Serving West Fargo, ND & Surrounding Areas
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight drop-shadow-md">
            Emergency Sewer & <br className="hidden md:block"/> 
            <span className="text-blue-200">Drain Line Thawing</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-blue-50 opacity-90 leading-relaxed font-light">
            Don't let North Dakota winters burst your pipes. We use professional industrial steam to safely restore flow and protect your plumbing.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#contact" 
              className="bg-white text-blue-900 px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-100 shadow-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <i className="fas fa-tools"></i>
              Request Fast Service
            </a>
            <div className="bg-blue-800/40 backdrop-blur-md border border-white/20 px-8 py-4 rounded-xl text-lg font-medium flex items-center justify-center gap-3">
              <i className="fas fa-clock text-blue-200"></i>
              24/7 Priority Response
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-70">
            <div className="flex items-center gap-2"><i className="fas fa-check-circle"></i> Licensed & Insured</div>
            <div className="flex items-center gap-2"><i className="fas fa-check-circle"></i> Steam Specialists</div>
            <div className="flex items-center gap-2"><i className="fas fa-check-circle"></i> Pipe Safe Guarantee</div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[40px] fill-slate-50">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </header>
  );
};

export default Hero;

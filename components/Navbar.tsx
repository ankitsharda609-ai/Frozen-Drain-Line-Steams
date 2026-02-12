
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 glass shadow-md border-b border-blue-100">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white shadow-lg">
            <i className="fas fa-snowflake animate-pulse"></i>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-extrabold text-blue-900 leading-tight">Frozen Drain</h1>
            <p className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Line Steam Services</p>
          </div>
        </div>
        
        <div className="hidden md:flex space-x-8 font-semibold text-slate-600">
          <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
          <a href="#faq" className="hover:text-blue-600 transition-colors">FAQs</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Emergency</a>
        </div>

        <a 
          href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`} 
          className="bg-blue-700 text-white px-5 py-2.5 rounded-full font-bold hover:bg-blue-800 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl active:scale-95"
        >
          <i className="fas fa-phone-alt"></i>
          <span className="hidden xs:inline">{CONTACT_INFO.phone}</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

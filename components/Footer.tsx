
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white">
                <i className="fas fa-snowflake"></i>
              </div>
              <h2 className="text-2xl font-black text-white">{CONTACT_INFO.businessName}</h2>
            </div>
            <p className="mb-8 leading-relaxed max-w-md">
              Professional steam thawing experts dedicated to saving West Fargo properties from the hazards of frozen sewer and drain lines. Available 24/7 for emergency relief.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><i className="fab fa-google"></i></a>
              <a href="#" className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><i className="fab fa-yelp"></i></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#faq" className="hover:text-blue-400 transition-colors">Safety FAQs</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Emergency Dispatch</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3"><i className="fas fa-phone text-blue-500"></i> {CONTACT_INFO.phone}</li>
              <li className="flex gap-3"><i className="fas fa-map-marker-alt text-blue-500"></i> {CONTACT_INFO.address}</li>
              <li className="flex gap-3"><i className="fas fa-envelope text-blue-500"></i> dispatch@frozendrainline.com</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-900 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {CONTACT_INFO.businessName}. All Rights Reserved. North Dakota Professional Thawing.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

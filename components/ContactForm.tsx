
import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, send data to an endpoint
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 text-9xl -translate-y-1/2"><i className="fas fa-icicles"></i></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black mb-8">Request Emergency Steam Service</h2>
            <p className="text-xl text-blue-200 mb-10 leading-relaxed">
              Facing a sewer backup or frozen drain? Fill out the form or call us directly. Our emergency crews are standing by in West Fargo.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-blue-800 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-lg">
                  <i className="fas fa-map-marked-alt"></i>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-white">Local Service Base</h4>
                  <p className="text-blue-200/80">{CONTACT_INFO.address}</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-blue-800 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-lg">
                  <i className="fas fa-phone-volume animate-pulse"></i>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-white">24/7 Hotline</h4>
                  <p className="text-blue-400 font-black text-2xl tracking-tighter">{CONTACT_INFO.phone}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-slate-800">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                  <i className="fas fa-check"></i>
                </div>
                <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
                <p className="text-slate-600">A technician will call you within 15 minutes.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 text-blue-700 font-bold hover:underline">Send another request</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase">Your Name</label>
                    <input required type="text" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase">Phone Number</label>
                    <input required type="tel" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="(701) 555-0123" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase">Service Address</label>
                  <input required type="text" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="123 Example Ave, West Fargo, ND" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase">Problem Description</label>
                  <textarea required rows={4} className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Tell us about the freeze or backup..."></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-black text-xl py-5 rounded-xl shadow-xl transition-all transform hover:scale-[1.02] active:scale-[0.98]">
                  Dispatch Technician Now
                </button>
                <p className="text-center text-xs text-slate-400 font-medium">By submitting, you agree to priority emergency dispatch terms.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

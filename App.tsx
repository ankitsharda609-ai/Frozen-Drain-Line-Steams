
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Statistics Bar */}
        <div className="bg-white border-y border-slate-100">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-black text-blue-800 mb-1">500+</div>
                <div className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Pipes Thawed</div>
              </div>
              <div>
                <div className="text-4xl font-black text-blue-800 mb-1">100%</div>
                <div className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Safe Methods</div>
              </div>
              <div>
                <div className="text-4xl font-black text-blue-800 mb-1">15min</div>
                <div className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Dispatch Goal</div>
              </div>
              <div>
                <div className="text-4xl font-black text-blue-800 mb-1">ND</div>
                <div className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Local Experts</div>
              </div>
            </div>
          </div>
        </div>

        <Services />
        
        {/* Informational Section */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="relative">
                  <img 
                    src="https://picsum.photos/seed/icepipe/800/600" 
                    alt="Steam Thawing Demo" 
                    className="rounded-3xl shadow-2xl relative z-10"
                  />
                  <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-100 rounded-3xl -z-0"></div>
                  <div className="absolute -top-6 -left-6 border-8 border-blue-600/10 w-full h-full rounded-3xl -z-0"></div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-4">Why Professional Steam?</h3>
                <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-8 leading-tight">Safety First, Flow Guaranteed.</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center"><i className="fas fa-shield-alt"></i></div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Zero Pipe Damage</h4>
                      <p className="text-slate-600">Unlike mechanical snakes or torches, steam won't crack cold-brittle cast iron or melt plastic PVC when used by our experts.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center"><i className="fas fa-leaf"></i></div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Eco-Friendly & Non-Toxic</h4>
                      <p className="text-slate-600">We use only water and heat. No hazardous chemicals entering your septic system or city sewer lines.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center"><i className="fas fa-compress-arrows-alt"></i></div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Penetrates Solid Ice</h4>
                      <p className="text-slate-600">Our industrial-grade steam probes can reach 100+ feet into lines to reach blockages that water jetters can't touch.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default App;

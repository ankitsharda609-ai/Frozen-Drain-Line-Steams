
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-4">Our Specialized Solutions</h2>
          <p className="text-slate-600 text-lg">We use cutting-edge steam technology to solve complex freezing issues that standard plumbing methods can't handle.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                 <i className={`fas ${service.icon} text-9xl`}></i>
              </div>
              <div className="w-16 h-16 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
              <div className="flex items-center text-blue-700 font-bold gap-2">
                Learn More <i className="fas fa-arrow-right text-sm"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

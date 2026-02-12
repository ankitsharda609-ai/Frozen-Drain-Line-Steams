
import React, { useState } from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-blue-900 mb-16">Common Questions</h2>
        
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-blue-300 shadow-lg' : 'border-slate-100'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="text-lg font-bold text-slate-800 pr-8">{faq.question}</span>
                <i className={`fas fa-chevron-down transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-blue-600' : 'text-slate-400'}`}></i>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-slate-600 border-t border-slate-50 leading-relaxed bg-blue-50/30">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

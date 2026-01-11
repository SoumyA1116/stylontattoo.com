
import React from 'react';
import { APP_CONTENT } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-40 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-24">
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
               <img
                src={APP_CONTENT.studio.aboutImage}
                alt="Studio interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 bg-[#d4af37] p-6 shadow-xl">
              <span className="heading-font text-black text-3xl font-bold leading-none">15+</span>
              <span className="block text-black text-[8px] uppercase tracking-widest font-bold mt-1">Years</span>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-8 md:space-y-12 text-center lg:text-left">
            <div className="space-y-3">
              <span className="accent-font text-[#d4af37] text-xl md:text-2xl tracking-widest">A Legacy in Ink</span>
              <h2 className="heading-font text-4xl md:text-7xl font-light uppercase leading-tight tracking-tight text-white">The Modern <br/> <span className="italic font-normal">Antiquarian</span></h2>
            </div>
            
            <p className="serif-font text-lg md:text-2xl text-gray-400 font-light leading-relaxed italic px-4 lg:px-0">
              "We don't just tattoo skin; we curate personal galleries. {APP_CONTENT.studio.name} is a sanctuary where tradition meets the avant-garde."
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 pt-4">
              {[
                { icon: 'fa-fingerprint', title: 'Unique Narrative', desc: 'Every design is a singular custom creation, never repeated.' },
                { icon: 'fa-leaf', title: 'Ethical Canvas', desc: 'World-class organic pigments and 100% vegan equipment.' }
              ].map((item, i) => (
                <div key={i} className="space-y-3 flex flex-col items-center lg:items-start">
                  <div className="w-10 h-10 rounded-full border border-[#d4af37] flex items-center justify-center">
                    <i className={`fas ${item.icon} text-[#d4af37] text-xs`}></i>
                  </div>
                  <h4 className="heading-font uppercase tracking-widest text-[11px] text-white">{item.title}</h4>
                  <p className="text-gray-500 text-xs font-light max-w-[250px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

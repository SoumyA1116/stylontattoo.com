
import React from 'react';
import { APP_CONTENT } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-8 md:py-40 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-24">
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative aspect-[4/5] image-curve-sm md:image-curve shadow-2xl">
               <img
                src={APP_CONTENT.studio.aboutImage}
                alt="Studio interior"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-3 -right-2 md:-bottom-6 md:-right-4 bg-[#d4af37] p-4 md:p-8 shadow-xl rounded-xl md:rounded-[2rem] flex flex-col items-center">
              <span className="heading-font text-black text-xl md:text-4xl font-bold leading-none">15+</span>
              <span className="block text-black text-[7px] md:text-[10px] uppercase tracking-widest font-bold mt-1">Years</span>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-4 md:space-y-12 text-center lg:text-left">
            <div className="space-y-1">
              <span className="accent-font text-[#d4af37] text-base md:text-2xl tracking-widest">A Legacy in Ink</span>
              <h2 className="heading-font text-3xl md:text-7xl font-light uppercase leading-tight tracking-tight text-white">The Modern <br/> <span className="italic font-normal">Antiquarian</span></h2>
            </div>
            
            <p className="serif-font text-sm md:text-2xl text-gray-400 font-light leading-relaxed italic px-2 lg:px-0">
              "We don't just tattoo skin; we curate personal galleries. {APP_CONTENT.studio.name} is a sanctuary where tradition meets the avant-garde."
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-12 pt-2">
              {[
                { icon: 'fa-fingerprint', title: 'Unique Narrative', desc: 'Every design is a singular custom creation, never repeated.' },
                { icon: 'fa-leaf', title: 'Ethical Canvas', desc: 'World-class organic pigments and 100% vegan equipment.' }
              ].map((item, i) => (
                <div key={i} className="space-y-1 flex flex-col items-center lg:items-start">
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl border border-[#d4af37] flex items-center justify-center">
                    <i className={`fas ${item.icon} text-[#d4af37] text-[8px] md:text-[10px]`}></i>
                  </div>
                  <h4 className="heading-font uppercase tracking-widest text-[9px] text-white">{item.title}</h4>
                  <p className="text-gray-500 text-[9px] font-light max-w-[200px] leading-relaxed">{item.desc}</p>
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

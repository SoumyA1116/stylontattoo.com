
import React from 'react';
import { TATTOO_STYLES } from '../constants';

const Styles: React.FC = () => {
  return (
    <section id="styles" className="py-40 bg-[#050505] relative">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mb-24">
          <span className="accent-font text-[#d4af37] text-2xl italic tracking-wider mb-4 block">Our Disciplines</span>
          <h2 className="heading-font text-6xl md:text-8xl font-light uppercase tracking-tighter leading-none text-white">Curated <span className="text-[#d4af37]">Styles</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TATTOO_STYLES.map((style, idx) => (
            <div key={style.id} className="group relative liquid-border overflow-hidden bg-zinc-950 p-1">
              <div className="relative h-[500px] overflow-hidden">
                <img
                  src={style.image}
                  alt={style.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1500ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                
                <div className="absolute top-8 right-8">
                  <span className="heading-font text-white/20 text-6xl font-black italic">0{idx + 1}</span>
                </div>

                <div className="absolute bottom-0 left-0 p-12 w-full translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                  <h4 className="heading-font text-4xl md:text-5xl font-bold uppercase mb-4 text-white group-hover:text-[#d4af37] transition-colors tracking-tight">
                    {style.name}
                  </h4>
                  <p className="text-gray-400 font-light max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    {style.description}
                  </p>
                  <div className="mt-8 overflow-hidden h-px w-0 group-hover:w-full bg-[#d4af37] transition-all duration-1000"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Styles;

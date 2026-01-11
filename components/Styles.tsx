
import React from 'react';
import { TATTOO_STYLES } from '../constants';

const Styles: React.FC = () => {
  return (
    <section id="styles" className="py-24 md:py-40 bg-[#050505] relative">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mb-16 md:mb-24">
          <span className="accent-font text-[#d4af37] text-xl md:text-2xl italic tracking-wider mb-4 block">Our Disciplines</span>
          <h2 className="heading-font text-5xl md:text-8xl font-light uppercase tracking-tighter leading-none text-white">Curated <span className="text-[#d4af37]">Styles</span></h2>
        </div>

        {/* Mobile: Horizontal scroll | Desktop: Flexible Grid to show all 4 styles */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-10 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8 md:pb-0">
          {TATTOO_STYLES.map((style, idx) => (
            <div key={style.id} className="group relative liquid-border image-curve bg-zinc-950 p-1 min-w-[85vw] md:min-w-0 snap-center">
              <div className="relative h-[450px] md:h-[600px] rounded-[inherit] overflow-hidden">
                <img
                  src={style.image}
                  alt={style.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1500ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                
                <div className="absolute top-6 right-6 md:top-10 md:right-10">
                  <span className="heading-font text-white/10 text-5xl md:text-7xl font-black italic">0{idx + 1}</span>
                </div>

                <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:translate-y-8 md:group-hover:translate-y-0 transition-transform duration-700">
                  <h4 className="heading-font text-3xl md:text-5xl font-bold uppercase mb-4 md:mb-6 text-white group-hover:text-[#d4af37] transition-colors tracking-tight">
                    {style.name}
                  </h4>
                  <p className="text-gray-400 font-light max-w-md md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 delay-100 text-sm md:text-lg leading-relaxed line-clamp-3 md:line-clamp-none">
                    {style.description}
                  </p>
                  <div className="mt-6 h-px w-full md:w-0 md:group-hover:w-full bg-[#d4af37] transition-all duration-1000"></div>
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

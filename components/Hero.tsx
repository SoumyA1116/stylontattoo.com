
import React from 'react';
import { APP_CONTENT } from '../constants';

const Hero: React.FC = () => {
  const { studio } = APP_CONTENT;
  return (
    <section id="home" className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 scale-110">
        <img
          src={studio.heroImage}
          alt="Tattoo artistry"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black"></div>
      </div>

      <div className="relative z-10 text-center px-4 w-full">
        <div className="overflow-hidden mb-4">
          <span className="accent-font text-[#d4af37] text-lg md:text-3xl block opacity-0 animate-[fadeInUp_1.2s_ease-out_forwards] italic tracking-widest">
            {studio.tagline}
          </span>
        </div>
        
        <h1 className="heading-font text-5xl sm:text-7xl md:text-[10rem] lg:text-[13rem] font-bold uppercase tracking-tighter leading-[0.9] mb-8 opacity-0 animate-[fadeInUp_1.2s_ease-out_0.2s_forwards] text-white">
          {studio.name.split(' ').map((word, i) => (
            <React.Fragment key={i}>
              <span className={i === 1 ? 'text-[#d4af37]' : ''}>{word}</span>
              {i === 0 && <span className="inline-block w-2 md:w-6"></span>}
            </React.Fragment>
          ))}
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 opacity-0 animate-[fadeInUp_1.2s_ease-out_0.4s_forwards]">
          <a
            href="#booking"
            className="btn-active w-full sm:w-auto px-10 py-4 bg-white text-black font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs transition-all duration-300 hover:bg-[#d4af37]"
          >
            Commission Art
          </a>
          <a
            href="#gallery"
            className="heading-font uppercase tracking-[0.2em] text-[10px] md:text-xs text-white/80 hover:text-white transition-all flex items-center py-2"
          >
            <span className="hidden sm:block w-8 h-px bg-[#d4af37] mr-4"></span>
            Browse Portfolio
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-px h-10 bg-gradient-to-b from-[#d4af37] to-transparent animate-bounce"></div>
      </div>
    </section>
  );
};

export default Hero;

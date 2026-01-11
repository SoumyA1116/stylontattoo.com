
import React from 'react';
import { APP_CONTENT } from '../constants';

const Artists: React.FC = () => {
  return (
    <section id="artists" className="py-8 md:py-40 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-8 md:mb-24">
          <span className="accent-font text-[#d4af37] text-base md:text-2xl italic mb-1">The Visionaries</span>
          <h2 className="heading-font text-3xl md:text-8xl font-light uppercase tracking-tighter text-white">
            Our <span className="text-[#d4af37]">Artists</span>
          </h2>
          <div className="w-px h-6 md:h-24 bg-gradient-to-b from-[#d4af37] to-transparent mt-2"></div>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-12 overflow-x-auto no-scrollbar pb-4 md:pb-0 snap-x snap-mandatory">
          {APP_CONTENT.artists.map((artist, idx) => (
            <div key={idx} className="group relative flex flex-col items-center min-w-[240px] sm:min-w-[320px] md:min-w-0 snap-center">
              <div className="relative aspect-[3/4] w-full image-curve-sm md:image-curve liquid-border bg-zinc-900 mb-4 md:mb-8">
                <img 
                  src={artist.image} 
                  alt={artist.name} 
                  className="w-full h-full object-cover brightness-90 transition-transform duration-[1.5s] ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 md:opacity-60"></div>
                <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-end">
                  <span className="heading-font text-[#d4af37] text-[8px] md:text-[9px] uppercase tracking-[0.4em] mb-1">{artist.specialty}</span>
                  <div className="w-10 h-px bg-[#d4af37]/50 group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
              <div className="text-center px-2">
                <h3 className="heading-font text-xl md:text-4xl font-bold uppercase tracking-tight text-white mb-0.5">{artist.name}</h3>
                <p className="serif-font italic text-gray-500 text-xs md:text-xl">{artist.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artists;

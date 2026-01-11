
import React from 'react';
import { APP_CONTENT } from '../constants';

const Artists: React.FC = () => {
  return (
    <section id="artists" className="py-24 md:py-40 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="accent-font text-[#d4af37] text-xl md:text-2xl italic mb-2">The Visionaries</span>
          <h2 className="heading-font text-5xl md:text-8xl font-light uppercase tracking-tighter text-white">
            Our <span className="text-[#d4af37]">Artists</span>
          </h2>
          <div className="w-px h-12 md:h-24 bg-gradient-to-b from-[#d4af37] to-transparent mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-8">
          {APP_CONTENT.artists.map((artist, idx) => (
            <div key={idx} className="group relative flex flex-col items-center">
              <div className="relative aspect-[3/4] w-full max-w-[320px] md:max-w-none overflow-hidden rounded-sm liquid-border bg-zinc-900 mb-6">
                <img 
                  src={artist.image} 
                  alt={artist.name} 
                  className="w-full h-full object-cover brightness-90 transition-transform duration-[1.5s] ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 md:opacity-60"></div>
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="heading-font text-[#d4af37] text-[9px] uppercase tracking-[0.4em] mb-1">{artist.specialty}</span>
                  <div className="w-12 h-px bg-[#d4af37]/50"></div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="heading-font text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-1">{artist.name}</h3>
                <p className="serif-font italic text-gray-500 text-sm md:text-lg">{artist.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artists;

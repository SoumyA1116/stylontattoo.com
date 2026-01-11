
import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const categories = ['All', ...Array.from(new Set(GALLERY_IMAGES.map(img => img.category)))];
  const [filter, setFilter] = useState('All');

  const filteredImages = filter === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-8 md:py-40 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-6 md:mb-16 gap-3">
          <div className="text-center md:text-left">
            <span className="accent-font text-[#d4af37] text-base md:text-2xl block mb-0.5 italic">The Collection</span>
            <h2 className="heading-font text-3xl md:text-7xl font-light uppercase tracking-tighter leading-none text-white">Anthology</h2>
          </div>
          
          <div className="flex overflow-x-auto no-scrollbar gap-1 w-full md:w-auto pb-1 md:pb-0 glass-morphism p-0.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`heading-font uppercase text-[8px] tracking-[0.2em] px-3 py-2 rounded-full transition-all whitespace-nowrap ${filter === cat ? 'bg-[#d4af37] text-black font-bold' : 'text-gray-500'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 md:pb-0">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-[4/5] cursor-pointer group image-curve-sm liquid-border min-w-[200px] md:min-w-0 snap-center"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 md:group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                <span className="heading-font text-[#d4af37] text-[8px] uppercase tracking-[0.4em] mb-1">{image.category}</span>
                <h4 className="heading-font text-white text-xs uppercase tracking-widest">{image.title}</h4>
              </div>
              <div className="absolute bottom-2 left-2 right-2 md:hidden">
                 <h4 className="heading-font text-white text-[8px] uppercase tracking-widest bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md inline-block">{image.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center p-4 backdrop-blur-xl"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white text-2xl p-4 transition-transform hover:rotate-90"><i className="fas fa-times"></i></button>
          <img 
            src={selectedImage} 
            alt="Art" 
            className="max-w-full max-h-[80vh] object-contain image-curve-sm shadow-2xl animate-slide-up" 
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;

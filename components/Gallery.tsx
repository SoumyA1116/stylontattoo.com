
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
    <section id="gallery" className="py-24 md:py-40 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8">
          <div className="text-center md:text-left">
            <span className="accent-font text-[#d4af37] text-xl md:text-2xl block mb-2 italic">The Collection</span>
            <h2 className="heading-font text-5xl md:text-7xl font-light uppercase tracking-tighter leading-none text-white">Visual Anthology</h2>
          </div>
          
          <div className="flex overflow-x-auto no-scrollbar gap-2 w-full md:w-auto pb-2 md:pb-0 px-4 md:px-2 glass-morphism rounded-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`heading-font uppercase text-[9px] tracking-[0.2em] px-5 py-3 rounded-full transition-all whitespace-nowrap ${filter === cat ? 'bg-[#d4af37] text-black font-bold' : 'text-gray-500'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-[4/5] cursor-pointer group overflow-hidden rounded-sm liquid-border"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 md:group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                <span className="heading-font text-[#d4af37] text-[8px] uppercase tracking-[0.3em] mb-1">{image.category}</span>
                <h4 className="heading-font text-white text-sm uppercase tracking-widest">{image.title}</h4>
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
          <button className="absolute top-6 right-6 text-white text-3xl p-4"><i className="fas fa-times"></i></button>
          <img 
            src={selectedImage} 
            alt="Art" 
            className="max-w-full max-h-[85vh] object-contain rounded shadow-2xl animate-slide-up" 
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;


import React from 'react';
import { APP_CONTENT } from '../constants';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 md:py-40 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="accent-font text-[#d4af37] text-xl md:text-2xl italic mb-2">Studio Insights</span>
          <h2 className="heading-font text-5xl md:text-8xl font-light uppercase tracking-tighter text-white">
            Journal & <span className="text-[#d4af37]">News</span>
          </h2>
          <div className="w-px h-12 md:h-24 bg-gradient-to-b from-[#d4af37] to-transparent mt-4"></div>
        </div>

        <div className="flex lg:grid lg:grid-cols-4 gap-6 md:gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8 lg:pb-0">
          {APP_CONTENT.blogs.map((post) => (
            <article key={post.id} className="group flex flex-col h-full bg-zinc-950/50 rounded-[2rem] overflow-hidden liquid-border border border-white/5 hover:border-[#d4af37]/30 transition-all duration-500 min-w-[280px] md:min-w-[350px] lg:min-w-0 snap-center">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4">
                  <span className="heading-font text-[9px] bg-black/80 text-[#d4af37] px-3 py-1 rounded-full border border-[#d4af37]/20 uppercase tracking-widest">
                    {post.date}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="heading-font text-xl md:text-2xl font-bold text-white uppercase mb-4 group-hover:text-[#d4af37] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm font-light leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-[#d4af37]/10 flex items-center justify-center">
                      <i className="fas fa-user text-[10px] text-[#d4af37]"></i>
                    </div>
                    <span className="heading-font text-[10px] uppercase tracking-widest text-gray-400">{post.author}</span>
                  </div>
                  <button className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.2em] group-hover:translate-x-1 transition-transform">
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

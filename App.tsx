
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Artists from './components/Artists';
import Styles from './components/Styles';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import { APP_CONTENT } from './constants';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1. Lock scrolling immediately
    document.body.style.overflow = 'hidden';

    // 2. Visual Progress Simulation (High Performance)
    let startTimestamp: number | null = null;
    const duration = 1800; // 1.8 seconds for the progress bar

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const currentProgress = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(Math.floor(currentProgress));

      if (elapsed < duration) {
        window.requestAnimationFrame(step);
      } else {
        // Finalize loading after animation completes
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = 'auto';
        }, 400);
      }
    };

    window.requestAnimationFrame(step);

    // 3. Robust Cleanup / Failsafe
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen text-[#fafafa] selection:bg-[#d4af37] selection:text-black overflow-x-hidden">
      {/* Premium Cinematic Loader */}
      <div 
        className={`fixed inset-0 z-[2000] bg-[#050505] flex flex-col items-center justify-center transition-all duration-1000 ease-in-out ${
          isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none translate-y-[-50px]'
        }`}
      >
        <div className="relative flex flex-col items-center scale-90 md:scale-100">
           <div className="relative mb-12">
             <img 
               src="https://i.ibb.co/RTv8DMNf/stylon-logo.png" 
               alt="Logo" 
               className={`h-24 md:h-32 w-auto object-contain transition-all duration-1000 ${
                 isLoading ? 'scale-100 opacity-100' : 'scale-110 opacity-0 blur-2xl'
               }`}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-40"></div>
           </div>
           
           <div className="w-64 h-[1px] bg-white/5 relative overflow-hidden mb-6 rounded-full">
              <div 
                className="absolute inset-0 bg-[#d4af37] origin-left transition-transform duration-300 ease-out"
                style={{ transform: `scaleX(${progress / 100})` }}
              ></div>
           </div>
           
           <div className="flex flex-col items-center">
             <span className="heading-font text-[#d4af37] text-[10px] uppercase tracking-[0.8em] font-light animate-pulse">
               {progress < 100 ? `Crafting Heritage ${progress}%` : 'Studio Ready'}
             </span>
           </div>
        </div>
      </div>

      <div className="fixed inset-0 pointer-events-none z-50 cinematic-vignette opacity-40"></div>
      
      <Navbar />
      
      <main 
        className={`relative z-10 transition-all duration-[1500ms] ${
          isLoading ? 'opacity-0 scale-95 blur-xl translate-y-20' : 'opacity-100 scale-100 blur-0 translate-y-0'
        }`}
      >
        <Hero />
        
        <div className="relative">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 md:h-64 bg-gradient-to-b from-[#d4af37]/40 to-transparent"></div>
           <About />
        </div>

        <Artists />

        <Styles />
        
        <Gallery />

        <Blog />
        
        <div className="relative bg-black py-12 md:py-20 overflow-hidden">
           <div className="absolute top-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-[#d4af37]/5 blur-[80px] md:blur-[120px] rounded-full"></div>
           <BookingForm />
        </div>
        
        <section id="aftercare" className="py-16 md:py-32 bg-black border-y border-white/5">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10 md:mb-16">
                <span className="accent-font text-[#d4af37] text-xl md:text-2xl mb-2 block tracking-wider italic">Art Preservation</span>
                <h2 className="heading-font text-3xl md:text-6xl font-light uppercase mb-4 tracking-[0.2em]">Aftercare</h2>
                <div className="w-16 md:w-24 h-px bg-[#d4af37] mx-auto opacity-50"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
                {APP_CONTENT.aftercare.map((step, idx) => (
                  <div key={idx} className="glass-morphism liquid-border p-6 md:p-10 group hover:bg-white/[0.02] transition-all duration-700">
                    <span className="heading-font text-[#d4af37]/30 text-2xl md:text-4xl block mb-4 md:mb-6 font-thin italic">
                      {["I", "II", "III"][idx] || idx + 1}
                    </span>
                    <h4 className="heading-font text-white text-lg md:text-xl mb-2 md:mb-4 tracking-widest uppercase">{step.title}</h4>
                    <p className="text-gray-400 font-light leading-relaxed text-[10px] md:text-sm">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .cinematic-vignette {
          background: radial-gradient(circle, transparent 40%, rgba(0,0,0,0.8) 100%);
        }

        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(30px);
            filter: blur(8px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0);
            filter: blur(0);
          }
        }
      `}</style>
    </div>
  );
};

export default App;

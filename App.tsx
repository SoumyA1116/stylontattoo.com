
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

  useEffect(() => {
    // Simulate asset loading or minimum wait for premium feel
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen text-[#fafafa] selection:bg-[#d4af37] selection:text-black">
      {/* Premium Loader */}
      <div className={`fixed inset-0 z-[2000] bg-[#050505] flex flex-col items-center justify-center transition-all duration-1000 ease-expo ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="relative mb-8">
           <img 
             src="https://i.ibb.co/RTv8DMNf/stylon-logo.png" 
             alt="Logo" 
             className={`h-24 md:h-32 w-auto object-contain transition-all duration-1000 ${isLoading ? 'scale-100 opacity-100 blur-0' : 'scale-110 opacity-0 blur-xl'}`}
           />
           <div className="absolute -inset-4 bg-[#d4af37]/10 blur-2xl rounded-full animate-pulse"></div>
        </div>
        <div className="w-48 h-[2px] bg-white/5 relative overflow-hidden rounded-full">
           <div className="absolute inset-0 bg-[#d4af37] origin-left animate-[loadingLine_2s_ease-in-out_infinite]"></div>
        </div>
        <span className="heading-font text-[#d4af37] text-[10px] uppercase tracking-[0.6em] mt-6 animate-pulse">
          Crafting Your Vision
        </span>
      </div>

      <div className="fixed inset-0 pointer-events-none z-50 cinematic-vignette"></div>
      
      <Navbar />
      
      <main className={`relative z-10 transition-all duration-1000 ${isLoading ? 'opacity-0 scale-95 blur-lg' : 'opacity-100 scale-100 blur-0'}`}>
        <Hero />
        
        <div className="relative">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-64 bg-gradient-to-b from-[#d4af37]/50 to-transparent"></div>
           <About />
        </div>

        <Artists />

        <Styles />
        
        <Gallery />

        <Blog />
        
        <div className="relative bg-black py-20 overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 blur-[120px] rounded-full"></div>
           <BookingForm />
        </div>
        
        <section id="aftercare" className="py-32 bg-black border-y border-white/5">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="accent-font text-[#d4af37] text-2xl mb-4 block tracking-wider italic">Art Preservation</span>
                <h2 className="heading-font text-5xl md:text-6xl font-light uppercase mb-6 tracking-[0.2em]">Aftercare</h2>
                <div className="w-24 h-px bg-[#d4af37] mx-auto opacity-50"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {APP_CONTENT.aftercare.map((step, idx) => (
                  <div key={idx} className="glass-morphism liquid-border p-10 group hover:bg-white/[0.02] transition-all duration-700">
                    <span className="heading-font text-[#d4af37]/30 text-4xl block mb-6 font-thin italic">
                      {["I", "II", "III"][idx] || idx + 1}
                    </span>
                    <h4 className="heading-font text-white text-xl mb-4 tracking-widest uppercase">{step.title}</h4>
                    <p className="text-gray-400 font-light leading-relaxed text-sm">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @keyframes loadingLine {
          0% { transform: scaleX(0); transform-origin: left; }
          45% { transform: scaleX(1); transform-origin: left; }
          50% { transform: scaleX(1); transform-origin: right; }
          100% { transform: scaleX(0); transform-origin: right; }
        }
        @keyframes fadeIn {
          from { opacity: 0; filter: blur(10px); }
          to { opacity: 1; filter: blur(0); }
        }
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(40px);
            filter: blur(10px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0);
            filter: blur(0);
          }
        }
        @keyframes lineReveal {
          from { width: 0; }
          to { width: 100%; }
        }
        .ease-expo {
          transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;

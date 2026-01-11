
import React from 'react';
import { STUDIO_DATA } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="pt-24 pb-12 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="accent-font text-[#d4af37] text-4xl mb-6">{STUDIO_DATA.name}</h2>
            <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
              A premium destination for high-end tattoo artistry. We prioritize your vision, safety, and comfort.
            </p>
            
            <div className="mb-6 overflow-hidden image-curve liquid-border h-72 group relative bg-zinc-900 shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59888.22069352475!2d85.71170554863276!3d20.258262699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909ff3991c8cf%3A0x31edb74e94ded505!2sStylon%20Tattoo%20Studio!5e0!3m2!1sen!2sin!4v1768130148055!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.1) brightness(0.8)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Stylon Tattoo Studio Location"
              ></iframe>
            </div>

            <a 
              href="https://maps.app.goo.gl/31edb74e94ded505" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 text-[#d4af37] hover:text-white transition-colors group mb-8"
            >
              <span className="heading-font uppercase tracking-[0.3em] text-[11px] font-bold">Open in Google Maps</span>
              <i className="fas fa-location-arrow text-[11px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
            </a>

            <div className="flex space-x-6">
              <a href="#" className="text-3xl text-gray-500 hover:text-[#d4af37] transition-colors"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-3xl text-gray-500 hover:text-[#d4af37] transition-colors"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-3xl text-gray-500 hover:text-[#d4af37] transition-colors"><i className="fab fa-tiktok"></i></a>
            </div>
          </div>

          <div>
            <h4 className="heading-font uppercase tracking-widest mb-6 border-b border-gray-800 pb-3 text-white">Information</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#about" className="hover:text-[#d4af37] transition-colors text-sm">About Studio</a></li>
              <li><a href="#styles" className="hover:text-[#d4af37] transition-colors text-sm">Styles Offered</a></li>
              <li><a href="#gallery" className="hover:text-[#d4af37] transition-colors text-sm">Gallery</a></li>
              <li><a href="#aftercare" className="hover:text-[#d4af37] transition-colors text-sm">Aftercare Tips</a></li>
            </ul>
          </div>

          <div>
            <h4 className="heading-font uppercase tracking-widest mb-6 border-b border-gray-800 pb-3 text-white">Location</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <i className="fas fa-map-marker-alt text-[#d4af37] mt-1 group-hover:animate-bounce"></i>
                <p className="text-gray-400 text-sm leading-relaxed">{STUDIO_DATA.address}</p>
              </div>
              <div className="flex items-start space-x-4">
                <i className="fas fa-clock text-[#d4af37] mt-1"></i>
                <p className="text-gray-400 text-sm leading-relaxed">{STUDIO_DATA.hours}</p>
              </div>
              <div className="flex items-start space-x-4">
                <i className="fas fa-phone text-[#d4af37] mt-1"></i>
                <p className="text-[#d4af37] font-bold tracking-[0.1em] text-lg">{STUDIO_DATA.phone}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-[10px] uppercase tracking-[0.4em]">
          <p>© {new Date().getFullYear()} {STUDIO_DATA.name} Tattoo Studio. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
             <span className="hover:text-white cursor-pointer">Privacy</span>
             <span className="text-[#d4af37]/20">•</span>
             <span className="hover:text-white cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
      
      <a 
        href={`https://wa.me/${STUDIO_DATA.whatsapp}`} 
        className="fixed bottom-10 right-10 z-[110] bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform md:hidden"
      >
        <i className="fab fa-whatsapp text-4xl"></i>
      </a>
    </footer>
  );
};

export default Footer;

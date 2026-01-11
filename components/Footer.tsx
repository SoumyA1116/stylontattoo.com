
import React from 'react';
import { STUDIO_DATA } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="pt-24 pb-12 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="accent-font text-[#d4af37] text-4xl mb-6">{STUDIO_DATA.name}</h2>
            <p className="text-gray-500 max-w-sm mb-8">
              A premium destination for high-end tattoo artistry. We prioritize your vision, safety, and comfort.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-2xl text-gray-500 hover:text-[#d4af37] transition-colors"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-2xl text-gray-500 hover:text-[#d4af37] transition-colors"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-2xl text-gray-500 hover:text-[#d4af37] transition-colors"><i className="fab fa-tiktok"></i></a>
            </div>
          </div>

          <div>
            <h4 className="heading-font uppercase tracking-widest mb-6 border-b border-gray-800 pb-2">Information</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#about" className="hover:text-white transition-colors">About Studio</a></li>
              <li><a href="#styles" className="hover:text-white transition-colors">Styles Offered</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#aftercare" className="hover:text-white transition-colors">Aftercare Tips</a></li>
            </ul>
          </div>

          <div>
            <h4 className="heading-font uppercase tracking-widest mb-6 border-b border-gray-800 pb-2">Location</h4>
            <p className="text-gray-500 mb-2">{STUDIO_DATA.address}</p>
            <p className="text-gray-500 mb-6">{STUDIO_DATA.hours}</p>
            <p className="text-[#d4af37] font-bold">{STUDIO_DATA.phone}</p>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs uppercase tracking-widest">
          <p>© {new Date().getFullYear()} {STUDIO_DATA.name} Tattoo Studio. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0">Design for excellence</p>
        </div>
      </div>
      
      {/* Floating Action Button for Mobile */}
      <a 
        href={`https://wa.me/${STUDIO_DATA.whatsapp}`} 
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform md:hidden"
      >
        <i className="fab fa-whatsapp text-3xl"></i>
      </a>
    </footer>
  );
};

export default Footer;

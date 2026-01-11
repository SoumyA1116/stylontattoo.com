
import React, { useState, useEffect } from 'react';
import { STUDIO_DATA } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Artists', href: '#artists' },
    { name: 'Styles', href: '#styles' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Booking', href: '#booking' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'py-3' : 'py-6'}`}>
        <div className="container mx-auto px-4">
          <div className={`glass-morphism rounded-full px-6 py-3 flex justify-between items-center transition-all ${isScrolled ? 'bg-black/90 border-white/10' : 'bg-transparent border-transparent'}`}>
            <a href="#home" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="accent-font text-xl md:text-3xl text-[#d4af37]">{STUDIO_DATA.name}</span>
            </a>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="heading-font uppercase tracking-[0.2em] text-[10px] text-gray-400 hover:text-[#d4af37] transition-all">
                  {link.name}
                </a>
              ))}
              <a href="#booking" className="heading-font uppercase tracking-[0.2em] text-[10px] bg-[#d4af37] text-black px-6 py-2 rounded-full font-bold">Inquiry</a>
            </div>

            <button 
              className="md:hidden w-10 h-10 flex items-center justify-center text-[#d4af37] bg-white/5 rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[95] md:hidden flex flex-col items-center justify-center space-y-8 transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 translate-y-0 visible bg-black/95 backdrop-blur-xl' : 'opacity-0 -translate-y-full invisible'}`}>
        {navLinks.map((link, idx) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="heading-font text-3xl uppercase tracking-[0.3em] text-white hover:text-[#d4af37]"
            style={{ transitionDelay: `${idx * 50}ms` }}
          >
            {link.name}
          </a>
        ))}
        <a 
          href="#booking" 
          onClick={() => setIsMobileMenuOpen(false)}
          className="bg-[#d4af37] text-black px-12 py-4 rounded-full heading-font uppercase tracking-[0.3em] font-bold text-sm"
        >
          Book Now
        </a>
      </div>
    </>
  );
};

export default Navbar;

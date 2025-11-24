import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  onOpenModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-700 ease-in-out ${
        isScrolled 
          ? 'bg-zenith-black/80 backdrop-blur-md py-4 border-b border-zenith-white/5 shadow-lg' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        {/* Brand */}
        <div className="group cursor-pointer">
          <div className="text-zenith-white font-serif font-medium text-2xl tracking-widest group-hover:text-zenith-gold transition-colors duration-500">
            ZENITH<span className="text-zenith-gold">.</span>
          </div>
        </div>
        
        {/* Links */}
        <div className="hidden md:flex items-center space-x-16">
          {NAV_LINKS.map(link => (
            <a 
              key={link.label} 
              href={link.href} 
              className="relative text-[10px] tracking-[0.25em] text-zenith-slate hover:text-zenith-white transition-colors font-sans font-medium group"
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-zenith-gold group-hover:w-full transition-all duration-500 ease-out"></span>
            </a>
          ))}
          
          <button onClick={onOpenModal} className="relative px-8 py-2.5 overflow-hidden group border border-zenith-white/10 hover:border-zenith-gold/50 transition-colors duration-500">
            <span className="absolute inset-0 w-full h-full bg-zenith-gold/0 group-hover:bg-zenith-gold/10 transition-all duration-500"></span>
            <span className="relative text-zenith-white text-[10px] tracking-[0.25em] font-sans font-semibold group-hover:text-zenith-gold transition-colors">
              INQUIRE
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
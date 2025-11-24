import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zenith-black border-t border-white/5 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10">
           <div>
              <h3 className="text-zenith-white font-heading font-bold text-sm tracking-widest mb-6">MENU</h3>
              <ul className="space-y-4">
                 <li><a href="#" className="text-zenith-gray text-xs hover:text-zenith-gold transition-colors">Process</a></li>
                 <li><a href="#" className="text-zenith-gray text-xs hover:text-zenith-gold transition-colors">Studio</a></li>
                 <li><a href="#" className="text-zenith-gray text-xs hover:text-zenith-gold transition-colors">Pricing</a></li>
              </ul>
           </div>
           
           <div className="text-right">
              <h3 className="text-zenith-white font-heading font-bold text-sm tracking-widest mb-6">SOCIAL</h3>
              <ul className="space-y-4">
                 <li><a href="#" className="text-zenith-gray text-xs hover:text-zenith-gold transition-colors">Instagram</a></li>
                 <li><a href="#" className="text-zenith-gray text-xs hover:text-zenith-gold transition-colors">LinkedIn</a></li>
              </ul>
           </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-end">
           <div className="mb-4 md:mb-0">
             <span className="text-zenith-gray text-[10px] uppercase tracking-widest">© 2024 Zenith Studio.</span>
           </div>
           <div className="text-[12vw] leading-none font-serif text-white/5 select-none pointer-events-none font-bold">
              ZENITH
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
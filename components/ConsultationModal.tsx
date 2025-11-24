import React, { useState } from 'react';
import { X, CheckCircle2, MessageCircle } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [checks, setChecks] = useState({
    portfolio: false,
    serious: false
  });

  if (!isOpen) return null;

  const isReady = checks.portfolio && checks.serious;

  const handleWhatsappRedirect = () => {
    if (!isReady) return;
    const msg = "Halo Mas Luthfi, saya sudah baca penawarannya dan saya serius ingin bangun sistem filter klien untuk studio saya. Saya ambil slot Beta Partner minggu ini.";
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <style>{`
        @keyframes cinematicReveal {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(40px) perspective(2000px) rotateX(15deg);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0) perspective(2000px) rotateX(0deg);
            filter: blur(0);
          }
        }
        @keyframes backdropFade {
          0% { opacity: 0; backdrop-filter: blur(0px); }
          100% { opacity: 1; backdrop-filter: blur(8px); }
        }
        .animate-cinematic {
          animation: cinematicReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-backdrop {
          animation: backdropFade 0.6s ease-out forwards;
        }
        /* Noise texture for paper-like feel */
        .bg-noise-texture {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
      `}</style>
      
      {/* Tunnel Vision Backdrop */}
      <div 
        className="absolute inset-0 bg-zenith-black/90 animate-backdrop" 
        onClick={onClose}
      ></div>
      
      {/* Modal Card */}
      <div className="relative bg-zenith-charcoal w-full max-w-md p-10 shadow-[0_20px_100px_rgba(0,0,0,0.8)] animate-cinematic overflow-hidden rounded-lg border border-zenith-white/5">
        
        {/* Texture Background Overlay */}
        <div className="absolute inset-0 bg-noise-texture opacity-[0.05] pointer-events-none mix-blend-soft-light"></div>
        {/* Subtle Gradient Glow */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-zenith-gold/10 to-transparent pointer-events-none"></div>

        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-zenith-slate hover:text-zenith-white hover:rotate-90 transition-all duration-300 z-20">
           <X className="w-5 h-5" />
        </button>

        <div className="relative z-10 mb-10 text-center">
            <h3 className="text-3xl font-serif text-zenith-white mb-2 tracking-tight drop-shadow-lg">Final Step.</h3>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-zenith-gold to-transparent mx-auto my-5 opacity-70"></div>
            <p className="text-zenith-slate text-xs font-sans font-light tracking-wide leading-relaxed">
               Kami menjaga eksklusivitas. Pastikan Anda memenuhi kriteria sebelum terhubung.
            </p>
        </div>

        <div className="relative z-10 space-y-5 mb-10">
            {/* Checkbox 1 */}
            <div 
                className={`group flex items-center gap-4 p-5 border cursor-pointer transition-all duration-500 select-none rounded-md relative overflow-hidden ${
                    checks.portfolio 
                    ? 'bg-zenith-teal/5 border-zenith-teal/50 shadow-[0_0_20px_rgba(32,178,170,0.1)]' 
                    : 'bg-black/20 border-white/5 hover:border-white/20'
                }`}
                onClick={() => setChecks(prev => ({ ...prev, portfolio: !prev.portfolio }))}
            >
                <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-all duration-500 ${
                    checks.portfolio ? 'bg-zenith-teal border-zenith-teal scale-110 rotate-12' : 'border-zenith-slate group-hover:border-zenith-white'
                }`}>
                   <CheckCircle2 className={`w-4 h-4 text-zenith-black transition-all duration-300 ${checks.portfolio ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
                </div>
                <span className={`text-xs font-sans leading-relaxed transition-colors duration-300 ${checks.portfolio ? 'text-zenith-white' : 'text-zenith-slate'}`}>
                   Saya paham ini adalah <strong className="text-zenith-teal font-bold">harga portfolio</strong> (Diskon 50%).
                </span>
            </div>

            {/* Checkbox 2 */}
            <div 
                className={`group flex items-center gap-4 p-5 border cursor-pointer transition-all duration-500 select-none rounded-md relative overflow-hidden ${
                    checks.serious 
                    ? 'bg-zenith-teal/5 border-zenith-teal/50 shadow-[0_0_20px_rgba(32,178,170,0.1)]' 
                    : 'bg-black/20 border-white/5 hover:border-white/20'
                }`}
                onClick={() => setChecks(prev => ({ ...prev, serious: !prev.serious }))}
            >
                <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-all duration-500 ${
                    checks.serious ? 'bg-zenith-teal border-zenith-teal scale-110 rotate-12' : 'border-zenith-slate group-hover:border-zenith-white'
                }`}>
                   <CheckCircle2 className={`w-4 h-4 text-zenith-black transition-all duration-300 ${checks.serious ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
                </div>
                <span className={`text-xs font-sans leading-relaxed transition-colors duration-300 ${checks.serious ? 'text-zenith-white' : 'text-zenith-slate'}`}>
                   Saya <strong className="text-zenith-teal font-bold">serius</strong> ingin memperbaiki kualitas klien.
                </span>
            </div>
        </div>

        <button 
           onClick={handleWhatsappRedirect}
           disabled={!isReady}
           className={`relative z-10 w-full py-5 font-sans font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 transition-all duration-500 rounded-md ${
               isReady 
                 ? 'bg-zenith-gold text-zenith-black hover:bg-white hover:scale-[1.02] shadow-[0_0_40px_rgba(197,160,89,0.3)]' 
                 : 'bg-white/5 text-white/20 cursor-not-allowed border border-white/5'
           }`}
        >
            <MessageCircle className={`w-4 h-4 transition-transform duration-500 ${isReady ? 'rotate-[-10deg]' : ''}`} />
            Amankan Slot Beta
        </button>

      </div>
    </div>
  );
};

export default ConsultationModal;
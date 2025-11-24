import React from 'react';
import { XCircle, Ghost, MessageSquareX, TrendingDown } from 'lucide-react';

const Problem: React.FC = () => {
  return (
    <section className="py-32 bg-zenith-charcoal relative overflow-hidden" id="problem">
      {/* Subconscious Danger Signal - Red Tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-zenith-danger/20 via-zenith-charcoal to-zenith-black z-0 pointer-events-none"></div>
      
      {/* Abstract Chaos Background */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, #450a0a 0%, transparent 40%)' }}>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-red-500/80 text-[10px] font-sans font-bold tracking-[0.2em] uppercase mb-4 block">The Reality Check</span>
          <h2 className="text-3xl md:text-5xl font-serif text-zenith-white leading-tight">
            Seberapa Sering Anda Kalah Pitching dari <br/>
            Kompetitor yang <span className="text-zenith-slate italic">Desainnya 'Biasa Saja'?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Glassmorphism */}
            <div className="glass-panel p-10 relative group hover:-translate-y-2 transition-transform duration-500 rounded-sm">
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-red-900/20 rounded-full blur-2xl group-hover:bg-red-900/40 transition-colors"></div>
                <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full border border-red-500/30 flex items-center justify-center mb-8 bg-red-900/10">
                        <Ghost className="w-5 h-5 text-red-400" />
                    </div>
                    <h3 className="text-zenith-white font-serif text-xl mb-4">The Ghosting</h3>
                    <p className="text-zenith-slate text-sm font-light leading-relaxed">
                       "Anda habiskan 3 hari membuat RAB & Konsep, mereka menghilang dalam 3 detik setelah melihat harga."
                    </p>
                </div>
            </div>

             {/* Card 2 - Glassmorphism */}
            <div className="glass-panel p-10 relative group hover:-translate-y-2 transition-transform duration-500 delay-100 rounded-sm">
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-red-900/20 rounded-full blur-2xl group-hover:bg-red-900/40 transition-colors"></div>
                <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full border border-red-500/30 flex items-center justify-center mb-8 bg-red-900/10">
                        <TrendingDown className="w-5 h-5 text-red-400" />
                    </div>
                    <h3 className="text-zenith-white font-serif text-xl mb-4">Price War</h3>
                    <p className="text-zenith-slate text-sm font-light leading-relaxed">
                       "Sakit hati rasanya ketika karya masterpiece Anda disamakan harganya dengan tukang borongan."
                    </p>
                </div>
            </div>

             {/* Card 3 - Glassmorphism */}
            <div className="glass-panel p-10 relative group hover:-translate-y-2 transition-transform duration-500 delay-200 rounded-sm">
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-red-900/20 rounded-full blur-2xl group-hover:bg-red-900/40 transition-colors"></div>
                <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full border border-red-500/30 flex items-center justify-center mb-8 bg-red-900/10">
                        <MessageSquareX className="w-5 h-5 text-red-400" />
                    </div>
                    <h3 className="text-zenith-white font-serif text-xl mb-4">Inbox Spam</h3>
                    <p className="text-zenith-slate text-sm font-light leading-relaxed">
                       "Inbox penuh pertanyaan 'Bisa kurang gak?'. Nol closing. Hanya buang waktu berharga Anda."
                    </p>
                </div>
            </div>
        </div>

        <div className="mt-20 text-center border-t border-zenith-white/5 pt-12">
           <p className="text-zenith-white text-base md:text-xl font-serif italic opacity-90">
              "Ini bukan salah karya Anda. Ini salah <span className="text-zenith-gold border-b border-zenith-gold/50 pb-1">sistem penyaring</span> Anda."
           </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
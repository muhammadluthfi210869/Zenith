import React from 'react';
import { Bot, Filter, Sparkles, MoveRight, Database, Brain } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-32 bg-zenith-black border-t border-zenith-white/5" id="architecture">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20 max-w-2xl">
           <span className="text-zenith-teal text-[10px] font-sans font-bold tracking-[0.2em] uppercase block mb-6">
              The Blueprint Grid
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-zenith-white leading-tight mb-6">
              Sistem Otomasi <br/>
              <span className="text-zenith-slate">Studio Interior</span>
            </h2>
            <p className="text-zenith-slate font-sans font-light leading-relaxed">
              Kami tidak membuat website. Kami membangun ekosistem digital yang bekerja seperti Sales Manager senior Anda.
            </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-px bg-zenith-charcoal border border-zenith-white/5">
            
            {/* Feature 1 - Large */}
            <div className="md:col-span-2 md:row-span-2 bg-zenith-black p-12 group hover:bg-zenith-card transition-all duration-500 relative border border-transparent hover:border-zenith-gold/50 z-10">
               <div className="mb-12 p-4 inline-block rounded border border-zenith-gold/20 bg-zenith-gold/5">
                  <Bot className="w-8 h-8 text-zenith-gold" />
               </div>
               <h3 className="text-3xl font-serif text-zenith-white mb-6 group-hover:text-zenith-gold transition-colors">24/7 AI Concierge</h3>
               <p className="text-zenith-slate font-sans font-light leading-relaxed max-w-md">
                  Bukan chatbot biasa. Sarah menjawab pertanyaan teknis, menghitung estimasi awal, & menjadwalkan konsultasi saat Anda tidur. Didukung model bahasa terbaru yang mengerti konteks desain.
               </p>
               <div className="mt-12 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                  <span className="text-xs text-zenith-gold font-sans font-bold tracking-widest uppercase flex items-center gap-2">
                     Learn Logic <MoveRight className="w-3 h-3" />
                  </span>
               </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-zenith-black p-10 group hover:bg-zenith-card transition-all duration-500 relative border border-transparent hover:border-zenith-teal/50 z-10">
               <div className="mb-6">
                  <Filter className="w-6 h-6 text-zenith-teal" />
               </div>
               <h3 className="text-xl font-serif text-zenith-white mb-3">High-Ticket Filter</h3>
               <p className="text-zenith-slate text-xs font-light leading-relaxed">
                  Formulir psikologis yang otomatis memfilter 'Ghost Leads' dan hanya meloloskan budget serius.
               </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-zenith-black p-10 group hover:bg-zenith-card transition-all duration-500 relative border border-transparent hover:border-zenith-white/30 z-10">
               <div className="mb-6">
                  <Sparkles className="w-6 h-6 text-zenith-white" />
               </div>
               <h3 className="text-xl font-serif text-zenith-white mb-3">Narrative Branding</h3>
               <p className="text-zenith-slate text-xs font-light leading-relaxed">
                  Copywriting otoritas tinggi yang membuat klien merasa 'kurang' jika menawar harga Anda.
               </p>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
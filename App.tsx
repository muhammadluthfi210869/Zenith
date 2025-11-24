import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Features from './components/Features';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import PackageCalculator from './components/PackageCalculator';
import Location from './components/Location';
import Founder from './components/Founder';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import ConsultationModal from './components/ConsultationModal';
import { Cpu, Zap, Activity } from 'lucide-react';
import Reveal from './components/Reveal';

const ArchitectureStats: React.FC = () => (
   <section className="py-24 bg-zenith-charcoal border-y border-white/5 relative overflow-hidden">
      {/* Decorative Tech Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-zenith-teal/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
         <div>
            <div className="flex items-center gap-2 mb-4">
               <Zap className="w-4 h-4 text-zenith-gold" />
               <span className="text-zenith-gold text-[10px] font-heading font-bold tracking-[0.2em] uppercase">The System Architecture</span>
            </div>

            <h2 className="text-4xl font-serif text-zenith-white mb-6 leading-tight">
               ARSITEKTUR<br />
               <span className="text-zenith-teal">SISTEM 24 JAM</span>
            </h2>
            <p className="text-zenith-gray font-sans text-sm leading-relaxed mb-6">
               Jangan biarkan bisnis Anda tidur. Sementara Anda beristirahat, sistem AI kami bekerja 24/7 menyambut pengunjung, menjawab pertanyaan, dan mengamankan janji temu survei secara otomatis.
            </p>
            <p className="text-zenith-gray font-sans text-xs leading-relaxed mb-10 pl-4 border-l-2 border-zenith-gold/30 italic">
               "Tidak ada lagi leads yang hilang di malam hari. Website Anda menjadi sales representative yang tidak pernah lelah."
            </p>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/5">
               <div>
                  <h4 className="text-3xl text-zenith-white font-serif">24/7</h4>
                  <div className="flex items-center gap-1 mt-2">
                     <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                     <p className="text-[10px] text-zenith-gray uppercase tracking-wider font-heading">AI Active</p>
                  </div>
               </div>
               <div>
                  <h4 className="text-3xl text-zenith-white font-serif">100%</h4>
                  <p className="text-[10px] text-zenith-gray uppercase tracking-wider mt-2 font-heading">Automated</p>
               </div>
               <div>
                  <h4 className="text-3xl text-zenith-white font-serif">0</h4>
                  <p className="text-[10px] text-zenith-gray uppercase tracking-wider mt-2 font-heading">Missed Leads</p>
               </div>
            </div>
         </div>

         <div className="relative aspect-square border border-white/5 bg-zenith-black flex items-center justify-center p-12 shadow-2xl">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-zenith-gold"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-zenith-gold"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-zenith-gold"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-zenith-gold"></div>

            <div className="w-full h-full border border-zenith-teal/10 flex items-center justify-center relative bg-zenith-charcoal/50 backdrop-blur-sm">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] border border-white/5 rotate-45"></div>
               <div className="text-center z-10">
                  <Cpu className="w-12 h-12 text-zenith-teal mx-auto mb-4 opacity-80" />
                  <span className="text-6xl font-serif text-zenith-white font-bold block mb-2 tracking-tighter">Z</span>
                  <span className="text-[10px] text-zenith-gold uppercase tracking-[0.3em] font-heading">Est. 2024</span>
               </div>
            </div>
         </div>
      </div>
   </section>
);

const App: React.FC = () => {
   const [loading, setLoading] = useState(true);
   const [isModalOpen, setIsModalOpen] = useState(false);

   useEffect(() => {
      // Simulate loading for smooth font rendering
      const timer = setTimeout(() => setLoading(false), 800);
      return () => clearTimeout(timer);
   }, []);

   if (loading) {
      return <div className="h-screen w-screen bg-zenith-black flex items-center justify-center text-zenith-gold animate-pulse tracking-[0.5em] font-serif text-xl">ZENITH STUDIO</div>;
   }

   return (
      <main className="bg-zenith-black min-h-screen text-zenith-white font-sans selection:bg-zenith-gold selection:text-black">
         <Navbar onOpenModal={() => setIsModalOpen(true)} />
         <Hero />

         <Reveal variant="fade-up" delay={0.2}>
            <Problem />
         </Reveal>

         <Reveal variant="fade-up" delay={0.2}>
            <Features />
         </Reveal>

         <Reveal variant="fade-up" delay={0.2}>
            <ArchitectureStats />
         </Reveal>

         <Reveal variant="fade-up" delay={0.2}>
            <Testimonials />
         </Reveal>

         <Reveal variant="fade-up" delay={0.2}>
            <Projects />
         </Reveal>

         <Reveal variant="scale-up" delay={0.2}>
            <PackageCalculator onOpenModal={() => setIsModalOpen(true)} />
         </Reveal>

         <Reveal variant="fade-up" delay={0.2}>
            <Location />
         </Reveal>

         <Reveal variant="fade-up" delay={0.2}>
            <Founder />
         </Reveal>

         <Footer />
         <FloatingWidgets />
         <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </main>
   );
};

export default App;
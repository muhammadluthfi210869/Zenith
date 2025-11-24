import React from 'react';
import { PROJECTS } from '../constants';
import { Bot, PenTool } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section className="py-32 bg-zenith-black" id="process">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 pb-8 border-b border-white/5">
          <div>
            <span className="text-zenith-gold text-[10px] font-heading font-bold tracking-[0.2em] uppercase mb-4 block">Selected Works</span>
            <h2 className="text-4xl md:text-5xl font-serif text-zenith-white">FEATURED PROJECTS</h2>
          </div>
          <div className="mt-8 md:mt-0">
             <p className="text-zenith-gray font-sans text-sm max-w-xs text-right hidden md:block">
               Kurasi proyek dengan integrasi AI & Psikologi Copywriting.
             </p>
          </div>
        </div>

        <div className="space-y-40">
          {PROJECTS.map((project, idx) => (
            <div key={project.id} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center group`}>
              
              {/* Image Side */}
              <div className="w-full md:w-3/5 relative">
                <div className="absolute -inset-1 bg-zenith-teal/20 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-1000"></div>
                <div className="relative overflow-hidden aspect-[16/10] bg-zenith-card">
                  <div className="absolute inset-0 z-10 bg-zenith-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105 ease-out"
                  />
                  {/* Overlay UI */}
                  <div className="absolute bottom-0 left-0 bg-zenith-black/90 px-6 py-4 border-t border-r border-white/10 backdrop-blur-md z-20">
                     <span className="text-zenith-white text-xs font-serif italic">Project 0{idx + 1}</span>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-2/5 space-y-10">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                     <div className="h-[1px] w-8 bg-zenith-gold"></div>
                     <span className="text-[10px] text-zenith-gold font-heading tracking-[0.2em] uppercase">{project.category}</span>
                  </div>
                  <h3 className="text-3xl font-serif text-zenith-white leading-tight">{project.title}</h3>
                </div>

                <div className="space-y-6">
                  {/* Insight Item */}
                  <div className="pl-6 border-l border-white/10 group-hover:border-zenith-gold transition-colors duration-500">
                    <h4 className="text-xs font-heading font-bold text-zenith-white uppercase tracking-wider mb-2 flex items-center gap-2">
                       <PenTool className="w-3 h-3 text-zenith-gold" /> Psychology Strategy
                    </h4>
                    <p className="text-zenith-gray font-sans font-light text-sm leading-relaxed">
                      {project.id === '1' 
                        ? "Implementasi 'Loss Aversion' pada copy landing page untuk meningkatkan urgensi booking."
                        : "Framing otoritas tinggi untuk memposisikan harga premium sebagai standar industri."}
                    </p>
                  </div>

                  {/* Insight Item */}
                  <div className="pl-6 border-l border-white/10 group-hover:border-zenith-teal transition-colors duration-500">
                    <h4 className="text-xs font-heading font-bold text-zenith-white uppercase tracking-wider mb-2 flex items-center gap-2">
                       <Bot className="w-3 h-3 text-zenith-teal" /> AI Integration
                    </h4>
                    <p className="text-zenith-gray font-sans font-light text-sm leading-relaxed">
                      {project.id === '1' 
                        ? "Kalkulator estimasi dinamis yang menangkap data user sebelum menampilkan harga."
                        : "Deploy 'Sarah' bot untuk kualifikasi otomatis lead kontraktor mewah."}
                    </p>
                  </div>
                </div>
                
                <button className="text-[10px] text-zenith-white font-heading font-bold border-b border-white/20 pb-1 hover:text-zenith-gold hover:border-zenith-gold transition-all">
                   VIEW CASE STUDY
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
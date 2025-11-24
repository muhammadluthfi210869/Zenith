import React from 'react';
import { MapPin, ArrowUpRight, Coffee } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-zenith-black border-t border-white/5 relative overflow-hidden" id="studio">
      {/* Subtle Background Animation */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8 md:space-y-10 order-2 lg:order-1">
            <div className="animate-fade-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <span className="text-zenith-gold text-[10px] font-heading font-bold tracking-[0.2em] uppercase mb-4 block">
                Headquarters
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-zenith-white leading-tight mb-6">
                BANDUNG<br />
                <span className="text-zenith-teal italic">CREATIVE HUB</span>
              </h2>
              <div className="w-12 h-0.5 bg-zenith-gold mb-6"></div>
              <p className="text-zenith-gray font-sans font-light text-sm md:text-base leading-relaxed">
                Berbasis di jantung kreativitas Bandung. Kami melayani klien di seluruh Indonesia, namun selalu terbuka untuk diskusi tatap muka bagi Anda yang berada di kota ini.
              </p>
            </div>

            <div className="space-y-4 animate-fade-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <div className="p-6 border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-lg hover:border-zenith-gold/30 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-zenith-gold/10 rounded-full group-hover:bg-zenith-gold/20 transition-colors">
                    <MapPin className="w-5 h-5 text-zenith-gold" />
                  </div>
                  <div>
                    <h4 className="text-zenith-white font-bold text-sm tracking-wide uppercase mb-1">Dago Area, Bandung</h4>
                    <p className="text-zenith-gray text-xs mb-3">Strategic Command Center</p>
                    <a
                      href="https://maps.google.com/?q=Dago,Bandung"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[10px] text-zenith-teal uppercase tracking-widest hover:text-zenith-white transition-colors"
                    >
                      View on Map <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 border border-white/10 bg-gradient-to-r from-zenith-teal/10 to-transparent backdrop-blur-sm rounded-lg hover:border-zenith-teal/30 transition-colors group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-zenith-teal/10 rounded-full group-hover:bg-zenith-teal/20 transition-colors">
                    <Coffee className="w-5 h-5 text-zenith-teal" />
                  </div>
                  <div>
                    <h4 className="text-zenith-white font-bold text-sm tracking-wide uppercase mb-1">Coffee & Strategy?</h4>
                    <p className="text-zenith-gray text-xs mb-3">Mari bertemu langsung untuk bedah potensi bisnis Anda.</p>
                    <button
                      onClick={() => window.open('https://wa.me/6281234567890?text=Halo%20Zenith,%20saya%20ingin%20jadwalkan%20meeting%20di%20Bandung.', '_blank')}
                      className="inline-flex items-center gap-2 text-[10px] text-zenith-gold uppercase tracking-widest hover:text-zenith-white transition-colors"
                    >
                      Schedule Meeting <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="lg:col-span-7 relative group order-1 lg:order-2 animate-fade-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <div className="absolute inset-0 bg-zenith-teal/20 blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000 pointer-events-none"></div>

            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-[#0A0F14] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">

              {/* Map Image (Bandung Focused) */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56347862248!2d107.57311687148142!3d-6.903444341687889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1716789012345!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-60 hover:opacity-80 transition-opacity duration-700"
              ></iframe>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-zenith-black via-transparent to-transparent pointer-events-none"></div>

              {/* Marker Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="relative flex items-center justify-center">
                  <div className="w-4 h-4 bg-zenith-gold rounded-full z-10 shadow-[0_0_20px_rgba(197,160,89,0.8)]"></div>
                  <div className="absolute w-16 h-16 bg-zenith-gold/30 rounded-full animate-ping"></div>
                  <div className="absolute w-32 h-32 border border-zenith-gold/10 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Floating Status */}
              <div className="absolute bottom-6 left-6 bg-zenith-black/90 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-3 shadow-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] text-zenith-white font-mono tracking-widest uppercase">Open for Visits</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;
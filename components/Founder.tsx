import React from 'react';

const Founder: React.FC = () => {
  return (
    <section id="founder" className="bg-zenith-black relative overflow-hidden py-24 md:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-zenith-black via-zenith-black/90 to-zenith-black z-10"></div>

      {/* Logos */}
      <img
        src="/assets/gold_zenith_logo.png"
        alt="Zenith Gold Logo"
        className="absolute top-8 right-8 md:top-16 md:right-16 w-16 md:w-24 opacity-90 z-30"
      />
      {/* Secondary Logo (Watermark) */}
      <img
        src="/assets/zenith-logo-gold.png"
        alt="Zenith Emblem"
        className="absolute bottom-0 left-0 w-[500px] opacity-[0.03] pointer-events-none mix-blend-screen z-10"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-20">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

          {/* Portrait Section */}
          <div className="w-full md:w-5/12 relative group flex justify-center md:justify-end">
            <div className="relative w-64 md:w-80 aspect-[3/4] overflow-hidden rounded-sm shadow-2xl">
              {/* Gradient Overlay for 'Fade' effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-zenith-black via-transparent to-transparent z-10 opacity-80"></div>
              <img
                src="/assets/portrait_luthfi.png"
                alt="M. Luthfi - Founder"
                className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-7/12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-zenith-gold mb-8 tracking-widest uppercase">
              Arsitek Di Balik Layar
            </h2>

            <blockquote className="text-lg md:text-xl text-zenith-white/90 font-light leading-relaxed mb-10 font-sans max-w-2xl mx-auto md:mx-0">
              "Di era AI, sentuhan manusia justru makin mahal. Saya Luthfi, dan saya pastikan logika bisnis Anda diterjemahkan dengan sempurna ke dalam sistem ini. Bukan template, tapi strategi."
            </blockquote>

            <div className="flex flex-col items-center md:items-start gap-4">
              <img
                src="/assets/signature_luthfi.png"
                alt="Signature"
                className="h-16 md:h-20 invert opacity-90"
              />
              <div className="text-center md:text-left">
                <h4 className="text-zenith-white font-bold text-lg tracking-widest uppercase">M. Luthfi</h4>
                <p className="text-zenith-gray text-xs tracking-[0.2em] uppercase mt-1">Lead Strategist & Architect</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Founder;
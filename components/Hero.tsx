import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const words = ["MAGNET", "OTORITAS", "KERAJAAN"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter Logic
  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const handleTyping = () => {
      const fullText = words[currentWordIndex];

      if (isDeleting) {
        setDisplayText(prev => fullText.substring(0, prev.length - 1));
      } else {
        setDisplayText(prev => fullText.substring(0, prev.length + 1));
      }

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zenith-black">
      {/* Animated Wireframe Background (Simulated) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C5A059" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          {/* Animated lines simulating building construction */}
          <line x1="0" y1="100%" x2="100%" y2="0" stroke="#C5A059" strokeWidth="1" opacity="0.2">
            <animate attributeName="stroke-dasharray" from="0, 2000" to="2000, 0" dur="10s" repeatCount="indefinite" />
          </line>
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="#20B2AA" strokeWidth="1" opacity="0.2">
            <animate attributeName="stroke-dasharray" from="0, 2000" to="2000, 0" dur="15s" repeatCount="indefinite" />
          </line>
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-zenith-black via-transparent to-zenith-black"></div>
      </div>

      {/* Spotlight Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vh] bg-zenith-gold/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 text-center max-w-6xl px-6 pt-20">

        {/* Badge */}
        <div className="animate-fade-up opacity-0" style={{ animationDelay: '0.1s' }}>
          <div className="inline-flex items-center gap-3 px-5 py-2 mb-10 border border-zenith-gold/20 rounded-full bg-zenith-gold/5 backdrop-blur-md">
            <div className="w-1.5 h-1.5 bg-zenith-teal rounded-full animate-pulse-slow"></div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-zenith-gold/80 font-sans font-semibold">Authority Filtering System</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-zenith-white mb-8 leading-[1.1] animate-fade-up opacity-0" style={{ animationDelay: '0.3s' }}>
          Ubah Studio Anda Menjadi <br />
          <span className="text-zenith-gold relative inline-block min-w-[300px] text-left">
            {displayText}
            <span className="absolute right-0 top-0 bottom-0 w-[2px] bg-zenith-teal animate-pulse"></span>
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-zenith-slate font-sans font-light text-base md:text-lg max-w-2xl mx-auto mb-14 leading-loose animate-fade-up opacity-0" style={{ animationDelay: '0.5s' }}>
          Zenith membangun <span className="text-zenith-white border-b border-zenith-teal/30 pb-0.5">Arsitektur Digital</span> yang membuat harga Anda terlihat Masuk Akal di mata klien sultan, dan otomatis menolak klien murah.
        </p>

        {/* Heartbeat CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-8 animate-fade-up opacity-0" style={{ animationDelay: '0.7s' }}>
          <button
            onClick={() => {
              // Trigger custom event to open chatbot
              const event = new CustomEvent('openChatbot');
              window.dispatchEvent(event);
            }}
            className="group relative px-12 py-5 bg-transparent border border-zenith-gold/30 text-zenith-gold font-sans font-bold text-[11px] tracking-[0.2em] transition-all hover:bg-zenith-gold hover:text-zenith-black overflow-hidden animate-glow"
          >
            <div className="absolute inset-0 w-full h-full bg-zenith-gold/10 group-hover:bg-transparent transition-colors"></div>
            <span className="relative z-10 flex items-center gap-3">
              LIHAT DEMO
              <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-[9px] uppercase tracking-[0.2em] text-zenith-slate">The Blueprint</span>
        <ChevronDown className="w-4 h-4 text-zenith-white" />
      </div>
    </section>
  );
};

export default Hero;
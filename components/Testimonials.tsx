import React, { useState, useEffect } from 'react';
import { TESTIMONIALS, ExtendedTestimonialItem } from '../constants';
import { Quote, ChevronLeft, ChevronRight, Star, BadgeCheck } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const activeTestimonial = TESTIMONIALS[currentIndex] as ExtendedTestimonialItem;

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('right');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
      setIsAnimating(false);
    }, 400);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('left');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
      setIsAnimating(false);
    }, 400);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 12000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-zenith-black relative overflow-hidden" id="testimonials">

      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-zenith-black via-transparent to-transparent z-10"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-zenith-black via-transparent to-transparent z-10"></div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-zenith-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">

        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zenith-white/5 border border-zenith-white/10 backdrop-blur-sm mb-6">
            <Star className="w-3 h-3 text-zenith-gold fill-zenith-gold" />
            <span className="text-xs font-medium text-zenith-gold tracking-widest uppercase">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-zenith-white mb-6">
            Trusted by <span className="italic text-zenith-gold">Visionaries</span>
          </h2>
          <p className="text-zenith-gray max-w-2xl mx-auto text-lg font-light">
            Real results from industry leaders who upgraded their digital presence.
          </p>
        </div>

        {/* Main Content Area */}
        <div className="relative max-w-6xl mx-auto">

          {/* Navigation Buttons (Desktop) */}
          <div className="hidden md:flex justify-between absolute top-1/2 -translate-y-1/2 -left-12 -right-12 z-30 pointer-events-none">
            <button
              onClick={handlePrev}
              className="pointer-events-auto w-14 h-14 bg-zenith-black/50 border border-zenith-white/10 hover:border-zenith-gold hover:bg-zenith-black backdrop-blur-md rounded-full flex items-center justify-center text-zenith-white transition-all duration-300 group shadow-2xl hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={handleNext}
              className="pointer-events-auto w-14 h-14 bg-zenith-black/50 border border-zenith-white/10 hover:border-zenith-gold hover:bg-zenith-black backdrop-blur-md rounded-full flex items-center justify-center text-zenith-white transition-all duration-300 group shadow-2xl hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Testimonial Card */}
          <div className="bg-gradient-to-br from-zenith-white/5 to-zenith-white/[0.02] backdrop-blur-xl border border-zenith-white/10 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden min-h-[600px] md:min-h-[500px] flex items-center">

            {/* Glass Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-zenith-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <div className={`grid md:grid-cols-12 gap-10 md:gap-16 items-center w-full transition-all duration-500 ease-out ${isAnimating ? 'opacity-0 scale-95 blur-sm translate-y-4' : 'opacity-100 scale-100 blur-0 translate-y-0'}`}>

              {/* Image Column (Mobile: Top, Desktop: Left) */}
              <div className="md:col-span-5 relative group">
                <div className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden border border-zenith-white/10 shadow-2xl">
                  <div className="absolute inset-0 bg-zenith-gold/20 mix-blend-overlay z-10"></div>
                  <img
                    src={activeTestimonial.image}
                    alt={activeTestimonial.author}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />

                  {/* Floating Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-zenith-black/80 backdrop-blur-md border border-zenith-white/10 p-4 rounded-xl z-20 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-zenith-gold/10 rounded-full">
                        <BadgeCheck className="w-5 h-5 text-zenith-gold" />
                      </div>
                      <div>
                        <p className="text-xs text-zenith-gray uppercase tracking-wider">Verified Client</p>
                        <p className="text-sm font-bold text-zenith-white">{activeTestimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements behind image */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-zenith-gold/30 rounded-tl-3xl -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-zenith-gold/30 rounded-br-3xl -z-10"></div>
              </div>

              {/* Content Column */}
              <div className="md:col-span-7 text-left">
                <Quote className="w-12 h-12 text-zenith-gold/20 mb-8" />

                <div className="mb-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-zenith-gold fill-zenith-gold" />
                    ))}
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-zenith-white leading-relaxed italic">
                    "{activeTestimonial.quote}"
                  </h3>
                </div>

                <div className="border-t border-zenith-white/10 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <h4 className="text-xl font-bold text-zenith-white mb-1 tracking-wide">{activeTestimonial.author}</h4>
                    <p className="text-zenith-gold font-medium">{activeTestimonial.role}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {activeTestimonial.tags?.map((tag, idx) => (
                      <span key={idx} className="px-4 py-1.5 rounded-full bg-zenith-white/5 border border-zenith-white/10 text-xs text-zenith-gray uppercase tracking-wider hover:border-zenith-gold/50 hover:text-zenith-gold transition-colors cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Mobile Navigation & Dots */}
          <div className="flex flex-col items-center gap-6 mt-10">
            <div className="flex md:hidden gap-4">
              <button onClick={handlePrev} className="p-3 rounded-full bg-zenith-white/5 border border-zenith-white/10 text-zenith-white hover:bg-zenith-gold hover:text-zenith-black transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={handleNext} className="p-3 rounded-full bg-zenith-white/5 border border-zenith-white/10 text-zenith-white hover:bg-zenith-gold hover:text-zenith-black transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex gap-3">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (!isAnimating && idx !== currentIndex) {
                      setIsAnimating(true);
                      setTimeout(() => {
                        setCurrentIndex(idx);
                        setIsAnimating(false);
                      }, 400);
                    }
                  }}
                  className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentIndex ? 'w-12 bg-zenith-gold' : 'w-2 bg-zenith-white/20 hover:bg-zenith-white/40'}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
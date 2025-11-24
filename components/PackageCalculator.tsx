import React, { useState, useEffect } from 'react';
import { PRICING_TIERS } from '../constants';
import { Check, ArrowRight, Lock, Sparkles, Bot } from 'lucide-react';

interface PackageCalculatorProps {
  onOpenModal: () => void;
}

const PackageCalculator: React.FC<PackageCalculatorProps> = ({ onOpenModal }) => {
  const [selectedTierIndex, setSelectedTierIndex] = useState(1);
  const [displayPrice, setDisplayPrice] = useState(PRICING_TIERS[1].price);
  const [isInteracting, setIsInteracting] = useState(false);

  const currentTier = PRICING_TIERS[selectedTierIndex];
  const featuresCount = currentTier.features.filter(f => f.included).length;
  const totalFeatures = currentTier.features.length;

  // Odometer / Slot Machine Effect
  useEffect(() => {
    const targetPrice = currentTier.price;
    const duration = 800; // ms
    const frameRate = 16; // 60fps ~ 16ms
    const totalFrames = Math.round(duration / frameRate);

    let frame = 0;
    const startPrice = displayPrice;
    const diff = targetPrice - startPrice;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease Out Quint
      const ease = 1 - Math.pow(1 - progress, 5);

      const currentVal = startPrice + (diff * ease);
      setDisplayPrice(currentVal);

      if (frame === totalFrames) {
        clearInterval(counter);
        setDisplayPrice(targetPrice);
      }
    }, frameRate);

    return () => {
      clearInterval(counter);
    };
  }, [selectedTierIndex]);

  const formatPrice = (val: number) => {
    return new Intl.NumberFormat('id-ID', { maximumFractionDigits: 0 }).format(Math.round(val));
  };

  return (
    <section className="py-32 bg-zenith-black border-t border-zenith-white/5 relative overflow-hidden" id="package-calculator">

      {/* Background glow for ambience */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zenith-gold/5 blur-[150px] rounded-full pointer-events-none transition-all duration-700 ${selectedTierIndex === 1 ? 'opacity-40 scale-110' : 'opacity-20 scale-100'}`}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-zenith-gold/30 rounded-full bg-zenith-gold/5 backdrop-blur-sm">
            <span className={`w-1.5 h-1.5 rounded-full bg-zenith-gold ${isInteracting ? 'animate-ping' : 'animate-pulse'}`}></span>
            <span className="text-zenith-gold text-[10px] font-sans font-bold tracking-[0.2em] uppercase">Smart Investment Configurator</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-zenith-white mb-6">PILIH STRATEGI ANDA</h2>
          <p className="text-zenith-slate font-sans font-light">Sistem kami dirancang untuk tumbuh bersama bisnis Anda. Mulai dari fondasi yang kuat hingga dominasi pasar total.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* CONTROL PANEL (Left Side) */}
          <div className="lg:col-span-5 sticky top-24 z-20 space-y-8">

            {/* Price Display Card */}
            <div className={`bg-zenith-charcoal border p-10 relative overflow-hidden transition-all duration-500 rounded-2xl ${selectedTierIndex === 1
                ? 'border-zenith-gold shadow-[0_0_50px_rgba(197,160,89,0.15)] scale-[1.02]'
                : 'border-zenith-white/5 hover:border-zenith-white/20'
              }`}>
              <div className="flex justify-between items-start mb-2">
                <p className="text-zenith-slate text-[10px] font-sans font-bold uppercase tracking-wider">Total Investment</p>
                <div className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest transition-colors duration-300 ${selectedTierIndex === 1 ? 'bg-zenith-gold/20 text-zenith-gold' :
                    selectedTierIndex === 2 ? 'bg-purple-500/20 text-purple-300' : 'bg-white/10 text-slate-400'
                  }`}>
                  {currentTier.tagline}
                </div>
              </div>

              <div className="flex items-baseline gap-1 font-serif text-5xl md:text-6xl text-zenith-white mb-6">
                <span className="text-xl text-zenith-slate font-sans font-light">Rp</span>
                <div className={`tabular-nums tracking-tight transition-all duration-300 ${isInteracting ? 'text-zenith-gold blur-[0.5px]' : 'text-zenith-white'}`}>
                  {formatPrice(displayPrice)}
                </div>
              </div>

              <div className="flex items-center gap-2 text-zenith-slate text-xs">
                <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-zenith-gold transition-all duration-500 ease-out" style={{ width: `${(featuresCount / totalFeatures) * 100}%` }}></div>
                </div>
                <span className="font-mono text-zenith-gold">{featuresCount} of {totalFeatures} features unlocked</span>
              </div>
            </div>

            {/* TIER SELECTION (Decoy Effect) */}
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              {PRICING_TIERS.map((tier, index) => (
                <button
                  key={tier.id}
                  onClick={() => setSelectedTierIndex(index)}
                  className={`relative p-4 rounded-xl border transition-all duration-300 flex flex-col items-center justify-center gap-2 group ${selectedTierIndex === index
                      ? index === 1
                        ? 'bg-zenith-gold/10 border-zenith-gold shadow-[0_0_20px_rgba(197,160,89,0.2)] scale-105 z-10'
                        : 'bg-white/5 border-white/30'
                      : 'bg-transparent border-white/5 hover:bg-white/5 hover:border-white/10 opacity-60 hover:opacity-100'
                    }`}
                >
                  {index === 1 && (
                    <div className="absolute -top-3 px-2 py-0.5 bg-zenith-gold text-zenith-black text-[8px] font-bold uppercase tracking-widest rounded-full shadow-lg animate-pulse">
                      Best Value
                    </div>
                  )}
                  <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wider text-center ${selectedTierIndex === index ? 'text-zenith-white' : 'text-zenith-slate'}`}>
                    {tier.name}
                  </span>
                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${selectedTierIndex === index ? (index === 1 ? 'bg-zenith-gold scale-125' : 'bg-white') : 'bg-white/20'}`}></div>
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={onOpenModal}
              className={`w-full py-5 rounded-lg font-sans font-bold uppercase tracking-[0.2em] text-xs transition-all duration-300 flex items-center justify-center gap-2 group ${selectedTierIndex === 1
                  ? 'bg-zenith-gold text-zenith-black hover:bg-white hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(197,160,89,0.4)]'
                  : 'bg-white/10 text-zenith-white hover:bg-white/20'
                }`}
            >
              {selectedTierIndex === 1 ? 'Get Started Now' : 'Select This Plan'}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* FEATURES LIST (Right Side) */}
          <div className="lg:col-span-7 space-y-3">
            {currentTier.features.map((feature, index) => {
              const isAiFeature = feature.name.includes("AI") || feature.name.includes("Bot");

              return (
                <div
                  key={index}
                  className={`p-5 border rounded-xl flex items-center justify-between transition-all duration-500 ${feature.included
                      ? isAiFeature && selectedTierIndex === 1
                        ? 'bg-gradient-to-r from-zenith-gold/10 to-transparent border-zenith-gold/50 shadow-[0_0_20px_rgba(197,160,89,0.1)] scale-[1.02]'
                        : 'bg-zenith-charcoal border-zenith-gold/30 shadow-[0_4px_20px_rgba(0,0,0,0.2)]'
                      : 'bg-zenith-charcoal/30 border-white/5 opacity-40 grayscale'
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${feature.included
                        ? isAiFeature
                          ? 'bg-zenith-gold/20 text-zenith-gold scale-110'
                          : 'bg-zenith-teal/10 text-zenith-teal'
                        : 'bg-white/5 text-slate-600'
                      }`}>
                      {feature.included ? (
                        isAiFeature ? <Bot className="w-4 h-4 animate-pulse" /> : <Check className="w-4 h-4" />
                      ) : (
                        <Lock className="w-3 h-3" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-sans font-bold tracking-wide block ${feature.included ? 'text-zenith-white' : 'text-zenith-slate'}`}>
                          {feature.name}
                        </span>
                        {feature.included && isAiFeature && (
                          <span className="px-1.5 py-0.5 bg-zenith-gold/20 text-zenith-gold text-[8px] font-bold uppercase tracking-widest rounded-sm flex items-center gap-1">
                            <Sparkles className="w-2 h-2" /> AI Power
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Status Indicator */}
                  {feature.included ? (
                    <div className={`hidden md:block text-[10px] font-mono tracking-widest ${isAiFeature ? 'text-zenith-gold font-bold' : 'text-zenith-teal opacity-70'}`}>
                      INCLUDED
                    </div>
                  ) : (
                    <div className="hidden md:block text-[10px] text-zenith-slate font-mono tracking-widest opacity-30">
                      LOCKED
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PackageCalculator;
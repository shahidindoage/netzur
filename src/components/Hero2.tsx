import React, { useState, useEffect } from 'react';
import { ArrowRight, Activity, ShieldCheck } from 'lucide-react';

interface Hero2Props {
  onOpenDemo: () => void;
}

const ROTATING_WORDS = [
  'Easy!',
  'Automated!',
  'Effortless!',
  'Scalable!',
  'Profitable!',
  'Carrier-Grade!',
];

export const Hero2: React.FC<Hero2Props> = ({ onOpenDemo }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Initial delay reveal
  useEffect(() => {
    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, 600);
    return () => clearTimeout(startTimer);
  }, []);

  // Rotating words cycle
  useEffect(() => {
    if (!hasStarted) return;

    const interval = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setIsChanging(false);
      }, 480);
    }, 2800);

    return () => clearInterval(interval);
  }, [hasStarted]);

  const handleNextWord = () => {
    if (isChanging) return;
    setIsChanging(true);
    setTimeout(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
      setIsChanging(false);
    }, 480);
  };

  return (
    <section 
      id="hero-section-2"
      className="relative overflow-hidden bg-white text-slate-900 min-h-[calc(100vh-4.5rem)] flex flex-col"
    >
      {/* Background Grid & Soft Glows (Light Theme) */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04]" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
            backgroundSize: '40px 40px' 
          }}
        />
        {/* Soft Gradient Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-200/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-200/30 rounded-full blur-[120px]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-10 gap-12 lg:gap-20">
        
        {/* Left Column: Copy & CTA */}
        <div className="flex-1 max-w-2xl">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-orange-50 border border-orange-100">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F13B0A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F13B0A]"></span>
            </span>
            <span className="text-xs font-medium text-orange-900 tracking-wide">Next-Gen ISP Management Suite</span>
          </div> */}

          {/* Headline */}
          <h1 
            className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-6 text-slate-900"
            aria-label="Next-Gen Billing, Broadband Operations Made Easy!"
          >
            <span className="block">Next-Gen Billing,</span>
            <span className="block text-slate-500 mt-2">
              Broadband Operations Made{' '}
              <span 
                onClick={handleNextWord}
                title="Click to switch word"
                className="inline-block cursor-pointer select-none text-[#F13B0A] hover:opacity-90 transition-opacity"
              >
                {hasStarted ? (
                  <span
                    key={`${wordIndex}-${isChanging ? 'out' : 'in'}`}
                    className={`${isChanging ? 'animate-word-out' : 'animate-word-in'} inline-block`}
                  >
                    {ROTATING_WORDS[wordIndex]}
                  </span>
                ) : (
                  <span className="opacity-0 inline-block">
                    {ROTATING_WORDS[0]}
                  </span>
                )}
              </span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-8 font-normal">
            Streamline your ISP subscriber lifecycle, recurring invoicing, and sub-millisecond RADIUS provisioning. Purpose-built for modern broadband operators.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F13B0A] hover:bg-[#d8350a] text-white text-base font-semibold tracking-wide shadow-lg hover:shadow-[0_8px_30px_rgb(241,59,10,0.25)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer group"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 text-base font-medium tracking-wide shadow-sm transition-all cursor-pointer">
              Explore Platform
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center gap-6 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-slate-400" />
              <span>SOC 2 Compliant</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-200"></div>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-slate-400" />
              <span>99.99% Uptime</span>
            </div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="flex-1 w-full max-w-xl relative hidden md:block z-10">
          <div className="relative overflow-hidden p-2">
            <img 
              src="https://alepo.com/wp-content/uploads/2025/10/Home-hero-fixed-final.png" 
              alt="Netzur ISP Operations Dashboard" 
              className="rounded-xl w-full h-auto object-cover"
            />
          </div>
          
          {/* Floating Badge */}
          {/* <div className="absolute -bottom-5 -left-5 px-5 py-3 rounded-xl bg-slate-900 text-white text-sm font-bold shadow-xl flex items-center gap-2 border border-slate-800">
            <ShieldCheck className="w-4 h-4 text-[#F13B0A]" />
            Zero Revenue Leakage
          </div> */}

          {/* Floating Stats Card (Optional for extra flair) */}
          {/* <div className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-xl flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100">
              <Activity className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium">RADIUS Latency</div>
              <div className="text-sm font-bold text-slate-900">2.1ms</div>
            </div>
          </div> */}
        </div>

      </div>

      {/* Bottom Logo Strip */}
      <div className="relative z-10 w-full pb-8 pt-6 border-t border-slate-100 bg-slate-50/50 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-slate-500 mb-4 uppercase tracking-widest">Trusted by leading operators</p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-12 opacity-60 hover:opacity-100 transition-opacity duration-300">
            {/* Using generic text for demo, replace with actual SVGs if needed */}
            <div className="text-slate-700 font-bold text-lg">Nexus Net</div>
            <div className="text-slate-700 font-bold text-lg">Retool</div>
            <div className="text-slate-700 font-bold text-lg">Remote</div>
            <div className="text-slate-700 font-bold text-lg">ARC</div>
            <div className="text-slate-700 font-bold text-lg">Raycast</div>
            <div className="text-slate-700 font-bold text-lg">Vercel</div>
          </div>
        </div>
      </div>
    </section>
  );
};
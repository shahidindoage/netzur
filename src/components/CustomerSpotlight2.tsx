import React from 'react';
import { ArrowRight, Star, Quote } from 'lucide-react';

interface CustomerSpotlight2Props {
  onOpenDemo?: () => void;
}

export const CustomerSpotlight2: React.FC<CustomerSpotlight2Props> = ({ onOpenDemo }) => {
  return (
    <section className="bg-white py-10 sm:py-18 relative overflow-hidden font-sans">
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', 
          backgroundSize: '24px 24px' 
        }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Oversized Editorial Typography */}
          <div className="lg:col-span-5 space-y-8 text-left relative">
            {/* Floating Stat Badge */}
            <div className="absolute -top-10 -left-4 sm:-left-8 hidden md:flex items-center gap-3 bg-white border border-slate-100 shadow-xl rounded-2xl p-4 rotate-[-4deg]">
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold text-slate-900">98%</span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Retention</span>
              </div>
              <div className="w-px h-10 bg-slate-100"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold text-[#F13B0A]">4.9</span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Avg Rating</span>
              </div>
            </div>

            <div className="mt-8 md:mt-0">
              <span className="invisible inline-block px-3 py-1 text-xs font-bold tracking-widest text-[#F13B0A] bg-orange-50 rounded-full uppercase mb-6">
                Customer Spotlights
              </span>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-slate-900 leading-[0.95]">
                Trusted by <br />
                <span className="text-slate-300 font-light italic">industry</span> <br />
                leaders.
              </h2>
            </div>

            <p className="text-base text-slate-600 font-normal leading-relaxed max-w-md">
              From regional ISPs to global hospitality groups, operators rely on Netzur to scale their infrastructure, automate billing, and deliver flawless subscriber experiences.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenDemo}
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-slate-900 hover:bg-black text-white font-semibold text-sm tracking-wide transition-all shadow-lg hover:shadow-2xl active:scale-95 cursor-pointer"
              >
                <span>Read Success Stories</span>
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#F13B0A] transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Layered Collage & Glassmorphism Card */}
          <div className="lg:col-span-7 relative w-full h-[500px] sm:h-[600px] flex justify-center items-center">
            
            {/* Background Large Image (Left) */}
            <div className="absolute top-0 left-0 w-[55%] h-[70%] rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white transform transition-transform duration-500 hover:scale-95 hover:-rotate-2">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" 
                alt="ISP Owner" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Foreground Medium Image (Right) */}
            <div className="absolute top-[15%] right-0 w-[45%] h-[60%] rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white z-10 transform transition-transform duration-500 hover:scale-105 hover:rotate-3">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" 
                alt="Telecom Engineer" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Small Image (Left) */}
            <div className="absolute bottom-0 left-[10%] w-[35%] h-[40%] rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white z-20 transform transition-transform duration-500 hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" 
                alt="Network Architect" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Glassmorphism Testimonial Card */}
            <div className="absolute bottom-[5%] right-[5%] w-[70%] sm:w-[55%] z-30 bg-white/80 backdrop-blur-xl border border-white shadow-2xl rounded-3xl p-6 sm:p-8 transform transition-transform duration-500 hover:translate-y-[-4px]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md shrink-0">
                  <img 
                    src="https://images.pexels.com/photos/26336884/pexels-photo-26336884.jpeg" 
                    alt="Sarah Mitchell" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-[#F13B0A] fill-[#F13B0A]" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed mb-3">
                    "I recomend other ISP to use Netzur they will get great support."
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-slate-900">Charles Wambura</p>
                      <p className="text-[10px] text-slate-500">CEO, Nexusnet Limited</p>
                    </div>
                    <Quote className="w-6 h-6 text-slate-200" />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
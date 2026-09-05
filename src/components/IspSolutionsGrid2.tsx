import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Radio, Building2, Wifi } from 'lucide-react';

interface IspSolutionsGrid2Props {
  onOpenDemo: () => void;
}

const SOLUTIONS = [
  {
    id: 'isp',
    number: '01',
    title: 'Internet Management & Billing System For ISPs',
    oneLiner: 'RADIUS AAA, MikroTik fleets, and automated recurring billing.',
    tags: ['RADIUS AAA', 'MikroTik API', 'Auto-Billing'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1600&q=80',
    icon: Radio,
  },
  {
    id: 'hotel',
    number: '02',
    title: 'Wi-Fi Management System For Hotels',
    oneLiner: 'Room-number login, two-way PMS billing, and VIP bandwidth.',
    tags: ['PMS Sync', 'Captive Portal', 'Tiered Speed'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80',
    icon: Building2,
  },
  {
    id: 'hotspot',
    number: '03',
    title: 'Public Wi-Fi Hotspot Management System',
    oneLiner: 'High-density authentication, SMS OTP, and legal compliance.',
    tags: ['SMS OTP', 'Sponsor Ads', 'Audit Logs'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80',
    icon: Wifi,
  },
];

export const IspSolutionsGrid2: React.FC<IspSolutionsGrid2Props> = ({ onOpenDemo }) => {
  // Default to the first item being active so the section isn't empty on load
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section 
      id="solutions-2" 
      className="relative bg-slate-950 py-10 sm:py-18 overflow-hidden"
    >
      {/* =========================================================================
          DYNAMIC HOVER BACKGROUND LAYER
          ========================================================================= */}
      <div className="absolute inset-0 z-0">
        {SOLUTIONS.map((item, idx) => (
          <div 
            key={item.id} 
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              activeIndex === idx ? 'opacity-40' : 'opacity-0'
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            {/* Gradient overlays to ensure text remains readable over the image */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/50 to-transparent" />
          </div>
        ))}
        {/* Subtle grid texture for depth when images are fading */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      {/* =========================================================================
          CONTENT LAYER
          ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 sm:mb-24 gap-4">
          <div>
            {/* <span className="text-[11px] font-mono font-bold tracking-widest text-[#F13B0A] uppercase block mb-2">
              Solutions In Action
            </span> */}
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Engineered For Your Scale
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-xs font-normal">
            Three dedicated architectures tailored for telecom, hospitality, and public venues.
          </p>
        </div>

        {/* Interactive List */}
        <div 
          className="border-t border-slate-800/80" 
          onMouseLeave={() => setActiveIndex(0)} // Reset to first item when mouse leaves the list
        >
          {SOLUTIONS.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeIndex === idx;
            
            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={onOpenDemo}
                className={`group relative border-b border-slate-800/80 transition-colors duration-300 cursor-pointer ${
                  isActive ? 'bg-white/5' : ''
                }`}
              >
                {/* Sliding Active Indicator Line */}
                {isActive && (
                  <motion.div 
                    layoutId="solutionIndicator"
                    className="absolute left-0 top-0 h-full w-1 bg-[#F13B0A]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}

                <div className="flex items-center justify-between py-8 sm:py-10 px-2 sm:px-6">
                  
                  {/* Left Side: Number + Icon + Title */}
                  <div className="flex items-center gap-6 sm:gap-10">
                    {/* <span className={`font-mono text-sm transition-colors duration-300 ${isActive ? 'text-[#F13B0A]' : 'text-slate-600'}`}>
                      {item.number}
                    </span> */}
                    
                    <div className={`w-18 h-12 sm:w-14 sm:h-14 rounded-2xl border flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#F13B0A] border-[#F13B0A] text-white shadow-lg shadow-orange-500/20' 
                        : 'border-slate-700 text-slate-500 group-hover:border-slate-600 group-hover:text-slate-300'
                    }`}>
                      <Icon className=" w-6 h-6" />
                    </div>

                    <div>
                      <h3 className={`font-heading font-extrabold text-lg sm:text-2xl lg:text-3xl tracking-tight transition-colors duration-300 leading-tight ${
                        isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                      }`}>
                        {item.title}
                      </h3>
                      {/* Show one-liner on active or mobile */}
                      <p className={`text-xs sm:text-sm mt-1 transition-colors duration-300 ${
                        isActive ? 'text-slate-300' : 'text-slate-500'
                      }`}>
                        {item.oneLiner}
                      </p>
                    </div>
                  </div>

                  {/* Right Side: Tags + Arrow Button */}
                  <div className="flex items-center gap-6 sm:gap-10">
                    {/* <div className="hidden lg:flex gap-2">
                      {item.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className={`px-3 py-1 rounded-full text-[11px] font-medium border transition-colors duration-300 ${
                            isActive 
                              ? 'border-white/20 text-white/80' 
                              : 'border-slate-700 text-slate-500'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div> */}
                    
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? 'bg-white text-slate-950 scale-100' 
                        : 'bg-slate-800 text-slate-400 scale-90 group-hover:scale-100'
                    }`}>
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
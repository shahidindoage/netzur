import React, { useState } from 'react';
import { ArrowUpRight, Radio, Building2, Wifi } from 'lucide-react';

interface IspSolutionsGridProps {
  onOpenDemo: () => void;
}

const SOLUTIONS = [
  {
    id: 'isp',
    number: '01',
    title: 'Internet Management & Billing System For ISPs',
    oneLiner: 'RADIUS AAA, MikroTik fleets, and automated recurring billing.',
    tags: ['RADIUS AAA', 'MikroTik API', 'Auto-Billing'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=80',
    icon: Radio,
    accent: 'from-orange-500/20 via-transparent to-black/80',
  },
  {
    id: 'hotel',
    number: '02',
    title: 'Wi-Fi Management System For Hotels',
    oneLiner: 'Room-number login, two-way PMS billing, and VIP bandwidth.',
    tags: ['PMS Sync', 'Captive Portal', 'Tiered Speed'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80',
    icon: Building2,
    accent: 'from-blue-500/20 via-transparent to-black/80',
  },
  {
    id: 'hotspot',
    number: '03',
    title: 'Public Wi-Fi Hotspot Management System',
    oneLiner: 'High-density authentication, SMS OTP, and legal compliance.',
    tags: ['SMS OTP', 'Sponsor Ads', 'Audit Logs'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',
    icon: Wifi,
    accent: 'from-emerald-500/20 via-transparent to-black/80',
  },
];

export const IspSolutionsGrid: React.FC<IspSolutionsGridProps> = ({ onOpenDemo }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="solutions" className="py-20 sm:py-28 bg-[#FAFAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimalist, High-Impact Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            {/* <span className="text-[11px] font-mono font-bold tracking-widest text-[#F13B0A] uppercase block mb-2">
              02 / Solutions In Action
            </span> */}
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
              Engineered For Your Scale
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-xs font-normal">
            Three dedicated architectures tailored for telecom, hospitality, and public venues.
          </p>
        </div>

        {/* 3 Creative Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {SOLUTIONS.map((item, idx) => {
            const Icon = item.icon;
            const isHovered = activeIndex === idx;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveIndex(idx)}
                onMouseLeave={() => setActiveIndex(null)}
                onClick={onOpenDemo}
                className="group relative h-[480px] sm:h-[520px] rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between p-7 select-none border border-slate-200/60"
              >
                {/* Background Photographic Image with Smooth Scale */}
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Dark Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20 group-hover:via-black/40 transition-colors duration-500" />
                
                {/* Colored Ambient Aura on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-b ${item.accent} opacity-60 group-hover:opacity-90 transition-opacity duration-500`} />

                {/* Top Card Row: Index Number & Floating Glassmorphic Icon */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="invisible text-white/60 font-mono text-sm tracking-wider font-semibold">
                    /{item.number}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center group-hover:bg-[#F13B0A] group-hover:border-[#F13B0A] transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom Content: Title, One-liner, Tags & Action Button */}
                <div className="relative z-10 space-y-4">
                  
                  {/* Minimal Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-medium tracking-wide bg-white/15 backdrop-blur-sm border border-white/10 text-white/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight leading-snug group-hover:text-orange-200 transition-colors">
                    {item.title}
                  </h3>

                  {/* Concise One-Liner */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal line-clamp-2">
                    {item.oneLiner}
                  </p>

                  {/* Bottom Expand Arrow Bar */}
                  <div className="pt-2 flex items-center justify-between border-t border-white/15">
                    <span className="text-xs font-semibold text-white/80 group-hover:text-white transition-colors">
                      View Architecture
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white text-slate-950 flex items-center justify-center group-hover:bg-[#F13B0A] group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm">
                      <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
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

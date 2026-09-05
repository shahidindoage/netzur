import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface FeatureDeepDives2Props {
  onOpenDemo?: () => void;
}

interface SectionStory {
  id: string;
  tabLabel: string;
  tabNumber: string;
  headlineTitle: string;
  description: string;
  ctaText: string;
  card1: {
    title: string;
    desc: string;
    image: string;
    alt: string;
    avatars?: string[];
  };
  card2: {
    title: string;
    desc: string;
    image: string;
    alt: string;
  };
  heroImage: {
    src: string;
    alt: string;
  };
}

// Using the exact same data from your original component
const STORIES: SectionStory[] = [
  {
    id: 'integrations',
    tabNumber: '01',
    tabLabel: 'Integrations',
    headlineTitle: 'Seamless Integrations with the Tools You Use',
    description:
      'Netzur integrates seamlessly with leading tools—payment gateways like Razorpay, Stripe, PayPal; accounting systems like Tally, QuickBooks, Xero; communication channels including WhatsApp, SMS, Email; device management via ACS (TR-069); and even your custom APIs—for a truly connected ISP experience.',
    ctaText: 'Discover More',
    card1: {
      title: 'Payment Gateways & Ledgers',
      desc: 'Instant tokenized recurring payments synced directly to Tally, QuickBooks, and Xero.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=400&q=80',
      alt: 'Automated billing and accounting payment terminals',
      avatars: [
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
      ],
    },
    card2: {
      title: 'ACS & Multi-Channel Comms',
      desc: 'TR-069 zero-touch router provisioning paired with automated WhatsApp, SMS, and Email receipts.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80',
      alt: 'Connected telecommunications devices and customer messaging',
    },
    heroImage: {
      src: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80',
      alt: 'Telecom operations specialist smiling in modern high-tech control center',
    },
  },
  {
    id: 'smarter-management',
    tabNumber: '02',
    tabLabel: 'Smarter ISP Management',
    headlineTitle: 'Smarter ISP Management & Billing',
    description:
      'Netzur’s ISP Management platform integrates seamlessly with payment gateways, accounting software, communication tools, and network devices. Whether you need ISP Billing, Radius Billing, WISP Billing, MikroTik Billing, Retail Business WiFi, or Hotel WiFi Hotspot solutions, Netzur helps automate operations and simplify billing.',
    ctaText: 'Learn More',
    card1: {
      title: 'RADIUS & MikroTik Systems',
      desc: 'Sub-millisecond authentication and RouterOS API synchronization for automated PPPoE and dynamic bandwidth shaping.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=400&q=80',
      alt: 'Carrier-grade MikroTik and fiber routing equipment',
      avatars: [
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80',
      ],
    },
    card2: {
      title: 'Hotel & Retail WiFi Hotspots',
      desc: 'Branded captive portals with SMS OTP verification, two-way PMS room charging, and conference bandwidth vouchers.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80',
      alt: 'Luxury hospitality resort and retail guest WiFi environment',
    },
    heroImage: {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
      alt: 'Modern broadband operations manager overseeing automated subscriber deployments',
    },
  },
  {
    id: 'who-we-are',
    tabNumber: '03',
    tabLabel: 'Who We Are',
    headlineTitle: 'Built by Telecom Engineers, Trusted Globally',
    description:
      'Founded in 2017, Netzur (formerly Janitor Network) is a trusted provider of secure internet access and intelligent ISP management solutions. Backed by over a decade of industry expertise, we serve ISPs, hospitality, education, healthcare, enterprises, and government networks across the globe.',
    ctaText: 'Learn More',
    card1: {
      title: 'Founded in 2017',
      desc: 'Backed by over a decade of carrier telecom engineering experience, architected for high-density operations.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80',
      alt: 'Engineers collaborating on telecom architecture',
      avatars: [
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80',
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
      ],
    },
    card2: {
      title: 'Global Multi-Sector Reach',
      desc: 'Trusted by operators across hospitality, education, healthcare, enterprises, and municipal government networks worldwide.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80',
      alt: 'Global students and campus enterprise network users',
    },
    heroImage: {
      src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
      alt: 'Warm, elegant portrait representing effortless connectivity and customer joy',
    },
  },
];

export const FeatureDeepDives2: React.FC<FeatureDeepDives2Props> = ({ onOpenDemo }) => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const activeStory = STORIES[activeStoryIndex];

  return (
    <section id="features-2" className="bg-white py-10 sm:py-18 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 max-w-2xl leading-tight">
            Deep dive into the <span className="text-slate-400">platform</span> built for ISPs.
          </h2>
          <p className="text-base text-slate-600 max-w-sm md:text-right">
            Explore the core pillars that make Netzur the ultimate choice for modern broadband operators.
          </p>
        </div>

        {/* Main Cinematic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Tabs & Typography */}
          <div className="lg:col-span-5 relative">
            
            {/* Giant Background Index Number */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={`bg-${activeStory.id}`}
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 1.2, x: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute -top-24 -left-4 text-[180px] sm:text-[220px] font-extrabold text-slate-50 select-none pointer-events-none z-0 leading-none"
              >
                {activeStory.tabNumber}
              </motion.div>
            </AnimatePresence>

            {/* Tab List */}
            <div className="relative z-10 space-y-2 mb-8 border-l border-slate-200">
              {STORIES.map((story, idx) => {
                const isActive = activeStoryIndex === idx;
                return (
                  <button
                    key={story.id}
                    onMouseEnter={() => setActiveStoryIndex(idx)}
                    onClick={() => setActiveStoryIndex(idx)}
                    className={`relative w-full text-left pl-6 py-4 transition-colors duration-300 group ${
                      isActive ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    {/* Active Indicator Line */}
                    {isActive && (
                      <motion.div 
                        layoutId="activeTabLine"
                        className="absolute left-0 top-0 h-full w-1 bg-[#F13B0A] rounded-r-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-sm ${isActive ? 'text-[#F13B0A]' : 'text-slate-300'}`}>
                        {story.tabNumber}
                      </span>
                      <span className="text-xl font-bold tracking-tight">
                        {story.tabLabel}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Animated Text Content */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeStory.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 bg-white/80 backdrop-blur-sm p-2 rounded-2xl"
              >
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3 leading-snug">
                  {activeStory.headlineTitle}
                </h3>
                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal mb-6">
                  {activeStory.description}
                </p>

                {/* CTA Button */}
                <button
                  onClick={onOpenDemo}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all cursor-pointer group"
                >
                  <span>{activeStory.ctaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Right Column: Cinematic Visual & Floating Glass Cards */}
          <div className="lg:col-span-7 relative h-[500px] sm:h-[600px] lg:h-[680px] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/60 bg-slate-900">
            
            {/* Crossfading Hero Image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={activeStory.heroImage.src}
                src={activeStory.heroImage.src}
                alt={activeStory.heroImage.alt}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Dark Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent pointer-events-none"></div>

            {/* Floating UI Elements at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10 flex flex-col sm:flex-row items-end gap-4 pointer-events-none">
              
              {/* Floating Card 1 */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={`c1-${activeStory.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="pointer-events-auto bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl flex items-start gap-3 max-w-xs shadow-lg"
                >
                  <img 
                    src={activeStory.card1.image} 
                    alt={activeStory.card1.alt} 
                    className="w-14 h-14 rounded-xl object-cover border border-white/20 shrink-0"
                  />
                  <div>
                    <div className="flex items-center gap-1.5 text-sm font-bold text-white mb-1">
                      {activeStory.card1.title}
                      <ArrowUpRight className="w-3.5 h-3.5 text-orange-400" />
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed line-clamp-2">
                      {activeStory.card1.desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Floating Card 2 (Smaller) */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={`c2-${activeStory.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="pointer-events-auto bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-2xl flex items-center gap-3 shadow-lg hidden md:flex"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-orange-400 border border-white/10">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                  <div className="pr-2">
                    <div className="text-xs font-bold text-white">{activeStory.card2.title}</div>
                    <div className="text-[10px] text-slate-300">Active Integration</div>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
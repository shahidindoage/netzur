import React, { useState, useRef } from 'react';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, MotionValue } from 'framer-motion';

interface FeatureDeepDivesProps {
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
      desc: 'Instant tokenized recurring payments with Razorpay, Stripe, and PayPal, synced directly to Tally, QuickBooks, and Xero.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
      alt: 'Automated billing and accounting payment terminals',
      avatars: [
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80',
      ],
    },
    card2: {
      title: 'ACS & Multi-Channel Comms',
      desc: 'TR-069 zero-touch router provisioning paired with automated invoice receipts dispatched over WhatsApp, SMS, and Email.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
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
    headlineTitle: 'Seamless Integrations for Smarter ISP Management',
    description:
      'Netzur’s ISP Management platform integrates seamlessly with payment gateways, accounting software, communication tools, and network devices. Whether you need ISP Billing and Management, Radius Billing Software, WISP Billing Software, MikroTik Billing System, Retail Business WiFi Software, or Hotel WiFi Hotspot Solutions, Netzur helps automate operations, simplify billing, and deliver a seamless customer experience.',
    ctaText: 'Learn More',
    card1: {
      title: 'RADIUS & MikroTik Systems',
      desc: 'Sub-millisecond authentication and RouterOS API synchronization for automated PPPoE, IPoE, and dynamic bandwidth shaping.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
      alt: 'Carrier-grade MikroTik and fiber routing equipment',
      avatars: [
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80',
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80',
      ],
    },
    card2: {
      title: 'Hotel & Retail WiFi Hotspots',
      desc: 'Branded captive portals with SMS OTP verification, two-way PMS room charging, and conference bandwidth vouchers.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
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
    headlineTitle: 'Who We Are',
    description:
      'Founded in 2017, Netzur (formerly known as Janitor Network) is a trusted provider of secure internet access and intelligent ISP management solutions. Backed by over a decade of industry expertise, we serve ISPs, hospitality, education, healthcare, enterprises, and government networks across the globe. Our platform combines simplicity, security, and powerful automation—from seamless mobile authentication to deep API integrations—empowering our clients to grow faster with less complexity.',
    ctaText: 'Learn More',
    card1: {
      title: 'Founded in 2017 (Janitor Network)',
      desc: 'Backed by over a decade of carrier telecom engineering experience, architected for high-density and high-availability operations.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      alt: 'Engineers collaborating on telecom architecture',
      avatars: [
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80',
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
      ],
    },
    card2: {
      title: 'Global Multi-Sector Reach',
      desc: 'Trusted by operators across hospitality, education, healthcare, enterprises, and municipal government networks worldwide.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
      alt: 'Global students and campus enterprise network users',
    },
    heroImage: {
      src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
      alt: 'Warm, elegant portrait representing effortless connectivity and customer joy',
    },
  },
];

// Word-by-Word Scroll Reveal Component
interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative inline-block mr-[0.25em]">
      <motion.span style={{ opacity }} className="text-slate-900 font-normal transition-colors">
        {children}
      </motion.span>
    </span>
  );
};

export const FeatureDeepDives: React.FC<FeatureDeepDivesProps> = ({ onOpenDemo }) => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const activeStory = STORIES[activeStoryIndex];

  // Headings text split into array for word calculation
  const headlineText =
    "We make waves of efficiency & speed for your ISP we streamline billing, RADIUS and core network fleets, dive into seamless connectivity and unforgettable subscriber experiences!";
  const words = headlineText.split(" ");

  // Track headline container scroll
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: headlineRef,
    offset: ["start 80%", "end 45%"],
  });

  return (
    <section id="features" className="py-20 sm:py-28 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            HEADER & WORD-BY-WORD SCROLL REVEAL
            ========================================================================= */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            
            {/* Word by word animated text heading */}
            <h2
              ref={headlineRef}
              className="text-2xl sm:text-4xl md:text-[2.6rem] lg:text-[2.85rem] font-normal tracking-tight leading-[1.2] max-w-4xl select-none"
            >
              {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;
                return (
                  <Word key={i} progress={scrollYProgress} range={[start, end]}>
                    {word}
                  </Word>
                );
              })}
            </h2>

            {/* Small Floating Pill Beside/Below Headline */}
            <div className="shrink-0">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenDemo}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200/80 hover:bg-slate-100 transition-colors shadow-2xs group cursor-pointer"
              >
                <span className="flex items-center -space-x-1.5">
                  <span className="w-5 h-5 rounded-full bg-orange-100 border border-white flex items-center justify-center text-[10px]">
                    ⚡
                  </span>
                  <span className="w-5 h-5 rounded-full bg-slate-900 border border-white flex items-center justify-center text-[10px] text-white">
                    ✦
                  </span>
                </span>
                <span className="text-xs font-semibold text-slate-800">
                  420+ Networks Live
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
            </div>

          </div>

          {/* Clean Interactive Tab Switcher */}
          <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {STORIES.map((story, idx) => {
              const isActive = activeStoryIndex === idx;
              return (
                <button
                  key={story.id}
                  onClick={() => setActiveStoryIndex(idx)}
                  className={`relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors cursor-pointer select-none whitespace-nowrap ${
                    isActive ? 'text-white' : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBackground"
                      className="absolute inset-0 bg-slate-900 rounded-full shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {/* <span className={`relative z-10 font-mono text-xs ${isActive ? 'text-orange-400' : 'text-slate-400'}`}>
                    {story.tabNumber}.
                  </span> */}
                  <span className="relative z-10">{story.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            MAIN CARD GRID
            ========================================================================= */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeStory.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch"
          >
            {/* Left Column (Span 7) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
              
              {/* Header Content & Description */}
              <div>
                {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[11px] font-extrabold uppercase tracking-widest text-[#F13B0A] mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>SECTION {activeStory.tabNumber} • {activeStory.tabLabel.toUpperCase()}</span>
                </div> */}
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight mb-3 leading-snug">
                  {activeStory.headlineTitle}
                </h3>
                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed max-w-2xl font-normal">
                  {activeStory.description}
                </p>
              </div>

              {/* Two Rounded Image Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative items-start pt-2">
                
                {/* Card 1 */}
                <motion.div 
                  whileHover={{ y: -4 }}
                  onClick={onOpenDemo}
                  className="group cursor-pointer select-none flex flex-col"
                >
                  <div className="rounded-[2rem] overflow-hidden aspect-[4/3] sm:aspect-square bg-slate-100 mb-3.5 relative shadow-xs group-hover:shadow-lg transition-all duration-300">
                    <img
                      src={activeStory.card1.image}
                      alt={activeStory.card1.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                  </div>

                  <div className="flex items-center gap-1.5 text-base font-bold text-slate-900 group-hover:text-[#F13B0A] transition-colors">
                    <span>{activeStory.card1.title}</span>
                    <ArrowRight className="w-4 h-4 text-slate-700 group-hover:text-[#F13B0A] group-hover:translate-x-1 transition-all" />
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed mt-1.5 line-clamp-3">
                    {activeStory.card1.desc}
                  </p>

                  {/* Overlapping User/Brand Avatars */}
                  {activeStory.card1.avatars && (
                    <div className="flex items-center -space-x-2 mt-3.5">
                      {activeStory.card1.avatars.map((av, avIdx) => (
                        <img
                          key={avIdx}
                          src={av}
                          alt="Operator avatar"
                          referrerPolicy="no-referrer"
                          className="w-6 h-6 rounded-full border-2 border-white object-cover shadow-2xs"
                        />
                      ))}
                      <span className="pl-3 text-[11px] font-semibold text-slate-500">
                        Verified ISP Stack
                      </span>
                    </div>
                  )}
                </motion.div>

                {/* Floating Circular "view all" Button */}
                <div className="hidden sm:flex absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 z-10">
                  <motion.button
                    whileHover={{ scale: 1.12, rotate: 5 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={onOpenDemo}
                    className="w-16 h-16 rounded-full bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col items-center justify-center text-slate-800 hover:text-[#F13B0A] cursor-pointer group"
                    title="View all specifications"
                  >
                    <ArrowUpRight className="w-4 h-4 mb-0.5 text-slate-600 group-hover:text-[#F13B0A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    <span className="text-[9px] font-bold tracking-tight text-slate-600 group-hover:text-slate-900">
                      view all
                    </span>
                  </motion.button>
                </div>

                {/* Card 2 */}
                <motion.div 
                  whileHover={{ y: -4 }}
                  onClick={onOpenDemo}
                  className="group cursor-pointer select-none flex flex-col"
                >
                  <div className="rounded-[2rem] overflow-hidden aspect-[4/3] sm:aspect-square bg-slate-100 mb-3.5 relative shadow-xs group-hover:shadow-lg transition-all duration-300">
                    <img
                      src={activeStory.card2.image}
                      alt={activeStory.card2.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                  </div>

                  <div className="flex items-center gap-1.5 text-base font-bold text-slate-900 group-hover:text-[#F13B0A] transition-colors">
                    <span>{activeStory.card2.title}</span>
                    <ArrowRight className="w-4 h-4 text-slate-700 group-hover:text-[#F13B0A] group-hover:translate-x-1 transition-all" />
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed mt-1.5 line-clamp-3">
                    {activeStory.card2.desc}
                  </p>
                </motion.div>

              </div>

            </div>

            {/* Right Column (Span 5): Hero Visual */}
            <div className="lg:col-span-5 relative flex">
              <div className="w-full rounded-[2.5rem] overflow-hidden min-h-[420px] sm:min-h-[480px] lg:min-h-full relative bg-slate-900 shadow-lg hover:shadow-2xl transition-shadow duration-500 group">
                
                {/* Full Bleed Image */}
                <img
                  src={activeStory.heroImage.src}
                  alt={activeStory.heroImage.alt}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle Ambient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/15 pointer-events-none" />

                {/* Bottom Right Floating Pill Button */}
                <div className="absolute bottom-6 right-6 z-10">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onOpenDemo}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#111827] hover:bg-black text-white text-xs sm:text-sm font-semibold tracking-wide shadow-2xl transition-colors cursor-pointer group"
                  >
                    <span>{activeStory.ctaText}</span>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
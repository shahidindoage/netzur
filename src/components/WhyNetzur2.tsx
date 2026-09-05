import React from 'react';
import { Layers, CreditCard, Users, Cpu, MapPin, ArrowRight, Check } from 'lucide-react';

interface WhyNetzur2Props {
  onOpenDemo?: () => void;
}

interface WhyCardData {
  id: string;
  category: string;
  title: string;
  metric: string;
  metricLabel: string;
  teaser: string;
  icon: React.ElementType;
  bgImage?: string; 
  specDetails: {
    subtitle: string;
    points: string[];
  };
  isFeature?: boolean; // Determines if it's a large image card
}

const WHY_CARDS: WhyCardData[] = [
  {
    id: '1',
    category: 'Operations Suite',
    title: 'Unified ISP Operations',
    metric: '100%',
    metricLabel: 'System Visibility',
    teaser: 'A single pane of glass to manage your entire ISP business from franchises to field teams. Gain absolute control over branches, zones, and employees.',
    icon: Layers,
    bgImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    specDetails: {
      subtitle: 'Multi-Branch Control Center',
      points: [
        'Centralized control across branches, zones, & franchises',
        'Role-based granular access control for field employees',
        'Real-time operational activity tracking and audit trails',
      ],
    },
    isFeature: true,
  },
  {
    id: '2',
    category: 'Finance Automation',
    title: 'Smart Billing Engine',
    metric: '99.4%',
    metricLabel: 'Billing Accuracy',
    teaser: 'Automated billing, invoicing, taxation, and payment tracking built for scale.',
    icon: CreditCard,
    specDetails: {
      subtitle: 'Automated Financial Engine',
      points: [
        'Automated recurring invoicing & tax compliance',
        'Multi-gateway payment reconciliation and auto-pay',
      ],
    },
  },
  {
    id: '3',
    category: 'Subscriber Lifecycle',
    title: 'CRM & Management',
    metric: '3x',
    metricLabel: 'Faster Onboarding',
    teaser: 'Integrated lead-to-customer journey with built-in feasibility checks.',
    icon: Users,
    specDetails: {
      subtitle: 'Lead-to-Active Subscriber Engine',
      points: [
        'Built-in geographic feasibility & coverage check',
        'Zero-touch subscriber onboarding & KYC workflows',
      ],
    },
  },
  {
    id: '4',
    category: 'Device Management',
    title: 'ACS (TR-069)',
    metric: '< 1s',
    metricLabel: 'Param Refresh',
    teaser: 'Seamlessly manage CPEs and network devices from a central panel.',
    icon: Cpu,
    specDetails: {
      subtitle: 'Universal CPE Auto-Configuration',
      points: [
        'TR-069 / TR-181 standard CPE remote management',
        'Real-time parameter refreshes & bulk firmware pushes',
      ],
    },
  },
  {
    id: '5',
    category: 'Geospatial Analytics',
    title: 'Network Map & Telemetry',
    metric: 'Real-Time',
    metricLabel: 'Outage Detection',
    teaser: 'Visualize your entire network with live subscriber locations and outage detection empowering faster response.',
    icon: MapPin,
    specDetails: {
      subtitle: 'Live Geographic Telemetry',
      points: [
        'Interactive GIS mapping of subscriber nodes & fiber lines',
        'Automated zone-wise outage identification & alerts',
        'Proactive maintenance routing with live network status',
      ],
    },
  },
];

export const WhyNetzur2: React.FC<WhyNetzur2Props> = ({ onOpenDemo }) => {
  return (
    <section id="why-netzur-2" className="bg-white py-10 sm:py-18 border-b-1 border-b-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header: Heading Left, Description Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight max-w-xl">
            An integrated suite for <span className="text-slate-400">carrier-grade scale.</span>
          </h2>
          <p className="text-base text-slate-600 max-w-sm md:text-left">
            Purpose-built modules that bring absolute clarity, control, and automation to your broadband operations.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 auto-rows-[minmax(300px,auto)]">
          {WHY_CARDS.map((card) => {
            const Icon = card.icon;
            
            // Feature Card (Dark with Image)
            if (card.isFeature) {
              return (
                <div 
                  key={card.id} 
                  className="group relative md:col-span-2 rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
                >
                  {/* Background Image */}
                  <img 
                    src={card.bgImage} 
                    alt={card.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/20"></div>

                  {/* Content */}
                  <div className="relative h-full p-8 lg:p-10 flex flex-col justify-end min-h-[320px] z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-orange-400 tracking-widest uppercase">
                        {card.category}
                      </span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate-300 max-w-lg leading-relaxed mb-6">
                      {card.teaser}
                    </p>

                    <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
                      {card.specDetails.points.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-200">
                          <Check className="w-3.5 h-3.5 text-[#F13B0A] stroke-[3]" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Glassmorphism Button */}
                    <button
                      onClick={(e) => { e.stopPropagation(); onOpenDemo?.(); }}
                      className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold hover:bg-white/20 transition-colors"
                    >
                      Explore Demo
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            }

            // Standard Card (Clean White)
            return (
              <div 
                key={card.id} 
                className="group relative bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col cursor-pointer overflow-hidden"
              >
                {/* Giant Background Metric */}
                {/* <div className="absolute -top-4 -right-8 text-[180px] font-extrabold text-slate-50 select-none pointer-events-none z-0 leading-none">
          {card.id} 
                </div> */}

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-[#F13B0A] flex items-center justify-center text-slate-700 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">
                      {card.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {card.teaser}
                  </p>

                  <div className="mt-auto space-y-3 pt-6 border-t border-slate-100">
                    {card.specDetails.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-orange-50 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#F13B0A] stroke-[4]" />
                        </div>
                        <span className="leading-relaxed font-medium">{point}</span>
                      </div>
                    ))}
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
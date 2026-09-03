import React, { useState } from 'react';
import { 
  Layers, 
  CreditCard, 
  Users, 
  Ticket, 
  Cpu, 
  MapPin, 
  ArrowRight,
  Check
} from 'lucide-react';

interface WhyNetzurProps {
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
  bgImage: string;
  specDetails: {
    subtitle: string;
    points: string[];
  };
}

const WHY_CARDS: WhyCardData[] = [
  {
    id: 'operations',
    category: 'OPERATIONS SUITE',
    title: 'Unified ISP Operations Suite',
    metric: '100%',
    metricLabel: 'Visibility',
    teaser: 'A single dashboard to manage your entire ISP business from franchises to field teams. Gain full visibility and control over branches, zones, and employees.',
    icon: Layers,
    bgImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    specDetails: {
      subtitle: 'Multi-Branch Control Center',
      points: [
        'Centralized control across branches, zones, & franchises',
        'Role-based granular access control for field employees',
        'Real-time operational activity tracking and audit trails',
      ],
    },
  },
  {
    id: 'billing',
    category: 'FINANCE AUTOMATION',
    title: 'Smart Billing & Finance Automation',
    metric: '99.4%',
    metricLabel: 'Accuracy',
    teaser: 'Automated billing, invoicing, taxation, and payment tracking built for scale. Ensure accuracy, compliance, and financial clarity across all operations.',
    icon: CreditCard,
    bgImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    specDetails: {
      subtitle: 'Automated Financial Engine',
      points: [
        'Automated recurring invoicing & tax engine compliance',
        'Multi-gateway payment reconciliation and auto-pay',
        'Comprehensive financial clarity across subscriber accounts',
      ],
    },
  },
  {
    id: 'crm',
    category: 'SUBSCRIBER LIFECYCLE',
    title: 'CRM & Subscriber Management',
    metric: '3x',
    metricLabel: 'Faster Onboarding',
    teaser: 'Integrated lead-to-customer journey with built-in feasibility checks, onboarding automation, support workflows, and customer lifecycle tracking all in one place.',
    icon: Users,
    bgImage: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80',
    specDetails: {
      subtitle: 'Lead-to-Active Subscriber Engine',
      points: [
        'Built-in geographic feasibility & coverage check',
        'Zero-touch subscriber onboarding & KYC workflows',
        'End-to-end customer lifecycle tracking & churn metrics',
      ],
    },
  },
  {
    id: 'ticketing',
    category: 'SUPPORT WORKFLOWS',
    title: 'Advanced Ticketing',
    metric: '< 15m',
    metricLabel: 'Avg Resolution',
    teaser: 'A structured support system with dedicated dashboards for each engineer or employee. Enables organized handling, faster resolution, and transparent ticket tracking across departments.',
    icon: Ticket,
    bgImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    specDetails: {
      subtitle: 'Structured Field & Desk Support',
      points: [
        'Dedicated dashboards for field engineers & desk agents',
        'Automated SLA escalation rules and ticket routing',
        'Cross-department transparent issue tracking',
      ],
    },
  },
  {
    id: 'acs',
    category: 'DEVICE MANAGEMENT',
    title: 'ACS (TR-069)',
    metric: '< 1s',
    metricLabel: 'Parameter Refresh',
    teaser: 'Seamlessly manage CPEs and network devices using TR-069 (ACS), real-time parameter refresh, firmware upgrades, and performance monitoring from a central panel.',
    icon: Cpu,
    bgImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    specDetails: {
      subtitle: 'Universal CPE Auto-Configuration',
      points: [
        'TR-069 / TR-181 standard CPE remote management',
        'Real-time parameter refreshes & bulk firmware pushes',
        'Centralized optical signal & CPE health monitoring',
      ],
    },
  },
  {
    id: 'map',
    category: 'GEOSPATIAL ANALYTICS',
    title: 'Network MAP',
    metric: 'Real-Time',
    metricLabel: 'GIS Mapping',
    teaser: 'Visualize your entire network with live subscriber locations, zone-wise analytics, and outage detection empowering faster response and proactive action.',
    icon: MapPin,
    bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
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

export const WhyNetzur: React.FC<WhyNetzurProps> = ({ onOpenDemo }) => {
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);

  const toggleFlip = (id: string) => {
    setFlippedCardId(prev => (prev === id ? null : id));
  };

  const marqueeCards = [...WHY_CARDS, ...WHY_CARDS];

  return (
    <section 
      id="why-netzur" 
      className="py-16 sm:py-10 bg-white border-b border-slate-200 overflow-hidden relative select-none"
    >
      {/* Infinite Marquee Container */}
      <div className="animate-marquee flex items-center gap-6 sm:gap-8 py-10">
        {marqueeCards.map((card, index) => {
          const Icon = card.icon;
          const isFlipped = flippedCardId === `${card.id}-${index}`;
          const isElevated = index % 2 === 1;

          return (
            <div
              key={`${card.id}-${index}`}
              className={`card-perspective w-[280px] sm:w-[320px] md:w-[340px] h-[480px] shrink-0 transition-transform duration-500 ${
                isElevated ? '-translate-y-6' : 'translate-y-2'
              }`}
              onMouseEnter={() => setFlippedCardId(`${card.id}-${index}`)}
              onMouseLeave={() => setFlippedCardId(null)}
              onClick={() => toggleFlip(`${card.id}-${index}`)}
            >
              <div 
                className={`card-preserve-3d relative w-full h-full rounded-3xl transition-transform duration-700 cursor-pointer shadow-lg hover:shadow-2xl ${
                  isFlipped ? '[transform:rotateY(180deg)]' : ''
                }`}
              >
                {/* FRONT OF CARD */}
                <div className="card-backface-hidden absolute inset-0 w-full h-full rounded-3xl overflow-hidden bg-slate-900 border border-slate-100 flex flex-col justify-end p-6 sm:p-8">
                  <img
                    src={card.bgImage}
                    alt={card.title}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  <div className="relative z-10">
                    <span className="text-[11px] font-mono font-bold text-orange-400 tracking-widest uppercase mb-1 block">
                      {card.category}
                    </span>
                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-snug">
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* BACK OF CARD */}
                <div 
                  className="card-backface-hidden [transform:rotateY(180deg)] absolute inset-0 w-full h-full rounded-3xl overflow-hidden bg-gradient-to-b from-[#1E2532] to-[#121620] border-2 border-orange-500/50 p-6 sm:p-8 flex flex-col justify-between text-white"
                >
                  <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#F13B0A]/20 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest text-orange-400 bg-orange-950/60 border border-orange-500/30 uppercase">
                        MODULE OVERVIEW
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-orange-400">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h4 className="font-heading font-bold text-xl text-white leading-snug">
                      {card.title}
                    </h4>
                    <p className="text-xs font-mono text-orange-200/90 mt-1.5">
                      {card.specDetails.subtitle}
                    </p>

                    <div className="mt-6 space-y-3.5">
                      {card.specDetails.points.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                          <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 text-emerald-400 stroke-[3]" />
                          </div>
                          <span className="leading-relaxed">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-white/10">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenDemo?.();
                      }}
                      className="w-full py-3 px-4 rounded-xl bg-[#F13B0A] hover:bg-[#D93206] text-white text-xs sm:text-sm font-bold tracking-wide shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
                    >
                      <span>Explore Interactive Demo</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
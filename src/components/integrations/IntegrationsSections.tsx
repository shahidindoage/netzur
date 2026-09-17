import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowRight,
  Search,
  CreditCard,
  Bell,
  BookOpen,
  Wallet,
  ShieldCheck,
  Server,
  Play,
  PhoneCall,
  Plug,
  Check,
  Zap,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { CtaLink } from '../service/CtaLink';
import { INTEGRATIONS, INTEGRATION_CATEGORIES, type IntegrationCategory } from '../../data/integrations';

interface Props {
  onOpenDemo?: () => void;
}

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  All: Plug,
  'Payment Gateway': CreditCard,
  Notification: Bell,
  'Accounting System': BookOpen,
  'Wallet Systems': Wallet,
  'Identity Verification': ShieldCheck,
  'NAS / BRAS / BNG': Server,
  OTT: Play,
  IVR: PhoneCall,
};

/** Reveal card on scroll into view */
const Reveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children,
  delay = 0,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-500 ease-out will-change-transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export const IntegrationsHero: React.FC<Props> = ({ onOpenDemo }) => {
  return (
    <section className="relative overflow-hidden bg-white text-slate-900 flex flex-col justify-between">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-200/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-200/30 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-stretch max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10 sm:pt-14 pb-0 gap-8 lg:gap-6">
        <div className="w-full lg:w-5/12 flex-shrink-0 max-w-2xl flex flex-col justify-center py-6 lg:py-12">
         
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-6 text-slate-900">
            Explore Netzur <span className="text-slate-400">Integrations</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-8 font-normal">
            Payment gateways, OTT, eKYC, NAS/BNG, notifications and accounting - connect your
            entire ISP stack to one billing core with zero custom glue code.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 mb-8">
            <CtaLink
              cta={{ label: 'Book a Demo', type: 'primary', href: 'demo' }}
              onOpenDemo={onOpenDemo}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F13B0A] hover:bg-[#d8350a] text-white text-base font-semibold tracking-wide shadow-lg hover:shadow-[0_8px_30px_rgb(241,59,10,0.25)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer group"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-200" />
            </CtaLink>
            <CtaLink
              cta={{ label: 'Browse integrations', type: 'secondary', href: '#integrations-grid' }}
              onOpenDemo={onOpenDemo}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 text-base font-medium tracking-wide shadow-sm transition-all cursor-pointer"
            >
              Browse integrations
            </CtaLink>
          </div>
          <div className="flex items-center gap-6 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-slate-400" />
              <span>Carrier-grade APIs</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-200"></div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-slate-400" />
              <span>48-hour onboarding</span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-7/12 relative hidden md:flex justify-center items-end z-10 self-stretch">
          <div className="relative w-full h-full min-h-[380px] lg:min-h-[480px] rounded-t-3xl rounded-b-none overflow-hidden self-end flex items-end justify-center ">
            <img
              src="int.png"
              alt="Netzur integrations across payments, network and OTT"
              className="relative w-[94%] h-auto max-h-[98%] object-contain object-bottom self-end"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent pointer-events-none" /> */}
            {/* <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-wrap gap-2">
              {['Payments', 'OTT', 'eKYC', 'NAS / BNG'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-xs font-semibold text-white"
                >
                  {tag}
                </span>
              ))}
            </div> */}
          </div>
        </div>
      </div>

      <div className="-bottom-12 absolute z-12 w-full pb-8 pt-6 border-t border-slate-100 bg-slate-50"></div>
    </section>
  );
};

export const IntegrationsGrid: React.FC = () => {
  const PAGE_SIZE = 12;
  const [active, setActive] = useState<'All' | IntegrationCategory>('All');
  const [query, setQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const tabsRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const scrollTabs = (dir: 1 | -1) => {
    tabsRef.current?.scrollBy({ left: dir * 280, behavior: 'smooth' });
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return INTEGRATIONS.filter((item) => {
      const matchCat = active === 'All' || item.category === active;
      const matchQuery = !q || item.name.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [active, query]);

  const visible = useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount]);
  const hasMore = visibleCount < filtered.length;

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [active, query]);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || !hasMore) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, filtered.length));
        }
      },
      { rootMargin: '320px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasMore, filtered.length]);

  return (
    <section id="integrations-grid" className="bg-white py-10 sm:py-18 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
              One platform, <span className="text-slate-400">every connection.</span>
            </h2>
            <p className="text-sm text-slate-500 mt-3 max-w-xl leading-relaxed">
              Filter by category or search. Every integration below is live on netzur.com and
              ships with RADIUS sync, dunning and reconciliation built in.
            </p>
          </div>
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search integrations…"
              className="w-full pl-10 pr-4 py-3 rounded-full bg-white border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 shadow-sm focus:outline-none focus:border-[#F13B0A]/40 focus:ring-2 focus:ring-[#F13B0A]/10"
            />
          </div>
        </div>

        <div className="relative mb-8 flex items-center gap-3">
          <button
            onClick={() => scrollTabs(-1)}
            aria-label="Scroll categories left"
            className="hidden sm:flex shrink-0 w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm items-center justify-center text-slate-500 hover:text-[#F13B0A] hover:border-[#F13B0A]/30 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div
            ref={tabsRef}
            className="flex-1 min-w-0 flex gap-2 overflow-x-auto pb-1 snap-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth"
          >
          {INTEGRATION_CATEGORIES.map((cat) => {
            const Icon = CATEGORY_ICONS[cat] ?? Plug;
            const isActive = active === cat;
            const count = cat === 'All' ? INTEGRATIONS.length : INTEGRATIONS.filter((i) => i.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`shrink-0 snap-start inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold border transition-all ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                {cat}
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${isActive ? 'bg-white/15 text-white' : 'bg-slate-200/70 text-slate-500'}`}>
                  {count}
                </span>
              </button>
            );
          })}
          </div>
          <button
            onClick={() => scrollTabs(1)}
            aria-label="Scroll categories right"
            className="hidden sm:flex shrink-0 w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm items-center justify-center text-slate-500 hover:text-[#F13B0A] hover:border-[#F13B0A]/30 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-[#F8F9FB] p-10 text-center">
            <p className="font-heading font-bold text-slate-900 mb-1">No integrations found</p>
            <p className="text-sm text-slate-500">Try a different search or category.</p>
          </div>
        ) : (
          <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visible.map((item, idx) => {
              return (
                <Reveal key={`${active}-${query}-${item.name}`} delay={(idx % 3) * 70}>
                <div
                  className="group h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-[#F13B0A]/20 hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 group-hover:border-[#F13B0A]/20 flex items-center justify-center overflow-hidden p-2 transition-colors shadow-sm">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={`${item.name} logo`}
                          loading="lazy"
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <Plug className="w-5 h-5 text-slate-400" />
                      )}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-500 group-hover:border-[#F13B0A]/20 group-hover:text-[#F13B0A]">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 tracking-tight mb-1.5 group-hover:text-[#F13B0A] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
                </Reveal>
              );
            })}
          </div>

          <div ref={sentinelRef} className="h-2" />

          {hasMore ? (
            <div className="mt-2 flex flex-col items-center gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="w-4 h-4 border-2 border-slate-200 border-t-[#F13B0A] rounded-full animate-spin" />
                Scroll for more - showing {visible.length} of {filtered.length}
              </div>
              <button
                onClick={() => setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, filtered.length))}
                className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-[#F13B0A] transition-colors"
              >
                Load more
              </button>
            </div>
          ) : (
            filtered.length > PAGE_SIZE && (
              <p className="text-center text-xs text-slate-400 mt-2">
                {/* All {filtered.length} integrations loaded */}
              </p>
            )
          )}
          </>
        )}

        {/* <p className="text-xs text-slate-400 mt-6">
          Showing {visible.length} of {filtered.length} integrations · Source: netzur.com/integrations
        </p> */}
      </div>
    </section>
  );
};

export const IntegrationsWhy: React.FC = () => {
  const cards = [
    {
      icon: Zap,
      title: 'Zero glue code',
      desc: 'RADIUS CoA, captive portals, dunning and settlement stay in sync - no middleware to maintain.',
    },
    {
      icon: ShieldCheck,
      title: 'Compliance built in',
      desc: 'eKYC, BBPS, GST/Tally exports and audit trails ship with every regional gateway.',
    },
    {
      icon: Check,
      title: '48-hour go-live',
      desc: 'Enable any gateway, NAS or OTT bundle from the dashboard and bill it on the next cycle.',
    },
  ];
  return (
    <section className="bg-white py-10 sm:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight mb-10">
          Why operators <span className="text-slate-400">centralize on Netzur.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card) => (
            <div key={card.title} className="rounded-3xl border border-slate-200 p-8 shadow-sm bg-white hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 mb-5">
                <card.icon className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-xl font-extrabold text-slate-900 tracking-tight mb-2">{card.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const IntegrationsFooterCta: React.FC<Props> = ({ onOpenDemo }) => {
  return (
    <section className="bg-white pb-10 sm:pb-18 pt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-8 py-12 sm:p-14 text-center">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-orange-600/25 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
              Take Full Control of Your ISP with Netzur
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
              Streamline operations, simplify billing, and enhance customer experience all from one unified platform. Start your free trial and experience the Netzur difference
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <CtaLink
                cta={{ label: 'Book a Demo', type: 'primary', href: 'demo' }}
                onOpenDemo={onOpenDemo}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F13B0A] hover:bg-[#d8350a] text-white font-semibold shadow-lg transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </CtaLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

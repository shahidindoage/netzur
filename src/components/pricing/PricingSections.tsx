import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight, ShieldCheck, Zap, Check, Users, Globe2, MapPin, Minus, Plus } from 'lucide-react';
import { CtaLink } from '../service/CtaLink';

interface Props {
  onOpenDemo?: () => void;
}

type LocationKey = 'india' | 'international';

const CURRENCY: Record<LocationKey, string> = {
  india: '₹',
  international: '$',
};

const MIN_SUBS = 400;
const MAX_SUBS = 25000;
const STEP = 50;

/** Same rounding as netzur.com/pricing shortcode */
function roundNum(num: number): number {
  const n = Math.floor(Number(num) || 0);
  if (n < 200) return 200;
  if (n % 50 === 0) return n;
  return n + (50 - (n % 50));
}

function clampSubs(n: number): number {
  if (!Number.isFinite(n)) return MIN_SUBS;
  return Math.min(MAX_SUBS, Math.max(MIN_SUBS, Math.floor(n)));
}

/** Same API as netzur.com/pricing */
async function fetchQuote(country: LocationKey, count: number): Promise<number> {
  const url = `https://janitornetwork.com/old/api/pricing_calculator_api.php?country=${country}&table_name=jimbswnat&count=${count}&is_new_pricing=1`;
  const res = await fetch(url, { method: 'POST' });
  if (!res.ok) throw new Error(`Quote request failed (${res.status})`);
  const data = await res.json();
  const total = Number(data?.total_price);
  if (!Number.isFinite(total)) throw new Error('Invalid quote response');
  return total;
}

function formatMoney(currency: string, value: number): string {
  return `${currency}${value.toLocaleString('en-US')}`;
}

export const PricingHero: React.FC<Props> = ({ onOpenDemo }) => {
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

      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10 sm:pt-14 pb-10 gap-8 lg:gap-6">
        <div className="w-full lg:w-5/12 flex-shrink-0 max-w-2xl">
      
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-6 text-slate-900">
          Netzur IMBS <span className="text-slate-400">Pricing</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-8 font-normal">
          IMBS is a subscription based product, as we build long-term partnerships with our
          customers, delivering modern and reliable solutions.
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
            cta={{ label: 'Calculate pricing', type: 'secondary', href: '#pricing-calculator' }}
            onOpenDemo={onOpenDemo}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 text-base font-medium tracking-wide shadow-sm transition-all cursor-pointer"
          >
            Calculate pricing
          </CtaLink>
        </div>
        <div className="flex items-center gap-6 text-slate-500 text-sm">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-slate-400" />
            <span>Min. 400 licenses</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-slate-200"></div>
          <div className="flex items-center gap-2">
            <Globe2 className="w-4 h-4 text-slate-400" />
            <span>India & International</span>
          </div>
        </div>
        </div>

        <div className="w-full lg:w-7/12 relative hidden md:flex justify-center items-center z-10">
          <div className="relative w-full rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80"
              alt="Transparent per-subscriber ISP pricing"
              className="w-full h-[320px] lg:h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 max-w-md">
                <p className="text-sm font-bold text-white mb-1">Pay per active subscriber</p>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Support, updates and mobile apps included — from 400 licenses up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="-bottom-12 absolute z-12 w-full pb-8 pt-6 border-t border-slate-100 bg-slate-50"></div>
    </section>
  );
};

export const PricingCalculator: React.FC = () => {
  const [location, setLocation] = useState<LocationKey>(() => {
    if (typeof window === 'undefined') return 'india';
    const loc = new URLSearchParams(window.location.search).get('loc')?.toLowerCase();
    if (loc === 'international' || loc === 'philippines') return 'international';
    return 'india';
  });
  const [subs, setSubs] = useState<number>(MIN_SUBS);
  const [total, setTotal] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const reqId = useRef(0);

  const loadQuote = useCallback(async (country: LocationKey, count: number) => {
    const id = ++reqId.current;
    setLoading(true);
    setError(null);
    try {
      const rounded = roundNum(clampSubs(count));
      const price = await fetchQuote(country, rounded);
      if (reqId.current !== id) return;
      setTotal(price);
    } catch {
      if (reqId.current !== id) return;
      setError('Could not fetch live pricing. Please try again.');
    } finally {
      if (reqId.current === id) setLoading(false);
    }
  }, []);

  // Initial + debounced live quote (same API as netzur.com/pricing)
  useEffect(() => {
    const t = setTimeout(() => {
      loadQuote(location, subs);
    }, 350);
    return () => clearTimeout(t);
  }, [location, subs, loadQuote]);

  const currency = CURRENCY[location];
  const roundedSubs = roundNum(clampSubs(subs));
  const perSub = total !== null ? total / roundedSubs : null;
  const progress = ((roundedSubs - MIN_SUBS) / (MAX_SUBS - MIN_SUBS)) * 100;

  return (
    <section id="pricing-calculator" className="bg-white py-10 sm:py-18 border-b border-gray-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* Left: controls */}
          <div className="lg:col-span-7">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight mb-3">
              Calculate your <span className="text-slate-400">monthly cost.</span>
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed mb-8 max-w-xl">
              Select your region and adjust the slider to your active subscriber count.
              See transparent per-subscriber pricing instantly — no hidden fees, no lock-in.
            </p>

            <div className="rounded-3xl border border-slate-200 bg-[#F8F9FB] p-6 sm:p-8 shadow-sm">
              {/* Location */}
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Location
              </label>
              <div className="relative mb-8">
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value as LocationKey)}
                  className="w-full pl-10 pr-10 py-3 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-slate-800 shadow-sm focus:outline-none focus:border-[#F13B0A]/40 focus:ring-2 focus:ring-[#F13B0A]/10 appearance-none cursor-pointer"
                >
                  <option value="india">India</option>
                  <option value="international">International</option>
                </select>
              </div>

              {/* Slider + input */}
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Active subscribers
                </label>
                <span className="text-xs font-semibold text-slate-400">
                  {MIN_SUBS.toLocaleString()} – {MAX_SUBS.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={MIN_SUBS}
                max={MAX_SUBS}
                step={STEP}
                value={roundedSubs}
                onChange={(e) => setSubs(Number(e.target.value))}
                className="w-full accent-[#F13B0A] cursor-pointer"
                aria-label="Active subscribers"
              />
              <div className="mt-4 flex items-center gap-3">
                <button
                  onClick={() => setSubs((s) => clampSubs(roundNum(s - STEP)))}
                  aria-label="Decrease subscribers"
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:border-[#F13B0A]/40 hover:text-[#F13B0A] transition-colors shrink-0"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <div className="relative flex-1">
                  <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  <input
                    type="number"
                    min={MIN_SUBS}
                    max={MAX_SUBS}
                    step={STEP}
                    value={subs}
                    onChange={(e) => setSubs(clampSubs(Number(e.target.value)))}
                    onBlur={(e) => setSubs(clampSubs(roundNum(Number(e.target.value))))}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-900 shadow-sm focus:outline-none focus:border-[#F13B0A]/40 focus:ring-2 focus:ring-[#F13B0A]/10"
                  />
                </div>
                <button
                  onClick={() => setSubs((s) => clampSubs(roundNum(s + STEP)))}
                  aria-label="Increase subscribers"
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:border-[#F13B0A]/40 hover:text-[#F13B0A] transition-colors shrink-0"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Progress */}
              {/* <div className="mt-4 h-2 rounded-full bg-slate-200 overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#F13B0A] transition-all duration-300"
                  style={{ width: `${Math.max(2, progress)}%` }}
                />
              </div> */}

              <p className="text-xs text-slate-500 mt-6 leading-relaxed">
                <span className="font-bold text-slate-700">Note:</span> The subscription charge
                will be applied for minimum 400 active subscribers license.
              </p>
            </div>
          </div>

          {/* Right: quote card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-10 shadow-xl relative overflow-hidden lg:sticky lg:top-28">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/20 rounded-full blur-[100px] pointer-events-none" />
              <div className="relative z-10">
                {error && total === null ? (
                  <div className="text-center py-4">
                    <p className="text-sm text-red-300 mb-4">{error}</p>
                    <button
                      onClick={() => loadQuote(location, subs)}
                      className="px-6 py-2.5 rounded-full bg-white text-slate-900 text-xs font-semibold hover:bg-[#F13B0A] hover:text-white transition-colors"
                    >
                      Retry
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <p className="text-sm text-slate-300 mb-1">
                      {perSub !== null && (
                        <>
                          <span className="font-bold text-white">{formatMoney(currency, Number(perSub.toFixed(2)))}</span>{' '}
                          per subscriber
                        </>
                      )}
                    </p>
                    <p className="font-heading font-extrabold text-5xl sm:text-6xl tracking-tight leading-none my-3">
                      {total !== null ? formatMoney(currency, total) : '—'}
                    </p>
                    <p className="text-sm text-slate-400">per month</p>
                  </div>
                )}

                <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
                  {[
                    `${roundedSubs.toLocaleString()} Active Subscribers`,
                    'Remote Technical Support',
                    'Regular Software Updates',
                    'Site/Subscriber Mobile Apps',
                  ].map((line, i) => (
                    <div key={line} className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#F13B0A] flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-white" />
                      </span>
                      <span className={`text-sm ${i === 0 ? 'font-bold text-white' : 'text-slate-300'}`}>
                        {line}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const PricingFooterCta: React.FC<Props> = ({ onOpenDemo }) => {
  return (
    <section className="bg-white pb-10 sm:pb-18 pt-10 sm:pt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-8 py-12 sm:p-14 text-center">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-orange-600/25 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
              Take Full Control of Your ISP with Netzur
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
             Streamline operations, simplify billing, and enhance customer experience all from one unified platform.

Start your free trial and experience the Netzur difference
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

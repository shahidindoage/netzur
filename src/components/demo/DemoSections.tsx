import React, { useState } from 'react';
import {
  ArrowRight,
  CalendarCheck,
  Mail,
  Phone,
  Check,
  PhoneCall,
  MonitorPlay,
  FlaskConical,
  Rocket,
} from 'lucide-react';

interface Props {
  onOpenDemo?: () => void;
}

const STEPS = [
  {
    icon: PhoneCall,
    title: "Let's Talk",
    desc: 'We start with a quick call to understand your business, challenges, and goals.',
  },
  {
    icon: MonitorPlay,
    title: 'Live Demo',
    desc: 'Our team shows you how Netzur works, based on your needs and setup.',
  },
  {
    icon: FlaskConical,
    title: 'Free Trial Access',
    desc: 'You get full access to try Netzur in your own environment with our support.',
  },
  {
    icon: Rocket,
    title: 'Easy Setup & Go Live',
    desc: 'We guide you step-by-step to set up everything and go live with confidence.',
  },
];

const INDUSTRIES = [
  'Internet Service Provider',
  'Hotel',
  'Public Hotspot',
  'Educational Institute',
  'Retail Business',
  'Library',
];

const NETWORK_SIZES = ['0 - 200', '200 - 1000', '1000 - 5000', '5000+'];

const COUNTRIES = [
  'India',
  'Philippines',
  'Kenya',
  'Nigeria',
  'South Africa',
  'Tanzania',
  'United States',
  'United Kingdom',
  'United Arab Emirates',
  'Other',
];

export const DemoHero: React.FC = () => {
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
          Try our product <span className="text-slate-400">free for 14 days</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-8 font-normal">
          All features included &amp; no commitment — see Netzur running on your own network
          before you decide.
        </p>
        <div className="flex items-center gap-6 text-slate-500 text-sm flex-wrap">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#F13B0A]" />
            <span>14-day trial</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-slate-200"></div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#F13B0A]" />
            <span>All features included</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-slate-200"></div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#F13B0A]" />
            <span>No commitment</span>
          </div>
        </div>
        </div>

        <div className="w-full lg:w-7/12 relative hidden md:flex justify-center items-center z-10">
          <div className="relative w-full rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
              alt="Netzur product demo with a broadband operator"
              className="w-full h-[320px] lg:h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 max-w-md">
                <p className="text-sm font-bold text-white mb-1">Live demo + 14-day trial</p>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Guided walkthrough on your setup, then full access in your own environment.
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

export const DemoMain: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    country: '',
    city: '',
    company: '',
    industry: '',
    size: '200 - 1000',
    message: '',
    consent: false,
  });
  const [sent, setSent] = useState(false);

  const set = (key: keyof typeof form, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputCls =
    'w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 shadow-sm focus:outline-none focus:border-[#F13B0A]/40 focus:ring-2 focus:ring-[#F13B0A]/10';

  return (
    <section id="demo-form" className="bg-white py-10 sm:py-18 border-b border-gray-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* Left: steps + contact */}
          <div className="lg:col-span-5">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight mb-3">
              Seamless Start <span className="text-slate-400">with Netzur.</span>
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed mb-8 max-w-md">
              From first call to go-live in four guided steps — with our team beside you.
            </p>

            <div className="space-y-3 mb-8">
              {STEPS.map((step, idx) => (
                <div
                  key={step.title}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-[#F8F9FB] p-5 hover:border-[#F13B0A]/20 hover:shadow-md transition-all"
                >
                  <div className="flex flex-col items-center shrink-0">
                    <span className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#F13B0A]">
                      <step.icon className="w-5 h-5" />
                    </span>
                    {/* <span className="font-mono text-[11px] font-bold text-slate-300 mt-2">
                      {String(idx + 1).padStart(2, '0')}
                    </span> */}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-slate-900 tracking-tight mb-1">
                      {step.title}
                    </h3>
                    <p className="text-[13px] text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="mailto:sales@netzur.com"
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 hover:border-[#F13B0A]/30 hover:shadow-md transition-all group"
              >
                <span className="w-9 h-9 rounded-xl bg-slate-100 group-hover:bg-[#F13B0A]/10 group-hover:text-[#F13B0A] text-slate-600 flex items-center justify-center transition-colors shrink-0">
                  <Mail className="w-4 h-4" />
                </span>
                <span className="text-[13px] font-semibold text-slate-800 break-all">sales@netzur.com</span>
              </a>
              <a
                href="https://wa.me/919408053196?text=Hi%20there"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 hover:border-[#F13B0A]/30 hover:shadow-md transition-all group"
              >
                <span className="w-9 h-9 rounded-xl bg-slate-100 group-hover:bg-[#F13B0A]/10 group-hover:text-[#F13B0A] text-slate-600 flex items-center justify-center transition-colors shrink-0">
                  <Phone className="w-4 h-4" />
                </span>
                <span className="text-[13px] font-semibold text-slate-800">+91-94080 53196</span>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200 bg-[#F8F9FB] p-6 sm:p-8 shadow-sm lg:sticky lg:top-28">
              {sent ? (
                <div className="text-center py-10">
                  <span className="mx-auto w-14 h-14 rounded-full bg-[#F13B0A]/10 flex items-center justify-center mb-5">
                    <Check className="w-7 h-7 text-[#F13B0A]" />
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl text-slate-900 tracking-tight mb-2">
                    Request received!
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-md mx-auto mb-6">
                    Thanks {form.name.split(' ')[0] || 'there'} — our team will reach out to{' '}
                    {form.email || 'your email'} within one business day to schedule your live
                    demo and 14-day trial access.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-[#F13B0A] transition-colors"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="font-heading font-extrabold text-xl text-slate-900 tracking-tight mb-1">
                    Request your free demo
                  </h3>
                  <p className="text-[13px] text-slate-500 mb-6">
                    All features included &amp; no commitment.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      required
                      value={form.name}
                      onChange={(e) => set('name', e.target.value)}
                      placeholder="Full Name"
                      className={inputCls}
                    />
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => set('email', e.target.value)}
                      placeholder="Email Address"
                      className={inputCls}
                    />
                    <input
                      required
                      value={form.mobile}
                      onChange={(e) => set('mobile', e.target.value)}
                      placeholder="Mobile Number"
                      className={inputCls}
                    />
                    <select
                      required
                      value={form.country}
                      onChange={(e) => set('country', e.target.value)}
                      className={`${inputCls} appearance-none cursor-pointer ${!form.country ? 'text-slate-400' : ''}`}
                    >
                      <option value="" disabled>
                        - Select Country -
                      </option>
                      {COUNTRIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                    <input
                      value={form.city}
                      onChange={(e) => set('city', e.target.value)}
                      placeholder="City"
                      className={inputCls}
                    />
                    <input
                      value={form.company}
                      onChange={(e) => set('company', e.target.value)}
                      placeholder="Company Name"
                      className={inputCls}
                    />
                    <select
                      required
                      value={form.industry}
                      onChange={(e) => set('industry', e.target.value)}
                      className={`${inputCls} sm:col-span-2 appearance-none cursor-pointer ${!form.industry ? 'text-slate-400' : ''}`}
                    >
                      <option value="" disabled>
                        - Select Industry Type -
                      </option>
                      {INDUSTRIES.map((ind) => (
                        <option key={ind} value={ind}>
                          {ind}
                        </option>
                      ))}
                    </select>
                    <div className="sm:col-span-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Network Size
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {NETWORK_SIZES.map((size) => (
                          <button
                            key={size}
                            type="button"
                            onClick={() => set('size', size)}
                            className={`px-4 py-2.5 rounded-full text-xs font-semibold border transition-all ${
                              form.size === size
                                ? 'bg-slate-900 text-white border-slate-900'
                                : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => set('message', e.target.value)}
                      placeholder="Message"
                      className={`${inputCls} sm:col-span-2 resize-none`}
                    />
                    <label className="sm:col-span-2 flex items-start gap-2.5 text-xs text-slate-500 leading-relaxed cursor-pointer">
                      <input
                        required
                        type="checkbox"
                        checked={form.consent as boolean}
                        onChange={(e) => set('consent', e.target.checked)}
                        className="mt-0.5 w-4 h-4 accent-[#F13B0A] shrink-0"
                      />
                      <span>
                        By continuing you agree with our{' '}
                        <a
                          href="https://netzur.com/privacy-policy"
                          target="_blank"
                          rel="noreferrer"
                          className="font-semibold text-[#F13B0A] hover:underline"
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                    <button
                      type="submit"
                      className="sm:col-span-2 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#F13B0A] hover:bg-[#d8350a] text-white text-sm font-semibold shadow-lg transition-all hover:scale-[1.01] active:scale-95"
                    >
                      Submit
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const DemoFooterCta: React.FC<Props> = ({ onOpenDemo }) => {
  return (
    <section className="bg-white pb-10 sm:pb-18 pt-10 sm:pt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-8 py-12 sm:p-14 text-center">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-orange-600/25 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
              Prefer to talk first?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
              Call or WhatsApp us at +91-94080 53196, or write to sales@netzur.com — we reply
              within one business day.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/919408053196?text=Hi%20there"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F13B0A] hover:bg-[#d8350a] text-white font-semibold shadow-lg transition-all hover:scale-[1.02] active:scale-95"
              >
                Chat on WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

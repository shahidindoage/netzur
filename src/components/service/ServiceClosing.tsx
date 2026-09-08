import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, Plus, Minus, Wallet, ShieldCheck } from 'lucide-react';
import type { ServicePageData } from '../../data/services';

interface Props {
  data: ServicePageData;
  onOpenDemo?: () => void;
}

export const ServiceCtaBanner: React.FC<Props> = ({ data, onOpenDemo }) => {
  return (
    <section className="relative bg-slate-950 py-10 sm:py-18 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1600&q=80"
          alt="Network operations"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/50 to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight max-w-2xl leading-tight">
          {data.cta_banner.title}
        </h2>
        <div className="flex flex-wrap gap-3 shrink-0">
          {data.cta_banner.calls_to_action.map((cta, i) => (
            <button
              key={i}
              onClick={onOpenDemo}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F13B0A] hover:bg-[#d8350a] text-white text-base font-semibold shadow-lg hover:shadow-[0_8px_30px_rgb(241,59,10,0.35)] transition-all cursor-pointer group"
            >
              <span>{cta.label}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ServicePaymentsCompliance: React.FC<Props> = ({ data }) => {
  return (
    <section className="bg-white py-10 sm:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
        <div className="rounded-3xl border border-slate-200 p-8 lg:p-10 shadow-sm bg-white">
          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 mb-5">
            <Wallet className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold text-[#F13B0A] tracking-widest uppercase">
            {data.integrations_payment.category}
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-3">
            {data.integrations_payment.title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-6">{data.integrations_payment.description}</p>
          <div className="flex flex-wrap gap-2">
            {data.integrations_payment.supported_gateways.map((g) => (
              <span
                key={g}
                className="px-4 py-2 rounded-full text-xs font-semibold border border-slate-200 text-slate-700 bg-slate-50 hover:border-[#F13B0A] hover:text-[#F13B0A] transition-colors cursor-default"
              >
                {g}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 p-8 lg:p-10 shadow-sm bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-5">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold text-orange-400 tracking-widest uppercase">
            {data.compliance.category}
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight mt-2 mb-3">
            {data.compliance.title}
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed mb-6">{data.compliance.description}</p>
          <div className="grid grid-cols-2 gap-2.5">
            {data.compliance.features.map((f) => (
              <div key={f} className="flex items-center gap-2 text-xs text-slate-200 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5">
                <Check className="w-3.5 h-3.5 text-[#F13B0A] stroke-[3] shrink-0" />
                <span className="font-medium">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const ServiceRelated: React.FC<Props> = ({ data }) => {
  const [active, setActive] = useState(0);
  return (
    <section className="bg-white py-10 sm:py-18 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            {/* <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest text-[#F13B0A] bg-orange-50 rounded-full uppercase mb-4">
              {data.related_solutions.category}
            </span> */}
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              {data.related_solutions.title}
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-xs">Keep exploring the platform — every module shares the same billing core.</p>
        </div>
        <div className="border-t border-slate-200" onMouseLeave={() => setActive(0)}>
          {data.related_solutions.links.map((link, idx) => {
            const isActive = active === idx;
            return (
              <a
                key={idx}
                href={link.url}
                onMouseEnter={() => setActive(idx)}
                className={`group flex items-center justify-between py-6 sm:py-7 px-2 sm:px-6 border-b border-slate-200 transition-colors ${isActive ? 'bg-slate-50' : ''}`}
              >
                <div className="flex items-center gap-5">
                  <span className={`font-mono text-sm ${isActive ? 'text-[#F13B0A]' : 'text-slate-300'}`}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className={`font-heading font-bold text-lg sm:text-xl tracking-tight ${isActive ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-800'}`}>
                    {link.title}
                  </h3>
                </div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isActive ? 'bg-[#F13B0A] text-white' : 'bg-slate-100 text-slate-400'}`}>
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const ServiceFaq: React.FC<Props> = ({ data }) => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-white py-10 sm:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight text-center mb-4">
          {data.faq.title.split('Frequently')[0]}
          <span className="text-slate-400"> {data.faq.title.includes('Frequently') ? 'Frequently Asked Questions' : ''}</span>
        </h2>
        <p className="text-center text-slate-500 text-sm mb-10">Everything operators ask before deploying Netzur.</p>
        <div className="space-y-3">
          {data.faq.questions.map((q, idx) => {
            const isOpen = open === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${isOpen ? 'border-slate-300 shadow-lg bg-white' : 'border-slate-200 bg-white hover:border-slate-300'}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                >
                  <span className="font-bold text-slate-900 text-[15px]">{q.question}</span>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-[#F13B0A] text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed">
                    Contact our team for a detailed walkthrough of this topic — deployment engineers respond within one business day. Book a demo and we will map it to your towers, payment gateways, and hardware.
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const ServiceFooterCta: React.FC<Props> = ({ data, onOpenDemo }) => {
  return (
    <section className="bg-white pb-10 sm:pb-18 pt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-8 py-12 sm:p-14 text-center">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-orange-600/25 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10">
            {/* <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest text-orange-400 bg-white/10 border border-white/10 rounded-full uppercase mb-6">
              {data.footer_cta.category}
            </span> */}
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
              {data.footer_cta.title}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
              {data.footer_cta.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              {data.footer_cta.calls_to_action.map((cta, i) =>
                cta.type === 'primary' ? (
                  <button
                    key={i}
                    onClick={onOpenDemo}
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F13B0A] hover:bg-[#d8350a] text-white font-semibold shadow-lg transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
                  >
                    {cta.label}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    key={i}
                    onClick={onOpenDemo}
                    className="inline-flex items-center px-6 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-all cursor-pointer"
                  >
                    {cta.label}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

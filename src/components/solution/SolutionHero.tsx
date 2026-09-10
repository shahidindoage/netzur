import React from 'react';
import { ArrowRight, ShieldCheck, Activity } from 'lucide-react';
import type { SolutionPageData, SolutionCTA } from '../../data/solutions';
import { CtaLink, isDemoCta } from '../service/CtaLink';

interface Props {
  data: SolutionPageData;
  onOpenDemo?: () => void;
}

const CTAButton: React.FC<{ cta: SolutionCTA; onOpenDemo?: () => void }> = ({ cta, onOpenDemo }) => {
  if (cta.type === 'primary') {
    return (
      <CtaLink
        cta={cta}
        onOpenDemo={onOpenDemo}
        className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F13B0A] hover:bg-[#d8350a] text-white text-base font-semibold tracking-wide shadow-lg hover:shadow-[0_8px_30px_rgb(241,59,10,0.25)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer group"
      >
        <span>{cta.label}</span>
        <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-200" />
      </CtaLink>
    );
  }
  return (
    <CtaLink
      cta={cta}
      onOpenDemo={onOpenDemo}
      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 text-base font-medium tracking-wide shadow-sm transition-all cursor-pointer"
    >
      {cta.label}
    </CtaLink>
  );
};

export const SolutionHero: React.FC<Props> = ({ data, onOpenDemo }) => {
  const { hero } = data;
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

      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center max-w-[90rem] mx-auto pl-4 sm:pl-6 lg:pl-8 w-full pt-10 sm:pt-14  gap-8 lg:gap-6">
        <div className="w-full lg:w-5/12 flex-shrink-0 max-w-2xl">
          {/* <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest text-[#F13B0A] bg-orange-50 rounded-full uppercase mb-6">
            {hero.category}
          </span> */}
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[54px] tracking-tight leading-[1.1] mb-6 text-slate-900">
            {hero.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-8 font-normal">
            {hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 mb-8">
            {hero.calls_to_action.map((cta, i) => (
              <CTAButton key={i} cta={cta} onOpenDemo={onOpenDemo} />
            ))}
          </div>
          <div className="invisible flex items-center gap-6 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-slate-400" />
              <span>SOC 2 Compliant</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-200"></div>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-slate-400" />
              <span>99.99% Uptime</span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-7/12 relative hidden md:flex justify-center items-center z-10">
          <div className="relative w-full rounded-3xl overflow-hidden">
            {hero.hero_image.link && !isDemoCta({ href: hero.hero_image.link }) ? (
              <a href={hero.hero_image.link} className="block cursor-pointer">
                <img
                  src={hero.hero_image.src}
                  alt={hero.hero_image.alt_text}
                  className="w-full object-cover"
                />
              </a>
            ) : hero.hero_image.link ? (
              <button onClick={onOpenDemo} className="block w-full cursor-pointer">
                <img
                  src={hero.hero_image.src}
                  alt={hero.hero_image.alt_text}
                  className="w-full object-cover"
                />
              </button>
            ) : (
              <img
                src={hero.hero_image.src}
                alt={hero.hero_image.alt_text}
                className="w-full object-cover"
              />
            )}
          </div>
        </div>
      </div>

       <div className="-bottom-12 absolute  z-12 w-full pb-8 pt-6 border-t border-slate-100 bg-slate-50">
     
      </div>
    </section>
  );
};

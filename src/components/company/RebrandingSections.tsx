import React from 'react';
import { ArrowRight, Sparkles, RefreshCw, Eye, HeartHandshake, Zap, Globe, Check } from 'lucide-react';
import { CtaLink } from '../service/CtaLink';
import { Link } from 'react-router-dom';

interface Props {
  onOpenDemo?: () => void;
}

export const RebrandingHero: React.FC<Props> = ({ onOpenDemo }) => {
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

      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-start max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 sm:pt-8 pb-8 gap-8 lg:gap-6">
        <div className="w-full lg:w-5/12 flex-shrink-0 max-w-2xl lg:pt-12 pt-4">
          
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-6 text-slate-900">
            Introducing <span className="text-[#F13B0A]">Netzur</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-8 font-normal">
            A bold new identity for a smarter ISP future. What began as Janitor Radius has
            grown into a complete billing, bandwidth, CRM and franchisee platform - and Netzur
            (Network + Zur, motion and acceleration) finally matches that ambition.
          </p>
          <Link to="/" className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 mb-8">
            <CtaLink
              cta={{ label: 'Book a Demo', type: 'primary', href: 'demo' }}
             
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F13B0A] hover:bg-[#d8350a] text-white text-base font-semibold tracking-wide shadow-lg hover:shadow-[0_8px_30px_rgb(241,59,10,0.25)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer group"
            >
              <span>Explore Netzur</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-200" />
            </CtaLink>
          </Link>
          <div className="flex items-center gap-6 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-slate-400" />
              <span>Janitor → Netzur</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-200"></div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-slate-400" />
              <span>Global & future-ready</span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-7/12 relative hidden md:flex justify-center items-center z-10">
          <div className="relative w-full max-w-[620px] rounded-3xl overflow-hidden  flex items-center justify-center">
            <img
              src="https://netzur.com/wp-content/uploads/2025/06/thinking-person-1734x2048.webp"
              alt="Thinking about the bold new Netzur identity"
              className="w-full h-auto max-h-[540px] object-contain"
            />
          </div>
        </div>
      </div>

      <div className="-bottom-12 absolute z-12 w-full pb-8 pt-6 border-t border-slate-100 bg-slate-50"></div>
    </section>
  );
};

export const RebrandingStory: React.FC = () => {
  return (
    <section className="bg-white py-10 sm:py-18 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          <div className="rounded-3xl border border-slate-200 p-8 lg:p-10 shadow-sm bg-[#F8F9FB] h-full flex flex-col">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#F13B0A] mb-5">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Why We Rebranded
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              As we grew, we realized the name Janitor Radius didn&apos;t reflect the full power
              and vision of what we&apos;re building. It felt limited, tied too closely to one
              part of our platform.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-5">
              Our platform now serves fiber, wireless, hospitality and enterprise networks
              worldwide - so we needed an identity for every operator, not just one protocol.
            </p>
            <div className="space-y-2.5">
              {[
                'Beyond one protocol - billing, CRM, bandwidth & more',
                'A global name for operators in every region',
                'An identity built to scale with our ambition',
              ].map((point) => (
                <div key={point} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#F13B0A]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#F13B0A]" />
                  </span>
                  <span className="text-[13px] font-medium text-slate-700 leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 p-8 lg:p-10 shadow-sm bg-white h-full flex flex-col">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 mb-5">
              <Zap className="w-5 h-5" />
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              From Janitor to Netzur
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Janitor started as a RADIUS server for authentication. But over time, it evolved
              into a complete platform - covering billing, bandwidth control, CRM, franchisee
              management, and more. We needed a name that matched our growth and ambition.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Billing', 'Bandwidth Control', 'CRM', 'Franchisee Management', 'RADIUS'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-600"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mt-6 border-l-2 border-[#F13B0A] pl-4">
              Netzur blends &apos;Network&apos; and &apos;Zur&apos; (meaning motion/acceleration),
              symbolizing speed, simplicity, and transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const RebrandingVision: React.FC = () => {
  return (
    <section className="bg-white py-10 sm:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight mb-10">
          Same platform, <span className="text-slate-400">smarter identity.</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          <div className="rounded-3xl border border-slate-200 p-8 lg:p-10 shadow-sm bg-slate-950 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-5">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight mt-2 mb-3">
              Our Vision
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              To become a global leader in ISP and internet management solutions by transforming
              how service providers operate, scale, and succeed. We aim to be the most trusted
              technology partner for businesses that demand simplicity without compromise. With
              the belief that “sky is the limit”, we continuously innovate, adapt, and grow -
              embracing every challenge as an opportunity to redefine industry standards and
              deliver lasting value to our customers.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 p-8 lg:p-10 shadow-sm bg-white">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 mb-5">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-3">
              What stays the same
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-5">
              We&apos;re still the same team, same core system - just with a sharper brand and
              global mindset. Everything you love is still here, just better looking and ready
              to scale with you.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Have questions?{' '}
              <a
                href="mailto:info@netzur.com"
                className="font-semibold text-[#F13B0A] hover:underline"
              >
                info@netzur.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const RebrandingFooterCta: React.FC<Props> = ({ onOpenDemo }) => {
  return (
    <section className="bg-white pb-10 sm:pb-18 pt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-8 py-12 sm:p-14 text-center">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-orange-600/25 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
              Ready for the smarter ISP future?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
              Explore Netzur - the same platform you trust, with a brand built to scale with you.
            </p>
            <Link to="/" className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <CtaLink
                cta={{ label: 'Book a Demo', type: 'primary', href: 'demo' }}
                
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F13B0A] hover:bg-[#d8350a] text-white font-semibold shadow-lg transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                Explore Netzur
                <ArrowRight className="w-4 h-4" />
              </CtaLink>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

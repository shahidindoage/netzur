import React, { useState } from 'react';
import {
  ArrowRight, ArrowUpRight, ShieldCheck, Activity, Rocket, Eye, HeartHandshake,
  Building2, GraduationCap, Hotel, Briefcase, Users, PartyPopper, BedDouble, Wifi, Check,
} from 'lucide-react';
import { CtaLink } from '../service/CtaLink';

interface Props {
  onOpenDemo?: () => void;
}

export const WhoWeAreHero: React.FC<Props> = ({ onOpenDemo }) => {
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
            Who We <span className="text-slate-400">Are</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-4 font-normal">
            Netzur (formerly Janitor Network) is a trusted provider of secure internet access and
            intelligent ISP management solutions - founded in 2017, rebranded for a global vision.
          </p>
          {/* <p className="text-sm text-slate-600 max-w-xl leading-relaxed mb-8 border-l-2 border-[#F13B0A] pl-4">
            Empowering ISPs, enterprises, and public networks across hospitality, education,
            healthcare, and government - helping clients reduce complexity and scale effortlessly.
          </p> */}
          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 mb-8">
            <CtaLink
              cta={{ label: 'Book a Demo', type: 'primary', href: 'demo' }}
              onOpenDemo={onOpenDemo}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F13B0A] hover:bg-[#d8350a] text-white text-base font-semibold tracking-wide shadow-lg hover:shadow-[0_8px_30px_rgb(241,59,10,0.25)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer group"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-200" />
            </CtaLink>
            {/* <CtaLink
              cta={{ label: 'Our Story', type: 'secondary', href: '#our-story' }}
              onOpenDemo={onOpenDemo}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 text-base font-medium tracking-wide shadow-sm transition-all cursor-pointer"
            >
              Our Story
            </CtaLink> */}
          </div>
          <div className="flex items-center gap-6 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-slate-400" />
              <span>Since 2017</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-200"></div>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-slate-400" />
              <span>Trusted Globally</span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-7/12 relative hidden md:flex justify-center items-center z-10">
          <div className="relative w-full rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Netzur team collaborating on ISP automation"
              className="w-full h-[320px] lg:h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 max-w-md">
                <p className="text-sm font-bold text-white mb-1">Janitor Network → Netzur</p>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Rebranded to reflect an expanded global vision and growing suite of
                  automation-driven tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


       <div className="-bottom-12 absolute  z-12 w-full pb-8 pt-6 border-t border-slate-100 bg-slate-50">
     
      </div>
    </section>
  );
};

export const WhoWeAreStory: React.FC = () => {
  const values = ['Trust', 'Innovation', 'Performance'];
  return (
    <section id="our-story" className="bg-white py-10 sm:py-18 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                alt="Netzur operations driving ISP automation"
                className="w-full h-[320px] sm:h-[400px] object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
           
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight mb-6">
              From Janitor Network <span className="text-slate-400">to Netzur.</span>
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Founded in 2017 as Janitor Network, we have recently rebranded to Netzur to better
              reflect our expanded global vision and growing suite of automation-driven tools for
              ISPs and network providers.
            </p>
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Our platform simplifies internet service management with secure authentication,
              seamless integrations, and powerful automation. Driven by a highly experienced and
              committed team, we deliver reliable software, excellent support, and cost-effective
              implementation - onsite or online.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed border-l-2 border-[#F13B0A] pl-4 mb-6">
              At Netzur, we are committed to long-term partnerships built on trust, innovation, and
              performance - helping shape the future of internet access and ISP automation.
            </p>
            {/* <div className="flex flex-wrap gap-2">
              {values.map((v) => (
                <span
                  key={v}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border border-slate-200 text-slate-700 bg-slate-50"
                >
                  <Check className="w-3.5 h-3.5 text-[#F13B0A] stroke-[3]" />
                  {v}
                </span>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export const WhoWeAreSectors: React.FC = () => {
  const sectors = [
    { icon: Wifi, label: 'ISPs & Network Providers' },
    { icon: Hotel, label: 'Hotels & Hospitality' },
    { icon: Building2, label: 'Hospitals & Healthcare' },
    { icon: GraduationCap, label: 'Schools & Colleges' },
    { icon: Briefcase, label: 'Corporate Offices' },
    { icon: BedDouble, label: 'Hostels & Stays' },
    { icon: PartyPopper, label: 'Fairs & Events' },
    { icon: Users, label: 'Clubs & Communities' },
    { icon: HeartHandshake, label: 'Government Networks' },
  ];
  return (
    <section className="bg-white py-10 sm:py-18 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight max-w-xl">
            Sectors <span className="text-slate-400">we serve.</span>
          </h2>
          <p className="text-base text-slate-600 max-w-sm md:text-left">
            Fast, secure, hassle-free internet access for users and visitors - across industries.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sectors.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="group bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-[#F13B0A] flex items-center justify-center text-slate-700 group-hover:text-white transition-colors duration-300 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold text-slate-900 tracking-tight leading-snug">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const WhoWeAreMissionVision: React.FC = () => {
  return (
    <section className="bg-white py-10 sm:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
         
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
            What <span className="text-slate-400">drives us.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          <div className="rounded-3xl border border-slate-200 p-8 lg:p-10 shadow-sm bg-white">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 mb-5">
              <Rocket className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-3">
              Our Mission
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To simplify and secure internet service operations for ISPs and network providers
              through intelligent automation and seamless integration - from subscriber management,
              billing, and authentication to network monitoring and support. We reduce manual
              overhead, improve customer experience, and enable ISPs to scale efficiently with
              systems that are maintenance-free, secure, and built for performance.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-8 lg:p-10 shadow-sm bg-slate-950 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-5">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight mt-2 mb-3">
              Our Vision
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              To become a global leader in ISP and internet management solutions - the most trusted
              technology partner for businesses that demand simplicity without compromise. With the
              belief that “sky is the limit”, we continuously innovate, adapt, and grow, embracing
              every challenge as an opportunity to redefine industry standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const WhoWeAreFooterCta: React.FC<Props> = ({ onOpenDemo }) => {
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
              Streamline operations, simplify billing, and enhance customer experience - all from
              one unified platform.
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

export const WhoWeAreRelated: React.FC = () => {
  const [active, setActive] = useState(0);
  const links = [
    { title: 'Billing & Finance Module', url: '/features/billing-and-finance' },
    { title: 'WISP Billing Software in Africa', url: '/services/wisp-billing-software-in-africa-netzur' },
    { title: 'Internet Management & Billing for ISPs', url: '/solutions/internet-management-and-billing-system-for-isp' },
  ];
  return (
    <section className="bg-white py-10 sm:py-18 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
          
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              See what Netzur can do
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-xs">Modules, services, and solutions on one billing core.</p>
        </div>
        <div className="border-t border-slate-200" onMouseLeave={() => setActive(0)}>
          {links.map((link, idx) => {
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

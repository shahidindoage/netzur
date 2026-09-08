import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {
  Layers, CreditCard, Users, Cpu, MapPin, Radio, ShieldCheck, Globe, Zap, Check,
} from 'lucide-react';
import type { ServicePageData } from '../../data/services';

const ICONS = [Layers, CreditCard, Users, Cpu, MapPin, Radio, ShieldCheck, Globe, Zap];

interface Props {
  data: ServicePageData;
  onOpenDemo?: () => void;
}

export const ServiceIntro: React.FC<Props> = ({ data }) => {
  return (
    <section className="bg-white py-10 sm:py-18 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight max-w-[37rem]">
            {data.introduction.title} {/* Built for African networks, <span className="text-slate-400">not adapted to them.</span> */}
          </h2>
          <div className="max-w-sm">
            {/* <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest text-[#F13B0A] bg-orange-50 rounded-full uppercase mb-4">
              {data.introduction.category}
            </span> */}
            <p className="text-base text-slate-600 md:text-left">{data.introduction.content}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ServiceExplainer: React.FC<Props> = () => {
  return (
    <section className="bg-white py-10 sm:py-18 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: clean editorial copy */}
          <div>
            {/* <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest text-[#F13B0A] bg-orange-50 rounded-full uppercase mb-5">
              What is Radius Billing?
            </span> */}
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight mb-6">
              What is WISP Billing <span className="text-slate-400">Software?</span>
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              WISP Billing Software combines wireless subscriber management with automated billing
              and network provisioning. It acts as an all-in-one operations platform — onboarding
              subscribers across towers and sectors, automating recurring invoices and payment
              collection, and controlling bandwidth, speed tiers, and service access in real time.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed border-l-2 border-[#F13B0A] pl-4">
              Netzur&apos;s WISP billing software integrates directly with your wireless
              infrastructure — MikroTik, Ubiquiti, and Cisco gear across every tower — enabling
              tower-level provisioning, IP pool management, and Mobile Money billing — making it a
              complete wireless internet service provider platform for operators in Africa.
            </p>
          </div>

          {/* Right: single image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
                alt="WISP tower infrastructure powered by Netzur billing and subscriber management"
                className="w-full h-[320px] sm:h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ServiceFeaturesGrid: React.FC<Props> = ({ data }) => {
  const items = data.features_grid;

  return (
    <section id="service-features" className="bg-white py-10 sm:py-18 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight max-w-xl">
            Complete platform for <span className="text-slate-400">WISP operations.</span>
          </h2>
          <p className="text-base text-slate-600 max-w-sm md:text-left">
            Billing, provisioning, payments, and monitoring — unified in one system built for
            wireless networks.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          pagination={{ clickable: true, el: '.service-features-dots' }}
          autoplay={{ delay: 4500, disableOnInteraction: true, pauseOnMouseEnter: true }}
          className="service-features-swiper"
        >
          {items.map((item, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            const num = String(idx + 1).padStart(2, '0');
            return (
              <SwiperSlide key={idx}>
                <div className="group relative bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col overflow-hidden h-full min-h-[380px]">
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-[#F13B0A] flex items-center justify-center text-slate-700 group-hover:text-white transition-colors duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-slate-400 tracking-widest uppercase font-mono">
                        {num}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{item.description}</p>
                    {item.highlights && (
                      <p className="text-xs text-slate-600 bg-orange-50 border border-orange-100 rounded-xl p-3 mb-4 leading-relaxed">
                        {item.highlights}
                      </p>
                    )}
                    {item.additional_text && (
                      <p className="text-xs text-slate-600 bg-slate-50 border border-slate-100 rounded-xl p-3 mb-4 leading-relaxed">
                        {item.additional_text}
                      </p>
                    )}
                    {item.bullet_points && (
                      <div className="mt-auto space-y-3 pt-6 border-t border-slate-100">
                        {item.bullet_points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                            <div className="w-4 h-4 rounded-full bg-orange-50 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 text-[#F13B0A] stroke-[4]" />
                            </div>
                            <span className="leading-relaxed font-medium">{pt}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Dots — bottom center */}
        <div className="service-features-dots flex items-center justify-center gap-2 mt-8" />

        <style>{`
          .service-features-swiper .swiper-slide { height: auto; display: flex; }
          .service-features-swiper .swiper-slide > div { flex: 1 1 auto; width: 100%; }
          .service-features-dots .swiper-pagination-bullet {
            width: 8px; height: 8px; background: #cbd5e1; opacity: 1;
            border-radius: 9999px; transition: all 0.3s ease; margin: 0 !important;
          }
          .service-features-dots .swiper-pagination-bullet-active {
            width: 28px; background: #F13B0A;
          }
        `}</style>
      </div>
    </section>
  );
};

export const ServiceWhyChoose: React.FC<Props> = () => {
  const points = [
    'Purpose-built for wireless ISP operations and tower infrastructure',
    'Unified billing, CRM, payments, and network monitoring',
    'Wireless subscriber provisioning with sector-level control',
    'Automated workflows that reduce manual operational effort',
    'Deployment in 6-12 hours with migration support',
    'Dedicated support team with ISP domain expertise',
  ];

  return (
    <section className="bg-white py-10 sm:py-18 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: clean editorial copy */}
          <div>
            {/* <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest text-[#F13B0A] bg-orange-50 rounded-full uppercase mb-5">
              Why Choose Netzur
            </span> */}
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight mb-6">
              Why Choose Netzur for <span className="text-slate-400">WISP Billing in Africa?</span>
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Netzur is built for the operational realities of wireless ISPs — not adapted from
              generic billing software. The platform addresses tower-based operations,
              wireless-specific provisioning, and distributed subscriber management.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed border-l-2 border-[#F13B0A] pl-4">
              Netzur gives WISP operators the operational control and automation they need to grow
              their subscriber base while maintaining service quality.
            </p>
          </div>

          {/* Right: single clean checklist card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
            <div className="space-y-4">
              {points.map((point) => (
                <div key={point} className="flex items-start gap-3 text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-orange-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#F13B0A] stroke-[4]" />
                  </div>
                  <span className="leading-relaxed font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ServiceUseCases: React.FC<Props> = () => {
  const cases = [
    { icon: Radio, label: 'Wireless Internet Service Providers (WISPs)' },
    { icon: Globe, label: 'Local and regional broadband providers' },
    { icon: Users, label: 'Rural and community internet networks' },
    { icon: Layers, label: 'Multi-tower wireless operators' },
    { icon: Zap, label: 'Last-mile connectivity providers' },
    { icon: MapPin, label: 'Franchise-based broadband businesses' },
  ];

  return (
    <section className="bg-white py-10 sm:py-18 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            {/* <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest text-[#F13B0A] bg-orange-50 rounded-full uppercase mb-5">
              Industries & Use Cases
            </span> */}
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
              Industries and <span className="text-slate-400">Use Cases</span>
            </h2>
          </div>
          <p className="text-base text-slate-600 max-w-sm md:text-left">
            Netzur&apos;s WISP billing software in Africa serves wireless operators across
            different deployment models:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((item) => {
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

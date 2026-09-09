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

export const ServiceExplainer: React.FC<Props> = ({ data }) => {
  const explainer = data.explainer;
  return (
    <section className="bg-white py-10 sm:py-18 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
          {/* Left: clean editorial copy */}
          <div>
            {/* <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest text-[#F13B0A] bg-orange-50 rounded-full uppercase mb-5">
              What is Radius Billing?
            </span> */}
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight mb-6">
              {explainer.heading} <span className="text-slate-400">{explainer.heading_accent}</span>
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-4">{explainer.body}</p>
            <p className="text-sm text-slate-600 leading-relaxed border-l-2 border-[#F13B0A] pl-4">
              {explainer.highlight}
            </p>
          </div>

          {/* Right: single image */}
          {/* <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
              <img
                src={explainer.image}
                alt={explainer.image_alt}
                className="w-full h-[320px] sm:h-[400px] object-cover"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export const ServiceFeaturesGrid: React.FC<Props> = ({ data }) => {
  const items = data.features_grid;
  const header = data.features_header;

  return (
    <section id="service-features" className="bg-white py-10 sm:py-18 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight max-w-xl">
            {header.heading} <span className="text-slate-400">{header.heading_accent}</span>
          </h2>
          <p className="text-base text-slate-600 max-w-sm md:text-left">{header.subtitle}</p>
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

        {/* Dots - bottom center */}
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

export const ServiceWhyChoose: React.FC<Props> = ({ data }) => {
  const why = data.why_choose;

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
              {why.heading} <span className="text-slate-400">{why.heading_accent}</span>
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-4">{why.body}</p>
            <p className="text-sm text-slate-600 leading-relaxed border-l-2 border-[#F13B0A] pl-4">
              {why.highlight}
            </p>
          </div>

          {/* Right: single clean checklist card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
            <div className="space-y-4">
              {why.points.map((point) => (
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

export const ServiceUseCases: React.FC<Props> = ({ data }) => {
  const useCases = data.use_cases;
  const caseIcons = [Radio, Globe, Users, Layers, Zap, MapPin];

  return (
    <section className="bg-white py-10 sm:py-18 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            {/* <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest text-[#F13B0A] bg-orange-50 rounded-full uppercase mb-5">
              Industries & Use Cases
            </span> */}
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
              {useCases.heading} <span className="text-slate-400">{useCases.heading_accent}</span>
            </h2>
          </div>
          <p className="text-base text-slate-600 max-w-sm md:text-left">{useCases.description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.items.map((label, idx) => {
            const Icon = caseIcons[idx % caseIcons.length];
            return (
              <div
                key={label}
                className="group bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-[#F13B0A] flex items-center justify-center text-slate-700 group-hover:text-white transition-colors duration-300 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold text-slate-900 tracking-tight leading-snug">
                  {label}
                </span>
              </div>
            );
          })}
        </div>

        {/* <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto text-center mt-10 border-t-2 border-[#F13B0A] pt-6">
          {useCases.closing}
        </p> */}
      </div>
    </section>
  );
};

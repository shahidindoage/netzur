import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {
  Layers, CreditCard, Users, Cpu, MapPin, Radio, ShieldCheck, Globe, Zap, Check,
} from 'lucide-react';
import type { SolutionPageData } from '../../data/solutions';

const ICONS = [Globe, Layers, CreditCard, Zap, Users, ShieldCheck, MapPin, Radio, Cpu];

interface Props {
  data: SolutionPageData;
  onOpenDemo?: () => void;
}

export const SolutionExplainer: React.FC<Props> = ({ data }) => {
  const explainer = data.explainer;
  return (
    <section className="bg-white py-10 sm:py-18 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
          <div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight mb-6">
              {explainer.heading} <span className="text-slate-400">{explainer.heading_accent}</span>
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-4">{explainer.body}</p>
            <p className="text-sm text-slate-600 leading-relaxed border-l-2 border-[#F13B0A] pl-4">
              {explainer.highlight}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export const SolutionFeaturesGrid: React.FC<Props> = ({ data }) => {
  const items = data.features_grid;
  const header = data.features_header;

  return (
    <section id="solution-features" className="bg-white py-10 sm:py-18 overflow-hidden">
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
          pagination={{ clickable: true, el: '.solution-features-dots' }}
          autoplay={{ delay: 4500, disableOnInteraction: true, pauseOnMouseEnter: true }}
          className="solution-features-swiper"
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
                      <div className="space-y-3 pt-6 mt-6 border-t border-slate-100">
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
        <div className="solution-features-dots flex items-center justify-center gap-2 mt-8" />

        <style>{`
          .solution-features-swiper .swiper-slide { height: auto; display: flex; }
          .solution-features-swiper .swiper-slide > div { flex: 1 1 auto; width: 100%; }
          .solution-features-dots .swiper-pagination-bullet {
            width: 8px; height: 8px; background: #cbd5e1; opacity: 1;
            border-radius: 9999px; transition: all 0.3s ease; margin: 0 !important;
          }
          .solution-features-dots .swiper-pagination-bullet-active {
            width: 28px; background: #F13B0A;
          }
        `}</style>
      </div>
    </section>
  );
};

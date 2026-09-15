import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight, ShieldCheck, Activity, Send, Phone, Code2, Terminal, Coffee,
  BadgeCheck, PartyPopper, Megaphone, Headphones, Mail, MapPin,
  Map,
  MapIcon,
} from 'lucide-react';
import { CtaLink } from '../service/CtaLink';

interface Props {
  onOpenDemo?: () => void;
}

export const JoinTeamHero: React.FC<Props> = ({ onOpenDemo }) => {
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
            Join the <span className="text-slate-400">Team</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-4 font-normal">
            Are you looking for new challenges?
          </p>
          <p className="text-sm text-slate-600 max-w-xl leading-relaxed mb-8 border-l-2 border-[#F13B0A] pl-4">
            Do you want to work in a professional environment? Check out our open positions below!
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 mb-8">
            <CtaLink
              cta={{ label: 'Join the Team', type: 'primary', href: 'mailto:sales@netzur.com' }}
              onOpenDemo={onOpenDemo}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F13B0A] hover:bg-[#d8350a] text-white text-base font-semibold tracking-wide shadow-lg hover:shadow-[0_8px_30px_rgb(241,59,10,0.25)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer group"
            >
              <span>Join the Team</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-200" />
            </CtaLink>
            <CtaLink
              cta={{ label: 'View Open Roles', type: 'secondary', href: '#open-vacancies' }}
              onOpenDemo={onOpenDemo}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 text-base font-medium tracking-wide shadow-sm transition-all cursor-pointer"
            >
              View Open Roles
            </CtaLink>
          </div>
          <div className="flex items-center gap-6 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-slate-400" />
              <span>Since 2017</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-200"></div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-slate-400" />
              <span>Sidhpur · Ahmedabad</span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-7/12 relative hidden md:flex justify-center items-center z-10">
          <div className="relative w-full rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
            <img
              src="https://netzur.com/wp-content/uploads/2025/06/join-team-bg.webp"
              alt="Netzur team collaborating"
              className="w-full h-[320px] lg:h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 max-w-md">
                <p className="text-sm font-bold text-white mb-1">Work on real ISP systems</p>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Join the SaaS innovation team shaping the future of internet access and ISP
                  automation.
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

const PROCESS_STEPS = [
  {
    icon: Send,
    title: 'Application',
    desc: 'Say hello to us and send us your resume in English with a short cover email summing up why you’re motivated to join us and what you believe you can add to our company.',
  },
  {
    icon: Phone,
    title: 'First Round',
    desc: 'After reviewing your resume, our HR Representative will get in touch with you to schedule a 30-40 minute interview, so that you can have the chance to learn more about the position and the company, and of course, so that we can learn more about you. You will switch to English for a few minutes during this conversation.',
  },
  {
    icon: Code2,
    title: 'Task',
    desc: 'You will receive a task afterward – create a production-ready app or write automated tests – on which you can work for about two weeks. Take your time and give it your best shot because our senior developers will thoroughly review your solution, and the next round will depend on its quality.',
  },
  {
    icon: Terminal,
    title: 'Tech Interview',
    desc: 'If you have managed to capture our colleagues’ attention with your coding skills, you will be invited to a tech interview with one of your reviewers and our Site Manager. You will have to further demonstrate your technical skills, based on your solution, plus, it is an excellent opportunity for you to get detailed technical information about our projects and teams.',
  },
  {
    icon: Coffee,
    title: 'Last Meeting',
    desc: 'Last but not least, after the successful third round, you are invited to an informal online meeting with our Managing Director.',
  },
  {
    icon: BadgeCheck,
    title: 'Offer',
    desc: 'The offer comes from Managing Director in a couple of days.',
  },
  {
    icon: PartyPopper,
    title: 'Hired!',
    desc: 'Let’s sign your contract and celebrate: welcome to our team!',
  },
];

export const JoinTeamProcess: React.FC<Props> = ({ onOpenDemo }) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = timelineRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cursor = window.innerHeight * 0.6;
      const raw = (cursor - rect.top) / rect.height;
      setProgress(Math.min(1, Math.max(0, raw)));
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);
  return (
    <section className="bg-white py-10 sm:py-18 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left: sticky header */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
             
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight mb-5">
                Our hiring <span className="text-slate-400">process.</span>
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                Seven transparent steps - from application to offer. No surprises along the way.
              </p>
              <CtaLink
                cta={{ label: 'Start Your Application', type: 'primary', href: 'mailto:sales@netzur.com' }}
                onOpenDemo={onOpenDemo}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F13B0A] hover:bg-[#d8350a] text-white text-base font-semibold tracking-wide shadow-lg hover:shadow-[0_8px_30px_rgb(241,59,10,0.25)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer group"
              >
                <span>Start Your Application</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-200" />
              </CtaLink>
            </div>
          </div>

          {/* Right: vertical timeline */}
          <div className="lg:col-span-8">
            <div ref={timelineRef} className="relative pl-10 sm:pl-14">
              {/* Base line */}
              <div className="absolute left-[19px] sm:left-[27px] top-2 bottom-8 w-0.5 bg-slate-200 rounded-full" />
              {/* Scroll progress fill */}
              <div
                className="absolute left-[19px] sm:left-[27px] top-2 w-0.5 bg-[#F13B0A] rounded-full"
                style={{ height: `calc((100% - 2.5rem) * ${progress})` }}
              />
              <div className="space-y-5">
                {PROCESS_STEPS.map((step, idx) => {
                  const isLast = idx === PROCESS_STEPS.length - 1;
                  const isReached = progress * PROCESS_STEPS.length > idx;
                  return (
                    <div key={step.title} className="relative">
                      {/* Dot node */}
                      <div
                        className={`absolute -left-10 sm:-left-14 top-8 w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center z-10`}
                      >
                        <span
                          className={`block w-3.5 h-3.5 rounded-full ring-4 transition-colors duration-300 ${
                            isReached
                              ? 'bg-[#F13B0A] ring-orange-100'
                              : 'bg-slate-300 ring-slate-100'
                          }`}
                        />
                      </div>
                      <div
                        className={`rounded-3xl border p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 ${
                          isLast
                            ? 'bg-slate-950 border-slate-950 text-white'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <span
                            className={`text-xs font-bold tracking-widest uppercase font-mono ${
                              isLast ? 'text-orange-400' : 'text-[#F13B0A]'
                            }`}
                          >
                            Step {String(idx + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <h3
                          className={`text-lg sm:text-xl font-bold tracking-tight mb-2 ${
                            isLast ? 'text-white' : 'text-slate-900'
                          }`}
                        >
                          {step.title}
                        </h3>
                        <p
                          className={`text-sm leading-relaxed ${
                            isLast ? 'text-slate-300' : 'text-slate-600'
                          }`}
                        >
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const VACANCIES = [
  {
    icon: Code2,
    title: 'Software Developer',
    desc: 'We are searching for a Laravel developer to build web applications - designing and creating projects with Laravel and PHP, and helping the team deliver high-quality web applications, services, and tools.',
    tags: ['Laravel', 'PHP', 'Web Apps'],
  },
  {
    icon: Headphones,
    title: 'Technical Support',
    desc: 'We are looking for a results-driven network support technician to enhance and secure our network - analyzing performance, increasing capacity with IT, and providing support.',
    tags: ['Networking', 'IT Support'],
  },
  {
    icon: Megaphone,
    title: 'Sales and Marketing',
    desc: 'We are looking for an organized sales and marketing manager - generating sales plans, creating advertisements and promotional literature, developing pricing strategies, and meeting sales objectives.',
    tags: ['Sales', 'Marketing'],
  },
];

export const JoinTeamVacancies: React.FC<Props> = ({ onOpenDemo }) => {
  return (
    <section id="open-vacancies" className="bg-white py-10 sm:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight max-w-xl">
            Open <span className="text-slate-400">vacancies.</span>
          </h2>
          <p className="text-base text-slate-600 max-w-sm md:text-left">
            Find your role below - send your resume in English with a short cover email.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {VACANCIES.map((job) => {
            const Icon = job.icon;
            return (
              <div
                key={job.title}
                className="group relative bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-[#F13B0A] flex items-center justify-center text-slate-700 group-hover:text-white transition-colors duration-300 mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{job.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">{job.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-[11px] font-semibold border border-slate-200 text-slate-600 bg-slate-50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-6 border-t border-slate-100">
                  <CtaLink
                    cta={{ label: 'Apply via Email', type: 'primary', href: 'mailto:sales@netzur.com' }}
                    onOpenDemo={onOpenDemo}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-[#F13B0A] text-white text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Apply via Email
                    <ArrowRight className="w-4 h-4" />
                  </CtaLink>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
            <Mail className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-heading font-bold text-lg text-slate-900 tracking-tight">
              Got a question?
            </h3>
            <p className="text-sm text-slate-600">
              Our HR Representative in recruitment would be delighted to assist. Email at{' '}
              <a href="mailto:info@netzur.com" className="font-semibold text-[#F13B0A] hover:underline">
                info@netzur.com
              </a>
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500 shrink-0">
            <MapPin className="w-4 h-4" />
            Sidhpur · Ahmedabad, Gujarat
          </div>
        </div>
      </div>
    </section>
  );
};

export const JoinTeamFooterCta: React.FC<Props> = ({ onOpenDemo }) => {
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

import React, { useState } from 'react';
import {
  ArrowRight,
  MapPin,
  Mail,
  MessageCircle,
  Headphones,
  Send,
  Check,
  PhoneCall,
} from 'lucide-react';
import { CtaLink } from '../service/CtaLink';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

interface Props {
  onOpenDemo?: () => void;
}

export const ContactHero: React.FC<Props> = ({ onOpenDemo }) => {
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
          Get In <span className="text-slate-400">Touch</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-8 font-normal">
          Talk to sales, reach support, or visit our offices — we reply within one business day.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4">
          <CtaLink
            cta={{ label: 'Book a Demo', type: 'primary', href: 'demo' }}
            onOpenDemo={onOpenDemo}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F13B0A] hover:bg-[#d8350a] text-white text-base font-semibold tracking-wide shadow-lg hover:shadow-[0_8px_30px_rgb(241,59,10,0.25)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer group"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-200" />
          </CtaLink>
          <a
            href="https://wa.me/919408053196?text=Hi%20there"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 text-base font-medium tracking-wide shadow-sm transition-all"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Chat with Us
          </a>
        </div>
        </div>

        <div className="w-full lg:w-7/12 relative hidden md:flex justify-center items-center z-10">
          <div className="relative w-full rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1200&q=80"
              alt="Netzur support team ready to help ISPs"
              className="w-full h-[320px] lg:h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 max-w-md">
                <p className="text-sm font-bold text-white mb-1">Sales & support, one team</p>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Sidhpur head office & Ahmedabad branch — replying within one business day.
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

export const ContactOffices: React.FC = () => {
  const offices = [
    {
      icon: MapPin,
      label: 'Head Office',
      address: 'S-5, Tirupati Market, Near Bus Station, Sidhpur 384151, Gujarat',
    },
    {
      icon: MapPin,
      label: 'Branch Office',
      address: 'C-1106 Siddhi Vinayak Towers, Makarba, S.G Highway, Ahmedabad-380051',
    },
  ];
  return (
    <section className="bg-white py-10 sm:py-18 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight mb-3">
          Visit <span className="text-slate-400">Us.</span>
        </h2>
        <p className="text-sm text-slate-500 leading-relaxed mb-8 max-w-xl">
          Two offices in Gujarat, serving ISPs across India, Africa and Southeast Asia.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {offices.map((office) => (
            <div
              key={office.label}
              className="rounded-3xl border border-slate-200 bg-[#F8F9FB] p-8 shadow-sm hover:shadow-lg hover:border-[#F13B0A]/20 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#F13B0A] mb-5 shadow-sm">
                <office.icon className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-xl font-extrabold text-slate-900 tracking-tight mb-2">
                {office.label}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">{office.address}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ContactConnect: React.FC = () => {
  const cards = [
    {
      icon: Mail,
      label: 'Product Inquiry',
      value: 'sales@netzur.com',
      href: 'mailto:sales@netzur.com',
    },
    {
      icon: Headphones,
      label: 'Support Inquiry',
      value: 'support@netzur.com',
      href: 'mailto:support@netzur.com',
    },
    {
      icon: WhatsAppIcon,
      label: '+91 94080 53196',
      value: 'WhatsApp',
      href: 'https://wa.me/919408053196?text=Hi%20there',
    },
    {
      icon: PhoneCall,
      label: '+91 63550 86848',
      value: 'Call',
      href: 'https://wa.me/916355086848?text=Hi%20there',
    },
  ];
  return (
    <section className="bg-white py-10 sm:py-18 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight mb-3">
          Let&apos;s <span className="text-slate-400">Connect.</span>
        </h2>
        <p className="text-sm text-slate-500 leading-relaxed mb-8 max-w-xl">
          Sales, support and partnerships — pick the fastest channel for you.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              target={card.href.startsWith('http') ? '_blank' : undefined}
              rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-[#F13B0A]/20 hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-2xl bg-slate-100 text-slate-700 group-hover:bg-[#F13B0A]/10 group-hover:text-[#F13B0A] flex items-center justify-center transition-colors mb-4">
                <card.icon className="w-5 h-5" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                {card.value}
              </p>
              <h3 className="font-heading font-bold text-base text-slate-900 tracking-tight group-hover:text-[#F13B0A] transition-colors break-all">
                {card.label}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: 'Product Inquiry', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputCls =
    'w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 shadow-sm focus:outline-none focus:border-[#F13B0A]/40 focus:ring-2 focus:ring-[#F13B0A]/10';

  return (
    <section className="bg-white py-10 sm:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight mb-3">
              Send us a <span className="text-slate-400">message.</span>
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed max-w-md">
              Fill the form and our team will reach out within one business day.
              Prefer instant chat? Message us on WhatsApp at +91 94080 53196.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200 bg-[#F8F9FB] p-6 sm:p-8 shadow-sm">
              {sent ? (
                <div className="text-center py-8">
                  <span className="mx-auto w-12 h-12 rounded-full bg-[#F13B0A]/10 flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-[#F13B0A]" />
                  </span>
                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">Message received!</h3>
                  <p className="text-sm text-slate-500 mb-6">
                    Thanks {form.name.split(' ')[0] || 'there'} — our team will contact you at {form.email || 'your email'} within one business day.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-[#F13B0A] transition-colors"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className={inputCls}
                  />
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Work email"
                    className={inputCls}
                  />
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className={`${inputCls} sm:col-span-2 appearance-none cursor-pointer`}
                  >
                    <option>Product Inquiry</option>
                    <option>Support Inquiry</option>
                    <option>Partnership</option>
                  </select>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="How can we help?"
                    className={`${inputCls} sm:col-span-2 resize-none`}
                  />
                  <button
                    type="submit"
                    className="sm:col-span-2 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#F13B0A] hover:bg-[#d8350a] text-white text-sm font-semibold shadow-lg transition-all hover:scale-[1.01] active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    Send message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ContactFooterCta: React.FC<Props> = ({ onOpenDemo }) => {
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

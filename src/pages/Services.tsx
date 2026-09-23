import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';

const WORDPRESS_API_URL = 'https://netzur.com/wp-json/wp/v2/netzur_services';

interface ServiceListItem {
  slug: string;
  title: string;
}

interface CategoryGroup {
  key: string;
  label: string;
  intro: string;
  services: ServiceListItem[];
}

// Static images used across the service categories (shown on the right of each group).
const SECTION_IMAGES = [
  'https://netzur.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-05-at-5.00.22-PM-1536x864.jpeg',
  'https://netzur.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-05-at-5.00.22-PM-1.jpeg',
  'https://netzur.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-05-at-5.00.22-PM-2-1536x864.jpeg',
  'https://netzur.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-05-at-5.00.22-PM-3-1536x864.jpeg',
  'https://netzur.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-05-at-5.00.21-PM-1536x864.jpeg',
  'https://netzur.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-05-at-5.00.21-PM-1-1536x864.jpeg',
  '/pc.png',
  '/f2.png',
  '/f4.png',
  '/f1.png',
];

// Categories mirror the content of https://netzur.com/services/ (WordPress page).
// The service lists themselves are fetched LIVE from the netzur_services CPT, so
// new posts/categories (e.g. hotel WiFi) appear automatically.
const CATEGORIES: CategoryGroup[] = [
  {
    key: 'isp-billing-and-management-software-in-',
    label: 'ISP Billing and Management Software',
    intro:
      'Netzur provides advanced ISP Billing Software and ISP Management Software for internet service providers worldwide. Automate billing, manage subscribers, monitor network performance, control bandwidth, and streamline customer operations through a unified platform designed to help ISPs improve efficiency, reduce costs, and scale with confidence.',
    services: [],
  },
  {
    key: 'radius-billing-software-in-',
    label: 'Radius Billing Software',
    intro:
      'Netzur delivers reliable Radius Billing Software for ISPs, WISPs, broadband providers, and hotspot operators worldwide. Automate user authentication, bandwidth management, prepaid and postpaid billing, customer provisioning, and payment tracking through a centralized platform built to simplify network and subscriber management.',
    services: [],
  },
  {
    key: 'wisp-billing-software-in-',
    label: 'WISP Billing Software',
    intro:
      'Netzur offers powerful WISP Billing Software for wireless internet service providers worldwide. Automate customer onboarding, billing, payment collection, bandwidth allocation, and network monitoring from a single platform. Built for growing WISPs, it helps improve operational efficiency, reduce manual tasks, and deliver a seamless subscriber experience.',
    services: [],
  },
  {
    key: 'mikrotik-billing-system-in-',
    label: 'MikroTik Billing System',
    intro:
      'Netzur provides an advanced MikroTik Billing System for ISPs, WISPs, and broadband operators worldwide. Seamlessly integrate with MikroTik routers to automate user authentication, bandwidth management, subscriber billing, payment tracking, and service provisioning through a centralized and scalable platform.',
    services: [],
  },
  {
    key: 'retail-business-wifi-software-in-',
    label: 'Retail Business WiFi Software',
    intro:
      "Netzur's WiFi Software helps retail businesses worldwide deliver secure, high-performance guest WiFi experiences. Capture customer insights, manage user access, run targeted marketing campaigns, and monitor network performance through a centralized platform designed to boost customer engagement and business growth.",
    services: [],
  },
  {
    key: 'hotel-wifi-hotspot-solutions-in-',
    label: 'Hotel WiFi Hotspot Solutions',
    intro:
      'Netzur delivers reliable Hotel WiFi Hotspot Solutions for hotels, resorts, guest houses, and hospitality businesses worldwide. Provide secure guest internet access, manage user authentication, control bandwidth usage, and gain valuable customer insights through a centralized platform designed to enhance guest satisfaction and operational efficiency.',
    services: [],
  },
];

async function fetchServices(): Promise<ServiceListItem[]> {
  try {
    const res = await fetch(`${WORDPRESS_API_URL}?per_page=100&_fields=slug,title`);
    if (!res.ok) return [];
    const posts = (await res.json()) as { slug: string; title?: { rendered?: string } }[];
    const seen = new Set<string>();
    const out: ServiceListItem[] = [];
    for (const post of posts) {
      if (!post.slug) continue;
      const title = post.title?.rendered || post.slug;
      const key = title.toLowerCase().trim();
      if (seen.has(key)) continue; // de-dupe (e.g. duplicate India MikroTik post)
      seen.add(key);
      out.push({ slug: post.slug, title });
    }
    return out;
  } catch {
    return [];
  }
}

function countryLabel(title: string): string {
  const parts = title.trim().split(/\s+/);
  return parts[parts.length - 1];
}

function ServicesList({ items }: { items: ServiceListItem[] }) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {items.map((item) => (
        <Link
          key={item.slug}
          to={`/${item.slug}`}
          className="inline-flex items-center px-5 py-2.5 rounded-full border border-slate-300 bg-white text-sm font-semibold text-[#0F172A] transition-all duration-300 hover:border-[#F13B0A] hover:bg-[#F13B0A] hover:text-white"
        >
          {countryLabel(item.title)}
        </Link>
      ))}
    </div>
  );
}

interface CategorySectionProps {
  group: CategoryGroup;
  image: string;
  reverse: boolean;
  onOpenDemo: () => void;
}

function CategorySection({ group, image, reverse, onOpenDemo }: CategorySectionProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
      {/* Content */}
      <div className={reverse ? 'lg:order-2' : ''}>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#0F172A]">
          {group.label}
        </h2>
        <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">{group.intro}</p>
        <ServicesList items={group.services} />
      </div>

      {/* Image */}
      <div className={reverse ? 'lg:order-1' : ''}>
        <div className="relative rounded-3xl overflow-hidden ">
          <img
            src={image}
            alt={group.label}
            className="rounded-3xl w-full  object-contain bg-white transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}

export default function Services({ onOpenDemo }: { onOpenDemo: () => void }) {
  usePageMeta(
    'services',
    'Services | ISP Billing & Internet Management | Netzur',
    "Explore Netzur's services - ISP billing and management software, Radius billing, WISP billing, MikroTik billing system, retail business WiFi and hotel WiFi hotspot solutions for ISPs, WISPs and hospitality worldwide."
  );

  const [groups, setGroups] = useState<CategoryGroup[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetchServices()
      .then((services) => {
        if (cancelled) return;
        setGroups(
          CATEGORIES.map((cat) => ({
            ...cat,
            services: services.filter((s) => s.slug.startsWith(cat.key)),
          })).filter((g) => g.services.length > 0)
        );
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white text-slate-900 sm:min-h-[calc(100vh-4.5rem)] flex flex-col justify-between">
        {/* Background Grid & Soft Glows */}
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

        {/* Main Content Container */}
        <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-0 sm:pt-12 gap-8 lg:gap-6">
          {/* Left Column: Copy & CTA */}
          <div className="w-full lg:w-5/12 flex-shrink-0 max-w-2xl">
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-6 text-slate-900">
              Our Services
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-8 font-normal">
              ISP Billing &amp; Management, Radius Billing, WISP Billing, MikroTik,
              retail business WiFi and hotel hotspot solutions - engineered for
              internet service providers around the world.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                to="/book-a-demo"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F13B0A] hover:bg-[#d8350a] text-white text-base font-semibold tracking-wide shadow-lg hover:shadow-[0_8px_30px_rgb(241,59,10,0.25)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer group"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Image */}
          <div className="w-full lg:w-7/12 relative hidden md:flex justify-center items-center z-10">
            <img
              src="/services.png"
              alt="Netzur ISP Operations Dashboard"
              className="w-full h-auto max-w-none lg:scale-110 origin-center object-contain mix-blend-multiply"
            />
          </div>
        </div>

         <div className="-bottom-12 absolute z-12 w-full pb-8 pt-6 border-t border-slate-100 bg-slate-50"></div>
      </section>

      {/* Category sections */}
      <section id="services-list" className="bg-white py-8 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-30">
          {loading && (
            <div className="flex items-center justify-center py-20">
              <div className="w-12 h-12 border-4 border-slate-200 border-t-[#F13B0A] rounded-full animate-spin"></div>
            </div>
          )}

          {!loading &&
            groups.map((group, idx) => (
              <Fragment key={group.key}>
                <CategorySection
                  group={group}
                  image={SECTION_IMAGES[idx % SECTION_IMAGES.length]}
                  reverse={idx % 2 === 0}
                  onOpenDemo={onOpenDemo}
                />
              </Fragment>
            ))}
        </div>
      </section>

      {/* Closing CTA */}
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
              <Link
                to="/book-a-demo"
              
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F13B0A] hover:bg-[#d8350a] text-white font-semibold shadow-lg transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
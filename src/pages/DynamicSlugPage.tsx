import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getServiceBySlug } from '../data/services';
import type { ServicePageData } from '../data/services/types';
import { applyPageMeta, parseYoastHead } from '../lib/seo';
import { ServiceHero } from '../components/service/ServiceHero';
import { ServiceExplainer, ServiceFeaturesGrid, ServiceWhyChoose, ServiceUseCases } from '../components/service/ServiceFeatures';
import {
  ServiceCtaBanner,
  ServicePaymentsCompliance,
  ServiceRelated,
  ServiceFaq,
  ServiceFooterCta,
} from '../components/service/ServiceClosing';

/**
 * Top-level `/:slug` dispatcher for WordPress netzur_services. Solutions live
 * canonically at `/solutions/<slug>` (rendered by SolutionPage).
 */
export default function DynamicSlugPage({ onOpenDemo }: { onOpenDemo: () => void }) {
  const { slug } = useParams<{ slug: string }>();

  const [serviceData, setServiceData] = useState<ServicePageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    let isMounted = true;

    setLoading(true);
    setServiceData(null);

    const applyYoast = (api: string, fallback: { title: string; description: string }) => {
      if (!slug) return;
      fetch(
        `${api}?slug=${encodeURIComponent(slug)}&_fields=yoast_head`
      )
        .then((res) => (res.ok ? res.json() : null))
        .then((data: unknown) => {
          if (!isMounted) return;
          const posts = Array.isArray(data) ? (data as { yoast_head?: string }[]) : [];
          const yoast = parseYoastHead(posts[0]?.yoast_head);
          if (!yoast?.title && !yoast?.description) return;
          // ACF meta (fallback) wins; Yoast only fills fields not set in ACF.
          applyPageMeta(
            fallback.title || yoast.title || '',
            fallback.description || yoast.description || ''
          );
        })
        .catch(() => {
          /* keep ACF meta */
        });
    };

    (async () => {
      const service = await getServiceBySlug(slug);

      if (!isMounted) return;
      if (service) {
        setServiceData(service);
        document.title = service.meta.title;
        let tag = document.querySelector('meta[name="description"]');
        if (!tag) {
          tag = document.createElement('meta');
          tag.setAttribute('name', 'description');
          document.head.appendChild(tag);
        }
        tag.setAttribute('content', service.meta.description);
        applyYoast('https://netzur.com/wp-json/wp/v2/netzur_services', service.meta);
      } else {
        document.title = 'Page Not Found';
      }
      setLoading(false);
    })();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-12 h-12 border-4 border-slate-200 border-t-[#F13B0A] rounded-full animate-spin"></div>
      </div>
    );
  }

  if (serviceData) {
    return (
      <>
        <ServiceHero data={serviceData} onOpenDemo={onOpenDemo} />
        <ServiceExplainer data={serviceData} />
        <ServiceFeaturesGrid data={serviceData} onOpenDemo={onOpenDemo} />
        <ServiceWhyChoose data={serviceData} />
        <ServiceUseCases data={serviceData} />
        <ServiceCtaBanner data={serviceData} onOpenDemo={onOpenDemo} />
        <ServicePaymentsCompliance data={serviceData} />
        <ServiceRelated data={serviceData} />
        <ServiceFaq data={serviceData} />
        <ServiceFooterCta data={serviceData} onOpenDemo={onOpenDemo} />
      </>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-slate-700 flex-col gap-4 p-4 text-center">
      <h1 className="text-2xl font-bold">Page Not Found</h1>
      <p className="text-slate-500">The page you are looking for does not exist or has been moved.</p>
      <a href="/" className="mt-4 px-6 py-2 bg-[#F13B0A] text-white rounded-full font-semibold">Go Home</a>
    </div>
  );
}
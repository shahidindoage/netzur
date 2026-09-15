import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getServiceBySlug } from '../data/services';
import type { ServicePageData } from '../data/services/types';
import { ServiceHero } from '../components/service/ServiceHero';
import { ServiceExplainer, ServiceFeaturesGrid, ServiceWhyChoose, ServiceUseCases } from '../components/service/ServiceFeatures';
import {
  ServiceCtaBanner,
  ServicePaymentsCompliance,
  ServiceRelated,
  ServiceFaq,
  ServiceFooterCta,
} from '../components/service/ServiceClosing';

export default function ServicePage({ onOpenDemo }: { onOpenDemo: () => void }) {
  const { slug } = useParams<{ slug: string }>();
  const [data, setData] = useState<ServicePageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    let isMounted = true;

    setLoading(true);
    getServiceBySlug(slug).then((serviceData) => {
      if (!isMounted) return;
      
      setData(serviceData);

      if (serviceData) {
        document.title = serviceData.meta.title;
        let tag = document.querySelector('meta[name="description"]');
        if (!tag) {
          tag = document.createElement('meta');
          tag.setAttribute('name', 'description');
          document.head.appendChild(tag);
        }
        tag.setAttribute('content', serviceData.meta.description);
      } else {
        document.title = 'Service Not Found';
      }
      setLoading(false);
    });

    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        {/* Simple Spinner */}
        <div className="w-12 h-12 border-4 border-slate-200 border-t-[#F13B0A] rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-slate-700 flex-col gap-4 p-4 text-center">
        <h1 className="text-2xl font-bold">Service Not Found</h1>
        <p className="text-slate-500">The service you are looking for does not exist or has been moved.</p>
        <a href="/" className="mt-4 px-6 py-2 bg-[#F13B0A] text-white rounded-full font-semibold">Go Home</a>
      </div>
    );
  }

  return (
    <>
      <ServiceHero data={data} onOpenDemo={onOpenDemo} />
      <ServiceExplainer data={data} />
      <ServiceFeaturesGrid data={data} onOpenDemo={onOpenDemo} />
      <ServiceWhyChoose data={data} />
      <ServiceUseCases data={data} />
      <ServiceCtaBanner data={data} onOpenDemo={onOpenDemo} />
      <ServicePaymentsCompliance data={data} />
      <ServiceRelated data={data} />
      <ServiceFaq data={data} />
      <ServiceFooterCta data={data} onOpenDemo={onOpenDemo} />
    </>
  );
}
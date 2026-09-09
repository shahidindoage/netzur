import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getServiceBySlug } from '../data/services';
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
  const data = getServiceBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = data.meta.title;
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', 'description');
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', data.meta.description);
  }, [slug, data]);

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

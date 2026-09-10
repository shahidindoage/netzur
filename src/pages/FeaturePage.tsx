import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFeatureBySlug } from '../data/features';
import { FeatureHero } from '../components/feature/FeatureHero';
import { FeatureExplainer, FeatureFeaturesGrid } from '../components/feature/FeatureFeatures';
import {
  FeatureCtaBanner,
  FeatureRelated,
  FeatureFaq,
  FeatureFooterCta,
} from '../components/feature/FeatureClosing';

export default function FeaturePage({ onOpenDemo }: { onOpenDemo: () => void }) {
  const { slug } = useParams<{ slug: string }>();
  const data = getFeatureBySlug(slug);

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
      <FeatureHero data={data} onOpenDemo={onOpenDemo} />
      <FeatureExplainer data={data} />
      <FeatureFeaturesGrid data={data} onOpenDemo={onOpenDemo} />
      <FeatureCtaBanner data={data} onOpenDemo={onOpenDemo} />
      <FeatureRelated data={data} />
      <FeatureFaq data={data} />
      <FeatureFooterCta data={data} onOpenDemo={onOpenDemo} />
    </>
  );
}

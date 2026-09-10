import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSolutionBySlug } from '../data/solutions';
import { SolutionHero } from '../components/solution/SolutionHero';
import { SolutionExplainer, SolutionFeaturesGrid } from '../components/solution/SolutionFeatures';
import {
  SolutionCtaBanner,
  SolutionRelated,
  SolutionFaq,
  SolutionFooterCta,
} from '../components/solution/SolutionClosing';

export default function SolutionPage({ onOpenDemo }: { onOpenDemo: () => void }) {
  const { slug } = useParams<{ slug: string }>();
  const data = getSolutionBySlug(slug);

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
      <SolutionHero data={data} onOpenDemo={onOpenDemo} />
      <SolutionExplainer data={data} />
      <SolutionFeaturesGrid data={data} onOpenDemo={onOpenDemo} />
      <SolutionCtaBanner data={data} onOpenDemo={onOpenDemo} />
      <SolutionRelated data={data} />
      <SolutionFaq data={data} />
      <SolutionFooterCta data={data} onOpenDemo={onOpenDemo} />
    </>
  );
}

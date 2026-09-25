import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSolutionBySlug } from '../data/solutions';
import type { SolutionPageData } from '../data/solutions/types';
import { applyPageMeta, parseYoastHead } from '../lib/seo';
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
  const [data, setData] = useState<SolutionPageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    let isMounted = true;

    setLoading(true);
    getSolutionBySlug(slug).then((solutionData) => {
      if (!isMounted) return;

      setData(solutionData);

      if (solutionData) {
        document.title = solutionData.meta.title;
        let tag = document.querySelector('meta[name="description"]');
        if (!tag) {
          tag = document.createElement('meta');
          tag.setAttribute('name', 'description');
          document.head.appendChild(tag);
        }
        tag.setAttribute('content', solutionData.meta.description);
      } else {
        document.title = 'Solution Not Found';
      }

      // Prefer the Yoast SEO title/description (from WordPress) when available.
      if (solutionData && slug) {
        fetch(
          `https://netzur.com/wp-json/wp/v2/netzur_solutions?slug=${encodeURIComponent(slug)}&_fields=yoast_head`
        )
          .then((res) => (res.ok ? res.json() : null))
          .then((data: unknown) => {
            if (!isMounted) return;
            const posts = Array.isArray(data) ? (data as { yoast_head?: string }[]) : [];
            const yoast = parseYoastHead(posts[0]?.yoast_head);
            if (!yoast?.title && !yoast?.description) return;
            // ACF meta wins; Yoast only fills fields not set in ACF.
            applyPageMeta(
              solutionData.meta.title || yoast.title || '',
              solutionData.meta.description || yoast.description || ''
            );
          })
          .catch(() => {
            /* keep ACF meta */
          });
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
        <div className="w-12 h-12 border-4 border-slate-200 border-t-[#F13B0A] rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-slate-700 flex-col gap-4 p-4 text-center">
        <h1 className="text-2xl font-bold">Solution Not Found</h1>
        <p className="text-slate-500">The solution you are looking for does not exist or has been moved.</p>
        <a href="/" className="mt-4 px-6 py-2 bg-[#F13B0A] text-white rounded-full font-semibold">Go Home</a>
      </div>
    );
  }

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
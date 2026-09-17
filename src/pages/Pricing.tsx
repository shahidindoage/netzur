import { useEffect } from 'react';
import { PricingHero, PricingCalculator, PricingFooterCta } from '../components/pricing/PricingSections';

const META_TITLE = 'Affordable ISP Management System Pricing | Netzur';
const META_DESCRIPTION =
  'Netzur IMBS is a subscription based product for long-term ISP partnerships. Calculate monthly pricing by active subscribers for India and International.';

export default function Pricing({ onOpenDemo }: { onOpenDemo: () => void }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = META_TITLE;
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', 'description');
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', META_DESCRIPTION);
  }, []);

  return (
    <>
      <PricingHero onOpenDemo={onOpenDemo} />
      <PricingCalculator />
      <PricingFooterCta onOpenDemo={onOpenDemo} />
    </>
  );
}

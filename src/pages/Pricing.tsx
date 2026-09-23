import { PricingHero, PricingCalculator, PricingFooterCta } from '../components/pricing/PricingSections';
import { usePageMeta } from '../hooks/usePageMeta';

const META_TITLE = 'Affordable ISP Management System Pricing | Netzur';
const META_DESCRIPTION =
  'Netzur IMBS is a subscription based product for long-term ISP partnerships. Calculate monthly pricing by active subscribers for India and International.';

export default function Pricing({ onOpenDemo }: { onOpenDemo: () => void }) {
  usePageMeta('pricing', META_TITLE, META_DESCRIPTION);

  return (
    <>
      <PricingHero onOpenDemo={onOpenDemo} />
      <PricingCalculator />
      <PricingFooterCta onOpenDemo={onOpenDemo} />
    </>
  );
}

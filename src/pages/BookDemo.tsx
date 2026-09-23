import { DemoHero, DemoMain, DemoFooterCta } from '../components/demo/DemoSections';
import { usePageMeta } from '../hooks/usePageMeta';

const META_TITLE = 'Book a Free Demo | Netzur Internet Billing System';
const META_DESCRIPTION =
  'Book a free Netzur demo — quick discovery call, live demo, 14-day free trial with all features included and guided go-live. No commitment.';

export default function BookDemo({ onOpenDemo }: { onOpenDemo: () => void }) {
  usePageMeta('book-a-demo', META_TITLE, META_DESCRIPTION);

  return (
    <>
      <DemoHero />
      <DemoMain />
      <DemoFooterCta onOpenDemo={onOpenDemo} />
    </>
  );
}

import { useEffect } from 'react';
import { DemoHero, DemoMain, DemoFooterCta } from '../components/demo/DemoSections';

const META_TITLE = 'Book a Free Demo | Netzur Internet Billing System';
const META_DESCRIPTION =
  'Book a free Netzur demo — quick discovery call, live demo, 14-day free trial with all features included and guided go-live. No commitment.';

export default function BookDemo({ onOpenDemo }: { onOpenDemo: () => void }) {
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
      <DemoHero />
      <DemoMain />
      <DemoFooterCta onOpenDemo={onOpenDemo} />
    </>
  );
}

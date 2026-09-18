import { useEffect } from 'react';
import {
  RebrandingHero,
  RebrandingStory,
  RebrandingVision,
  RebrandingFooterCta,
} from '../components/company/RebrandingSections';

const META_TITLE = 'Netzur - A Bold New Identity | From Janitor to Netzur';
const META_DESCRIPTION =
  'Introducing Netzur — a bold new identity for a smarter ISP future. From Janitor RADIUS to a complete billing, bandwidth, CRM and franchisee platform.';

export default function Rebranding({ onOpenDemo }: { onOpenDemo: () => void }) {
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
      <RebrandingHero onOpenDemo={onOpenDemo} />
      <RebrandingStory />
      <RebrandingVision />
      <RebrandingFooterCta onOpenDemo={onOpenDemo} />
    </>
  );
}

import { useEffect } from 'react';
import {
  RebrandingHero,
  RebrandingStory,
  RebrandingVision,
  RebrandingFooterCta,
} from '../components/company/RebrandingSections';
import { usePageMeta } from '../hooks/usePageMeta';

const META_TITLE = 'Netzur - A Bold New Identity | From Janitor to Netzur';
const META_DESCRIPTION =
  'Introducing Netzur — a bold new identity for a smarter ISP future. From Janitor RADIUS to a complete billing, bandwidth, CRM and franchisee platform.';

export default function Rebranding({ onOpenDemo }: { onOpenDemo: () => void }) {
  usePageMeta('rebranding', META_TITLE, META_DESCRIPTION);

  return (
    <>
      <RebrandingHero onOpenDemo={onOpenDemo} />
      <RebrandingStory />
      <RebrandingVision />
      <RebrandingFooterCta onOpenDemo={onOpenDemo} />
    </>
  );
}

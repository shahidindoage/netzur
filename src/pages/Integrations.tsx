import { useEffect } from 'react';
import {
  IntegrationsHero,
  IntegrationsGrid,
  IntegrationsWhy,
  IntegrationsFooterCta,
} from '../components/integrations/IntegrationsSections';

const META_TITLE = 'ISP Software Integrations | Payment Gateways, OTT, eKYC & More';
const META_DESCRIPTION =
  'Explore Netzur integrations — payment gateways, notifications, accounting, wallets, eKYC, NAS/BRAS/BNG, OTT and IVR — all synced to one ISP billing core.';

export default function Integrations({ onOpenDemo }: { onOpenDemo: () => void }) {
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
      <IntegrationsHero onOpenDemo={onOpenDemo} />
      <IntegrationsGrid />
      <IntegrationsWhy />
      <IntegrationsFooterCta onOpenDemo={onOpenDemo} />
    </>
  );
}

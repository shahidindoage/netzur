import { useEffect } from 'react';
import {
  IntegrationsHero,
  IntegrationsGrid,
  IntegrationsWhy,
  IntegrationsFooterCta,
} from '../components/integrations/IntegrationsSections';
import { usePageMeta } from '../hooks/usePageMeta';

const META_TITLE = 'ISP Software Integrations | Payment Gateways, OTT, eKYC & More';
const META_DESCRIPTION =
  'Explore Netzur integrations — payment gateways, notifications, accounting, wallets, eKYC, NAS/BRAS/BNG, OTT and IVR — all synced to one ISP billing core.';

export default function Integrations({ onOpenDemo }: { onOpenDemo: () => void }) {
  usePageMeta('integrations', META_TITLE, META_DESCRIPTION);

  return (
    <>
      <IntegrationsHero onOpenDemo={onOpenDemo} />
      <IntegrationsGrid />
      <IntegrationsWhy />
      <IntegrationsFooterCta onOpenDemo={onOpenDemo} />
    </>
  );
}

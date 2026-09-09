import type { ServicePageData } from './types';
import { wispService } from './wisp';

export type { ServicePageData };
export type {
  ServiceCTA,
  ServiceFeatureItem,
  ServiceExplainerData,
  ServiceFeaturesHeader,
  ServiceWhyChooseData,
  ServiceUseCasesData,
} from './types';
export { wispService };

// To add a new service:
// 1. Create `src/data/services/<name>.ts` exporting a `ServicePageData` object
//    (copy `wisp.ts` as the template — same shape, different content).
// 2. Import it here and add it to `servicesRegistry` keyed by its slug.
// 3. The page is live at `/services/<slug>` — no other changes needed.
export const servicesRegistry: Record<string, ServicePageData> = {
  [wispService.slug]: wispService,
};

export function getServiceBySlug(slug: string | undefined): ServicePageData {
  if (slug && servicesRegistry[slug]) return servicesRegistry[slug];
  return wispService;
}

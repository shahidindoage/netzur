import type { FeaturePageData } from './types';
import { billingFinanceFeature } from './billing-finance';

export type { FeaturePageData };
export type {
  FeatureCTA,
  FeatureItem,
  FeatureExplainerData,
} from './types';
export { billingFinanceFeature };

// To add a new feature:
// 1. Create `src/data/features/<name>.ts` exporting a `FeaturePageData` object
//    (copy `billing-finance.ts` as the template — same shape, different content).
// 2. Import it here and add it to `featuresRegistry` keyed by its slug.
// 3. The page is live at `/features/<slug>` — no other changes needed.
export const featuresRegistry: Record<string, FeaturePageData> = {
  [billingFinanceFeature.slug]: billingFinanceFeature,
};

export function getFeatureBySlug(slug: string | undefined): FeaturePageData {
  if (slug && featuresRegistry[slug]) return featuresRegistry[slug];
  return billingFinanceFeature;
}

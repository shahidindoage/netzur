import type { SolutionPageData } from './types';
import { ispBillingSolution } from './isp-billing';

export type { SolutionPageData };
export type { SolutionCTA, SolutionItem, SolutionExplainerData } from './types';
export { ispBillingSolution };

// To add a new solution:
// 1. Create `src/data/solutions/<name>.ts` exporting a `SolutionPageData` object
//    (copy `isp-billing.ts` as the template — same shape, different content).
// 2. Import it here and add it to `solutionsRegistry` keyed by its slug.
// 3. The page is live at `/solutions/<slug>` — no other changes needed.
export const solutionsRegistry: Record<string, SolutionPageData> = {
  [ispBillingSolution.slug]: ispBillingSolution,
};

export function getSolutionBySlug(slug: string | undefined): SolutionPageData {
  if (slug && solutionsRegistry[slug]) return solutionsRegistry[slug];
  return ispBillingSolution;
}

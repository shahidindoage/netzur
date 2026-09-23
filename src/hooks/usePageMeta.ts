import { useEffect } from 'react';
import { applyPageMeta, parseYoastHead } from '../lib/seo';

const NETZUR_PAGES_API = 'https://netzur.com/wp-json/wp/v2/netzur_pages';

interface NetzurPageAcf {
  meta_title?: string;
  meta_description?: string;
}

interface NetzurPageJson {
  acf?: NetzurPageAcf;
  yoast_head?: string;
}

/**
 * Applies the fallback meta immediately (never blank while loading), then
 * fetches meta for this page from WordPress. Resolution order:
 *   1. Yoast SEO head (title / meta description)
 *   2. ACF `meta_title` / `meta_description` (Netzur Pages CPT)
 *   3. the fallback values
 * ACF edits in WP admin reflect instantly without a rebuild.
 */
export function usePageMeta(
  slug: string,
  fallbackTitle: string,
  fallbackDescription: string
): void {
  useEffect(() => {
    window.scrollTo(0, 0);
    let cancelled = false;

    applyPageMeta(fallbackTitle, fallbackDescription);

    fetch(`${NETZUR_PAGES_API}?slug=${encodeURIComponent(slug)}&_fields=acf,yoast_head`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data: unknown) => {
        if (cancelled) return;
        const posts = Array.isArray(data) ? (data as NetzurPageJson[]) : [];
        const post = posts[0];
        if (!post) return;

        let title = '';
        let description = '';

        const yoast = parseYoastHead(post.yoast_head);
        if (yoast?.title) title = yoast.title;
        if (yoast?.description) description = yoast.description;

        const acf = post.acf;
        if (!title && acf?.meta_title) title = acf.meta_title;
        if (!description && acf?.meta_description) description = acf.meta_description;

        if (!title && !description) return;
        applyPageMeta(title || fallbackTitle, description || fallbackDescription);
      })
      .catch(() => {
        /* keep fallback */
      });

    return () => {
      cancelled = true;
    };
  }, [slug, fallbackTitle, fallbackDescription]);
}
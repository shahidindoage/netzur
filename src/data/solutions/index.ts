import type { SolutionPageData, SolutionCTA } from './types';

export type { SolutionPageData };
export type { SolutionCTA, SolutionItem, SolutionExplainerData } from './types';

const WORDPRESS_SOLUTIONS_API_URL = 'https://netzur.com/wp-json/wp/v2/netzur_solutions';

/**
 * Helper: If ACF returns an Image ID (number) instead of a URL,
 * fetch the actual URL from the WordPress Media API.
 */
async function resolveImageUrl(src: any): Promise<string> {
  if (!src) return '';

  // If it's already a string URL, just return it
  if (typeof src === 'string') {
    return src.startsWith('http') ? src : `https://netzur.com${src}`;
  }

  // If it's an object (Image Array), extract the URL
  if (typeof src === 'object' && src.url) {
    return src.url;
  }

  // If it's a number (Image ID), fetch the media item
  if (typeof src === 'number') {
    try {
      const res = await fetch(`https://netzur.com/wp-json/wp/v2/media/${src}?_fields=source_url`);
      if (res.ok) {
        const mediaData = await res.json();
        return mediaData.source_url || '';
      }
    } catch (e) {
      console.error('Failed to fetch image by ID', e);
    }
  }

  return '';
}

/**
 * ACF Free repeater rows expose the CTA label as `_label` (some setups use
 * `label`), and the `href` may be empty / `demo` to open the Book Demo modal.
 */
function mapCtas(ctas: any[] | undefined): SolutionCTA[] {
  if (!Array.isArray(ctas)) return [];
  return ctas.map((c: any) => ({
    label: c.label || c._label || '',
    type: c.type || 'primary',
    href: c.href || undefined,
  }));
}

/**
 * Fetches a solution by slug from WordPress and maps ACF fields to our app's
 * types. Fully dynamic — a solution only exists if it is published in the
 * netzur_solutions CPT (same model as netzur_services).
 */
export async function getSolutionBySlug(slug: string | undefined): Promise<SolutionPageData | null> {
  if (!slug) return null;

  try {
    // Fetch the post by slug, requesting only the ACF fields
    const response = await fetch(`${WORDPRESS_SOLUTIONS_API_URL}?slug=${slug}&_fields=acf`);
    if (!response.ok) throw new Error('Network response was not ok');

    const data = await response.json();
    if (!data || data.length === 0) return null;

    const acf = data[0].acf || {};

    // Resolve image URLs (handles ID, Array, or String)
    const heroImageSrc = await resolveImageUrl(acf.hero_image?.src);
    const explainerImageSrc = await resolveImageUrl(acf.explainer_image);

    const mappedData: SolutionPageData = {
      slug: slug,
      meta: {
        title: acf.meta_title || '',
        description: acf.meta_description || '',
      },
      hero: {
        category: acf.hero_category || '',
        title: acf.hero_title || '',
        subtitle: acf.hero_subtitle || '',
        calls_to_action: mapCtas(acf.hero_calls_to_action),
        hero_image: {
          src: heroImageSrc,
          alt_text: acf.hero_image?.alt_text || '',
          description: acf.hero_image?.description || '',
          link: acf.hero_image?.link || undefined,
        },
      },
      explainer: {
        heading: acf.explainer_heading || '',
        heading_accent: acf.explainer_heading_accent || '',
        body: acf.explainer_body || '',
        highlight: acf.explainer_highlight || '',
        image: explainerImageSrc,
        image_alt: acf.explainer_image_alt || '',
      },
      features_header: {
        heading: acf.features_header_heading || '',
        heading_accent: acf.features_header_heading_accent || '',
        subtitle: acf.features_header_subtitle || '',
      },
      features_grid: (acf.features_grid || []).map((item: any) => ({
        title: item.title || '',
        description: item.description || '',
        highlights: item.highlights || '',
        additional_text: item.additional_text || '',
        bullet_points: (item.bullet_points || []).map((bp: any) => bp.point).filter(Boolean),
      })),
      cta_banner: {
        title: acf.cta_banner_title || '',
        calls_to_action: mapCtas(acf.cta_banner_calls_to_action),
      },
      related: {
        category: acf.related_category || '',
        title: acf.related_title || '',
        links: (acf.related_links || []).map((l: any) => ({ title: l.title || '', url: l.url || '#' })),
      },
      faq: {
        title: acf.faq_title || '',
        questions: (acf.faq_questions || []).map((q: any) => ({
          question: q.question || '',
          answer: q.answer || '',
        })),
      },
      footer_cta: {
        category: acf.footer_cta_category || '',
        title: acf.footer_cta_title || '',
        description: acf.footer_cta_description || '',
        calls_to_action: mapCtas(acf.footer_cta_calls_to_action),
      },
    };

    return mappedData;
  } catch (error) {
    console.error('Error fetching solution data:', error);
    return null;
  }
}
import type { ServicePageData } from './types';

export type { ServicePageData } from './types';
export type {
  ServiceCTA,
  ServiceFeatureItem,
  ServiceExplainerData,
  ServiceFeaturesHeader,
  ServiceWhyChooseData,
  ServiceUseCasesData,
} from './types';

const WORDPRESS_API_URL = 'https://netzur.com/wp-json/wp/v2/netzur_services';

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
 * Fetches a service by slug from WordPress and maps ACF fields to our app's types.
 */
export async function getServiceBySlug(slug: string | undefined): Promise<ServicePageData | null> {
  if (!slug) return null;

  try {
    // Fetch the post by slug, requesting only the ACF fields
    const response = await fetch(`${WORDPRESS_API_URL}?slug=${slug}&_fields=acf`);
    if (!response.ok) throw new Error('Network response was not ok');
    
    const data = await response.json();
    if (!data || data.length === 0) return null;

    const acf = data[0].acf;

    // Resolve the hero image URL (handles ID, Array, or String)
    const heroImageSrc = await resolveImageUrl(acf?.hero_image?.src);

    // Map ACF data to strictly match ServicePageData interface
    const mappedData: ServicePageData = {
      slug: slug,
      meta: {
        title: acf.meta_title || '',
        description: acf.meta_description || '',
      },
      hero: {
        category: acf.hero_category || '',
        title: acf.hero_title || '',
        subtitle: acf.hero_subtitle || '',
        calls_to_action: acf.hero_calls_to_action || [],
        hero_image: {
          src: heroImageSrc, // Use our resolved URL here!
          alt_text: acf.hero_image?.alt_text || '',
          description: acf.hero_image?.description || '',
          link: acf.hero_image?.link || undefined,
        },
      },
      introduction: {
        category: acf.introduction_category || '',
        title: acf.introduction_title || '',
        content: acf.introduction_content || '',
      },
      explainer: {
        heading: acf.explainer_heading || '',
        heading_accent: acf.explainer_heading_accent || '',
        body: acf.explainer_body || '',
        highlight: acf.explainer_highlight || '',
        image: acf.explainer_image || '',
        image_alt: acf.explainer_image_alt || '',
      },
      features_header: {
        heading: acf.features_header_heading || '',
        heading_accent: acf.features_header_heading_accent || '',
        subtitle: acf.features_header_subtitle || '',
      },
      features_grid: (acf.features_grid || []).map((item: any) => ({
        title: item.title,
        description: item.description,
        highlights: item.highlights || '',
        additional_text: item.additional_text || '',
        bullet_points: (item.bullet_points || []).map((bp: any) => bp.point).filter(Boolean),
      })),
      why_choose: {
        heading: acf.why_heading || '',
        heading_accent: acf.why_heading_accent || '',
        body: acf.why_body || '',
        highlight: acf.why_highlight || '',
        points: (acf.why_points || []).map((p: any) => p.point).filter(Boolean),
      },
      use_cases: {
        heading: acf.use_cases_heading || '',
        heading_accent: acf.use_cases_heading_accent || '',
        description: acf.use_cases_description || '',
        items: (acf.use_cases_items || []).map((i: any) => i.item).filter(Boolean),
        closing: acf.use_cases_closing || '',
      },
      cta_banner: {
        title: acf.cta_banner_title || '',
        calls_to_action: acf.cta_banner_calls_to_action || [],
      },
      integrations_payment: {
        category: acf.payment_category || '',
        title: acf.payment_title || '',
        description: acf.payment_description || '',
        supported_gateways: (acf.supported_gateways || []).map((g: any) => g.gateway).filter(Boolean),
      },
      compliance: {
        category: acf.compliance_category || '',
        title: acf.compliance_title || '',
        description: acf.compliance_description || '',
        features: (acf.compliance_features || []).map((f: any) => f.feature).filter(Boolean),
      },
      related_solutions: {
        category: acf.related_category || '',
        title: acf.related_title || '',
        links: (acf.related_links || []).map((l: any) => ({ title: l.title, url: l.url })),
      },
      faq: {
        title: acf.faq_title || '',
        questions: (acf.faq_questions || []).map((q: any) => ({ question: q.question, answer: q.answer })),
      },
      footer_cta: {
        category: acf.footer_cta_category || '',
        title: acf.footer_cta_title || '',
        description: acf.footer_cta_description || '',
        calls_to_action: acf.footer_cta_calls_to_action || [],
      },
    };

    return mappedData;
  } catch (error) {
    console.error('Error fetching service data:', error);
    return null;
  }
}
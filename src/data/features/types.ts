export interface FeatureCTA {
  label: string;
  type: 'primary' | 'secondary';
  /**
   * Where the button goes. Convention (same as services):
   * - omitted or `'demo'` → opens the Book Demo modal
   * - `'#feature-features'` etc → in-page anchor
   * - `'/pricing'` → internal route
   * - `'https://...'` → external link (opens in new tab)
   */
  href?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  highlights?: string;
  bullet_points?: string[];
  additional_text?: string;
}

export interface FeatureExplainerData {
  heading: string;
  heading_accent: string;
  body: string;
  highlight: string;
  image: string;
  image_alt: string;
}

export interface FeaturePageData {
  slug: string;
  meta: { title: string; description: string };
  hero: {
    category: string;
    title: string;
    subtitle: string;
    calls_to_action: FeatureCTA[];
    hero_image: { src: string; alt_text: string; description: string; link?: string };
  };
  explainer: FeatureExplainerData;
  features_header: { heading: string; heading_accent: string; subtitle: string };
  features_grid: FeatureItem[];
  cta_banner: { title: string; calls_to_action: FeatureCTA[] };
  related: {
    category: string;
    title: string;
    links: { title: string; url: string }[];
  };
  faq: { title: string; questions: { question: string; answer: string }[] };
  footer_cta: {
    category: string;
    title: string;
    description: string;
    calls_to_action: FeatureCTA[];
  };
}

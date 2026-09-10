export interface SolutionCTA {
  label: string;
  type: 'primary' | 'secondary';
  /**
   * Where the button goes. Convention (same as services/features):
   * - omitted or `'demo'` → opens the Book Demo modal
   * - `'#solution-features'` etc → in-page anchor
   * - `'/pricing'` → internal route
   * - `'https://...'` → external link (opens in new tab)
   */
  href?: string;
}

export interface SolutionItem {
  title: string;
  description: string;
  highlights?: string;
  bullet_points?: string[];
  additional_text?: string;
}

export interface SolutionExplainerData {
  heading: string;
  heading_accent: string;
  body: string;
  highlight: string;
  image: string;
  image_alt: string;
}

export interface SolutionPageData {
  slug: string;
  meta: { title: string; description: string };
  hero: {
    category: string;
    title: string;
    subtitle: string;
    calls_to_action: SolutionCTA[];
    hero_image: { src: string; alt_text: string; description: string; link?: string };
  };
  explainer: SolutionExplainerData;
  features_header: { heading: string; heading_accent: string; subtitle: string };
  features_grid: SolutionItem[];
  cta_banner: { title: string; calls_to_action: SolutionCTA[] };
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
    calls_to_action: SolutionCTA[];
  };
}

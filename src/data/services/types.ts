export interface ServiceCTA {
  label: string;
  type: 'primary' | 'secondary';
  /**
   * Where the button goes. Convention:
   * - omitted or `'demo'` → opens the Book Demo modal
   * - `'#service-features'` etc → in-page anchor
   * - `'/pricing'` → internal route
   * - `'https://...'` → external link (opens in new tab)
   */
  href?: string;
}

export interface ServiceFeatureItem {
  title: string;
  description: string;
  highlights?: string;
  bullet_points?: string[];
  additional_text?: string;
}

export interface ServiceExplainerData {
  heading: string;
  heading_accent: string;
  body: string;
  highlight: string;
  image: string;
  image_alt: string;
}

export interface ServiceFeaturesHeader {
  heading: string;
  heading_accent: string;
  subtitle: string;
}

export interface ServiceWhyChooseData {
  heading: string;
  heading_accent: string;
  body: string;
  highlight: string;
  points: string[];
}

export interface ServiceUseCasesData {
  heading: string;
  heading_accent: string;
  description: string;
  items: string[];
  closing: string;
}

export interface ServicePageData {
  slug: string;
  meta: { title: string; description: string };
  hero: {
    category: string;
    title: string;
    subtitle: string;
    calls_to_action: ServiceCTA[];
    hero_image: { src: string; alt_text: string; description: string; link?: string };
  };
  introduction: { category: string; content: string; title: string };
  explainer: ServiceExplainerData;
  features_header: ServiceFeaturesHeader;
  features_grid: ServiceFeatureItem[];
  why_choose: ServiceWhyChooseData;
  use_cases: ServiceUseCasesData;
  cta_banner: { title: string; calls_to_action: ServiceCTA[] };
  integrations_payment: {
    category: string;
    title: string;
    description: string;
    supported_gateways: string[];
  };
  compliance: {
    category: string;
    title: string;
    description: string;
    features: string[];
  };
  related_solutions: {
    category: string;
    title: string;
    links: { title: string; url: string }[];
  };
  faq: { title: string; questions: { question: string; answer: string }[] };
  footer_cta: {
    category: string;
    title: string;
    description: string;
    calls_to_action: ServiceCTA[];
  };
}

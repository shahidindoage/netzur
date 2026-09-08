export interface ServiceCTA {
  label: string;
  type: 'primary' | 'secondary';
}

export interface ServiceFeatureItem {
  title: string;
  description: string;
  highlights?: string;
  bullet_points?: string[];
  additional_text?: string;
}

export interface ServicePageData {
  slug: string;
  hero: {
    category: string;
    title: string;
    subtitle: string;
    calls_to_action: ServiceCTA[];
    hero_image: { alt_text: string; description: string };
  };
  introduction: { category: string; content: string ; title:string;};
  features_grid: ServiceFeatureItem[];
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
  faq: { title: string; questions: { question: string }[] };
  footer_cta: {
    category: string;
    title: string;
    description: string;
    calls_to_action: ServiceCTA[];
  };
}

export const wispService: ServicePageData = {
  slug: 'wisp-billing-software-in-africa-netzur',
  hero: {
    category: 'HARDWARE INDEPENDENT WISP PLATFORM',
    title: 'WISP Billing Software in Africa',
    subtitle:
      'An All-in-One Telecom Billing and Network Operations Platform designed specifically for African Wireless Internet Service Providers (WISPs).',
    calls_to_action: [
      { label: 'Request Demo', type: 'primary' },
      { label: 'Chat on WhatsApp', type: 'secondary' },
      { label: 'Pricing', type: 'secondary' },

    ],
    hero_image: {
      alt_text: 'Technician using Netzur software on field tablet',
      description:
        'Field worker next to a dish antenna holding a tablet displaying Netzur billing software.',
    },
  },
  introduction: {
    category: 'TAILORED FOR AFRICA',
    title:'Built for African networks, not adapted to them. ',
    content:
      'Operating a WISP in Africa comes with unique challenges: mixed infrastructure, diverse payment preferences, high operational overhead, and complex regulatory landscapes.',
  },
  features_grid: [
    {
      title: 'Unified Billing and Network Operations for WISPs',
      description:
        `Unlike generic billing tools, Netzur's internet service provider billing system is built to handle the realities of wireless network operations — tower mapping, sector assignments, signal-based provisioning, and location-specific plan management. Billing, CRM, and network monitoring work together in one system, eliminating data silos between departments.`,
     additional_text:
     `Whether you operate a single-tower setup serving a local community or a multi-tower infrastructure across a region, the platform adapts to your operational scale.`
    },
    {
      title: 'Prepaid and Postpaid Internet Billing Engine',
      description:
        'Netzur\'s WISP billing software in Africa supports both prepaid and postpaid internet billing with configurable plan structures. WISPs can define data caps, speed tiers, FUP policies, and validity periods — then let the system handle invoice generation, expiry actions, and renewal processing automatically.',
      bullet_points: [
        'Automated recurring invoice generation with tax calculation',
        'Real-time usage tracking with data cap enforcement',
        'Plan-based, usage-based, and FUP-based billing models',
        'Configurable billing cycles — daily, weekly, monthly, or custom',
      ],
    },
    {
      title: 'Payment Collection and Financial Management',
      description:
        `Cash flow management is critical for WISPs operating in competitive markets. Netzur's internet billing and payment management system automates payment tracking, sends reminders for overdue accounts, and provides real-time visibility into collection status.`,
      bullet_points: [
        'Multiple payment gateway integration (Razorpay, PayU, UPI, bank transfer)',
        'Online and offline payment tracking with reconciliation',
        'Automated payment reminders via SMS and WhatsApp',
        'Overdue account flagging and service suspension workflows',
       
      ],
    },
    {
      title: 'Subscriber Management and CRM for WISPs',
      description:
        `Netzur's broadband customer management software handles the complete subscriber lifecycle — from initial lead capture through onboarding, service activation, plan changes, and support interactions. Every subscriber record includes connection details, tower assignment, billing history, and support tickets in one view.`,
      bullet_points: [
        'Lead tracking and conversion pipeline',
'Automated onboarding with service provisioning',
'Subscriber profile with connection and billing history',
'Integrated support ticketing with SLA tracking'
      ],
    },
    {
      title: 'Tower-Based Bandwidth Management and Network Monitoring',
      description:
        `WISPs need visibility at the tower and sector level — not just aggregate network stats. Netzur provides tower-based bandwidth management that shows real-time capacity utilization per tower, per sector, and per subscriber, enabling proactive capacity planning.`,
      bullet_points: [
    'Live subscriber session tracking per tower and sector',
'Sector bandwidth control with capacity alerts',
'Automated outage detection with notification workflows',
'Bandwidth utilization trends for capacity planning'
      ],
    },
    {
      title: 'Operational Automation for WISP Teams',
      description:
        `Manual processes — billing calculations, service activations, payment follow-ups, expiry handling — consume time that WISP teams should spend on network expansion and subscriber growth. Netzur automates these repetitive workflows.`,
      bullet_points: [
        'Auto-activation and auto-suspension based on payment status',
'Scheduled invoice generation and delivery',
'Plan expiry notifications and auto-renewal processing',
'Bulk SMS and WhatsApp communication campaigns',
      ],
    },
    {
      title: 'Scalable Architecture for Growing WISP Networks',
      description:
        `Netzur's platform scales with your WISP business — from initial deployment with a few hundred subscribers to multi-tower operations serving thousands. Adding new towers, coverage areas, and service plans does not require system changes or migration. Available as cloud, on-premise, or self-hosted — choose the deployment model that fits your operations.`,
      additional_text:
        'Data security follows industry standards — encrypted connections, role-based access control, and regular backups protect subscriber information and financial records.',
    },
   
  ],
  cta_banner: {
    title: 'Empowering African Operators with Netzur',
    calls_to_action: [{ label: 'Book a Free Demo', type: 'primary' }],
  },
  integrations_payment: {
    category: 'PAYMENT INTEGRATIONS',
    title: 'Payment integrations for Africa',
    description:
      'Accept local payments effortlessly with integrated mobile money and bank options.',
    supported_gateways: [
      'M-Pesa',
      'MTN Mobile Money',
      'Orange Money',
      'Airtel Money',
      'Paystack',
      'Flutterwave',
      "DPO"
    ],
  },
  compliance: {
    category: 'REGULATORY & COMPLIANCE',
    title: 'Stay compliant in Africa',
    description:
      'Network security, data privacy, and financial regulations built to support regional standards.',
    features: [

      'ITU Africa Region',
      'NCC (Nigeria)',
      'CA (Kenya)',
      'TCRA (Tanzania)',
      'UCC (Uganda)',
      'NCA (Ghana)',
    ],
  },
  related_solutions: {
    category: 'EXPLORE MORE SOLUTIONS',
    title: 'Explore more Netzur solutions in Africa',
    links: [
      { title: 'ISP Billing and Management Software in Africa', url: '#' },
      { title: 'Radius Billing Software in Africa', url: '#' },
      { title: 'MikroTik Billing System in Africa', url: '#' },
      { title: 'Retail Business WiFi Software in Africa', url: '#' },
      { title: 'Hotel WiFi Hotspot Solutions in Africa', url: '#' },
    ],
  },
  faq: {
    title: 'Frequently Asked Questions',
    questions: [
      { question: 'What is WISP billing software?' },
      { question: 'How is WISP billing different from regular ISP billing?' },
      { question: 'Does Netzur support both prepaid and postpaid billing?' },
      { question: 'Can I track bandwidth usage per tower?' },
      { question: 'Is Netzur suitable for small WISPs?' },
      { question: 'How quickly can I deploy Netzur?' },
    ],
  },
  footer_cta: {
    category: 'GET STARTED NOW',
    title: 'WISP Billing Software in Africa',
    description:
      'Empower your ISP with seamless automated billing, RADIUS management, and mobile money payment integrations built specifically for African networks.',
    calls_to_action: [
      { label: 'Book a Demo ', type: 'primary' },
      { label: 'View Pricing', type: 'secondary' },
      { label: 'WhatsApp', type: 'secondary' },
    ],
  },
};

export const servicesRegistry: Record<string, ServicePageData> = {
  [wispService.slug]: wispService,
};

export function getServiceBySlug(slug: string | undefined): ServicePageData {
  if (slug && servicesRegistry[slug]) return servicesRegistry[slug];
  return wispService;
}

import type { ServicePageData } from './types';

export const wispService: ServicePageData = {
  slug: 'wisp-billing-software-in-africa-netzur',
  meta: {
    title: 'WISP Billing Software in Africa | Netzur',
    description:
      "Netzur's WISP billing software automates invoicing, Mobile Money collection, RADIUS provisioning and tower-level monitoring for African wireless ISPs.",
  },
  hero: {
    category: 'HARDWARE INDEPENDENT WISP PLATFORM',
    title: 'WISP Billing Software in Africa',
    subtitle:
      'An All-in-One Telecom Billing and Network Operations Platform designed specifically for African Wireless Internet Service Providers (WISPs).',
    calls_to_action: [
      { label: 'Request Demo', type: 'primary', href: 'demo' },
      { label: 'Chat on WhatsApp', type: 'secondary', href: 'https://wa.me/YOUR_NUMBER' },
      { label: 'Pricing', type: 'secondary', href: '/pricing' },
    ],
    hero_image: {
      src: '/s2.png',
      alt_text: 'Technician using Netzur software on field tablet',
      description:
        'Field worker next to a dish antenna holding a tablet displaying Netzur billing software.',
      link: 'demo',
    },
  },
  introduction: {
    category: 'TAILORED FOR AFRICA',
    title: 'Built for African networks, not adapted to them. ',
    content:
      'Operating a WISP in Africa comes with unique challenges: mixed infrastructure, diverse payment preferences, high operational overhead, and complex regulatory landscapes.',
  },
  explainer: {
    heading: 'What is WISP Billing',
    heading_accent: 'Software?',
    body: 'WISP Billing Software combines wireless subscriber management with automated billing and network provisioning. It acts as an all-in-one operations platform - onboarding subscribers across towers and sectors, automating recurring invoices and payment collection, and controlling bandwidth, speed tiers, and service access in real time.',
    highlight:
      "Netzur's WISP billing software integrates directly with your wireless infrastructure - MikroTik, Ubiquiti, and Cisco gear across every tower - enabling tower-level provisioning, IP pool management, and Mobile Money billing - making it a complete wireless internet service provider platform for operators in Africa.",
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    image_alt: 'WISP tower infrastructure powered by Netzur billing and subscriber management',
  },
  features_header: {
    heading: 'Complete platform for',
    heading_accent: 'WISP operations.',
    subtitle:
      'Billing, provisioning, payments, and monitoring - unified in one system built for wireless networks.',
  },
  features_grid: [
    {
      title: 'Unified Billing and Network Operations for WISPs',
      description:
        `Unlike generic billing tools, Netzur's internet service provider billing system is built to handle the realities of wireless network operations - tower mapping, sector assignments, signal-based provisioning, and location-specific plan management. Billing, CRM, and network monitoring work together in one system, eliminating data silos between departments.`,
      additional_text: `Whether you operate a single-tower setup serving a local community or a multi-tower infrastructure across a region, the platform adapts to your operational scale.`,
    },
    {
      title: 'Prepaid and Postpaid Internet Billing Engine',
      description:
        'Netzur\'s WISP billing software in Africa supports both prepaid and postpaid internet billing with configurable plan structures. WISPs can define data caps, speed tiers, FUP policies, and validity periods - then let the system handle invoice generation, expiry actions, and renewal processing automatically.',
      bullet_points: [
        'Automated recurring invoice generation with tax calculation',
        'Real-time usage tracking with data cap enforcement',
        'Plan-based, usage-based, and FUP-based billing models',
        'Configurable billing cycles - daily, weekly, monthly, or custom',
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
        `Netzur's broadband customer management software handles the complete subscriber lifecycle - from initial lead capture through onboarding, service activation, plan changes, and support interactions. Every subscriber record includes connection details, tower assignment, billing history, and support tickets in one view.`,
      bullet_points: [
        'Lead tracking and conversion pipeline',
        'Automated onboarding with service provisioning',
        'Subscriber profile with connection and billing history',
        'Integrated support ticketing with SLA tracking',
      ],
    },
    {
      title: 'Tower-Based Bandwidth Management and Network Monitoring',
      description:
        `WISPs need visibility at the tower and sector level - not just aggregate network stats. Netzur provides tower-based bandwidth management that shows real-time capacity utilization per tower, per sector, and per subscriber, enabling proactive capacity planning.`,
      bullet_points: [
        'Live subscriber session tracking per tower and sector',
        'Sector bandwidth control with capacity alerts',
        'Automated outage detection with notification workflows',
        'Bandwidth utilization trends for capacity planning',
      ],
    },
    {
      title: 'Operational Automation for WISP Teams',
      description:
        `Manual processes - billing calculations, service activations, payment follow-ups, expiry handling - consume time that WISP teams should spend on network expansion and subscriber growth. Netzur automates these repetitive workflows.`,
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
        `Netzur's platform scales with your WISP business - from initial deployment with a few hundred subscribers to multi-tower operations serving thousands. Adding new towers, coverage areas, and service plans does not require system changes or migration. Available as cloud, on-premise, or self-hosted - choose the deployment model that fits your operations.`,
      additional_text:
        'Data security follows industry standards - encrypted connections, role-based access control, and regular backups protect subscriber information and financial records.',
    },
  ],
  why_choose: {
    heading: 'Why Choose Netzur for',
    heading_accent: 'WISP Billing in Africa?',
    body: 'Netzur is built for the operational realities of wireless ISPs - not adapted from generic billing software. The platform addresses tower-based operations, wireless-specific provisioning, and distributed subscriber management.',
    highlight:
      'Netzur gives WISP operators the operational control and automation they need to grow their subscriber base while maintaining service quality.',
    points: [
      'Purpose-built for wireless ISP operations and tower infrastructure',
      'Unified billing, CRM, payments, and network monitoring',
      'Wireless subscriber provisioning with sector-level control',
      'Automated workflows that reduce manual operational effort',
      'Deployment in 6-12 hours with migration support',
      'Dedicated support team with ISP domain expertise',
    ],
  },
  use_cases: {
    heading: 'Industries and',
    heading_accent: 'Use Cases',
    description:
      "Netzur's WISP billing software in Africa serves wireless operators across different deployment models:",
    items: [
      'Wireless Internet Service Providers (WISPs)',
      'Local and regional broadband providers',
      'Rural and community internet networks',
      'Multi-tower wireless operators',
      'Last-mile connectivity providers',
      'Franchise-based broadband businesses',
    ],
    closing:
      'Any organization distributing internet via wireless infrastructure - from single-tower community networks to multi-location franchise operations - can use Netzur to manage billing and subscriber operations.',
  },
  cta_banner: {
    title: 'Empowering African Operators with Netzur',
    calls_to_action: [{ label: 'Book a Free Demo', type: 'primary', href: 'demo' }],
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
      'DPO',
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
      {
        question: 'What is WISP billing software?',
        answer:
          'WISP billing software is a platform designed for wireless internet service providers to manage subscriber billing, payment collection, network monitoring, and customer operations from one system.',
      },
      {
        question: 'How is WISP billing different from regular ISP billing?',
        answer:
          'WISP billing needs to account for tower-based infrastructure, sector-level bandwidth allocation, and wireless-specific provisioning - which generic ISP billing tools typically do not support.',
      },
      {
        question: 'Does Netzur support both prepaid and postpaid billing?',
        answer:
          'Yes. Netzur supports prepaid voucher billing, postpaid recurring invoicing, FUP-based plans, and usage-based billing models from one platform.',
      },
      {
        question: 'Can I track bandwidth usage per tower?',
        answer:
          'Yes. Netzur provides tower-based bandwidth management with per-sector utilization metrics, capacity alerts, and performance dashboards.',
      },
      {
        question: 'Is Netzur suitable for small WISPs?',
        answer:
          'Yes. The platform scales from small single-tower deployments to multi-tower networks serving thousands of subscribers.',
      },
      {
        question: 'How quickly can I deploy Netzur?',
        answer:
          'Most WISPs are fully operational on Netzur within 6-12 hours, including data migration and team onboarding.',
      },
    ],
  },
  footer_cta: {
    category: 'GET STARTED NOW',
    title: 'WISP Billing Software in Africa',
    description:
      'Empower your ISP with seamless automated billing, RADIUS management, and mobile money payment integrations built specifically for African networks.',
    calls_to_action: [
      { label: 'Book a Demo ', type: 'primary', href: 'demo' },
      { label: 'View Pricing', type: 'secondary', href: '/pricing' },
      { label: 'WhatsApp', type: 'secondary', href: 'https://wa.me/YOUR_NUMBER' },
    ],
  },
};

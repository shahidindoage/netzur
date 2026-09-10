import type { FeaturePageData } from './types';

export const billingFinanceFeature: FeaturePageData = {
  slug: 'billing-and-finance',
  meta: {
    title: 'Billing & Finance for ISPs | Netzur',
    description:
      'Netzur Billing & Finance automates ISP invoicing, collections, partial payments and accounting sync with Tally, QuickBooks and Xero.',
  },
  hero: {
    category: 'PRODUCT MODULE - BILLING & FINANCE',
    title: 'Billing & Finance for ISPs',
    subtitle:
      'The Billing & Finance module automates all financial operations for ISPs, making collections and monitoring effortless.',
    calls_to_action: [
      { label: 'Request Demo', type: 'primary', href: 'demo' },
      { label: 'Chat on WhatsApp', type: 'secondary', href: 'https://wa.me/YOUR_NUMBER' },
      { label: 'Pricing', type: 'secondary', href: '/pricing' },
    ],
    hero_image: {
      src: '/f1.png',
      alt_text: 'Netzur Billing and Finance dashboard for ISPs',
      description: 'ISP finance team reviewing automated billing and collection reports in Netzur.',
      link: 'demo',
    },
  },
  explainer: {
    heading: 'What is Billing',
    heading_accent: '& Finance?',
    body: 'Billing & Finance is the financial core of the Netzur platform. It automates invoicing, payment collection, and revenue monitoring for ISPs - so finance teams stop chasing payments manually and get real-time visibility into every rupee collected, pending, or overdue.',
    highlight:
      'From auto-suspension of overdue accounts to partial payments and accounting sync with Tally, QuickBooks, and Xero, the module covers the complete money lifecycle of your ISP business.',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    image_alt: 'ISP billing and finance reports with automated invoicing',
  },
  features_header: {
    heading: 'Everything finance,',
    heading_accent: 'automated.',
    subtitle:
      'Collections, flexibility, and financial insight - built into one module that runs itself.',
  },
  features_grid: [
    {
      title: 'Auto-Suspend & Resume on Payment',
      description:
        'Overdue accounts are auto-suspended and resumed once payment arrives. Your credit policy applies to every subscriber with no follow-ups or revenue leakage.',
      bullet_points: [
        'Automatic suspension on overdue crossing grace period',
        'Instant service resume the moment payment is received',
        'Configurable grace periods per plan or subscriber segment',
        'Payment reminders via SMS and WhatsApp before suspension',
      ],
    },
    {
      title: 'Partial Payments & Billing Flexibility',
      description:
        'Subscribers can make partial payments for greater billing flexibility. Accept what the customer can pay today, track the balance automatically, and keep service running under rules you define.',
      bullet_points: [
        'Split payments against a single invoice',
        'Automatic balance tracking and carry-forward',
        'Flexible settlement rules per plan or region',
      ],
    },
    {
      title: 'Real-Time Finance Dashboard',
      description:
        'The finance dashboard shows real-time financial summaries and trends. Collections, outstanding dues, gateway-wise performance, and plan-wise revenue - visible at a glance, always up to date.',
      bullet_points: [
        'Live collection vs outstanding overview',
        'Revenue trends by plan, region, and period',
        'Overdue ageing and defaulter lists',
      ],
    },
    {
      title: 'Virtual Bank View',
      description:
        'A virtual bank view offers secure access to your entire transaction history. Every payment, refund, adjustment, and gateway settlement is recorded in one auditable ledger your team can search in seconds.',
      bullet_points: [
        'Complete searchable transaction history',
        'Gateway-wise settlement tracking',
        'Role-based secure access for finance staff',
      ],
    },
    {
      title: 'Multiple Gateways & Collection Methods',
      description:
        'Supports multiple gateways and methods to streamline collections. Meet subscribers where they pay - online or offline - and reconcile everything automatically in one system.',
      bullet_points: [
        'UPI, cards, netbanking, and Mobile Money support',
        'Online and offline payment tracking with reconciliation',
        'Automated receipts on every successful payment',
      ],
    },
    {
      title: 'Accounting Integrations',
      description:
        'Integrates with major accounting software like Tally, QuickBooks, and Xero for seamless financial management. Invoices, payments, and taxes flow straight into your books - no double entry, no month-end scramble.',
      bullet_points: [
        'Native sync with Tally, QuickBooks, and Xero',
        'Tax-ready invoice exports and reports',
        'Clean month-end and audit-ready records',
      ],
    },
  ],
  cta_banner: {
    title: 'Stop chasing payments. Start collecting on autopilot.',
    calls_to_action: [{ label: 'Book a Free Demo', type: 'primary', href: 'demo' }],
  },
  related: {
    category: 'EXPLORE MORE MODULES',
    title: 'Explore more Netzur modules',
    links: [
      { title: 'Subscriber Management', url: '#' },
      { title: 'Franchise & Reseller Management', url: '#' },
      { title: 'Ticketing & Support System', url: '#' },
      { title: 'Network Map & Monitoring', url: '#' },
      { title: 'Wi-Fi Hotspot Manager', url: '#' },
    ],
  },
  faq: {
    title: 'Frequently Asked Questions',
    questions: [
      {
        question: 'What does the Billing & Finance module do?',
        answer:
          'It automates all financial operations for ISPs - invoicing, payment collection across gateways, overdue handling, partial payments, and real-time revenue monitoring - so collections run with minimal manual effort.',
      },
      {
        question: 'How does auto-suspension work for overdue accounts?',
        answer:
          'You define a grace period per plan or segment. When an account stays overdue past it, Netzur suspends service automatically after sending reminders - and resumes service instantly once payment is received.',
      },
      {
        question: 'Can subscribers pay partially?',
        answer:
          'Yes. Subscribers can make partial payments against an invoice. Netzur tracks the remaining balance automatically and applies your settlement rules, keeping service continuity under your control.',
      },
      {
        question: 'Which payment gateways and methods are supported?',
        answer:
          'The module supports multiple gateways and methods - UPI, cards, netbanking, Mobile Money, and offline collections - with automatic reconciliation and receipts on every successful payment.',
      },
      {
        question: 'Does it integrate with accounting software?',
        answer:
          'Yes. Netzur integrates with Tally, QuickBooks, and Xero, syncing invoices, payments, and tax data into your books with audit-ready, tax-compliant exports.',
      },
      {
        question: 'What financial insights does the dashboard give?',
        answer:
          'Real-time summaries and trends - collections vs outstanding, revenue by plan and region, overdue ageing, defaulter lists, and gateway-wise performance - plus a virtual bank view of your entire transaction history.',
      },
    ],
  },
  footer_cta: {
    category: 'GET STARTED NOW',
    title: 'Billing & Finance for ISPs',
    description:
      'Automate invoicing, collections, and revenue monitoring - with accounting sync built in for effortless financial management.',
    calls_to_action: [
      { label: 'Book Demo', type: 'primary', href: 'demo' },
      { label: 'View Pricing', type: 'secondary', href: '/pricing' },
      { label: 'WhatsApp', type: 'secondary', href: 'https://wa.me/YOUR_NUMBER' },
    ],
  },
};

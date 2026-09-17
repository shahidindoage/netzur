export type IntegrationCategory =
  | 'Payment Gateway'
  | 'Notification'
  | 'Accounting System'
  | 'Wallet Systems'
  | 'Identity Verification'
  | 'NAS / BRAS / BNG'
  | 'OTT'
  | 'IVR';

export interface IntegrationItem {
  name: string;
  desc: string;
  category: IntegrationCategory;
  /** Logo image fetched from https://netzur.com/integrations */
  image?: string;
}

export const INTEGRATION_CATEGORIES: Array<'All' | IntegrationCategory> = [
  'All',
  'Payment Gateway',
  'Notification',
  'Accounting System',
  'Wallet Systems',
  'Identity Verification',
  'NAS / BRAS / BNG',
  'OTT',
  'IVR',
];

const IMG = (file: string) => `https://netzur.com/wp-content/uploads/2025/06/${file}`;
const FALLBACK_LOGO = 'https://netzur.com/wp-content/uploads/2025/06/logo-only-b-150x150.png';

/** Content sourced from https://netzur.com/integrations */
export const INTEGRATIONS: IntegrationItem[] = [
  // Payment Gateway
  { name: 'Paypal', desc: 'Globally trusted platform to accept international payments with ease', category: 'Payment Gateway', image: IMG('icon-paypal.png') },
  { name: 'Stripe', desc: 'Scalable payment infrastructure for international merchants and SaaS platforms', category: 'Payment Gateway', image: IMG('icon-stripe.png') },
  { name: 'Cashfree', desc: 'Reliable and fast payment gateway designed for Indian digital transactions.', category: 'Payment Gateway', image: IMG('icon-cashfree.png') },
  { name: 'Razorpay', desc: 'Modern and developer-friendly payment solution for online businesses in India.', category: 'Payment Gateway', image: IMG('icon-razorpay.png') },
  { name: 'Paytm', desc: 'Widely used mobile wallet and payment service across India.', category: 'Payment Gateway', image: IMG('icon-paytm.png') },
  { name: 'PayUMoney', desc: 'Hassle-free payment solution catering to Indian SMEs and enterprises.', category: 'Payment Gateway', image: IMG('icon-payumoney.png') },
  { name: 'Instamojo', desc: 'Quick UPI and card payments tailored for Indian start-ups and creators.', category: 'Payment Gateway', image: IMG('icon-instamojo.png') },
  { name: 'Paymaya', desc: 'Leading digital payments platform for businesses in the Philippines.', category: 'Payment Gateway', image: IMG('icon-paymaya.png') },
  { name: 'Payfast', desc: 'Secure and efficient online payments for businesses in South Africa.', category: 'Payment Gateway', image: IMG('icon-payfast.png') },
  { name: 'CCAvenue', desc: 'Versatile Indian payment gateway with broad card, wallet, and EMI support.', category: 'Payment Gateway', image: IMG('icon-ccavenue.png') },
  { name: 'Paystack', desc: 'Built for African businesses to accept payments from anyone, anywhere.', category: 'Payment Gateway', image: IMG('icon-paystack.png') },
  { name: 'Aggrepay', desc: 'Affordable and efficient gateway tailored for Indian ISPs and service providers.', category: 'Payment Gateway', image: IMG('icon-aggrepay.png') },
  { name: 'PhonePe', desc: 'India’s popular UPI-based payment service for instant online collections.', category: 'Payment Gateway', image: IMG('icon-phonepe.png') },
  { name: 'Azampay', desc: 'Simplified local payment gateway trusted across Tanzania.', category: 'Payment Gateway', image: IMG('icon-azampay.png') },
  { name: 'Paygate', desc: 'Africa-focused online payment platform supporting multiple local currencies.', category: 'Payment Gateway', image: IMG('icon-paygate.png') },
  { name: 'Flutterwave', desc: 'Robust payment solution enabling businesses to go global from Africa', category: 'Payment Gateway', image: IMG('icon-flutterwave.png') },
  { name: 'Ablepay', desc: 'Simplified recurring and installment payments for broadband users in India.', category: 'Payment Gateway', image: IMG('icon-ablepay.png') },
  { name: 'DPOpay', desc: 'Complete digital payment suite for African e-commerce and services.', category: 'Payment Gateway', image: IMG('icon-dpopay.png') },
  { name: 'Peachpay', desc: 'User-friendly one-click checkout system for faster payments.', category: 'Payment Gateway', image: IMG('icon-peachpay.png') },
  { name: 'Alatpay', desc: 'Innovative Nigerian payment gateway by WEMA Bank for digital businesses', category: 'Payment Gateway', image: IMG('icon-alatpay.png') },

  // Notification
  { name: 'wati.io (WhatsApp)', desc: 'Send official, template-based WhatsApp notifications with full API support.', category: 'Notification', image: IMG('icon-wati.png') },
  { name: 'WhatsApp (REST API)', desc: 'Custom integrations for sending rich WhatsApp messages from your portal.', category: 'Notification', image: IMG('icon-whatsapp.png') },
  { name: 'Telegram', desc: 'Instant, secure customer communication through Telegram bots.', category: 'Notification', image: IMG('icon-telegram.png') },
  { name: 'Twilio', desc: 'Global messaging and voice alerts via SMS, WhatsApp, or call', category: 'Notification', image: IMG('icon-twilio.png') },
  { name: 'E-Mail (All Providers)', desc: 'Flexible integration with any email provider for automated communications.', category: 'Notification', image: IMG('icon-email.png') },
  { name: 'SMS (All Providers)', desc: 'Configurable SMS gateway integration to notify customers in real-time.', category: 'Notification', image: IMG('icon-sms.png') },

  // Accounting System
  { name: 'Tally', desc: 'Direct integration with India’s most widely used accounting system for billing sync.', category: 'Accounting System', image: IMG('icon-tally.png') },
  { name: 'QuickBooks', desc: 'Cloud-based accounting automation for seamless financial tracking', category: 'Accounting System', image: IMG('icon-quickbooks.png') },
  { name: 'Xero', desc: 'Modern and intuitive accounting software integration for growing global ISPs.', category: 'Accounting System', image: IMG('icon-xero.png') },

  // Wallet Systems
  { name: 'Bharat Bill Pay (India)', desc: 'BBPS-compliant bill payment system integration for Indian users.', category: 'Wallet Systems', image: IMG('icon-bharatbillpay.png') },
  { name: 'GCASH (Philippines)', desc: 'Trusted mobile wallet solution for real-time payments in the Philippines.', category: 'Wallet Systems', image: IMG('icon-gcash.png') },

  // Identity Verification
  { name: 'On-Grid (India)', desc: 'Aadhaar-based identity verification and background check API for Indian ISPs.', category: 'Identity Verification', image: IMG('icon-ongrid.png') },
  { name: 'Surepass (India)', desc: 'eKYC solution with document and ID validation across various Indian databases.', category: 'Identity Verification', image: IMG('icon-surepass.png') },

  // NAS / BRAS / BNG
  { name: 'Mikrotik', desc: 'Complete integration for Hotspot, PPPoE, and router management with MikroTik.', category: 'NAS / BRAS / BNG', image: IMG('icon-mikrotik.png') },
  { name: 'Cisco', desc: 'Enterprise-grade RADIUS and NAS support for Cisco networking devices.', category: 'NAS / BRAS / BNG', image: IMG('icon-cisco.png') },
  { name: 'PfSense', desc: 'Open-source firewall and PPPoE NAS integration for custom setups.', category: 'NAS / BRAS / BNG', image: IMG('icon-pfsense.png') },
  { name: 'Accel-PPP', desc: 'Lightweight, flexible BNG for managing PPPoE, L2TP, and IPoE sessions.', category: 'NAS / BRAS / BNG', image: IMG('icon-accelppp.png') },
  { name: 'NetElastic', desc: 'High-performance virtual BNG platform for scaling broadband networks.', category: 'NAS / BRAS / BNG', image: IMG('icon-netelastic.png') },
  { name: 'Juniper', desc: 'Full RADIUS compatibility with Juniper NAS and broadband devices.', category: 'NAS / BRAS / BNG', image: IMG('icon-juniper.png') },
  { name: 'Huawei', desc: 'Seamless NAS support for Huawei’s extensive telecom hardware range.', category: 'NAS / BRAS / BNG', image: IMG('icon-huawei.png') },
  { name: 'Ericsson', desc: 'Integration-ready with Ericsson BNG systems for large-scale ISP operations.', category: 'NAS / BRAS / BNG', image: IMG('icon-ericsson.png') },
  { name: 'Alcatel', desc: 'Works with Alcatel-Lucent devices for consistent service delivery', category: 'NAS / BRAS / BNG', image: IMG('icon-alcatel.png') },
  { name: 'MPD', desc: 'Supports BSD-based Multi-link PPP Daemon for flexible deployments.', category: 'NAS / BRAS / BNG', image: IMG('icon-mpd.png') },
  { name: 'Nokia', desc: 'Carrier-grade NAS integration with Nokia’s broadband network solutions.', category: 'NAS / BRAS / BNG', image: IMG('icon-nokia.png') },
  { name: 'Bison-Router', desc: 'Designed for modern ISPs using Bison’s powerful routing platform.', category: 'NAS / BRAS / BNG', image: IMG('icon-bisonrouter.png') },
  { name: 'LibreQoS', desc: 'Smart bandwidth control and traffic prioritization for smoother network performance.', category: 'NAS / BRAS / BNG', image: FALLBACK_LOGO },

  // OTT
  { name: 'PlayBoxTv', desc: 'Add value to your plans with live TV and VOD from PlayBox.', category: 'OTT', image: IMG('icon-playboxtv.png') },
  { name: 'OTT Play', desc: 'Curated OTT content delivery to boost subscriber retention.', category: 'OTT', image: IMG('icon-ott.png') },
  { name: 'Watcho', desc: 'Bundle premium entertainment and TV streaming for your broadband customers.', category: 'OTT', image: IMG('icon-watcho.png') },

  // IVR
  { name: '3CX', desc: 'Connect your VoIP infrastructure with a powerful software-based PBX and IVR engine.', category: 'IVR', image: IMG('icon-3cx.png') },
];

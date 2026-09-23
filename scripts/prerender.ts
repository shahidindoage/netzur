import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { featuresRegistry } from '../src/data/features';
import { solutionsRegistry } from '../src/data/solutions';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const SITE_URL = process.env.SITE_URL || 'https://netzur.com';
const WORDPRESS_API_URL = 'https://netzur.com/wp-json/wp/v2/netzur_services';

interface HeadData {
  title: string;
  description: string;
}

const staticRoutes: Record<string, HeadData> = {
  '/': {
    title: 'Internet Management & Billing System for ISPs | Netzur |',
    description:
      'Enterprise-grade billing, subscriber management, and network operations platform for modern Fiber, Wireless, and Municipal ISPs.',
  },
  '/who-we-are': {
    title: 'About Netzur | Leading ISP Software Solution Provider',
    description:
      'Netzur (formerly Janitor Network) has delivered secure internet access and intelligent ISP management solutions since 2017. Discover our story, mission, and vision.',
  },
  '/join-the-team': {
    title: 'Careers at Netzur | Join Our SaaS Innovation Team',
    description:
      'Looking for new challenges? Explore open roles at Netzur — software development, technical support, sales and marketing — and our 7-step hiring process.',
  },
  '/pricing': {
    title: 'Affordable ISP Management System Pricing | Netzur',
    description:
      'Netzur IMBS is a subscription based product for long-term ISP partnerships. Calculate monthly pricing by active subscribers for India and International.',
  },
  '/integrations': {
    title: 'ISP Software Integrations | Payment Gateways, OTT, eKYC & More',
    description:
      'Explore Netzur integrations — payment gateways, notifications, accounting, wallets, eKYC, NAS/BRAS/BNG, OTT and IVR — all synced to one ISP billing core.',
  },
  '/services': {
    title: 'Services | ISP Billing & Internet Management | Netzur',
    description:
      "Explore Netzur's services — ISP billing and management software, Radius billing, WISP billing, MikroTik billing system, retail business WiFi and hotel WiFi hotspot solutions for ISPs, WISPs and hospitality worldwide.",
  },
  '/contact-us': {
    title: 'Get In Touch - Netzur | Next-Gen ISP Billing & Internet Management System',
    description:
      'Contact Netzur — visit our Sidhpur head office or Ahmedabad branch, reach sales@netzur.com and support@netzur.com, or call +91 94080 53196.',
  },
  '/book-a-demo': {
    title: 'Book a Free Demo | Netzur Internet Billing System',
    description:
      'Book a free Netzur demo — quick discovery call, live demo, 14-day free trial with all features included and guided go-live. No commitment.',
  },
  '/rebranding': {
    title: 'Netzur - A Bold New Identity | From Janitor to Netzur',
    description:
      'Introducing Netzur — a bold new identity for a smarter ISP future. From Janitor RADIUS to a complete billing, bandwidth, CRM and franchisee platform.',
  },
};

function esc(s: string): string {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function injectHead(template: string, head: HeadData, path: string): string {
  const url = SITE_URL + (path === '/' ? '/' : path);
  const title = esc(head.title);
  const description = esc(head.description);
  return template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${description}" />`)
    .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${title}" />`)
    .replace(
      /<meta property="og:description"[^>]*>/,
      `<meta property="og:description" content="${description}" />`
    )
    .replace(
      /<meta property="og:type" content="website"\s*\/?>/,
      `<meta property="og:type" content="website" />\n    <link rel="canonical" href="${esc(url)}" />\n    <meta property="og:url" content="${esc(url)}" />`
    );
}

function writeRoute(path: string, head: HeadData, template: string): void {
  const html = injectHead(template, head, path);
  const outDir = join(DIST, path);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), html, 'utf8');
  console.log('prerendered', path);
}

async function main(): Promise<void> {
  const template = readFileSync(join(DIST, 'index.html'), 'utf8');

  for (const [path, head] of Object.entries(staticRoutes)) {
    writeRoute(path, head, template);
  }

  for (const feature of Object.values(featuresRegistry)) {
    writeRoute(`/features/${feature.slug}`, feature.meta, template);
  }

  for (const solution of Object.values(solutionsRegistry)) {
    writeRoute(`/solutions/${solution.slug}`, solution.meta, template);
  }

  try {
    const res = await fetch(`${WORDPRESS_API_URL}?per_page=100&_fields=slug,acf`);
    if (!res.ok) throw new Error(`WordPress API HTTP ${res.status}`);
    const posts = (await res.json()) as { slug?: string; acf?: { meta_title?: string; meta_description?: string } }[];
    let count = 0;
    for (const post of posts) {
      const title = post.acf?.meta_title || '';
      const description = post.acf?.meta_description || '';
      if (!post.slug || (!title && !description)) continue;
      writeRoute(`/${post.slug}`, { title, description }, template);
      count++;
    }
    console.log(`services prerendered: ${count}/${posts.length}`);
  } catch (err) {
    console.error('Prerender services failed (WordPress unreachable).', err);
  }

  console.log('Prerender complete. Base URL:', SITE_URL);
}

main();
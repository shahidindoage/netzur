export interface SeoMeta {
  title: string;
  description: string;
}

function decodeHtml(s: string): string {
  try {
    const doc = new DOMParser().parseFromString(s, 'text/html');
    return doc.body.textContent ?? s;
  } catch {
    return s;
  }
}

/**
 * Extracts the title and meta description from a Yoast `yoast_head` string.
 * Returns null when neither is present.
 */
export function parseYoastHead(head?: string): SeoMeta | null {
  if (!head) return null;
  const out: Partial<SeoMeta> = {};
  const titleMatch = /<title>(.*?)<\/title>/i.exec(head);
  if (titleMatch) out.title = decodeHtml(titleMatch[1]);
  const descMatch = /<meta\s+name="description"\s+content="(.*?)"\s*\/?>/i.exec(head);
  if (descMatch) out.description = decodeHtml(descMatch[1]);
  if (!out.title && !out.description) return null;
  return { title: out.title ?? '', description: out.description ?? '' };
}

/** Applies a title + description to the live document head. */
export function applyPageMeta(title: string, description: string): void {
  document.title = title;
  let tag = document.querySelector('meta[name="description"]');
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', 'description');
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', description);
}
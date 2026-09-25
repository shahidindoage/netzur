import React from 'react';
import { Link } from 'react-router-dom';

/** Minimal CTA shape — satisfied by both ServiceCTA and FeatureCTA. */
export interface CtaData {
  label: string;
  type: string;
  href?: string;
}

/** `href` omitted, empty, or `'demo'` → opens the Book Demo modal. */
export function isDemoCta(cta: Pick<CtaData, 'href'>): boolean {
  const href = (cta.href ?? '').trim();
  return (
    href === '' ||
    href === 'demo' ||
    href === '#demo' ||
    href === '/demo' ||
    href === '/book-a-demo'
  );
}

interface CtaLinkProps {
  cta: CtaData;
  onOpenDemo?: () => void;
  className?: string;
  children: React.ReactNode;
}

/**
 * Renders a ServiceCTA with identical styling whether it opens the demo
 * modal (button) or navigates to a link (anchor). External http(s) links
 * open in a new tab.
 */
export const CtaLink: React.FC<CtaLinkProps> = ({ cta, onOpenDemo, className, children }) => {
  if (isDemoCta(cta)) {
    return (
      <Link to={cta.href ?? '#'} className={className}>
        {children}
      </Link>
    );
  }
  const external = /^https?:\/\//i.test(cta.href as string);
  return (
    <Link
      to={cta.href}
      className={className}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </Link>
  );
};

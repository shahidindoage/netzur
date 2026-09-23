import { useEffect } from 'react';
import {
  ContactHero,
  ContactOffices,
  ContactConnect,
  ContactForm,
  ContactFooterCta,
} from '../components/contact/ContactSections';
import { usePageMeta } from '../hooks/usePageMeta';

const META_TITLE = 'Get In Touch - Netzur | Next-Gen ISP Billing & Internet Management System';
const META_DESCRIPTION =
  'Contact Netzur — visit our Sidhpur head office or Ahmedabad branch, reach sales@netzur.com and support@netzur.com, or call +91 94080 53196.';

export default function ContactUs({ onOpenDemo }: { onOpenDemo: () => void }) {
  usePageMeta('contact-us', META_TITLE, META_DESCRIPTION);

  return (
    <>
      <ContactHero onOpenDemo={onOpenDemo} />
      <ContactOffices />
      <ContactConnect />
      {/* <ContactForm /> */}
      <ContactFooterCta onOpenDemo={onOpenDemo} />
    </>
  );
}

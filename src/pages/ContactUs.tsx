import { useEffect } from 'react';
import {
  ContactHero,
  ContactOffices,
  ContactConnect,
  ContactForm,
  ContactFooterCta,
} from '../components/contact/ContactSections';

const META_TITLE = 'Get In Touch - Netzur | Next-Gen ISP Billing & Internet Management System';
const META_DESCRIPTION =
  'Contact Netzur — visit our Sidhpur head office or Ahmedabad branch, reach sales@netzur.com and support@netzur.com, or call +91 94080 53196.';

export default function ContactUs({ onOpenDemo }: { onOpenDemo: () => void }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = META_TITLE;
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', 'description');
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', META_DESCRIPTION);
  }, []);

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

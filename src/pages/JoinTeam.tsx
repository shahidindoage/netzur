import { useEffect } from 'react';
import {
  JoinTeamHero,
  JoinTeamProcess,
  JoinTeamVacancies,
  JoinTeamFooterCta,
} from '../components/company/JoinTeamSections';

const META_TITLE = 'Careers at Netzur | Join Our SaaS Innovation Team';
const META_DESCRIPTION =
  'Looking for new challenges? Explore open roles at Netzur — software development, technical support, sales and marketing — and our 7-step hiring process.';

export default function JoinTeam({ onOpenDemo }: { onOpenDemo: () => void }) {
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
      <JoinTeamHero onOpenDemo={onOpenDemo} />
      <JoinTeamProcess />
      <JoinTeamVacancies onOpenDemo={onOpenDemo} />
      <JoinTeamFooterCta onOpenDemo={onOpenDemo} />
    </>
  );
}

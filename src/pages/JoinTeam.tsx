import {
  JoinTeamHero,
  JoinTeamProcess,
  JoinTeamVacancies,
  JoinTeamFooterCta,
} from '../components/company/JoinTeamSections';
import { usePageMeta } from '../hooks/usePageMeta';

const META_TITLE = 'Careers at Netzur | Join Our SaaS Innovation Team';
const META_DESCRIPTION =
  'Looking for new challenges? Explore open roles at Netzur — software development, technical support, sales and marketing — and our 7-step hiring process.';

export default function JoinTeam({ onOpenDemo }: { onOpenDemo: () => void }) {
  usePageMeta('join-the-team', META_TITLE, META_DESCRIPTION);

  return (
    <>
      <JoinTeamHero onOpenDemo={onOpenDemo} />
      <JoinTeamProcess />
      <JoinTeamVacancies onOpenDemo={onOpenDemo} />
      <JoinTeamFooterCta onOpenDemo={onOpenDemo} />
    </>
  );
}

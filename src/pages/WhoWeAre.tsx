import {
  WhoWeAreHero,
  WhoWeAreStory,
  WhoWeAreSectors,
  WhoWeAreMissionVision,
  WhoWeAreFooterCta,
  WhoWeAreRelated,
} from '../components/company/WhoWeAreSections';
import { usePageMeta } from '../hooks/usePageMeta';

const META_TITLE = 'About Netzur | Leading ISP Software Solution Provider';
const META_DESCRIPTION =
  'Netzur (formerly Janitor Network) has delivered secure internet access and intelligent ISP management solutions since 2017. Discover our story, mission, and vision.';

export default function WhoWeAre({ onOpenDemo }: { onOpenDemo: () => void }) {
  usePageMeta('who-we-are', META_TITLE, META_DESCRIPTION);

  return (
    <>
      <WhoWeAreHero onOpenDemo={onOpenDemo} />
      <WhoWeAreStory />
      <WhoWeAreSectors />
      <WhoWeAreMissionVision />
      <WhoWeAreRelated />
      <WhoWeAreFooterCta onOpenDemo={onOpenDemo} />
    </>
  );
}

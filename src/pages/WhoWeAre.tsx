import { useEffect } from 'react';
import {
  WhoWeAreHero,
  WhoWeAreStory,
  WhoWeAreSectors,
  WhoWeAreMissionVision,
  WhoWeAreFooterCta,
  WhoWeAreRelated,
} from '../components/company/WhoWeAreSections';

const META_TITLE = 'About Netzur | Leading ISP Software Solution Provider';
const META_DESCRIPTION =
  'Netzur (formerly Janitor Network) has delivered secure internet access and intelligent ISP management solutions since 2017. Discover our story, mission, and vision.';

export default function WhoWeAre({ onOpenDemo }: { onOpenDemo: () => void }) {
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
      <WhoWeAreHero onOpenDemo={onOpenDemo} />
      <WhoWeAreStory />
      <WhoWeAreSectors />
      <WhoWeAreMissionVision />
      <WhoWeAreRelated />
      <WhoWeAreFooterCta onOpenDemo={onOpenDemo} />
    </>
  );
}

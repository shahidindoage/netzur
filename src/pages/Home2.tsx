import { CustomerSpotlight2 } from "../components/CustomerSpotlight2";
import { FeatureDeepDives2 } from "../components/FeatureDeepDives2";
import { Hero2 } from "../components/Hero2";
import { IspSolutionsGrid2 } from "../components/IspSolutionsGrid2";
import { WhyNetzur2 } from "../components/WhyNetzur2";



// Accept onOpenDemo as a prop so buttons can still trigger the modal
export default function Home2({ onOpenDemo }: { onOpenDemo: () => void }) {
  return (
    <>
      <Hero2 onOpenDemo={onOpenDemo} />

      <WhyNetzur2 onOpenDemo={onOpenDemo} />


      <FeatureDeepDives2/>

      <IspSolutionsGrid2/>

      <CustomerSpotlight2/>

    </>
  );
}
import BottomCta from "./components/BottomCta";
import Hero from "./components/Hero";
import FeatureCards from "./components/HowItWorks";
import Proof from "./components/Proof";
import TheCase from "./components/TheCase";
import WhoBuiltThis from "./components/WhoBuiltThis";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureCards />
      <TheCase />
      <Proof />
      <WhoBuiltThis />
      <BottomCta />
    </>
  );
}

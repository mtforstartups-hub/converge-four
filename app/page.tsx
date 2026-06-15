import Image from "next/image";
import Hero from "./components/Hero";
import FeatureCards from "./components/HowItWorks";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureCards />
    </>
  );
}

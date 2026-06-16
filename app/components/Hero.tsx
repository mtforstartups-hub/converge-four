import Image from "next/image";
import Button from "./Button";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="converge-container mx-auto w-full px-6 md:px-14 min-h-190 flex items-center bg-canvas relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full pt-28 pb-16 md:pt-36 md:pb-24 lg:py-20 px-2 relative z-10">
        <div className="flex flex-col space-y-8 text-neutral-800">
          <FadeIn delay={100}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-[-0.02em] leading-[1.1]">
              Intelligence infrastructure for{" "}
              <span className="text-pine">institutional lending.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-base md:text-lg text-neutral-600 leading-relaxed font-editorial">
              Institutional loans necessitate dozens of discrete risk evaluations.
              Traditionally, these facts are manually reconciled and judged.
              Converge automates this reasoning layer, delivering structured,
              source-verified findings ready for review.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <Button title="Talk to us" />
              <Button title="Research and thesis" variant="secondary" />
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={400} direction="left" className="lg:justify-self-end">
          {/* Laptop SVG */}
          <Image
            src="/LaptopHero.svg"
            alt="Laptop Asset Hero"
            width={700}
            height={550}
            priority
          />
        </FadeIn>
      </div>
    </section>
  );
}

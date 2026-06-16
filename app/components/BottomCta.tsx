import React from "react";
import Button from "./Button";

export default function BottomCta() {
  return (
    <section className="converge-container mx-auto w-full px-6 md:px-14 bg-neutral-900 py-16 md:py-24 text-surface text-center neon-divider">
      <h2 className="text-2xl sm:text-3xl md:text-[40px] font-display font-bold tracking-[-0.01em] text-surface leading-tight">
        The work of forming credit understanding <br className="hidden md:inline" /> has always lived{" "}
        <span className="text-terracotta italic">inside people.</span>
        <br className="hidden md:inline" /> That&apos;s changing.
      </h2>
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center mt-10 md:mt-12">
        <Button title="Talk to us" />
        <Button title="Research and Thesis" variant="dark" />
      </div>
    </section>
  );
}

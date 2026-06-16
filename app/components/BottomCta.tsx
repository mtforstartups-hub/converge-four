import React from "react";
import Button from "./Button";

export default function BottomCta() {
  return (
    <section className="converge-container mx-auto w-full px-14 bg-neutral-900 py-20 text-surface text-center neon-divider">
      <h2 className="text-[40px] font-display font-bold tracking-[-0.01em] text-surface leading-tight">
        The work of forming credit understanding <br /> has always lived{" "}
        <span className="text-terracotta italic">inside people.</span>
        <br />
        That&apos;s changing.
      </h2>
      <div className="flex items-center gap-6 justify-center mt-12">
        <Button title="Talk to us" />
        <Button title="Research and Thesis" variant="dark" />
      </div>
    </section>
  );
}

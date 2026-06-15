import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="converge-container mx-auto w-full px-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center py-20 px-2">
        <div className="flex flex-col space-y-8 text-neutral-800">
          <h1 className="text-6xl font-bold font-display tracking-[-0.01em]">
            Intelligence infrastructure for{" "}
            <span className="text-pine">institutional lending.</span>
          </h1>

          <div className="flex space-x-8">
            <Button title="Talk to us" />
            <Button title="Research and thesis" />
          </div>
        </div>
        <div>Right</div>
      </div>
    </section>
  );
}

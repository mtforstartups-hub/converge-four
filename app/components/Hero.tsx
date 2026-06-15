import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="converge-container mx-auto w-full px-14 min-h-[90vh] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full py-20 px-2">
        <div className="flex flex-col space-y-8 text-neutral-800">
          <h1 className="text-7xl font-bold font-display tracking-[-0.02em] leading-[1.1]">
            Intelligence infrastructure for{" "}
            <span className="text-pine">institutional lending.</span>
          </h1>
          <p className="text-lg text-neutral-600 max-w-lg leading-relaxed font-editorial">
            Institutional loans necessitate dozens of discrete risk evaluations.
            Traditionally, these facts are manually reconciled and judged.
            Converge automates this reasoning layer, delivering structured,
            source-verified findings ready for review.
          </p>

          <div className="flex items-center gap-6">
            <Button title="Talk to us" />
            <Button title="Research and thesis" variant="secondary" />
          </div>
        </div>

        <div className="relative w-full aspect-16/10 max-w-3xl mx-auto">
          {/* Laptop SVG */}
          <svg
            viewBox="0 0 800 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-2xl"
          >
            {/* Screen Border */}
            <rect
              x="50"
              y="20"
              width="700"
              height="440"
              rx="20"
              fill="#222"
              stroke="#444"
              strokeWidth="2"
            />
            {/* Camera */}
            <circle cx="400" cy="35" r="3" fill="#333" />
            {/* Base */}
            <path
              d="M20 460H780L760 485C755 490 750 492 740 492H60C50 492 45 490 40 485L20 460Z"
              fill="#333"
            />
            {/* Base Detail */}
            <rect x="360" y="460" width="80" height="8" rx="4" fill="#111" />
          </svg>

          {/* Video Container (Inside Screen) */}
          <div className="absolute top-[6.5%] left-[9.5%] w-[81%] h-[80.5%] overflow-hidden bg-neutral-900 rounded-sm">
            <video
              src="/video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

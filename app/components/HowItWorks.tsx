import React from "react";
import Button from "./Button";
import {
  Database,
  FileCheck,
  BarChart2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const cardsData = [
  {
    id: 1,
    title: "Ingestion",
    description: "Complete file analysis, not sampling.",
    bgColor: "bg-canvas",
    icon: <Database className="size-15" strokeWidth={1.5} />,
  },
  {
    id: 2,
    title: "Reconciliation",
    description: "Evidence prioritized by source authority.",
    bgColor: "bg-pine",
    icon: <FileCheck className="size-15" strokeWidth={1.5} />,
  },
  {
    id: 3,
    title: "Assessment",
    description: "Risk signals identified with rationale.",
    bgColor: "bg-canvas",
    icon: <BarChart2 className="size-15" strokeWidth={1.5} />,
  },
  {
    id: 4,
    title: "Auditability",
    description: "Fully traceable outputs for committee review.",
    bgColor: "bg-pine",
    icon: <ShieldCheck className="size-15" strokeWidth={1.5} />,
  },
];

export default function HowItWorks() {
  return (
    <div className="converge-container mx-auto w-full px-6 md:px-14 bg-surface py-16 md:py-24 neon-divider">
      <p className="font-editorial text-base md:text-lg text-pine uppercase tracking-wider">
        HOW IT WORKS
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-[40px] font-display font-bold tracking-[-0.01em] text-neutral-800 mt-2 mb-4 leading-tight">
        Four layers of defensible intelligence.
      </h2>
      <p className="text-neutral-800 font-editorial text-base md:text-lg mb-8 md:mb-12 max-w-3xl">
        Converge mirrors the cognitive workflow of the credit analyst, ensuring
        every conclusion remains anchored to its source.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardsData.map((card) => {
          // Check if the current card has the dark background for conditional hover states
          const isDarkBg = card.bgColor === "bg-pine";

          return (
            <div
              key={card.id}
              className="group relative overflow-hidden border border-neutral-300 hover:border-neutral-500 p-5 md:p-6 flex flex-col cursor-pointer text-center transition-all duration-300"
            >
              {/* Background Color Slide Transition */}
              <div
                className={`absolute inset-0 ${card.bgColor} translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0`}
              ></div>

              {/* Content Container */}
              <div className="relative z-10 flex flex-col h-full justify-center items-center w-full">
                {/* Header: Icons */}
                <div className="flex justify-center items-start mb-3">
                  <div
                    className={`transition-colors duration-300 ${
                      isDarkBg
                        ? "text-neutral-800 group-hover:text-white"
                        : "text-neutral-800 group-hover:text-pine"
                    }`}
                  >
                    {card.icon}
                  </div>
                </div>

                {/* Body: Title and Description */}
                <div className="mt-2">
                  <h3
                    className={`text-xl md:text-3xl font-bold tracking-normal font-display mb-1.5 transition-colors duration-300 ${
                      isDarkBg
                        ? "text-pine group-hover:text-white"
                        : "text-pine"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`text-sm md:text-base leading-relaxed font-editorial transition-colors duration-300 ${
                      isDarkBg
                        ? "text-neutral-600 group-hover:text-neutral-300"
                        : "text-neutral-600 group-hover:text-neutral-800"
                    }`}
                  >
                    {card.description}
                  </p>
                </div>

                {/* Footer: Learn More Link */}
                <div className="mt-3 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span
                    className={`font-semibold inline-flex items-center text-sm ${
                      isDarkBg ? "text-white" : "text-black"
                    }`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 flex justify-end w-full">
        <Button title="Platform walkthrough →" />
      </div>
    </div>
  );
}

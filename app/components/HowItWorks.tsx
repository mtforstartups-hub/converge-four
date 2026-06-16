import React from "react";
import Button from "./Button";

const cardsData = [
  {
    id: 1,
    title: "Ingestion",
    description: "Complete file analysis, not sampling.",
    bgColor: "bg-canvas",
    icon: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Reconciliation",
    description: "Evidence prioritized by source authority.",
    bgColor: "bg-neutral-900",
    icon: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Assessment",
    description: "Risk signals identified with rationale.",
    bgColor: "bg-canvas",
    icon: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Auditability",
    description: "Fully traceable outputs for committee review.",
    bgColor: "bg-neutral-900",
    icon: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <div className="converge-container mx-auto w-full px-6 md:px-14 bg-surface py-16 md:py-24 neon-divider">
      <p className="font-editorial text-base md:text-lg text-pine uppercase tracking-wider">HOW IT WORKS</p>
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
          const isDarkBg = card.bgColor === "bg-neutral-900";

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
                    className={`text-xl md:text-2xl font-bold tracking-normal font-display mb-1.5 transition-colors duration-300 ${
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

                {/* Footer: Learn More Link (Always visible at low opacity, fades in on hover with arrow translation) */}
                <div className="mt-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <span
                    className={`font-semibold inline-flex items-center text-sm ${
                      isDarkBg ? "text-white" : "text-black"
                    }`}
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 flex justify-center w-full">
        <Button title="Platform walkthrough →" />
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";

const todayMetrics = [
  {
    title: "$8K",
    description: (
      <>
        Fully-loaded cost{" "}
        <strong className="font-semibold text-[#2c2923]">
          starts at $7–8K per loan
        </strong>
        , underwritten by hand.
      </>
    ),
  },
  {
    title: "8%",
    description: (
      <>
        Default rates run{" "}
        <strong className="font-semibold text-[#2c2923]">
          4–8% in many private credit strategies
        </strong>{" "}
        — the cost of risk that gets missed.
      </>
    ),
  },
  {
    title: "Headcount",
    description: (
      <>
        The only way to underwrite more loans is{" "}
        <strong className="font-semibold text-[#2c2923]">
          to hire more people
        </strong>
        .
      </>
    ),
  },
];

const convergeMetrics = [
  {
    title: "A fraction",
    description: (
      <>
        The expensive manual steps compress dramatically —{" "}
        <strong className="font-semibold text-pine">
          cost per loan falls with them
        </strong>
        .
      </>
    ),
  },
  {
    title: "Defensible",
    description: (
      <>
        Every finding is sourced, so the file{" "}
        <strong className="font-semibold text-pine">
          holds up when it&apos;s reviewed, audited, or sold
        </strong>
        .
      </>
    ),
  },
  {
    title: "Throughput",
    description: (
      <>
        The same team clears far more loans —{" "}
        <strong className="font-semibold text-pine">
          reviewing findings, not files
        </strong>
        .
      </>
    ),
  },
];

export default function TheCase() {
  const [activeMetric, setActiveMetric] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="converge-container mx-auto w-full px-6 md:px-14 bg-canvas py-16 md:py-24 neon-divider">
      <p className="font-editorial text-base md:text-lg text-pine uppercase tracking-wider">
        The Case
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-[40px] font-display font-bold tracking-[-0.01em] text-neutral-800 mt-2 mb-4 leading-tight">
        Manual credit analysis is an operational bottleneck.
      </h2>
      <p className="text-neutral-800 font-editorial text-base md:text-lg mb-10 md:mb-16 lg:mb-20 max-w-3xl">
        Legacy systems record decisions; Converge builds the reasoning required
        to reach them.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-16 lg:mt-24">
        {/* Traditional Systems (Today & Stack Limitations) */}
        <div className="border border-neutral-300 hover:border-neutral-900 transition-all duration-300 bg-canvas/30 flex flex-col overflow-hidden shadow-sm">
          {/* Top Section */}
          <div className="p-6 sm:p-10 lg:p-14 flex flex-col">
            {/* Panel Header */}
            <div className="flex items-center justify-between pb-6 border-b border-neutral-300 mb-8">
              <span className="font-ui text-base lg:text-lg font-semibold tracking-wider text-neutral-400 uppercase">
                Today
              </span>
              <span className="font-editorial text-base lg:text-lg italic text-neutral-400">
                here&apos;s the issue
              </span>
            </div>

            {/* Metrics Carousel */}
            <div className="relative min-h-[160px] sm:min-h-[130px] lg:min-h-[112px]">
              {todayMetrics.map((metric, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    i === activeMetric
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  <h3 className="font-display font-bold tracking-[-0.01em] text-3xl sm:text-4xl lg:text-5xl text-[#2c2923] mb-2">
                    {metric.title}
                  </h3>
                  <p className="font-editorial text-sm sm:text-base text-[#6a655b] leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="flex gap-2 mt-5 pt-4 ">
              {todayMetrics.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveMetric(i)}
                  className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                    i === activeMetric
                      ? "bg-[#8a8579]"
                      : "bg-mist/40 hover:bg-mist"
                  }`}
                  aria-label={`Show metric ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Bottom Section - Highlighted */}
          <div className="p-6 sm:p-10 lg:p-14 bg-black/3 border-t border-mist/60 flex-1 flex flex-col">
            {/* Bottom Panel Header */}
            <div className="flex items-center justify-between pb-6 mb-6">
              <span className="font-ui text-xs font-semibold tracking-wider text-[#8a8579] uppercase">
                Why your stack can&apos;t
              </span>
              <span className="font-editorial text-xs italic text-[#8a8579]">
                oh, I see why
              </span>
            </div>

            {/* Bullet List */}
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-sm text-[#8a8579] mt-1">•</span>
                <p className="font-editorial text-sm sm:text-base text-[#6a655b] leading-relaxed">
                  <strong className="font-semibold text-[#2c2923]">
                    Your CRM & LOS store the answer.
                  </strong>{" "}
                  They track the pipeline and record the final fields — not how
                  the decision was formed.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sm text-[#8a8579] mt-1">•</span>
                <p className="font-editorial text-sm sm:text-base text-[#6a655b] leading-relaxed">
                  <strong className="font-semibold text-[#2c2923]">
                    OCR pulls text.
                  </strong>{" "}
                  It tells you what a document says, not what it means for the
                  loan.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sm text-[#8a8579] mt-1">•</span>
                <p className="font-editorial text-sm sm:text-base text-[#6a655b] leading-relaxed">
                  <strong className="font-semibold text-[#2c2923]">
                    A model answers a question.
                  </strong>{" "}
                  A loan isn&apos;t a question — it&apos;s dozens of assessments
                  that must be consistent, sourced, and reviewable.
                </p>
              </li>
            </ul>

            {/* Panel Footer */}
            <div className="border-t border-mist/60 pt-6 mt-auto">
              <p className="font-editorial text-base lg:text-lg text-neutral-400 uppercase">
                Each does part of the job. None forms the understanding.
              </p>
            </div>
          </div>
        </div>

        {/* Converge Systems (With Converge & Capabilities) */}
        <div className="border-2 border-pine/30 bg-surface shadow-xs hover:border-pine/60 hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-pine/5 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-300" />

          {/* Top Section */}
          <div className="p-6 sm:p-10 lg:p-14 relative z-10 flex flex-col">
            {/* Panel Header */}
            <div className="flex items-center justify-between pb-6 border-b border-pine/20 mb-8">
              <span className="inline-flex items-center gap-1.5 font-ui text-base lg:text-lg font-semibold tracking-wider text-pine uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-pine animate-pulse" />
                With Converge
              </span>
              <span className="font-editorial text-base lg:text-lg italic text-pine">
                here&apos;s what it becomes
              </span>
            </div>

            {/* Metrics Carousel */}
            <div className="relative min-h-[160px] sm:min-h-[130px] lg:min-h-[112px]">
              {convergeMetrics.map((metric, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    i === activeMetric
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  <h3 className="font-display font-bold tracking-[-0.01em] text-3xl sm:text-4xl lg:text-5xl text-pine mb-2">
                    {metric.title}
                  </h3>
                  <p className="font-editorial text-sm sm:text-base text-neutral-800 leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="flex gap-2 mt-5 pt-4 ">
              {convergeMetrics.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveMetric(i)}
                  className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                    i === activeMetric
                      ? "bg-pine"
                      : "bg-pine/20 hover:bg-pine/40"
                  }`}
                  aria-label={`Show metric ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Bottom Section - Highlighted */}
          <div className="p-6 sm:p-10 lg:p-14 bg-pine/4 border-t border-pine/10 relative z-10 flex-1 flex flex-col">
            {/* Bottom Panel Header */}
            <div className="flex items-center justify-between pb-6 mb-6">
              <span className="font-ui text-xs font-semibold tracking-wider text-pine uppercase">
                How Converge does
              </span>
              <span className="font-editorial text-xs italic text-pine">
                oh, I see how
              </span>
            </div>

            {/* Bullet List */}
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-sm text-pine mt-1">•</span>
                <p className="font-editorial text-sm sm:text-base text-neutral-800 leading-relaxed">
                  <strong className="font-semibold text-pine">
                    Reads every document
                  </strong>{" "}
                  — classified, extracted, validated against source hierarchy.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sm text-pine mt-1">•</span>
                <p className="font-editorial text-sm sm:text-base text-neutral-800 leading-relaxed">
                  <strong className="font-semibold text-pine">
                    Forms the risk assessments
                  </strong>{" "}
                  — entity, guarantor, background, policy, exceptions, each with
                  severity and evidence.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sm text-pine mt-1">•</span>
                <p className="font-editorial text-sm sm:text-base text-neutral-800 leading-relaxed">
                  <strong className="font-semibold text-pine">
                    Shows its work
                  </strong>{" "}
                  — every conclusion traced to the document, page, and line.
                </p>
              </li>
            </ul>

            {/* Panel Footer */}
            <div className="border-t border-pine/10 pt-6 mt-auto">
              <p className="font-editorial text-base lg:text-lg text-pine uppercase">
                The understanding, formed — faster, with fewer misses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

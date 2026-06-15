"use client";

import { useState } from "react";

const todayMetrics = [
  {
    title: "$8K",
    label: "Cost Per Loan",
    description: "Fully-loaded cost starts at $7–8K per loan, underwritten by hand.",
    icon: (
       <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-neutral-500">
         <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
       </svg>
    )
  },
  {
    title: "8%",
    label: "Default Rates",
    description: "Default rates run 4–8% in many private credit strategies.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-neutral-500">
         <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    )
  },
  {
    title: "Headcount",
    label: "Scaling Limit",
    description: "The only way to underwrite more loans is to hire more people.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-neutral-500">
         <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    )
  },
];

const convergeMetrics = [
  {
    title: "-80%",
    label: "Cost Per Loan",
    description: "The expensive manual steps compress dramatically.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-pine">
         <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
       </svg>
    )
  },
  {
    title: "100%",
    label: "Defensibility",
    description: "Every finding is sourced and holds up when audited.",
    icon: (
       <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-pine">
         <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
       </svg>
    )
  },
  {
    title: "10x",
    label: "Throughput",
    description: "The same team clears far more loans — reviewing findings, not files.",
    icon: (
       <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-pine">
         <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
       </svg>
    )
  },
];

export default function TheCase() {
  const [activeTab, setActiveTab] = useState<"today" | "converge">("converge");

  return (
    <section className="mx-auto w-full px-6 sm:px-14 bg-canvas py-24 border-t border-mist/50 overflow-hidden">
      <div className="converge-container mx-auto">
        <div className="text-center mb-16">
          <p className="font-editorial text-lg text-pine uppercase font-medium mb-4">The Case</p>
          <h2 className="text-fluid-h2 font-display font-bold tracking-[-0.01em] text-neutral-800 max-w-4xl mx-auto">
            Manual credit analysis is an operational bottleneck.
          </h2>
          <p className="text-fluid-p text-neutral-600 font-editorial mt-6 max-w-2xl mx-auto">
            Legacy systems record decisions; Converge builds the reasoning required
            to reach them.
          </p>
        </div>

        {/* Custom Toggle Switch */}
        <div className="flex justify-center mb-12 relative z-20">
          <div className="bg-mist/50 p-1.5 rounded-full flex items-center border border-mist shadow-inner relative">
            {/* Sliding Background */}
            <div 
              className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white rounded-full shadow-md transition-transform duration-500 ease-out z-0`}
              style={{ transform: activeTab === 'converge' ? 'translateX(100%)' : 'translateX(0)' }}
            />
            
            <button
              onClick={() => setActiveTab("today")}
              className={`relative z-10 px-6 sm:px-10 py-3 rounded-full text-sm sm:text-base font-semibold font-display transition-colors duration-300 w-40 sm:w-48 ${
                activeTab === "today" ? "text-neutral-900" : "text-neutral-500 hover:text-neutral-700"
              }`}
            >
              Traditional Stack
            </button>
            <button
              onClick={() => setActiveTab("converge")}
              className={`relative z-10 px-6 sm:px-10 py-3 rounded-full text-sm sm:text-base font-semibold font-display transition-colors duration-300 w-40 sm:w-48 flex items-center justify-center gap-2 ${
                activeTab === "converge" ? "text-pine" : "text-neutral-500 hover:text-pine/70"
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${activeTab === 'converge' ? 'bg-pine animate-pulse' : 'bg-transparent'}`} />
              With Converge
            </button>
          </div>
        </div>

        {/* Content Container with Crossfade */}
        <div className="relative min-h-[400px]">
          {/* Today View */}
          <div className={`absolute inset-0 transition-all duration-700 ease-in-out ${activeTab === 'today' ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0 pointer-events-none'}`}>
            <div className="bg-surface border border-neutral-300 rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col md:flex-row gap-12">
              <div className="md:w-1/3 flex flex-col justify-center">
                <h3 className="text-3xl font-display font-bold text-neutral-800 mb-4">Why your stack can&apos;t</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <span className="text-error mt-1">✕</span>
                    <p className="text-sm sm:text-base text-neutral-600 font-editorial">
                      <strong className="text-neutral-800">Your CRM & LOS store the answer.</strong> They track the pipeline and record final fields, not how the decision was formed.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-error mt-1">✕</span>
                    <p className="text-sm sm:text-base text-neutral-600 font-editorial">
                      <strong className="text-neutral-800">OCR pulls text.</strong> It tells you what a document says, not what it means for the loan.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {todayMetrics.map((metric, i) => (
                  <div key={i} className="bg-canvas border border-mist p-6 rounded-2xl flex flex-col items-start">
                    <div className="p-3 bg-surface rounded-xl border border-mist shadow-sm mb-6">
                      {metric.icon}
                    </div>
                    <div className="font-ui text-xs font-semibold tracking-wider text-neutral-500 uppercase mb-2">{metric.label}</div>
                    <h4 className="text-4xl font-display font-bold text-neutral-800 mb-3">{metric.title}</h4>
                    <p className="text-sm text-neutral-600 font-editorial">{metric.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Converge View */}
          <div className={`absolute inset-0 transition-all duration-700 ease-in-out ${activeTab === 'converge' ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0 pointer-events-none'}`}>
             <div className="bg-pine/5 border-2 border-pine/20 rounded-3xl p-8 sm:p-12 shadow-lg flex flex-col md:flex-row gap-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-pine/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="md:w-1/3 flex flex-col justify-center relative z-10">
                <h3 className="text-3xl font-display font-bold text-pine mb-4">How Converge does it</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <span className="text-pine mt-1">✓</span>
                    <p className="text-sm sm:text-base text-neutral-800 font-editorial">
                      <strong className="text-pine">Reads every document</strong> — classified, extracted, validated against source hierarchy.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pine mt-1">✓</span>
                    <p className="text-sm sm:text-base text-neutral-800 font-editorial">
                      <strong className="text-pine">Forms risk assessments</strong> — entity, guarantor, background, policy, each with severity and evidence.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
                {convergeMetrics.map((metric, i) => (
                  <div key={i} className="bg-surface border-2 border-pine/10 p-6 rounded-2xl flex flex-col items-start hover:border-pine/30 transition-colors shadow-sm">
                    <div className="p-3 bg-pine/10 rounded-xl mb-6">
                      {metric.icon}
                    </div>
                    <div className="font-ui text-xs font-semibold tracking-wider text-pine/80 uppercase mb-2">{metric.label}</div>
                    <h4 className="text-4xl font-display font-bold text-pine mb-3">{metric.title}</h4>
                    <p className="text-sm text-neutral-700 font-editorial">{metric.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

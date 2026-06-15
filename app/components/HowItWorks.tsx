import React from "react";
import Button from "./Button";

export default function HowItWorks() {
  return (
    <div className="mx-auto w-full px-6 sm:px-14 bg-surface py-24 border-t border-mist/50">
      <div className="converge-container mx-auto">
        <p className="font-editorial text-lg text-pine font-medium mb-4">HOW IT WORKS</p>
        <h2 className="text-fluid-h2 font-display font-bold tracking-[-0.01em] text-neutral-800 max-w-3xl">
          Four layers of defensible intelligence.
        </h2>
        <p className="text-fluid-p text-neutral-600 font-editorial mb-16 max-w-2xl mt-6">
          Converge mirrors the cognitive workflow of the credit analyst, ensuring
          every conclusion remains anchored to its source.
        </p>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          
          {/* Item 1: Ingestion (Large Horizontal) */}
          <div className="md:col-span-2 relative overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-800 p-8 sm:p-10 flex flex-col justify-between group">
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-pine/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-pine backdrop-blur-md mb-6 shadow-xl border border-white/5">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-canvas">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold font-display text-canvas mb-3">1. Ingestion</h3>
              <p className="text-lg text-neutral-400 font-editorial max-w-md">Complete file analysis, not sampling. We read every page, table, and footnote.</p>
            </div>
            {/* Decorative Element */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-pine/10 rounded-tl-full blur-3xl" />
          </div>

          {/* Item 2: Reconciliation (Vertical/Square) */}
          <div className="md:col-span-1 relative overflow-hidden rounded-3xl bg-canvas border border-mist p-8 sm:p-10 flex flex-col justify-between group hover:border-pine/30 transition-colors duration-500">
            <div className="w-14 h-14 rounded-2xl bg-pine/10 flex items-center justify-center text-pine mb-6 transition-transform duration-500 group-hover:scale-110">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-display text-neutral-800 mb-2">2. Reconciliation</h3>
              <p className="text-base text-neutral-600 font-editorial">Evidence prioritized by source authority across documents.</p>
            </div>
          </div>

          {/* Item 3: Assessment (Square) */}
          <div className="md:col-span-1 relative overflow-hidden rounded-3xl bg-surface border border-mist p-8 sm:p-10 flex flex-col justify-between group hover:shadow-lg transition-shadow duration-500">
            <div className="w-14 h-14 rounded-2xl bg-terracotta/10 flex items-center justify-center text-terracotta mb-6 transition-transform duration-500 group-hover:-translate-y-1">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-display text-neutral-800 mb-2">3. Assessment</h3>
              <p className="text-base text-neutral-600 font-editorial">Risk signals identified with clear rationale.</p>
            </div>
          </div>

          {/* Item 4: Auditability (Large Horizontal) */}
          <div className="md:col-span-2 relative overflow-hidden rounded-3xl bg-pine border border-pine/50 p-8 sm:p-10 flex flex-col justify-between group text-white">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 flex justify-between items-start">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-black/20 flex items-center justify-center text-white backdrop-blur-md mb-6 border border-white/10">
                   <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                   </svg>
                </div>
                <h3 className="text-3xl font-bold font-display text-white mb-3">4. Auditability</h3>
                <p className="text-lg text-white/80 font-editorial max-w-md">Fully traceable outputs for committee review. Click on any conclusion to see the exact source text.</p>
              </div>
              
              {/* Abstract decorative graphic for auditability */}
              <div className="hidden sm:flex space-x-2 mt-4 opacity-80 group-hover:opacity-100 transition-opacity">
                {[4, 8, 5, 10, 3].map((h, i) => (
                  <div key={i} className="w-3 bg-white/20 rounded-full" style={{ height: `${h * 0.5}rem` }} />
                ))}
              </div>
            </div>
          </div>

        </div>

        <div className="mt-16 flex justify-center">
          <Button title="Platform walkthrough →" />
        </div>
      </div>
    </div>
  );
}

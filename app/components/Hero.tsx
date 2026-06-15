import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="mx-auto w-full min-h-[80vh] flex items-center bg-canvas relative overflow-hidden">
      {/* Background radial gradient to soften the canvas */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-mist/50 via-canvas to-canvas pointer-events-none z-0" />
      
      <div className="converge-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full py-20 px-6 sm:px-14 relative z-10">
        <div className="flex flex-col space-y-8 text-neutral-800">
          <h1 className="text-fluid-h1 font-bold font-display tracking-[-0.02em]">
            Intelligence infrastructure for{" "}
            <span className="text-pine">institutional lending.</span>
          </h1>
          <p className="text-fluid-p text-neutral-600 font-editorial max-w-xl">
            Institutional loans necessitate dozens of discrete risk evaluations.
            Traditionally, these facts are manually reconciled and judged.
            Converge automates this reasoning layer, delivering structured,
            source-verified findings ready for review.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button title="Talk to us" />
            <Button title="Research and thesis" variant="secondary" />
          </div>
        </div>

        {/* Dynamic Dashboard Preview */}
        <div className="relative w-full max-w-xl justify-self-center lg:justify-self-end mt-10 lg:mt-0 perspective-1000">
          {/* Main Glass Panel */}
          <div className="relative w-full aspect-[4/3] rounded-2xl bg-surface/60 backdrop-blur-xl border border-white/40 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden transform rotate-y-[-5deg] rotate-x-[2deg] transition-transform duration-700 hover:rotate-0">
            {/* Top Bar */}
            <div className="h-10 bg-surface/80 border-b border-mist flex items-center px-4 space-x-2">
              <div className="w-3 h-3 rounded-full bg-error/80" />
              <div className="w-3 h-3 rounded-full bg-warning/80" />
              <div className="w-3 h-3 rounded-full bg-success/80" />
            </div>
            
            {/* Dashboard Content Area */}
            <div className="p-6 h-full flex flex-col space-y-6">
              {/* Animated Header Mock */}
              <div className="flex justify-between items-center">
                <div className="flex space-x-3 items-center">
                  <div className="w-10 h-10 rounded-lg bg-pine/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-pine" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="w-32 h-4 bg-mist rounded-sm mb-2" />
                    <div className="w-20 h-3 bg-mist/60 rounded-sm" />
                  </div>
                </div>
                <div className="w-24 h-8 rounded-full bg-success/10 flex items-center justify-center border border-success/20">
                  <span className="text-xs font-semibold text-success uppercase">Verified</span>
                </div>
              </div>

              {/* Data Rows Mock */}
              <div className="flex-1 bg-surface/50 rounded-xl border border-mist/50 p-4 space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-mist/30 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${i === 1 ? 'bg-pine/20 text-pine' : i === 2 ? 'bg-warning/20 text-warning' : 'bg-info/20 text-info'}`}>
                        {/* Status Icon */}
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="space-y-1.5">
                        <div className="w-24 sm:w-32 h-3 bg-neutral-300 rounded-sm" />
                        <div className="w-16 sm:w-24 h-2 bg-neutral-200 rounded-sm" />
                      </div>
                    </div>
                    {/* Animated scanning line effect simulating analysis */}
                    <div className="relative w-16 sm:w-24 h-2 bg-mist rounded-full overflow-hidden">
                       <div className="absolute top-0 left-0 h-full bg-pine animate-[slide_2s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.2}s`}} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Floating Element - "Signals Extracted" */}
          <div className="absolute -bottom-6 -left-6 bg-surface p-4 rounded-xl shadow-lg border border-mist flex items-center space-x-3 z-20 animate-[bounce_3s_ease-in-out_infinite]">
            <div className="w-10 h-10 rounded-full bg-pine flex items-center justify-center text-white font-display font-bold">
              84
            </div>
            <div>
              <p className="text-sm font-bold text-neutral-800 font-display">Signals Found</p>
              <p className="text-xs text-neutral-500 font-editorial">In latest document</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

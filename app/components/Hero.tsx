import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="mx-auto w-full min-h-[80vh] flex items-center bg-canvas relative overflow-hidden bg-grid-pattern">
      {/* Sharp diagonal background split */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-mist/50 [clip-path:polygon(20%_0,100%_0,100%_100%,0%_100%)] border-l-4 border-pine/20 z-0 pointer-events-none" />
      
      <div className="converge-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full py-20 px-6 sm:px-14 relative z-10">
        <div className="flex flex-col space-y-8 text-neutral-800 relative z-10">
          <div className="w-16 h-1 bg-terracotta mb-4" />
          <h1 className="text-fluid-h1 font-bold font-display tracking-[-0.02em] uppercase">
            Intelligence infrastructure for{" "}
            <span className="text-pine border-b-4 border-pine pb-1">institutional lending.</span>
          </h1>
          <p className="text-fluid-p text-neutral-600 font-editorial max-w-xl border-l-2 border-mist pl-4">
            Institutional loans necessitate dozens of discrete risk evaluations.
            Traditionally, these facts are manually reconciled and judged.
            Converge automates this reasoning layer, delivering structured,
            source-verified findings ready for review.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button title="Talk to us" />
            <Button title="Research and thesis" variant="secondary" />
          </div>
        </div>

        {/* Geometric Dashboard Preview */}
        <div className="relative w-full max-w-xl justify-self-center lg:justify-self-end mt-10 lg:mt-0 perspective-1000 z-10">
          {/* Main Stark Panel */}
          <div className="relative w-full aspect-[4/3] bg-surface border-4 border-neutral-900 shadow-[16px_16px_0px_0px_rgba(27,107,83,0.2)] overflow-hidden transition-transform duration-700 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[24px_24px_0px_0px_rgba(27,107,83,0.3)] rounded-none">
            {/* Top Bar - Brutalist */}
            <div className="h-12 bg-neutral-900 border-b-4 border-neutral-900 flex items-center px-4 space-x-2">
              <div className="w-4 h-4 bg-error rounded-none border-2 border-neutral-900" />
              <div className="w-4 h-4 bg-warning rounded-none border-2 border-neutral-900" />
              <div className="w-4 h-4 bg-success rounded-none border-2 border-neutral-900" />
              <div className="ml-auto text-xs font-mono text-neutral-400">SYS.VER.09.4</div>
            </div>
            
            {/* Dashboard Content Area */}
            <div className="p-6 h-full flex flex-col space-y-6 bg-grid-pattern">
              {/* Animated Header Mock */}
              <div className="flex justify-between items-center border-b-2 border-neutral-900 pb-4">
                <div className="flex space-x-4 items-center">
                  <div className="w-12 h-12 bg-pine border-2 border-neutral-900 flex items-center justify-center rounded-none shadow-[4px_4px_0px_0px_rgba(34,32,28,1)]">
                    <svg className="w-6 h-6 text-canvas" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="square" strokeLinejoin="miter" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="w-32 h-4 bg-neutral-900 rounded-none mb-2" />
                    <div className="w-20 h-3 bg-neutral-500 rounded-none" />
                  </div>
                </div>
                <div className="px-3 py-1 bg-success/20 border-2 border-success text-success text-xs font-bold font-mono tracking-widest uppercase rounded-none">
                  Verified
                </div>
              </div>

              {/* Data Rows Mock */}
              <div className="flex-1 bg-surface border-2 border-neutral-900 p-4 space-y-4 rounded-none shadow-[8px_8px_0px_0px_rgba(27,107,83,0.1)]">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-3 border-b-2 border-mist hover:bg-mist/30 transition-colors last:border-0 rounded-none">
                    <div className="flex items-center space-x-4">
                      <div className={`w-8 h-8 flex items-center justify-center border-2 border-neutral-900 rounded-none ${i === 1 ? 'bg-pine text-canvas' : i === 2 ? 'bg-warning text-neutral-900' : 'bg-info text-canvas'}`}>
                        {/* Status Icon */}
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="space-y-2">
                        <div className="w-24 sm:w-32 h-3 bg-neutral-800 rounded-none" />
                        <div className="w-16 sm:w-24 h-2 bg-neutral-400 rounded-none" />
                      </div>
                    </div>
                    {/* Geometric scanning block */}
                    <div className="relative w-16 sm:w-24 h-4 bg-mist border border-neutral-300 overflow-hidden rounded-none">
                       <div className="absolute top-0 left-0 h-full w-4 bg-pine animate-[slide_2s_linear_infinite]" style={{ animationDelay: `${i * 0.2}s`}} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Floating Element - Geometric */}
          <div className="absolute -bottom-8 -left-8 bg-surface p-4 border-4 border-neutral-900 shadow-[8px_8px_0px_0px_rgba(34,32,28,1)] flex items-center space-x-4 z-20 rounded-none">
            <div className="w-12 h-12 bg-terracotta border-2 border-neutral-900 flex items-center justify-center text-white font-mono font-bold text-xl rounded-none">
              84
            </div>
            <div>
              <p className="text-sm font-bold text-neutral-900 font-mono uppercase tracking-wider">Signals Found</p>
              <p className="text-xs text-neutral-500 font-editorial border-t border-mist mt-1 pt-1">In latest document</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

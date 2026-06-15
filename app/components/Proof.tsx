import React from "react";

const quotes = [
  {
    id: 1,
    quote: "Converge is the first system that performs reasoning with the precision of an experienced underwriter.",
    author: "Jane Doe",
    role: "Chief Credit Officer",
    institution: "Global Capital Partners"
  },
  {
    id: 2,
    quote: "We've reduced our time-to-decision by 60% without sacrificing any rigor in our credit process.",
    author: "John Smith",
    role: "Managing Director",
    institution: "Apex Lending"
  }
];

export default function Proof() {
  return (
    <section className="mx-auto w-full px-6 sm:px-14 bg-surface py-24 border-t-4 border-neutral-900 overflow-hidden relative bg-grid-pattern">
      
      <div className="converge-container mx-auto relative z-10">
        <div className="text-center mb-16 border-4 border-neutral-900 bg-canvas p-10 max-w-4xl mx-auto shadow-[16px_16px_0px_0px_rgba(34,32,28,1)]">
          <p className="font-editorial text-lg text-pine uppercase tracking-widest font-bold mb-4">Proof</p>
          <h2 className="text-fluid-h2 font-display font-bold tracking-[-0.01em] text-neutral-800 uppercase">
            Deployed with institutional credit teams.
          </h2>
          <p className="text-fluid-p text-neutral-600 font-editorial mt-6 max-w-2xl mx-auto">
            Purpose-built for private credit and asset-backed lenders managing
            high-complexity underwriting workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mx-auto mt-24">
          {quotes.map((item) => (
            <div key={item.id} className="relative group perspective-1000">
              {/* Hanging Quote Mark - Geometric */}
              <div className="absolute -top-12 -left-4 sm:-left-8 text-8xl font-mono text-pine/20 font-bold group-hover:text-pine/40 transition-colors duration-500 select-none pointer-events-none z-0">
                &quot;
              </div>
              
              <div className="bg-canvas border-4 border-neutral-900 p-8 sm:p-10 rounded-none relative z-10 shadow-[8px_8px_0px_0px_rgba(34,32,28,1)] hover:shadow-[16px_16px_0px_0px_rgba(27,107,83,1)] hover:-translate-y-2 hover:-translate-x-2 transition-all duration-300 h-full flex flex-col justify-between">
                <h3 className="font-editorial text-xl sm:text-2xl mb-8 leading-relaxed text-neutral-900 italic font-medium">
                  {item.quote}
                </h3>
                
                <div className="flex items-center space-x-4 border-t-4 border-neutral-900 pt-6 mt-auto">
                  <div className="w-12 h-12 rounded-none bg-neutral-900 flex items-center justify-center text-canvas font-mono font-bold text-xl border-2 border-mist shadow-[2px_2px_0px_0px_rgba(27,107,83,1)]">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display font-bold text-neutral-900 uppercase tracking-wide">{item.author}</p>
                    <p className="font-mono text-xs text-neutral-600 uppercase tracking-widest mt-1">{item.role}</p>
                    <p className="font-mono text-xs text-pine font-bold uppercase tracking-widest">{item.institution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

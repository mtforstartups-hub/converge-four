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
    <section className="mx-auto w-full px-6 sm:px-14 bg-surface py-24 border-t border-mist/50 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-canvas rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pine/5 rounded-full blur-3xl opacity-50 pointer-events-none" />
      
      <div className="converge-container mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="font-editorial text-lg text-pine uppercase font-medium mb-4">Proof</p>
          <h2 className="text-fluid-h2 font-display font-bold tracking-[-0.01em] text-neutral-800 max-w-3xl mx-auto">
            Deployed with institutional credit teams.
          </h2>
          <p className="text-fluid-p text-neutral-600 font-editorial mt-6 max-w-2xl mx-auto">
            Purpose-built for private credit and asset-backed lenders managing
            high-complexity underwriting workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto mt-12">
          {quotes.map((item) => (
            <div key={item.id} className="relative group perspective-1000">
              {/* Hanging Quote Mark */}
              <div className="absolute -top-6 -left-4 sm:-left-8 text-8xl font-display text-pine/10 group-hover:text-pine/20 transition-colors duration-500 select-none pointer-events-none z-0">
                &ldquo;
              </div>
              
              <div className="bg-canvas border border-mist p-8 sm:p-10 rounded-3xl relative z-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full flex flex-col justify-between">
                <h3 className="font-editorial text-xl sm:text-2xl mb-8 leading-relaxed text-neutral-800 italic">
                  &quot;{item.quote}&quot;
                </h3>
                
                <div className="flex items-center space-x-4 border-t border-mist/60 pt-6 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-mist flex items-center justify-center text-neutral-500 font-display font-bold">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display font-bold text-neutral-900">{item.author}</p>
                    <p className="font-editorial text-sm text-neutral-600">{item.role}, <span className="text-pine font-medium">{item.institution}</span></p>
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

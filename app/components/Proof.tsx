export default function Proof() {
  return (
    <section className="converge-container mx-auto w-full px-14 bg-surface py-32 neon-divider">
      <p className="font-editorial text-lg text-pine uppercase">Proof</p>
      <h2 className="text-[40px] font-display font-bold tracking-[-0.01em] text-neutral-800">
        Deployed with institutional credit teams.
      </h2>
      <p className="text-neutral-800 font-editorial text-lg mb-20">
        Purpose-built for private credit and asset-backed lenders managing
        high-complexity underwriting workflows.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        <div className="relative p-10 md:p-14 bg-canvas border border-neutral-200/60 flex flex-col justify-between group cursor-pointer overflow-hidden">
          {/* Background Slide Transition */}
          <div className="absolute inset-0 bg-neutral-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>

          <svg className="absolute top-8 left-8 w-16 h-16 text-pine/10 transform -translate-x-2 -translate-y-2 group-hover:text-pine/30 transition-colors duration-500 z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          
          <div className="relative z-10">
            <h3 className="font-display text-2xl md:text-3xl leading-snug text-neutral-800 group-hover:text-white transition-colors duration-500 mb-10">
              Converge is the first system that performs reasoning with the
              precision of an experienced underwriter. It fundamentally changes how we scale.
            </h3>
          </div>

          <div className="relative z-10 mt-auto flex items-center gap-4 border-t border-neutral-200/60 group-hover:border-neutral-700 transition-colors duration-500 pt-6">
            <div className="w-12 h-12 bg-neutral-200 rounded-full flex-shrink-0" />
            <div>
              <p className="font-bold text-neutral-900 group-hover:text-white transition-colors duration-500 font-display tracking-wide">Sarah Jenkins</p>
              <p className="text-sm text-neutral-500 group-hover:text-neutral-400 transition-colors duration-500 font-editorial">Head of Credit, Oakwood Capital</p>
            </div>
          </div>
        </div>

        <div className="relative p-10 md:p-14 bg-canvas border border-neutral-200/60 flex flex-col justify-between group cursor-pointer overflow-hidden">
          {/* Background Slide Transition */}
          <div className="absolute inset-0 bg-neutral-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>

          <svg className="absolute top-8 left-8 w-16 h-16 text-pine/10 transform -translate-x-2 -translate-y-2 group-hover:text-pine/30 transition-colors duration-500 z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          
          <div className="relative z-10">
            <h3 className="font-display text-2xl md:text-3xl leading-snug text-neutral-800 group-hover:text-white transition-colors duration-500 mb-10">
              The traceability is unmatched. Every data point points directly back to the source document, eliminating audit headaches completely.
            </h3>
          </div>

          <div className="relative z-10 mt-auto flex items-center gap-4 border-t border-neutral-200/60 group-hover:border-neutral-700 transition-colors duration-500 pt-6">
            <div className="w-12 h-12 bg-neutral-200 rounded-full flex-shrink-0" />
            <div>
              <p className="font-bold text-neutral-900 group-hover:text-white transition-colors duration-500 font-display tracking-wide">Marcus Thorne</p>
              <p className="text-sm text-neutral-500 group-hover:text-neutral-400 transition-colors duration-500 font-editorial">Chief Risk Officer, Vanguard Asset</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

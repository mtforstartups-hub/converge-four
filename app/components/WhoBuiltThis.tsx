import Image from "next/image";
import Button from "./Button";

const members = [
  {
    id: 1,
    name: "Gaurav Budhrani",
    role: "Co-founder & CEO",
    experience: "15+ years of capital markets and operating experience.",
    image: "/person-placeholder.png"
  },
  {
    id: 2,
    name: "Omar Hussein",
    role: "Co-Founder & CSO",
    experience: "15+ years of lending & operating experience.",
    image: "/person-placeholder.png"
  },
  {
    id: 3,
    name: "Anatolii Stadnichuk",
    role: "Founding Engineer",
    experience: "15+ years of software engineering in FinTech and Cybersecurity.",
    image: "/person-placeholder.png"
  },
];

export default function WhoBuiltThis() {
  return (
    <section className="mx-auto w-full px-6 sm:px-14 bg-canvas py-24 border-t border-mist/50">
      <div className="converge-container mx-auto">
        <div className="text-center mb-16">
          <p className="font-editorial text-lg text-pine uppercase font-medium mb-4">
            Who built This
          </p>
          <h2 className="text-fluid-h2 font-display font-bold tracking-[-0.01em] text-neutral-800 max-w-4xl mx-auto">
            Lending expertise, institutional backing.
          </h2>
          <p className="text-fluid-p text-neutral-600 font-editorial mt-6 max-w-2xl mx-auto">
            This is the intelligence layer institutional credit has always required, built by operators who lived the problem.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
          {members.map((member) => (
            <div key={member.id} className="group relative bg-surface border border-mist rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              {/* Image Section */}
              <div className="relative w-full aspect-[4/5] bg-mist/30 overflow-hidden">
                {/* Fallback pattern if image is missing */}
                <div className="absolute inset-0 opacity-20 group-hover:scale-105 transition-transform duration-700">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <defs>
                      <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="none" stroke="#1b6b53" strokeWidth="1" opacity="0.3"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#pattern)" />
                  </svg>
                </div>
                
                {/* Actual Image (commented out until real images are used, but structure is here) */}
                {/* <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                /> */}
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Text Content overlaying image */}
                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-display font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-pine/90 font-display uppercase tracking-widest text-xs font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-white/80 font-editorial text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {member.experience}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted By Section */}
        <div className="mt-32 pt-16 border-t border-mist/50 text-center">
          <h3 className="text-2xl font-display font-bold tracking-[-0.01em] text-neutral-800 mb-10">
            Trusted by leaders across the value chain
          </h3>
          
          {/* Logo Grid */}
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 max-w-4xl mx-auto opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {[1, 2, 3, 4].map((idx) => (
                <div key={idx} className="w-32 h-12 flex items-center justify-center bg-mist/30 rounded-lg border border-mist hover:bg-mist/50 transition-colors">
                  <span className="font-display font-bold text-neutral-400 tracking-widest uppercase">Brand</span>
                </div>
             ))}
          </div>
          
          <div className="mt-16">
            <Button title="Learn more about our team" variant="secondary" />
          </div>
        </div>
      </div>
    </section>
  );
}

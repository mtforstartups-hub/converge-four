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
    <section className="mx-auto w-full px-6 sm:px-14 bg-canvas py-24 border-t-4 border-neutral-900 bg-grid-pattern relative">
      <div className="converge-container mx-auto">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <p className="font-editorial text-lg text-pine uppercase font-bold tracking-widest mb-4 border-b-2 border-pine inline-block pb-1">
            Who built This
          </p>
          <h2 className="text-fluid-h2 font-display font-bold tracking-[-0.01em] text-neutral-800 uppercase mt-4">
            Lending expertise, institutional backing.
          </h2>
          <p className="text-fluid-p text-neutral-600 font-editorial mt-6 max-w-2xl mx-auto">
            This is the intelligence layer institutional credit has always required, built by operators who lived the problem.
          </p>
        </div>

        {/* Team Members Grid - Geometric */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full max-w-6xl mx-auto border-4 border-neutral-900 shadow-[16px_16px_0px_0px_rgba(34,32,28,1)] bg-neutral-900">
          {members.map((member, index) => (
            <div key={member.id} className={`group relative bg-surface overflow-hidden ${index !== 2 ? 'border-b-4 md:border-b-0 md:border-r-4' : ''} border-neutral-900`}>
              {/* Image Section */}
              <div className="relative w-full aspect-[4/5] bg-mist/30 overflow-hidden">
                {/* Fallback pattern if image is missing */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <defs>
                      <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="none" stroke="#1b6b53" strokeWidth="2" opacity="1"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#pattern)" />
                  </svg>
                </div>
                
                {/* Actual Image (commented out until real images are used) */}
                {/* <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-0"
                /> */}
                
                {/* Geometric Overlay */}
                <div className="absolute inset-0 bg-neutral-900/90 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out flex flex-col justify-end p-6 border-t-4 border-pine" />
                
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 flex flex-col justify-end z-10 transition-transform duration-300 ease-in-out group-hover:-translate-y-4">
                  <div className="bg-surface border-2 border-neutral-900 p-4 shadow-[4px_4px_0px_0px_rgba(34,32,28,1)] group-hover:bg-neutral-900 group-hover:border-pine transition-colors duration-300">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-neutral-900 group-hover:text-canvas mb-1 uppercase tracking-wide transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-pine font-mono uppercase tracking-widest text-xs font-bold mb-0">
                      {member.role}
                    </p>
                  </div>
                  
                  <div className="overflow-hidden mt-4">
                    <p className="text-canvas font-editorial text-sm leading-relaxed transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                      {member.experience}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted By Section - Brutalist */}
        <div className="mt-32 pt-16 border-t-4 border-neutral-900 text-center relative">
          {/* Decorative geometric anchor point */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-canvas border-4 border-neutral-900 rotate-45" />

          <h3 className="text-2xl font-display font-bold tracking-[-0.01em] text-neutral-800 mb-10 uppercase">
            Trusted by leaders across the value chain
          </h3>
          
          {/* Logo Grid */}
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 max-w-4xl mx-auto grayscale hover:grayscale-0 transition-all duration-300">
             {[1, 2, 3, 4].map((idx) => (
                <div key={idx} className="w-40 h-16 flex items-center justify-center bg-mist/20 border-2 border-neutral-900 shadow-[4px_4px_0px_0px_rgba(34,32,28,1)] hover:bg-mist hover:translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(27,107,83,1)] transition-all rounded-none cursor-pointer">
                  <span className="font-mono font-bold text-neutral-500 tracking-widest uppercase">Brand</span>
                </div>
             ))}
          </div>
          
          <div className="mt-16 inline-block">
            <Button title="Learn more about our team" variant="dark" />
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Button from "./Button";

const members = [
  {
    id: 1,
    title: "Gaurav Budhrani",
    designation: "Co-founder & CEO",
    experience: "15+ years of capital markets and operating experience",
  },
  {
    id: 2,
    title: "Omar Hussein",
    designation: "Co-Founder & CSO",
    experience: "15+ years of lending & operating experience",
  },
  {
    id: 3,
    title: "Anatolii Stadnichuk",
    designation: "Founding Engineer",
    experience:
      "15+ years of software engineering in FinTech and Cybersecurity",
  },
];

export default function WhoBuiltThis() {
  return (
    <section className="converge-container mx-auto w-full px-6 md:px-14 bg-canvas py-16 md:py-24 lg:py-32 neon-divider">
      <p className="font-editorial text-base md:text-lg text-pine uppercase tracking-wider">
        Who built This
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-[40px] font-display font-bold tracking-[-0.01em] text-neutral-800 mt-2 mb-4 leading-tight">
        Lending expertise, institutional backing.
      </h2>
      <p className="text-neutral-800 font-editorial text-base md:text-lg mb-10 md:mb-16 lg:mb-20 max-w-3xl">
        This is the intelligence layer institutional credit has always required.
      </p>

      {/* Team members */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 w-full">
        {members.map((member) => (
          // Added h-full to the card wrapper so they all stretch to the tallest card's height
          <div key={member.id} className="flex flex-col h-full border border-neutral-200 bg-surface hover:shadow-md transition-shadow duration-300">
            {/* Stacks vertically with centered elements for a premium layout */}
            <div className="flex flex-col items-center text-center p-6 md:p-8 flex-1">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-6 overflow-hidden rounded-full border-2 border-pine/10 bg-neutral-50 flex-shrink-0">
                <Image
                  src="/person-placeholder.png"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 items-center w-full">
                <div className="border-b-2 border-neutral-900 pb-1 max-w-fit mb-1">
                  <h3 className="text-lg sm:text-xl font-display font-bold uppercase text-pine">
                    {member.title}
                  </h3>
                </div>
                <p className="text-sm font-semibold text-neutral-800">{member.designation}</p>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mt-2">{member.experience}</p>
              </div>
            </div>

            {/* Footer remains at the bottom - Grid based to prevent horizontal overflow */}
            <div className="bg-pine text-white grid grid-cols-4 gap-1 p-3 text-center text-[10px] sm:text-xs uppercase tracking-wider font-bold mt-auto">
              {Array(4)
                .fill("BRAND")
                .map((brand, idx) => (
                  <div key={idx}>{brand}</div>
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-2xl sm:text-3xl md:text-[40px] font-display font-bold tracking-[-0.01em] text-neutral-800 mt-16 md:mt-24 mb-6 md:mb-12 leading-tight">
        Trusted by leaders across the value chain
      </div>
      <div className="bg-surface w-full grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 p-6 md:p-8 mb-10 md:mb-16 text-center text-neutral-400 font-bold uppercase tracking-widest text-xs sm:text-sm">
        {Array(4)
          .fill("BRAND")
          .map((brand, idx) => (
            <div key={idx}>{brand}</div>
          ))}
      </div>
      <Button title="Know More" />
    </section>
  );
}

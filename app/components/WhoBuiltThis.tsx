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
    <section className="converge-container mx-auto w-full px-14 bg-canvas py-20">
      <p className="font-editorial text-lg text-pine uppercase">
        Who built This
      </p>
      <h2 className="text-[40px] font-display font-bold tracking-[-0.01em] text-neutral-800">
        Lending expertise, institutional backing.
      </h2>
      <p className="text-neutral-800 font-editorial text-lg mb-12">
        This is the intelligence layer institutional credit has always required.
      </p>

      {/* Team members */}
      {/* Changed to CSS Grid: grid-cols-1 on mobile, grid-cols-3 on md screens */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {members.map((member) => (
          // Added h-full to the card wrapper so they all stretch to the tallest card's height
          <div key={member.id} className="flex flex-col h-full">
            {/* Added flex-1 to this inner div to push the dark "BRAND" footer to the bottom evenly */}
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0 bg-surface p-4 flex-1">
              <Image
                src="/person-placeholder.png"
                alt="Team Member"
                width={120}
                height={120}
                className="object-contain self-start"
              />
              <div className="flex flex-col gap-2 justify-center">
                <div className="border-b-2 border-neutral-900 max-w-fit">
                  <h3 className="text-xl font-display uppercase text-pine">
                    {member.title}
                  </h3>
                </div>
                <p>{member.designation}</p>
                <p>{member.experience}</p>
              </div>
            </div>

            {/* Footer remains at the bottom */}
            <div className="bg-pine text-white flex flex-row p-4 space-x-4 justify-between mt-auto">
              {Array(4)
                .fill("BRAND")
                .map((brand, idx) => (
                  <div key={idx}> {brand}</div>
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-[40px] font-display font-bold tracking-[-0.01em] text-neutral-800 mt-12 mb-4">
        Trusted by leaders across the value chain
      </div>
      <div className="bg-surface w-full grid grid-cols-5 gap-6 p-4 mb-10">
        {Array(4)
          .fill("BRAND")
          .map((brand, idx) => (
            <div key={idx}> {brand}</div>
          ))}
      </div>
      <Button title="Know More" />
    </section>
  );
}

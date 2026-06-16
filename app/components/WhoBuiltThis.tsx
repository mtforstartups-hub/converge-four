import Image from "next/image";
import Button from "./Button";

const members = [
  {
    id: 1,
    title: "Gaurav Budhrani",
    designation: "Co-founder & CEO",
    experience: "15+ years of capital markets and operating experience",
    imgSrc: "/teams/Gaurav.png",
    memberBrands: [
      "/teams/brands/goldman.svg",
      "/teams/brands/cisco.svg",
      "/teams/brands/Nsut.svg",
      "/teams/brands/digitalimpact.svg",
      "/teams/brands/primeblock.svg",
    ],
  },
  {
    id: 2,
    title: "Omar Hussein",
    designation: "Co-Founder & CSO",
    experience: "15+ years of lending & operating experience",
    imgSrc: "/teams/Omar.png",
    memberBrands: [
      "/teams/brands/citi.svg",
      "/teams/brands/insightpartners.svg",
      "/teams/brands/stanfordbusiness.svg",
      "/teams/brands/primeblock.svg",
      "/teams/brands/morganstanley.svg",
    ],
  },
  {
    id: 3,
    title: "Anatolii Stadnichuk",
    designation: "Founding Engineer",
    experience:
      "15+ years of software engineering in FinTech and Cybersecurity",
    imgSrc: "/teams/Antoli.png",
    memberBrands: ["/teams/brands/paloalto.svg", "/teams/brands/cider.svg"],
  },
];

const brands = [
  { id: 1, img: "/brands/GoldmanSachs.svg", alt: "Goldman Sachs Logo" },
  { id: 2, img: "/brands/Kiavi.svg", alt: "Kiavi Logo" },
  { id: 3, img: "/brands/Limaone.svg", alt: "Limaone Logo" },
  { id: 4, img: "/brands/ReedSmith.svg", alt: "ReedSmith Logo" },
  { id: 5, img: "/brands/Sovereign.svg", alt: "Sovereign Capital Logo" },
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
          <div
            key={member.id}
            className="group relative flex flex-col h-full border border-neutral-200 bg-surface cursor-pointer overflow-hidden transition-shadow duration-300 hover:shadow-lg"
          >
            {/* ---------------- MOBILE LAYOUT (Always Visible on < md) ---------------- */}
            <div className="flex md:hidden flex-col items-center text-center p-6 flex-1">
              <div className="relative w-24 h-24 mb-4 overflow-hidden rounded-full border-2 border-pine/10 bg-neutral-50 shrink-0">
                <Image
                  src={member.imgSrc}
                  alt={member.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-center w-full">
                <div className="border-b-2 border-neutral-900 pb-1 max-w-fit mb-2">
                  <h3 className="text-lg font-display font-bold uppercase text-pine">
                    {member.title}
                  </h3>
                </div>
                <p className="text-sm font-semibold text-neutral-800">
                  {member.designation}
                </p>
                <p className="text-xs text-neutral-600 leading-relaxed mt-2">
                  {member.experience}
                </p>
              </div>
            </div>

            <div className="md:hidden bg-pine text-white flex flex-wrap justify-center items-center gap-4 p-4 mt-auto">
              {member.memberBrands.map((brandSrc, idx) => (
                <div key={idx} className="relative h-6 w-16 shrink-0">
                  <Image
                    src={brandSrc}
                    alt={`brand-${idx}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            {/* ---------------- DESKTOP LAYOUT (BASE) ---------------- */}
            <div className="hidden md:flex flex-col items-center justify-center p-8 flex-1 min-h-55">
              <div className="relative w-28 h-28 mb-6 overflow-hidden rounded-full border-2 border-pine/10 bg-neutral-50 shrink-0">
                <Image
                  src={member.imgSrc}
                  alt={member.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="border-b-2 border-neutral-900 pb-1 max-w-fit">
                <h3 className="text-xl font-display font-bold uppercase text-pine">
                  {member.title}
                </h3>
              </div>
            </div>

            {/* ---------------- DESKTOP LAYOUT (HOVER OVERLAY) ---------------- */}
            <div
              className="hidden md:flex absolute inset-0 bg-neutral-900 flex-col 
                            [clip-path:inset(100%_0_0_0)] group-hover:[clip-path:inset(0_0_0_0)] 
                            transition-[clip-path] duration-500 ease-out z-20"
            >
              <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                <div className="border-b-2 border-white pb-1 max-w-fit mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  <h3 className="text-xl font-display font-bold uppercase text-white">
                    {member.title}
                  </h3>
                </div>
                <p className="text-sm font-bold text-pine uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {member.designation}
                </p>
                <p className="text-sm text-neutral-400 leading-relaxed mt-3 max-w-55 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                  {member.experience}
                </p>
              </div>

              <div className="bg-pine text-white flex flex-wrap justify-center items-center gap-4 p-4 mt-auto transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                {member.memberBrands.map((brandSrc, idx) => (
                  <div key={idx} className="relative h-10 w-20 shrink-0">
                    <Image
                      src={brandSrc}
                      alt={`brand-${idx}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-2xl sm:text-3xl md:text-[40px] font-display font-bold tracking-[-0.01em] text-neutral-800 mt-16 md:mt-24 mb-6 md:mb-12 leading-tight">
        Trusted by leaders across the value chain
      </div>
      <div className="bg-surface w-full grid grid-cols-2 md:grid-cols-5 gap-6 p-2 md:gap-12 mb-10 md:mb-16 text-center text-neutral-400 font-bold uppercase tracking-widest text-xs sm:text-sm items-center justify-items-center">
        {brands.map((b, index) => (
          <Image
            key={b.id}
            src={b.img}
            alt={b.alt}
            width={160}
            height={90}
            className={`w-full max-w-40 h-15 md:h-22.5 object-contain ${
              index === brands.length - 1 ? "col-span-2 md:col-span-1" : ""
            }`}
          />
        ))}
      </div>
      <Button title="Know More" />
    </section>
  );
}

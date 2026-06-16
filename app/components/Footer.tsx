import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="converge-container bg-canvas text-neutral-900 pt-16 md:pt-24 lg:pt-32 pb-8 md:pb-12 px-6 md:px-14 font-editorial neon-divider">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full border-b border-neutral-300 pb-12">
        <div className="flex flex-col gap-4">
          <Image src="/logo.svg" alt="Converge Logo" width={250} height={120} className="w-48 md:w-56 h-auto" />
          <p className="text-base md:text-lg mt-4 leading-relaxed">
            The intelligence infrastructure for institutional lending.
            <br />
            <span className="text-terracotta">
              Read every document. Form every assessment. Cite every conclusion.
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-2 md:pl-8 lg:pl-20 text-sm md:text-base">
          <div className="text-neutral-700 uppercase font-semibold text-xs tracking-wider mb-2">Product</div>
          <div className="cursor-pointer hover:text-pine transition-colors">Loan Officer Intelligence</div>
          <div className="cursor-pointer hover:text-pine transition-colors">Processor Intelligence</div>
          <div className="cursor-pointer hover:text-pine transition-colors">Underwriter Intelligence</div>
          <div className="cursor-pointer hover:text-pine transition-colors">CreditOS Platform</div>
        </div>
        <div className="flex flex-col gap-2 md:pl-8 lg:pl-20 text-sm md:text-base">
          <div className="text-neutral-700 uppercase font-semibold text-xs tracking-wider mb-2">Company</div>
          <div className="cursor-pointer hover:text-pine transition-colors">Intelligence</div>
          <div className="cursor-pointer hover:text-pine transition-colors">Industries</div>
          <div className="cursor-pointer hover:text-pine transition-colors">Proof</div>
          <div className="cursor-pointer hover:text-pine transition-colors">Contact Us</div>
        </div>

        <div className="flex flex-col gap-2 md:pl-8 lg:pl-20 text-sm md:text-base">
          <div className="text-neutral-700 uppercase font-semibold text-xs tracking-wider mb-2">Resources</div>
          <div className="cursor-pointer hover:text-pine transition-colors">LinkedIn</div>
          <div className="cursor-pointer hover:text-pine transition-colors">X</div>
          <div className="cursor-pointer hover:text-pine transition-colors">Facebook</div>
          <div className="cursor-pointer hover:text-pine transition-colors">YouTube</div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 text-xs md:text-sm pt-6 text-neutral-700 font-editorial">
        <div>
          © {currentYear} Converge Financial Technology Inc. All rights
          reserved.
        </div>

        <div className="flex gap-4">
          <Link href="#" className="hover:text-pine transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-pine transition-colors">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}

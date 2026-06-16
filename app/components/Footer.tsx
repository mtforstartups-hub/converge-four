import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="converge-container bg-canvas text-neutral-900 pt-32 pb-12 px-14 font-editorial neon-divider">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full border-b border-neutral-300 pb-12">
        <div className="flex flex-col gap-4">
          <Image src="/logo.svg" alt="Converge Logo" width={250} height={120} />
          <p className=" text-lg mt-4">
            The intelligence infrastructure for institutional lending.
            <br />
            <span className="text-terracotta">
              Read every document. Form every assessment. Cite every conclusion.
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-2 pl-20">
          <div className="text-neutral-700 uppercase">Product</div>
          <div>Loan Officer Intelligence</div>
          <div>Processor Intelligence</div>
          <div>Underwriter Intelligence</div>
          <div>CreditOS Platform</div>
        </div>
        <div className="flex flex-col gap-2 pl-20">
          <div className="text-neutral-700 uppercase">Company</div>
          <div>Intelligence</div>
          <div>Industries</div>
          <div>Proof</div>
          <div>Contact Us</div>
        </div>

        <div className="flex flex-col gap-2 pl-20">
          <div className="text-neutral-700 uppercase">Resources</div>
          <div>LinkedIn</div>
          <div>X</div>
          <div>Facebook</div>
          <div>YouTube</div>
        </div>
      </div>
      <div className="flex justify-between text-sm pt-4 text-neutral-700 font-editorial">
        <div>
          © {currentYear} Converge Financial Technology Inc. All rights
          reserved.
        </div>

        <div>Privacy Policy Terms and Conditions</div>
      </div>
    </footer>
  );
}

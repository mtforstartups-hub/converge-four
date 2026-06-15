"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "./Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If the user scrolls down more than 50 pixels, trigger the state
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`converge-container mx-auto w-full px-14 fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out border-b border-neutral-300 ${isScrolled ? "bg-surface" : "bg-transparent"}`}
    >
      <div className="flex justify-between items-center py-4">
        <Image
          src="/logo.svg"
          alt="converge logo"
          width={160}
          height={90}
          priority
        />
        <nav className="font-sans tracking-[0.02em] text-xl font-medium text-neutral-800">
          <ul className="flex space-x-8">
            <li>Platform </li>
            <li>Intelligence Roles</li>
            <li>About</li>
          </ul>
        </nav>

        <Button title="Book a Demo" />
      </div>
    </header>
  );
}

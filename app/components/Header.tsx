"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Auto-close mobile menu when screen size increases to desktop sizes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`converge-container mx-auto w-full px-6 md:px-14 fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out border-b border-neutral-300 ${
        isScrolled || isMenuOpen ? "bg-surface" : "bg-transparent"
      }`}
    >
      <div className="flex items-center py-4 w-full">
        {/* Left Section: Logo */}
        <div className="flex flex-1 justify-start">
          <Image
            src="/logo.svg"
            alt="converge logo"
            width={160}
            height={90}
            className="w-32 md:w-40 h-auto cursor-pointer"
            priority
          />
        </div>

        {/* Center Section: Navigation */}
        <nav className="hidden md:block font-sans tracking-[0.02em] text-base lg:text-xl font-medium text-neutral-800">
          <ul className="flex space-x-6 lg:space-x-8">
            <li className="cursor-pointer hover:text-pine transition-colors">
              Platform
            </li>
            <li className="cursor-pointer hover:text-pine transition-colors">
              Intelligence Roles
            </li>
            <li className="cursor-pointer hover:text-pine transition-colors">
              About
            </li>
          </ul>
        </nav>

        {/* Right Section: CTA & Mobile Menu */}
        <div className="flex flex-1 justify-end items-center">
          {/* Desktop Call to Action */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/login"
              className="font-sans tracking-[0.02em] text-base lg:text-xl font-medium text-neutral-800 hover:text-pine transition-colors whitespace-nowrap"
            >
              Log in
            </Link>
            <Button title="Talk to Us" />
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none z-50 cursor-pointer ml-auto"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <span
              className={`h-[2px] w-6 bg-neutral-800 transition-all duration-300 ease-in-out rounded-full ${
                isMenuOpen ? "rotate-45 translate-y-[8px]" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-neutral-800 transition-all duration-300 ease-in-out rounded-full ${
                isMenuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-neutral-800 transition-all duration-300 ease-in-out rounded-full ${
                isMenuOpen ? "-rotate-45 -translate-y-[8px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`absolute top-full left-0 w-full bg-surface shadow-xl transition-all duration-500 ease-in-out md:hidden overflow-hidden ${
          isMenuOpen
            ? "max-h-[100vh] opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col px-6 py-8 space-y-6">
          <nav className="font-sans tracking-[0.02em] text-xl md:text-2xl font-medium text-neutral-800">
            <ul className="flex flex-col space-y-6">
              <li
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-pine transition-colors cursor-pointer pb-2 border-b border-neutral-200"
              >
                Platform
              </li>
              <li
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-pine transition-colors cursor-pointer pb-2 border-b border-neutral-200"
              >
                Intelligence Roles
              </li>
              <li
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-pine transition-colors cursor-pointer pb-2 border-b border-neutral-200"
              >
                About
              </li>
            </ul>
          </nav>
          <div
            className="pt-4 flex items-center space-x-6 justify-start"
            onClick={() => setIsMenuOpen(false)}
          >
            <Link
              href="/login"
              className="font-sans tracking-[0.02em] text-xl md:text-2xl font-medium text-neutral-800 hover:text-pine transition-colors"
            >
              Log in
            </Link>
            <Button title="Talk to Us" />
          </div>
        </div>
      </div>
    </header>
  );
}

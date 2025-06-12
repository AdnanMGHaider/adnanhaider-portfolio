"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 transition-all duration-300 rounded-b-lg ${
        scrolled
          ? "bg-[#0a0a0b]/95 backdrop-blur-md border-b border-gray-800"
          : "bg-[#0a0a0b]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#84ff00] to-[#ffd93d] bg-clip-text text-transparent logo-font">
                Adnan Haider
              </span>
            </Link>
          </div>
          {/* Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {["about", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-300 hover:text-[#84ff00] transition-colors duration-300 font-medium"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
              <button className="bg-gradient-to-r from-[#84ff00] to-[#ffd93d] text-black px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#84ff00]/20 transition-all duration-300 flex items-center gap-2">
                <Download size={16} /> Resume
              </button>
            </div>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={`md:hidden fixed top-17 right-0 h-full w-64 bg-[#0a0a0b]/95 backdrop-blur-md border-l border-gray-800 transform transition-transform duration-300 ease-in-out z-50 rounded-l-lg ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 pt-6 pb-3 space-y-4">
          {["about", "projects", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="block w-full text-left px-3 py-3 text-gray-300 hover:text-[#84ff00] transition-colors duration-300 text-lg"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
          <button className="w-full bg-gradient-to-r from-[#84ff00] to-[#ffd93d] text-black px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#84ff00]/20 transition-all duration-300 flex items-center justify-center gap-2 mt-6">
            <Download size={16} /> Resume
          </button>
        </div>
      </div>
    </nav>
  );
}

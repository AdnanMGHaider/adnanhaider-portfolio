"use client";
import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-black border-t border-gray-800">
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#84ff00] rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#8b5cf6] rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 text-center space-y-6">
          <h3 className="text-xl font-normal text-center">
            <span className="text-white">Project Designed &amp; Coded by </span>
            <span className="bg-gradient-to-r from-[#84ff00] to-[#ffd93d] bg-clip-text text-transparent text-4xl logo-font">Adnan Haider</span>
          </h3>
          <p className="text-gray-400">
            Built&nbsp;with&nbsp;
            <span className="text-white font-semibold">Next.js</span>
            &nbsp;and&nbsp;
            <span className="text-white font-semibold">Tailwind CSS</span>
          </p>
        </div>

        {/* Bottom bar */}
        <div className="py-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>&copy; {year} Adnan Haider. All rights reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-gradient-to-r from-[#84ff00] to-[#ffd93d] rounded-lg flex items-center justify-center text-black hover:shadow-lg hover:shadow-[#84ff00]/20 transition-all duration-300 transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

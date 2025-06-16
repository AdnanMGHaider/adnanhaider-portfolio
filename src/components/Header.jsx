"use client";

import { useState, useEffect } from "react";
import useScrollTo from "@/hooks/useScrollTo";
import { NAV_SECTIONS, SOCIAL_LINKS } from "@/utils/constants";
import { Menu, X } from "lucide-react";

// Pretty-print section slug (e.g. "tech-stack" -> "Tech Stack")
const formatLabel = (slug) => slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
import Link from "next/link";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  /* sentinel logic */
  useEffect(() => {
    const sentinel = document.getElementById("hero-end");
    if (!sentinel) return;
    const obs = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(sentinel);
    return () => obs.disconnect();
  }, []);

  const scrollTo = useScrollTo();
  const handleNav = (id) => {
    scrollTo(id);
    setDrawerOpen(false);
  }

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed z-50 transition-all duration-300 ${
          isSticky
            ? "inset-x-4 top-4 rounded-2xl bg-black/80 backdrop-blur-lg ring-1 ring-white/20 shadow-[0_0_10px_rgba(255,255,255,0.3)]"
            : "inset-x-0 top-0 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* logo */}
            <Link href="/">
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#84ff00] to-[#ffd93d] bg-clip-text text-transparent logo-font">
                Welcome!
              </span>
            </Link>
            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_SECTIONS.map((sec) => (
                <button
                  key={sec}
                  onClick={() => handleNav(sec)}
                  className="text-[#f2ffe6] hover:underline transition"
                >
                  {formatLabel(sec)}
                </button>
              ))}
            </div>

            {/* Hamburger Menu */}
            <button
              aria-label="Open menu"
              onClick={() => setDrawerOpen(true)}
              className="md:hidden inline-flex items-center justify-center leading-none"
            >
              <Menu size={30} />
            </button>
          </div>
        </div>
      </nav>

      {/* BACKDROP BLUR */}
      {drawerOpen && (
        <div
          onClick={() => setDrawerOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
        ></div>
      )}

      {/* MOBILE DRAWER */}

      <aside
        className={`fixed top-0 right-0 z-50 w-72 max-w-[80vw]
     rounded-l-lg transform transition-transform duration-300
     bg-black/80 backdrop-blur-lg ring-1 ring-white/20
     shadow-[0_0_10px_rgba(255,255,255,0.1)]
     ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end px-6 py-4">
          <button
            aria-label="Close menu"
            onClick={() => setDrawerOpen(false)}
            className="inline-flex items-center justify-center leading-none"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col items-center gap-4 py-6 max-h-[calc(100vh-96px)] overflow-y-auto">
          {NAV_SECTIONS.map((sec) => (
            <button
              key={sec}
              onClick={() => handleNav(sec)}
              className="text-center w-full text-lg py-2 hover:bg-gray-100 rounded"
            >
              {formatLabel(sec)}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}

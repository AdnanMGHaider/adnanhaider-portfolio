"use client";
import { useEffect } from "react";
import { initBackgroundAnimation } from "@/lib/backgroundAnimation";

export default function HeroBackground() {
  useEffect(() => {
    const destroy = initBackgroundAnimation({
      selector: ".hero-canvas",
      baseHue: 84, // bright green → matches #84ff00
      rangeHue: 100,
      particleCountMobile: 300,
      particleCountDesktop: 700,
    });
    return destroy; // cleanup on unmount
  }, []);

  // pointer-events-none ensures clicks pass through to the nav
  return (
    <div className="hero-canvas fixed inset-0 -z-10 pointer-events-none" />
  );
}

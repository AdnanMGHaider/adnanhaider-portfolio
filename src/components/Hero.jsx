"use client";
// src/components/Hero.jsx
import { ChevronDown } from "lucide-react";
import Image from "next/image";

import HeroBackground from "@/components/HeroBackground";
import { SiGithub, SiLinkedin } from "react-icons/si";
import useScrollTo from "@/hooks/useScrollTo";
import PrimaryButton from "@/components/common/PrimaryButton";
import OutlineButton from "@/components/common/OutlineButton";
import SocialIconLink from "@/components/common/SocialIconLink";
import { SOCIAL_LINKS } from "@/utils/constants";

export default function Hero() {
  const scrollTo = useScrollTo();

  return (
    <section
      id="hero"
      className="min-h-screen relative pt-16 pb-10 md:pb-14 xl:pb-16"
    >
      <HeroBackground />
      <div id="hero-end" className="h-px w-full pointer-events-none" />
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 mt-8 md:mt-10 xl:mt-8  sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        {/* Top: centered headline */}
        <h1 className="text-[clamp(2.75rem,7vw,4rem)] header-font text-center">
          Hello, I'm{" "}
          <span className="bg-gradient-to-r from-[#84ff00] via-[#ffd93d] to-[#ff6b35] bg-clip-text text-transparent">
            ADNAN
          </span>
        </h1>
        {/* Mobile Layout */}
        <div className="flex flex-col md:hidden items-center">
          <h2 className="text-2xl md:text-4xl mt-4 font-medium header-font text-center">
            FULL-STACK DEVELOPER
          </h2>
          <div className="flex justify-center mt-8">
            <Image
              src="/adnan-haider.png"
              width={280}
              height={350}
              alt="Adnan Haider portrait"
              className="w-[280px] h-auto object-cover rounded-lg"
            />
          </div>
          <p className="text-md text-justify leading-relaxed mt-8 max-w-md mx-auto">
            I bring ideas to life through thoughtful, full-stack development—shaping both the logic behind the scenes and the experience up front, with AI in the toolkit to build smarter and ship faster.
            
            
          </p>
          <div className="flex gap-6 mt-8">
            <PrimaryButton onClick={() => scrollTo("projects")} className="px-8">
              View My Work
            </PrimaryButton>
            <OutlineButton onClick={() => scrollTo("contact")} className="px-8">
              Let’s Connect
            </OutlineButton>
          </div>
          <div className="flex gap-10 justify-center lg:justify-start mt-10">
            <SocialIconLink href={SOCIAL_LINKS.github.href} accentClass="hover:border-[var(--color-brand-green)] hover:shadow-[var(--color-brand-green)]/20">
              <SiGithub size={24} className="text-gray-300 hover:text-[var(--color-brand-green)]" />
            </SocialIconLink>
            <SocialIconLink href={SOCIAL_LINKS.linkedin.href} accentClass="hover:border-[var(--color-brand-orange)] hover:shadow-[var(--color-brand-orange)]/20">
              <SiLinkedin size={24} className="text-gray-300 hover:text-[var(--color-brand-orange)]" />
            </SocialIconLink>
          </div>
        </div>
        {/* Tablet / Laptop Layout */}
        <div className="hidden md:flex xl:hidden items-center gap-18 lg:gap-28 mt-8">
          {/*Left Col*/}
          <div className="flex justify-end flex-1">
            <Image
              src="/adnan-haider.png"
              width={350}
              height={420}
              alt="Adnan Haider Portrait"
              className="w-[350px] h-auto object-cover rounded-lg"
            />
          </div>
          {/*Right Col*/}
          <div className="flex flex-col flex-1 gap-10 max-w-sm">
            <h2 className="hidden md:block text-xl  md:text-4xl header-font text-left">
              FULL-STACK DEVELOPER
            </h2>
            <p className="text-lg leading-relaxed text-md">
              I bring ideas to life through thoughtful, full-stack development—shaping both the logic behind the scenes and the experience up front, with AI in the toolkit to build smarter and ship faster.
              
              
            </p>
            <div className="flex gap-4 items-start">
              <PrimaryButton onClick={() => scrollTo("projects")} className="h-14 px-6 py-2">
                View My Work
              </PrimaryButton>
              <OutlineButton onClick={() => scrollTo("contact")} className="h-14 px-6 py-2">
                Let’s Connect
              </OutlineButton>
            </div>
            <div className="flex gap-6 lg:justify-start">
              <SocialIconLink href={SOCIAL_LINKS.github.href} accentClass="hover:border-[var(--color-brand-green)] hover:shadow-[var(--color-brand-green)]/20">
                <SiGithub size={22} className="text-gray-300 hover:text-[var(--color-brand-green)]" />
              </SocialIconLink>
              <SocialIconLink href={SOCIAL_LINKS.linkedin.href} accentClass="hover:border-[var(--color-brand-orange)] hover:shadow-[var(--color-brand-orange)]/20">
                <SiLinkedin size={22} className="text-gray-300 hover:text-[var(--color-brand-orange)]" />
              </SocialIconLink>
            </div>
          </div>
        </div>
        {/* Lg screen layout / 3 layout grid */}
        <div className="hidden w-full xl:grid xl:grid-cols-3 gap-12 mt-6 items-center">
          {/* Left Column */}
          <div className="flex flex-col items-start gap-8">
            <h2 className="text-2xl font-medium header-font">
              FULL-STACK DEVELOPER
            </h2>
            <p className="text-lg leading-relaxed text-left">
              I bring ideas to life through thoughtful, full-stack development—shaping both the logic behind the scenes and the experience up front, with AI in the toolkit to build smarter and ship faster.
              
              
            </p>
            <div className="flex gap-4 items-start">
              <PrimaryButton onClick={() => scrollTo("projects")} className="h-14 px-6 py-2">
                View My Work
              </PrimaryButton>
              <OutlineButton onClick={() => scrollTo("contact")} className="h-14 px-6 py-2">
                Let’s Connect
              </OutlineButton>
            </div>
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <SocialIconLink href={SOCIAL_LINKS.github.href} accentClass="hover:border-[var(--color-brand-green)] hover:shadow-[var(--color-brand-green)]/20">
                <SiGithub size={24} className="text-gray-300 hover:text-[var(--color-brand-green)]" />
              </SocialIconLink>
              <SocialIconLink href={SOCIAL_LINKS.linkedin.href} accentClass="hover:border-[var(--color-brand-orange)] hover:shadow-[var(--color-brand-orange)]/20">
                <SiLinkedin size={24} className="text-gray-300 hover:text-[var(--color-brand-orange)]" />
              </SocialIconLink>
            </div>
          </div>
          {/* Center column */}
          <div className="text-center">
            {" "}
            <div className="flex justify-center flex-1">
              <Image
                src="/adnan-haider.png"
                width={350}
                height={420}
                alt="Adnan Haider portrait"
                className="w-[350px] h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Right column */}
          <div className="flex flex-col items-end gap-8">
            {/* Always seeking text */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#84ff00]/20 to-[#ffd93d]/20 rounded-lg border border-[#84ff00]/30">
              <span className="text-sm font-medium text-[#84ff00]">
                Always open to exciting challenges
              </span>
            </div>
            {/* Based in text */}
            <p className="text-gray-300 font medium">
              Based in Toronto, Canada
            </p>
            {/* Business Background text */}
            <div className="w-[85%] bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-lg border border-gray-700 text-right p-4">
              <p>👨🏼‍💼 ➡️ 👨🏼‍💻</p>
              <p className="text-gray-400 text-sm">
                Leveraging 5 years of business experience to transition into
                full-stack development.
              </p>
            </div>
            {/* Ai Aware text */}
            <div className="w-[85%] bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-lg border border-gray-700 text-right p-4">
              <p>💻 ➕ 🤖</p>
              <p className="text-gray-400 text-sm">
                Harnessing AI-assisted development to accelerate workflows and
                ship code faster.
              </p>
            </div>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => scrollTo("projects")}
            aria-label="Scroll to projects"
            className="focus:outline-none"
          >
            <ChevronDown
              size={24}
              className="text-gray-400 animate-bounce hover:text-white transition-colors"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

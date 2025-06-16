"use client";
import React from "react";
import { Code, Briefcase, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24 xl:py-40 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold header-font">
            About{" "}
            <span className="bg-gradient-to-r from-[#84ff00] to-[#ffd93d] bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-lg max-w-xl mx-auto mt-8 md:mt-12 text-center mb-10">
          Full-stack developer with hands-on business roots and global life experience—now focused on building clean, reliable software
          </p>
          <div className="md:hidden flex flex-wrap gap-3 justify-center">
            {[
              "Problem Solver",
              "Team Player",
              "Quick Learner",
              "Detail Oriented",
            ].map((trait) => (
              <span
                key={trait}
                className="px-4 py-2 bg-gradient-to-r from-[#84ff00]/20 to-[#ffd93d]/20 rounded-lg text-sm border border-[#84ff00]/30 text-[#84ff00] font-medium"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
        {/* Mobile Version */}
        <div className="md:hidden flex flex-col gap-4 mt-10">
          <p className="text-gray-400 leading-relaxed text-justify">
            I grew up across Oman, Malaysia, Australia, Bangladesh and now Canada, learning to adapt quickly and solve problems in diverse settings. After several years helping steer my family’s manufacturing ventures, I discovered my passion for software and retrained as a developer. Today I architect and ship scalable products with Java & Spring Boot, React / Next.js, Python, and SQL & NoSQL databases—turning ambiguous ideas into elegant, measurable results.
          </p>
          <p className="text-gray-400 leading-relaxed text-justify">
            Off the editor, you’ll find me building side projects, connecting with others in the industry, exploring the latest developments in AI, and drinking way too much coffee.
          </p>
          <p className="text-gray-400 leading-relaxed text-justify">
            Continuous learning isn’t a buzzword for me—it’s how I moved from manufacturing to code and how I stay sharp in a fast-moving industry.
          </p>
        </div>
        {/* Tablet and Larger screens */}
        <div className="hidden md:flex gap-12 items-start mt-14">
          {/* Left Column */}
          <div className="flex-1">
            <div className="flex flex-col gap-4">
              <p className="text-gray-400 leading-relaxed text-justify">
                I grew up across Oman, Malaysia, Australia, Bangladesh and now Canada, learning to adapt quickly and solve problems in diverse settings. After several years helping steer my family’s manufacturing ventures, I discovered my passion for software and retrained as a developer. Today I architect and ship scalable products with Java & Spring Boot, React / Next.js, Python, and SQL & NoSQL databases—turning ambiguous ideas into elegant, measurable results.
              </p>
              <p className="text-gray-400 leading-relaxed text-justify">
                I enjoy turning fuzzy requirements into elegant, results‑driven software.
              </p>
              <p className="text-gray-400 leading-relaxed text-left">
                Off the editor, you’ll find me building side projects, connecting with others in the industry, exploring the latest developments in AI, and drinking way too much coffee. 
              </p>
              <p className="text-gray-400 leading-relaxed text-left">
                Continuous learning isn’t a buzzword for me—it’s how I moved from manufacturing to code and how I stay sharp in a fast-moving industry.
              </p>
            </div>
          </div>
          {/* Right Column */}
          <div className="flex-1">
            <div className="flex flex-col gap-4">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700 hover:border-[#84ff00]/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 p-2 bg-gradient-to-br from-[#84ff00] to-[#ffd93d] rounded-lg flex items-center justify-center">
                    <Code size={24} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 heading-font">
                      Full-Stack Development
                    </h3>
                    <p className="text-gray-400 text-sm">
                    End-to-end ownership—from building RESTful APIs and implementing secure authentication to crafting responsive, user-friendly interfaces.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700 hover:border-[#8b5cf6]/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 p-2 bg-gradient-to-br from-[#8b5cf6] to-[#a855f7] rounded-lg flex items-center justify-center">
                    <Briefcase size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 heading-font">
                    Business Perspective
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Understanding of business requirements and market needs,
                      ensuring technical solutions align with business goals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700 hover:border-[#ff6b35]/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 p-2 bg-gradient-to-br from-[#ff6b35] to-[#ffd93d] rounded-lg flex items-center justify-center">
                    <Lightbulb size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 heading-font">
                      AI-Enhanced Workflows
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Harnessing AI-driven tools to automate tasks and
                      supercharge development efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex flex-wrap gap-3 pt-4 justify-center mt-10">
          {[
            "Problem Solver",
            "Team Player",
            "Quick Learner",
            "Detail Oriented",
          ].map((trait) => (
            <span
              key={trait}
              className="px-4 py-2 bg-gradient-to-r from-[#84ff00]/20 to-[#ffd93d]/20 rounded-lg text-sm border border-[#84ff00]/30 text-[#84ff00] font-medium"
            >
              {trait}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

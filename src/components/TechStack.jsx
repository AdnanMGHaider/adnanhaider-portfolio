"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Globe, Server, Cpu, Wrench, Palette } from "lucide-react";

export default function TechStackPage() {
  const techCategories = [
    {
      title: "Frontend",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      technologies: [
        { name: "HTML", icon: "/logos/html5-logo.svg" },
        { name: "CSS", icon: "/logos/css3-logo.svg" },
        { name: "Tailwind CSS", icon: "/logos/tailwind-logo.svg" },
        { name: "JavaScript", icon: "/logos/javascript-logo.svg" },
        { name: "TypeScript", icon: "/logos/typescript-logo.svg" },
        { name: "React", icon: "/logos/react-logo.svg" },
        { name: "Next.js", icon: "/logos/nextjs-logo.svg" },
        { name: "Angular", icon: "/logos/angular-logo.svg" },
        { name: "Ionic", icon: "/logos/ionic-logo.svg" },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      technologies: [
        { name: "Java", icon: "/logos/java-logo.svg" },
        { name: "Spring Boot", icon: "/logos/spring-logo.svg" },
        { name: "Node.js", icon: "/logos/nodejs-logo.svg" },
        { name: "Express.js", icon: "/logos/expressjs-logo.svg" },
        { name: "Python", icon: "/logos/python-logo.svg" },
        { name: "C", icon: "/logos/c-logo.svg" },
        { name: "C#", icon: "/logos/csharp-logo.svg" },
        { name: "REST APIs", icon: "/logos/rest-api-logo.svg" },
        { name: "PL/SQL", icon: "/logos/plsql-logo.svg" },
        { name: "MySQL", icon: "/logos/mysql-logo.svg" },
        { name: "PostgreSQL", icon: "/logos/postgresql-logo.svg" },
        { name: "MongoDB", icon: "/logos/mongodb-logo.svg" },
        { name: "Supabase", icon: "/logos/supabase-logo.svg" },
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: Wrench,
      color: "from-orange-500 to-red-500",
      technologies: [
        { name: "Git", icon: "/logos/git-logo.svg" },
        { name: "GitHub", icon: "/logos/github-logo.svg" },
        { name: "CI/CD", icon: "/logos/cicd-logo.svg" },
        { name: "AWS", icon: "/logos/aws-logo.svg" },
        { name: "Linux", icon: "/logos/linux-logo.svg" },
        { name: "Jira", icon: "/logos/jira-logo.svg" },
      ],
    },
    {
      title: "AI & Automation",
      icon: Cpu,
      color: "from-yellow-500 to-purple-500",
      technologies: [
        { name: "ChatGPT", icon: "/logos/chatgpt-logo.svg" },
        { name: "Cursor AI", icon: "/logos/cursor-ai-logo.svg" },
        { name: "GitHub Copilot", icon: "/logos/github-copilot-logo.svg" },
        { name: "Windsurf AI", icon: "/logos/windsurf-logo.svg" },
      ],
    },
    {
      title: "Design & Other Creative Tools",
      icon: Palette,
      color: "from-teal-500 to-blue-500",
      technologies: [
        { name: "Adobe Photoshop", icon: "/logos/photoshop-logo.svg" },
        {
          name: "Adobe Illustrator",
          icon: "/logos/adobe-illustrator-logo.svg",
        },
        { name: "Adobe After Effects", icon: "/logos/after-effects-logo.svg" },
        { name: "Adobe Premiere Pro", icon: "/logos/premiere-pro-logo.svg" },
        { name: "Figma", icon: "/logos/figma-logo.svg" },
      ],
    },
  ];

  const [openIndexMobile, setOpenIndexMobile] = useState(null);
  const toggleAccordion = (i) =>
    setOpenIndexMobile(openIndexMobile === i ? null : i);

  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleCard = (i) => setExpandedIndex((prev) => (prev === i ? null : i));

  return (
    <section id="tech-stack" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold header-font">
            Tech{" "}
            <span className="bg-gradient-to-r from-[#84ff00] to-[#ffd93d] bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <p className="mt-8 md:mt-12 text-center mb-10 text-lg max-w-2xl mx-auto">
            Key technologies I've worked with
          </p>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-4">
          {techCategories.map((cat, i) => (
            <div
              key={cat.title}
              className="bg-gray-800/50 rounded-lg border border-gray-700"
            >
              <button
                onClick={() => toggleAccordion(i)}
                className="w-full flex items-center justify-between px-4 py-3 bg-gray-700/30 text-white font-medium rounded-lg"
              >
                {cat.title}
                <ChevronDown
                  className={`${
                    openIndexMobile === i ? "transform rotate-180" : ""
                  } transition-transform duration-200`}
                />
              </button>
              {openIndexMobile === i && (
                <div className="px-6 py-4 bg-gray-900/50 grid grid-cols-2 gap-4">
                  {cat.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center gap-3 p-4 bg-gray-700/30 rounded-lg border border-gray-600"
                    >
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={36}
                        height={36}
                        className="h-8 w-8 sm:h-9 sm:w-9"
                      />
                      <span className="text-sm text-gray-200 text-center">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Grid with Expandable Cards */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 items-start gap-8">
          {techCategories.map((cat, idx) => {
            const Icon = cat.icon;
            const isExpanded = expandedIndex === idx;
            const previewTech = isExpanded
              ? cat.technologies
              : cat.technologies.slice(0, 6);
            const isLast = idx === techCategories.length - 1;
            return (
              <div
                key={cat.title}
                className={`group bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-[#84ff00]/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 ${
                  isLast
                    ? "md:col-start-1 md:col-span-2 lg:col-start-2 lg:col-span-2"
                    : ""
                }`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center justify-center mb-6">
                  <div
                    className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg mb-4`}
                  >
                    <Icon size={32} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white text-center mb-6">
                  {cat.title}
                </h3>
                <div
                  className={`grid grid-cols-2 ${
                    isLast ? "md:grid-cols-4" : ""
                  } gap-4`}
                >
                  {previewTech.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center gap-3 p-4 bg-gray-700/30 rounded-lg border border-gray-600 hover:border-[#8b5cf6]/50 hover:bg-gray-700/50 transition-all duration-300"
                    >
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={40}
                        height={40}
                        className="h-8 w-8 sm:h-10 sm:w-10"
                      />
                      <span className="text-gray-300 font-medium text-xs text-center">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
                {cat.technologies.length > 6 && (
                  <button
                    onClick={() => toggleCard(idx)}
                    className="mt-4 w-full flex items-center justify-center text-sm text-gray-300 hover:underline"
                  >
                    {isExpanded ? "Show Less" : "Show More"}
                    <ChevronDown
                      size={16}
                      className={`${
                        isExpanded ? "transform rotate-180" : ""
                      } ml-1 transition-transform duration-200 text-gray-300`}
                    />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

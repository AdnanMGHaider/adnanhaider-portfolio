'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink, Github, Star, Zap } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Pennywise – Personal Finance App',
      description:
        'Full-stack personal finance app that helps users track expenses, manage budgets and goals, and receive AI-powered financial insights.',
      tech: ['Next.js 15', 'Tailwind CSS', 'Spring Boot', 'Supabase', 'OpenAI API'],
      image: '/project-screenshots/pennywise-screenshot.png',
      liveUrl: 'https://pennywise-fullstack.vercel.app',
      repoUrl: 'https://github.com/AdnanMGHaider/pennywise-fullstack',
      color: 'from-green-500 to-yellow-400',
      featured: false,
      status: 'LIVE',
    },
    {
      title: 'Product Catalog Manager',
      description:
        'CRUD web app for creating / editing / deleting products and categories, built with Spring Boot 3, Thymeleaf views, and Spring Data JPA. Packaged with Docker and deployed on Render.',
      tech: ['Spring Boot 3', 'Thymeleaf', 'Spring Data JPA', 'H2', 'Docker'],
      image: '/project-screenshots/product-catalog-manager-screenshot.png',
      liveUrl: 'https://product-catalog-manager-zzjw.onrender.com/',
      repoUrl: 'https://github.com/AdnanMGHaider/product-catalog-manager',
      color: 'from-yellow-500 to-orange-500',
      featured: false,
      status: 'LIVE',
    },
    {
      title: 'ShopEase – Headless E-Commerce Platform',
      description:
        'Modular storefront with product catalogs, cart/checkout via Stripe, and admin dashboard for inventory and orders.',
      tech: ['Next.js 15', 'Stripe', 'Spring Boot', 'PostgreSQL'],
      image:
        'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '',
      repoUrl: '',
      color: 'from-indigo-500 to-blue-500',
      featured: false,
      status: 'Coming Soon',
    },
    {
      title: 'TravelMate – Collaborative Trip Planning App',
      description:
        'Plan trips with friends: build itineraries on a map, split expenses, and get AI-powered travel suggestions.',
      tech: ['Next.js 15', 'Google Maps API', 'Spring Boot', 'Supabase', 'OpenAI API'],
      image:
        'https://images.pexels.com/photos/2611029/pexels-photo-2611029.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '',
      repoUrl: '',
      color: 'from-purple-500 to-pink-500',
      featured: false,
      status: 'Coming Soon',
    },
    {
      title: 'HealthConnect – Telemedicine Scheduling App',
      description:
        'Patients book video-consultations; doctors manage slots and notes via a unified dashboard (WebRTC).',
      tech: ['Next.js 15', 'WebRTC', 'Spring Boot', 'Supabase'],
      image:
        'https://images.pexels.com/photos/7885659/pexels-photo-7885659.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '',
      repoUrl: '',
      color: 'from-pink-500 to-red-500',
      featured: false,
      status: 'Coming Soon',
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-24 xl:py-40 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 header-font">
            Project{' '}
            <span className="bg-gradient-to-r from-[#84ff00] to-[#ffd93d] bg-clip-text text-transparent">
              Showcase
            </span>
          </h2>
          <p className="text-lg max-w-xl mx-auto mt-8 md:mt-12 text-center mb-10">
            These are some projects I've built with various technologies
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-[#84ff00]/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {project.featured && (
                <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-[#84ff00] to-[#ffd93d] text-black text-xs font-bold px-3 py-1 flex items-center gap-1">
                  <Zap size={12} /> Limited Edition
                </div>
              )}
              <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur text-white text-xs font-medium px-3 py-1 rounded-lg border border-gray-600">
                {project.status}
              </div>

              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#84ff00] transition-colors duration-300 mb-2 heading-font">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-lg border border-gray-600 group-hover:border-[#8b5cf6] group-hover:text-[#8b5cf6] transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-[#84ff00] to-[#ffd93d] text-black px-4 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#84ff00]/20 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 opacity-50 cursor-not-allowed bg-gray-700 px-4 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 text-sm"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </button>
                  )}

                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-[#8b5cf6] text-[#8b5cf6] px-4 py-2 rounded-lg font-semibold hover:bg-[#8b5cf6] hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm"
                    >
                      <Github size={14} /> GitHub
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 opacity-50 cursor-not-allowed border border-gray-600 px-4 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 text-sm"
                    >
                      <Github size={14} /> GitHub
                    </button>
                  )}
                </div>
              </div>

              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl pointer-events-none`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

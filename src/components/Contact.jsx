"use client";
import React, { useState } from "react";
import { Mail, Github, Linkedin, Send, MapPin, Phone } from "lucide-react";
import SocialIconLink from "@/components/common/SocialIconLink";
import { SOCIAL_LINKS } from "@/utils/constants";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 md:py-24 xl:py-40 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold header-font">
            Get&nbsp;
            <span className="bg-gradient-to-r from-[#84ff00] to-[#ffd93d] bg-clip-text text-transparent">
              In Touch
            </span>
          </h2>
          <p className="text-lg max-w-xl mx-auto mt-8 md:mt-12 text-center mb-10">
            Ready to bring your next project to life? Let's discuss how we can
            work together to create something amazing.en
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm always interested in new opportunities, challenging
                projects, and meaningful collaborations. Whether you're a
                startup looking to build your MVP or an established company
                seeking to innovate, let's discuss how I can help bring your
                vision to life.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#84ff00] to-[#ffd93d] rounded-lg flex items-center justify-center">
                  <MapPin size={20} className="text-black" />
                </div>
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-gray-400">Toronto, Canada</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#8b5cf6] to-[#a855f7] rounded-lg flex items-center justify-center">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-400">adnan.mgh92@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ff6b35] to-[#ffd93d] rounded-lg flex items-center justify-center">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-gray-400">+1 (647) 323-7508</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold text-white mb-4">
                Connect With Me
              </h4>
              <div className="flex gap-4">
                <SocialIconLink href={SOCIAL_LINKS.github.href} accentClass="hover:border-[var(--color-brand-green)] hover:shadow-[var(--color-brand-green)]/20">
                  <Github size={20} className="text-gray-300 hover:text-[var(--color-brand-green)]" />
                </SocialIconLink>
                <SocialIconLink href={SOCIAL_LINKS.linkedin.href} accentClass="hover:border-[#0077b5] hover:shadow-[#0077b5]/20">
                  <Linkedin size={20} className="text-gray-300 hover:text-[#0077b5]" />
                </SocialIconLink>
                <SocialIconLink href={SOCIAL_LINKS.email.href} accentClass="hover:border-[#ea4335] hover:shadow-[#ea4335]/20">
                  <Mail size={20} className="text-gray-300 hover:text-[#ea4335]" />
                </SocialIconLink>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#84ff00] focus:ring-2 focus:ring-[#84ff00]/20 focus:outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#84ff00] focus:ring-2 focus:ring-[#84ff00]/20 focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#84ff00] focus:ring-2 focus:ring-[#84ff00]/20 focus:outline-none transition-all duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What is your message to me?"
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#84ff00] focus:ring-2 focus:ring-[#84ff00]/20 focus:outline-none transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#84ff00] to-[#ffd93d] text-black px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#84ff00]/20 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "success" && (
                <p className="text-sm text-green-400 pt-4 text-center">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400 pt-4 text-center">Something went wrong. Please try again.</p>
              )}

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

export default function OutlineButton({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`border-2 border-[var(--color-accent-purple)] text-[var(--color-accent-purple)] rounded-lg px-6 py-4 font-semibold hover:bg-[var(--color-accent-purple)] hover:text-white transition-all duration-300 transform hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
}

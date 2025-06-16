"use client";

export default function PrimaryButton({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`bg-gradient-to-r from-[var(--color-brand-green)] via-[var(--color-brand-yellow)] to-[var(--color-brand-orange)] text-black rounded-lg px-6 py-4 font-semibold hover:shadow-lg hover:shadow-[var(--color-brand-green)]/20 transition-all duration-300 transform hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
}

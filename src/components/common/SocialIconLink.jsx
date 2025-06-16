"use client";

/**
 * Generic rounded social icon link used across the site.
 * Accepts any child icon component and optional accent colour Tailwind classes for hover/border effects.
 */
export default function SocialIconLink({
  href,
  ariaLabel = href,
  children,
  accentClass = "hover:border-white hover:shadow-white/20",
  className = "",
  ...props
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      aria-label={ariaLabel}
      className={`w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg border border-gray-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${accentClass} ${className}`.trim()}
    >
      {children}
    </a>
  );
}

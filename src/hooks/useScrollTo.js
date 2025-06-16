import { useCallback } from "react";

/**
 * Returns a memoised function that smoothly scrolls to a DOM element
 * with the provided id (if found in the document).
 */
export default function useScrollTo() {
  return useCallback((id) => {
    if (typeof window === "undefined") return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
}

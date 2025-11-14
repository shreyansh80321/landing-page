// src/hooks/useRevealOnScroll.js
import { useEffect } from "react";

/**
 * useRevealOnScroll
 * - Observes elements with attribute `data-reveal`
 * - When element intersects, adds class `reveal-visible`
 * - If prefers-reduced-motion is true, marks elements visible immediately
 *
 * Usage: import and call inside a component (no args).
 */
export default function useRevealOnScroll(prefersReducedMotion = false) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-reveal]"));

    if (!els.length) return;

    // If reduced motion, reveal immediately and don't observe
    if (prefersReducedMotion) {
      els.forEach((el) => el.classList.add("reveal-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target); // reveal once
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [prefersReducedMotion]);
}

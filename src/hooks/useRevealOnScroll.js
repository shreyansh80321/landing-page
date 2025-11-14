// src/hooks/useRevealOnScroll.js
import { useEffect } from "react";

export default function useRevealOnScroll(prefersReducedMotion = false) {
  useEffect(() => {
    if (typeof document === "undefined") return;

    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!els.length) return;

    if (prefersReducedMotion) {
      els.forEach((el) => el.classList.add("reveal-visible"));
      return;
    }

    els.forEach((el, i) => {
      const explicit = el.getAttribute("data-reveal-delay");
      if (explicit) {
        el.style.animationDelay = explicit;
      } else {
        el.style.animationDelay = `${i * 90}ms`;
      }
      el.style.willChange = "opacity, transform";
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const node = entry.target;
          node.classList.add("reveal-visible");
          io.unobserve(node);
          // optional: remove will-change after animation completes
          const duration =
            parseFloat(getComputedStyle(node).animationDuration) || 0;
          const delay = parseFloat(node.style.animationDelay) || 0;
          const total = (duration + delay) * 1000;
          if (total > 0) {
            setTimeout(() => {
              try {
                node.style.willChange = "";
              } catch {}
            }, total + 100);
          } else {
            node.style.willChange = "";
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    els.forEach((el) => io.observe(el));

    return () => {
      try {
        io.disconnect();
      } catch {}
    };
  }, [prefersReducedMotion]);
}

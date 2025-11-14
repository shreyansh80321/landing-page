import { useEffect, useState } from "react";
export default function usePrefersReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    // Guard for SSR / older browsers
    if (
      typeof window === "undefined" ||
      typeof window.matchMedia === "undefined"
    ) {
      setPrefersReduced(false);
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    // set initial value
    setPrefersReduced(Boolean(mediaQuery.matches));

    // event handler for changes
    const handleChange = () => setPrefersReduced(Boolean(mediaQuery.matches));

    // Prefer addEventListener where available (modern browsers), fallback to addListener
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    } else if (typeof mediaQuery.addListener === "function") {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }

    // No-op cleanup
    return undefined;
  }, []);

  return prefersReduced;
}

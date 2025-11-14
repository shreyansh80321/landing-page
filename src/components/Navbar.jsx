import React, { useEffect, useRef, useState } from "react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Products", href: "#products" },
  { name: "Capabilities", href: "#capabilities" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  // Keep refs for last scroll position and rAF id to avoid re-renders
  const lastYRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    lastYRef.current = window.scrollY || 0;

    function onScroll() {
      if (tickingRef.current) return;
      tickingRef.current = true;

      // use rAF for smoother throttling
      window.requestAnimationFrame(() => {
        const currentY = window.scrollY || 0;
        const lastY = lastYRef.current;

        // if menu open, keep visible
        if (open) {
          setVisible(true);
        } else {
          // if scrolling down and past threshold -> hide
          if (currentY > lastY && currentY > 80) {
            setVisible(false);
          } else {
            // scrolling up -> show
            setVisible(true);
          }
        }

        lastYRef.current = currentY;
        tickingRef.current = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <header
      // translateY to hide/show, nice transition
      className="fixed top-0 left-0 right-0 z-[99999] pointer-events-auto"
      style={{
        transform: visible ? "translateY(0)" : "translateY(-120%)",
        transition: "transform 280ms cubic-bezier(.2,.9,.3,1)",
        willChange: "transform",
      }}
    >
      {/* FULL-BLEED BACKGROUND BAR (edge-to-edge) */}
      <div
        className="w-full"
        style={{
          background: "rgba(10,12,15,0.98)",
          borderBottom: "1px solid rgba(255,255,255,0.03)",
          boxShadow: "0 14px 40px rgba(0,0,0,0.7)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* CENTERED CONTENT */}
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-3 no-underline select-none"
            aria-label="VyomGarud home"
          >
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center font-extrabold text-black"
              style={{
                background: "linear-gradient(135deg,#ff7b00,#ffb36b)",
                boxShadow: "0 6px 18px rgba(0,0,0,0.4)",
              }}
            >
              VG
            </div>

            <div className="hidden sm:block">
              <div className="text-sm font-semibold text-white">VyomGarud</div>
              <div className="text-xs text-gray-300 -mt-0.5">
                Precision UAV Systems
              </div>
            </div>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/90 hover:text-white text-sm font-medium transition"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md font-semibold"
              style={{
                background: "linear-gradient(90deg,#ff7b00,#ffb36b)",
                color: "#000",
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              }}
            >
              Contact Sales
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M5 12h14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </nav>

          {/* Mobile button */}
          <button
            onClick={() => setOpen((s) => !s)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg"
            style={{ background: "rgba(255,255,255,0.08)", color: "#fff" }}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden>
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden>
                <path
                  d="M3 7h18M3 12h18M3 17h18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu full width */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 w-full"
        style={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
          background: "rgba(10,12,15,0.95)",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
          backdropFilter: "blur(10px)",
        }}
      >
        {open && (
          <div className="flex flex-col px-6 py-4 max-w-7xl mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-3 px-2 text-white/95 hover:bg-white/5 rounded-md font-medium transition"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="mt-3 inline-flex items-center justify-center px-4 py-2 rounded-md font-semibold"
              style={{
                background: "linear-gradient(90deg,#ff7b00,#ffb36b)",
                color: "#000",
              }}
            >
              Contact Sales
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

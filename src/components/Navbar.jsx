

import React, { useEffect, useRef, useState, useCallback } from "react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Products", href: "#products" },
  { name: "Capabilities", href: "#capabilities" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const lastYRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    lastYRef.current = typeof window !== "undefined" ? window.scrollY : 0;

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;

      window.requestAnimationFrame(() => {
        const currentY = window.scrollY || 0;
        const lastY = lastYRef.current;

        if (open) {
          setVisible(true);
        } else {
          if (currentY > lastY && currentY > 80) {
            setVisible(false);
          } else {
            setVisible(true);
          }
        }

        lastYRef.current = currentY;
        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  const toggleOpen = useCallback(() => setOpen((s) => !s), []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[99999] pointer-events-auto"
      style={{
        transform: visible ? "translateY(0)" : "translateY(-120%)",
        transition: "transform 280ms cubic-bezier(.2,.9,.3,1)",
        willChange: "transform",
      }}
    >
      <div
        className="w-full"
        style={{
          background:
            "linear-gradient(90deg, #0a0f1a 0%, #0d1826 50%, #0a0f1a 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          boxShadow:
            "0 18px 45px rgba(0,0,0,0.55), inset 0 -1px 6px rgba(0,0,0,0.35)",
          backdropFilter: "blur(14px) saturate(1.3)",
        }}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-3">
          <a
            href="/"
            className="flex items-center gap-3 no-underline select-none"
            aria-label="VyomGarud home"
          >
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center font-extrabold text-black"
              style={{
                background: "linear-gradient(135deg,#ff8a00,#ffb76b)",
                boxShadow:
                  "0 8px 22px rgba(255,138,0,0.15), 0 2px 8px rgba(0,0,0,0.45)",
                border: "1px solid rgba(255,255,255,0.08)",
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

          <nav
            className="hidden md:flex items-center gap-3"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 rounded-lg bg-white/5 border border-white/8 backdrop-blur-md text-gray-200 hover:bg-white/8 hover:text-white text-sm font-medium transition-shadow shadow-sm hover:shadow-md"
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              style={{
                background: "linear-gradient(90deg,#ff8a00,#ffb36b)",
                color: "#071017",
                boxShadow: "0 8px 24px rgba(255,138,0,0.14)",
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

          <button
            onClick={toggleOpen}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            style={{
              background: "rgba(255,255,255,0.04)",
              color: "#fff",
              boxShadow: "0 6px 18px rgba(0,0,0,0.45)",
            }}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
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

      <div
        className="md:hidden overflow-hidden transition-[opacity,max-height] duration-300 w-full"
        style={{
          maxHeight: open ? 400 : 0,
          opacity: open ? 1 : 0,
          background: "linear-gradient(180deg, #0b1119 0%, #0a1220 100%)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          backdropFilter: "blur(12px)",
        }}
        aria-hidden={!open}
      >
        {open && (
          <div className="flex flex-col px-6 py-4 max-w-7xl mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-3 px-2 text-gray-100 hover:bg-white/5 rounded-md font-medium transition"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="mt-3 inline-flex items-center justify-center px-4 py-2 rounded-md font-semibold"
              style={{
                background: "linear-gradient(90deg,#ff8a00,#ffb36b)",
                color: "#071017",
                boxShadow: "0 8px 20px rgba(255,138,0,0.12)",
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

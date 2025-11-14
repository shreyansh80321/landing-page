// src/components/Hero/Hero.jsx
import React from "react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion.js";
import useRevealOnScroll from "../hooks/useRevealOnScroll.js";

export default function Hero() {
  const reduced = usePrefersReducedMotion();
  useRevealOnScroll(reduced);

  return (
    <section
      className="relative min-h-[75vh] md:min-h-[85vh] flex items-center text-white overflow-hidden font-inter"
      aria-label="VyomGarud hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          // backgroundImage: `url(${heroBg})`,
          filter: "brightness(0.45) contrast(1.02)",
        }}
      />

      <div
        className="absolute inset-0 -z-5"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,10,15,0.6) 0%, rgba(8,10,15,0.72) 60%, rgba(8,10,15,0.85) 100%)",
        }}
      />

      <div className="container relative z-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1
              data-reveal
              className="reveal font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
            >
              <span className="block text-charcoal/0">Vyom</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white/100 to-white/85">
                VyomGarud — Precision UAV Systems
              </span>
            </h1>

            <p
              data-reveal
              className="reveal mt-6 max-w-xl text-gray-200 text-lg md:text-xl font-inter"
            >
              Designing rugged, military-grade unmanned platforms for
              long-endurance operations, secure autonomy, and precision payload
              delivery.
            </p>
            <div
              data-reveal
              className="reveal mt-8 flex flex-wrap gap-3 items-center"
            >
              <a
                href="#"
                className="inline-flex font-poppins items-center gap-2 px-5 py-3 border border-white/10 text-sm rounded-md hover:bg-white/5 transition"
              >
                Get in touch
                <svg className="w-4 h-4 mt-0.5" viewBox="0 0 24 24" fill="none">
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

              <a
                href="#"
                className="inline-flex font-poppins items-center gap-2 px-5 py-3 border border-white/10 text-sm rounded-md hover:bg-white/5 transition"
              >
                View Products
              </a>
            </div>
            <div
              data-reveal
              className="reveal mt-8 flex flex-wrap gap-3 font-montserrat"
            >
              <div className="inline-flex items-center gap-3 px-3 py-2 bg-white/6 rounded-md text-sm">
                <strong className="text-sm">⟡</strong>
                <span className="text-xs md:text-sm">Long Endurance</span>
              </div>

              <div className="inline-flex items-center gap-3 px-3 py-2 bg-white/6 rounded-md text-sm">
                <strong className="text-sm">⚙</strong>
                <span className="text-xs md:text-sm">
                  Autonomous Navigation
                </span>
              </div>

              <div className="inline-flex items-center gap-3 px-3 py-2 bg-white/6 rounded-md text-sm">
                <strong className="text-sm">🔒</strong>
                <span className="text-xs md:text-sm">Secure Comms</span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex justify-end">
            <div
              data-reveal
              className="reveal w-full max-w-md bg-gradient-to-br from-gray-800/60 to-gray-700/40 border border-white/5 rounded-2xl p-5 shadow-2xl backdrop-blur-sm font-inter"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-accent/90 to-accent/60 flex items-center justify-center text-black font-bold font-poppins">
                  UAV
                </div>

                <div>
                  <div className="text-sm text-gray-300 font-montserrat">
                    Featured platform
                  </div>
                  <div className="mt-2 font-poppins font-semibold text-lg">
                    Endurance Mk-II
                  </div>
                  <div className="text-xs text-gray-400 mt-1 font-inter">
                    14+ hours endurance • modular payloads • hardened airframe
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-xs text-gray-400 font-montserrat">
                  Range
                </div>
                <div className="font-medium font-inter">Up to 250 km</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

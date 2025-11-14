// src/pages/Home.jsx
import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import ProductCard from "../components/ProductCard";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  const bgGradient = `linear-gradient(
    180deg,
    #071023 0%,
    #0b2133 20%,
    #11283c 45%,
    #1b1f2a 75%,
    #07090b 100%
  )`;

  return (
    <div
      className="min-h-screen text-white antialiased font-inter"
      style={{
        background: bgGradient,
        backgroundAttachment: "fixed",
        boxShadow: "inset 0 -120px 120px rgba(4,6,8,0.6)",
      }}
    >
      <svg
        aria-hidden
        className="pointer-events-none fixed inset-0 w-full h-full -z-10"
        style={{ opacity: 0.06 }}
      >
        <filter id="grainFilter">
          <feTurbulence
            baseFrequency="0.8"
            numOctaves="1"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#grainFilter)"
          fill="#000"
        />
      </svg>

      <Navbar />

      <main className="pt-[84px]">
        <Hero />
        <section className="w-full bg-transparent border-t border-white/4">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <div className="max-w-3xl">
              <h2
                className="font-poppins text-3xl md:text-4xl font-extrabold mb-3 animate-fadeUp"
                style={{ animationDelay: "0ms" }}
              >
                Our Capabilities
              </h2>

              <p
                className="font-inter text-gray-300 mb-10 leading-relaxed animate-fadeUp"
                style={{ animationDelay: "80ms" }}
              >
                Advanced unmanned platforms and systems engineered for
                endurance, precision delivery, and resilient autonomy.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                className="animate-fadeUp"
                style={{ animationDelay: "140ms" }}
              >
                <ProductCard
                  title="Endurance UAV"
                  desc="Long flight times for wide-area coverage."
                  icon="⟡"
                />
              </div>

              <div
                className="animate-fadeUp"
                style={{ animationDelay: "200ms" }}
              >
                <ProductCard
                  title="Precision Delivery"
                  desc="Accurate payload delivery the modules."
                  icon="📦"
                />
              </div>

              <div
                className="animate-fadeUp"
                style={{ animationDelay: "260ms" }}
              >
                <ProductCard
                  title="Autonomous Nav"
                  desc="Robust autonomy for contested environments."
                  icon="⚙"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="bg-transparent border-t border-white/6">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h3
                  className="font-poppins text-3xl font-extrabold mb-4 animate-fadeUp"
                  style={{ animationDelay: "320ms" }}
                >
                  Why VyomGarud
                </h3>

                <p
                  className="font-inter text-gray-300 mb-6 max-w-xl animate-fadeUp"
                  style={{ animationDelay: "360ms" }}
                >
                  We combine rugged hardware, secure communications, and
                  mission-proven autonomy.
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <li
                    className="flex gap-3 items-start animate-fadeUp"
                    style={{ animationDelay: "420ms" }}
                  >
                    <div className="flex-none w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-black font-semibold">
                      ⟡
                    </div>
                    <div>
                      <div className="font-semibold font-poppins">
                        Long Endurance
                      </div>
                      <div className="text-sm text-gray-400 font-inter">
                        14+ hour flight envelopes
                      </div>
                    </div>
                  </li>

                  <li
                    className="flex gap-3 items-start animate-fadeUp"
                    style={{ animationDelay: "460ms" }}
                  >
                    <div className="flex-none w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-black font-semibold">
                      ⚙
                    </div>
                    <div>
                      <div className="font-semibold font-poppins">
                        Autonomous Systems
                      </div>
                      <div className="text-sm text-gray-400 font-inter">
                        Robust perception & navigation stacks
                      </div>
                    </div>
                  </li>

                  <li
                    className="flex gap-3 items-start animate-fadeUp"
                    style={{ animationDelay: "500ms" }}
                  >
                    <div className="flex-none w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-black font-semibold">
                      🔒
                    </div>
                    <div>
                      <div className="font-semibold font-poppins">
                        Secure Comms
                      </div>
                      <div className="text-sm text-gray-400 font-inter">
                        Hardened links & encrypted telemetry
                      </div>
                    </div>
                  </li>

                  <li
                    className="flex gap-3 items-start animate-fadeUp"
                    style={{ animationDelay: "540ms" }}
                  >
                    <div className="flex-none w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-black font-semibold">
                      🛠
                    </div>
                    <div>
                      <div className="font-semibold font-poppins">
                        Field Serviceable
                      </div>
                      <div className="text-sm text-gray-400 font-inter">
                        Modular avionics & payload bays
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div
                className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 border border-white/6 rounded-2xl p-6 shadow-2xl animate-fadeUp"
                style={{ animationDelay: "600ms" }}
              >
                <Highlights />
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-3xl mx-auto">
            <h2
              className="font-poppins text-2xl md:text-3xl font-semibold mb-4 animate-fadeUp"
              style={{ animationDelay: "660ms" }}
            >
              Contact Us
            </h2>

            <p
              className="font-inter text-gray-300 mb-6 animate-fadeUp"
              style={{ animationDelay: "700ms" }}
            >
              Tell us about your requirements — our teams will respond within
              one business day.
            </p>

            <div
              className="bg-[#0b1116dd] border border-white/8 rounded-2xl p-8 shadow-lg animate-fadeUp"
              style={{ animationDelay: "760ms" }}
            >
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

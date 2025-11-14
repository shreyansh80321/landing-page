import React from "react";

export default function Highlights() {
  return (
    <section className="bg-transparent">
      <div className="max-w-3xl">
        <div
          className="bg-gradient-to-br from-gray-800/60 to-gray-700/40 border border-white/6 rounded-2xl p-6 shadow-2xl backdrop-blur-sm reveal"
          data-reveal
          data-reveal-delay="50ms"
        >
          <h2
            className="text-2xl font-poppins font-semibold text-white mb-6 reveal"
            data-reveal
            data-reveal-delay="100ms"
          >
            Why VyomGarud?
          </h2>

          <p
            className="text-sm text-gray-300 mb-6 max-w-md reveal"
            data-reveal
            data-reveal-delay="250ms"
          >
            Mission-proven platforms built for endurance, precise delivery, and
            resilient autonomy in the harshest environments.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              className="flex gap-4 items-start p-4 bg-white/3 rounded-lg transition-transform transform hover:-translate-y-1 reveal"
              data-reveal
              data-reveal-delay="300ms"
            >
              <div className="flex-none w-10 h-10 rounded-lg bg-accent/90 flex items-center justify-center text-black font-semibold">
                ⟡
              </div>
              <div>
                <div className="font-semibold text-white text-sm">
                  High reliability
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Redundant systems & flight-proven hardware
                </div>
              </div>
            </div>

            <div
              className="flex gap-4 items-start p-4 bg-white/3 rounded-lg transition-transform transform hover:-translate-y-1 reveal"
              data-reveal
              data-reveal-delay="380ms"
            >
              <div className="flex-none w-10 h-10 rounded-lg bg-accent/80 flex items-center justify-center text-black font-semibold">
                ⚙
              </div>
              <div>
                <div className="font-semibold text-white text-sm">
                  Modular payloads
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Quick-swap bays for cameras, sensors & delivery
                </div>
              </div>
            </div>

            <div
              className="flex gap-4 items-start p-4 bg-white/3 rounded-lg transition-transform transform hover:-translate-y-1 reveal"
              data-reveal
              data-reveal-delay="450ms"
            >
              <div className="flex-none w-10 h-10 rounded-lg bg-accent/70 flex items-center justify-center text-black font-semibold">
                🔒
              </div>
              <div>
                <div className="font-semibold text-white text-sm">
                  Secure comms
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Encrypted links & tamper-resistant telemetry
                </div>
              </div>
            </div>

            <div
              className="flex gap-4 items-start p-4 bg-white/3 rounded-lg transition-transform transform hover:-translate-y-1 reveal"
              data-reveal
              data-reveal-delay="520ms"
            >
              <div className="flex-none w-10 h-10 rounded-lg bg-accent/60 flex items-center justify-center text-black font-semibold">
                🛠
              </div>
              <div>
                <div className="font-semibold text-white text-sm">
                  Field serviceable
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Modular avionics for rapid maintenance
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

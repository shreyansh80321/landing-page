import React from "react";

export default function Hero() {

  return (
    <section className="min-h-[70vh] flex items-center bg-linear-to-br from-gray-900 to-gray-800 text-white">
      <div className="container">
       
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            VyomGarud — Precision UAV Systems
          </h1>

          <p className="mt-4 max-w-xl">
            Designing resilient unmanned aerial platforms for long-endurance
            missions, autonomous navigation, and precision delivery.
          </p>

          <div className="mt-6">
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-accent text-black rounded-md font-medium"
            >
              Get in touch
            </a>
          </div>
      </div>
    </section>
  );
}

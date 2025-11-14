
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0b0f14] text-gray-300 py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm tracking-wide font-medium text-gray-400">
          © {new Date().getFullYear()} VyomGarud • All Rights Reserved
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span className="opacity-80">Built with</span>
          <span className="font-semibold text-white/90">React</span>
          <span className="text-accent">•</span>
          <span className="font-semibold text-white/90">Vite</span>
          <span className="text-accent">•</span>
          <span className="font-semibold text-white/90">Tailwind</span>
          <span className="text-accent">•</span>
          <span className="font-semibold text-white/90">Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}

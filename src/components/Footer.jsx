import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between">
        <div>© {new Date().getFullYear()} VyomGarud</div>

        <div className="text-sm">
          Built with React, Vite, Tailwind & Framer Motion
        </div>
      </div>
    </footer>
  );
}

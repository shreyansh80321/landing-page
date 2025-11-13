import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container flex items-center justify-between h-16">
        <div className="font-bold text-xl">VyomGarud</div>

        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#" className="hover:text-accent">
            Home
          </a>
          <a href="#" className="hover:text-accent">
            Products
          </a>
          <a href="#contact" className="hover:text-accent">
            Contact
          </a>
        </nav>

        <button className="md:hidden">Menu</button>
      </div>
    </header>
  );
}

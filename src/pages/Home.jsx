import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import ProductCard from "../components/ProductCard";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />

      <main>
        <Hero />

        <section className="container py-20">
          <h2 className="text-3xl font-semibold mb-8">Our Capabilities</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProductCard
              title="Endurance UAV"
              desc="Long flight times for wide-area coverage."
            />
            <ProductCard
              title="Precision Delivery"
              desc="Accurate payload delivery modules."
            />
            <ProductCard
              title="Autonomous Nav"
              desc="Robust autonomy for contested environments."
            />
          </div>
        </section>

        <Highlights />

        <section id="contact" className="container py-16">
          <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
          <ContactForm />
        </section>
      </main>

      <Footer />
    </div>
  );
}

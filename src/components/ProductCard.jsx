import React from "react";

export default function ProductCard({ title, desc }) {
  return (
    <article
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
     
      className="p-6 bg-white rounded-lg shadow"
    >
      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </article>
  );
}

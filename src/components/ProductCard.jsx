import React from "react";

export default function ProductCard({ title, desc, icon, delay }) {
  return (
    <article
      className="
        p-6 
        rounded-2xl 
        bg-gradient-to-br from-gray-800/60 to-gray-700/30 
        border border-white/10 
        shadow-lg 
        backdrop-blur-md
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        hover:scale-[1.03]
        hover:border-white/20
        reveal
      "
      data-reveal
      {...(delay ? { "data-reveal-delay": delay } : {})}
    >
      <div className="flex items-start gap-4">
        {icon && (
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent text-black font-bold text-xl">
            {icon}
          </div>
        )}

        <div>
          <h3 className="text-lg font-poppins font-semibold text-white">
            {title}
          </h3>

          <p className="mt-2 text-sm text-gray-300 leading-relaxed">{desc}</p>
        </div>
      </div>
    </article>
  );
}

import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("send", form);

    setSent(true);
    setForm({ name: "", email: "", message: "" });

    setTimeout(() => setSent(false), 4000); // auto hide
  }

  return (
    <form
      className="
        max-w-xl mx-auto
        bg-[#0b1116dd]
        backdrop-blur-md
        border border-white/10
        rounded-2xl 
        p-8
        shadow-[0_10px_40px_rgba(0,0,0,0.4)]
        font-inter
      "
      onSubmit={handleSubmit}
    >
      {/* Success Message */}
      {sent && (
        <div className="mb-4 py-3 px-4 rounded-md bg-green-600/20 border border-green-600/30 text-green-300 font-medium">
          Message sent — we'll get back to you soon.
        </div>
      )}

      {/* Heading */}
      <h2 className="text-2xl font-poppins font-semibold text-white mb-6">
        Contact Us
      </h2>

      {/* Name */}
      <label className="block mb-5">
        <span className="text-sm font-montserrat text-gray-300">Name</span>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="
            mt-2 w-full px-4 py-3 
            rounded-lg 
            bg-white/5 
            border border-white/10 
            text-gray-100 
            placeholder-gray-400
            focus:border-accent focus:ring-2 focus:ring-accent/70
            outline-none
            transition
          "
          placeholder="Your full name"
        />
      </label>

      {/* Email */}
      <label className="block mb-5">
        <span className="text-sm font-montserrat text-gray-300">Email</span>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          className="
            mt-2 w-full px-4 py-3 
            rounded-lg 
            bg-white/5 
            border border-white/10 
            text-gray-100 
            placeholder-gray-400
            focus:border-accent focus:ring-2 focus:ring-accent/70
            outline-none
            transition
          "
          placeholder="you@example.com"
        />
      </label>

      {/* Message */}
      <label className="block mb-6">
        <span className="text-sm font-montserrat text-gray-300">Message</span>
        <textarea
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="
            mt-2 w-full px-4 py-3 
            rounded-lg 
            bg-white/5 
            border border-white/10 
            text-gray-100
            placeholder-gray-400 
            resize-none
            focus:border-accent focus:ring-2 focus:ring-accent/70
            outline-none
            transition
          "
          placeholder="Tell us about your project..."
        />
      </label>

      {/* Button */}
      <button
        type="submit"
        className="
          w-full px-5 py-3 
          bg-gradient-to-r from-accent to-accent/80
          text-black 
          font-poppins font-semibold 
          rounded-lg 
          shadow-lg 
          hover:brightness-95
          transition
        "
      >
        Send Message
      </button>
    </form>
  );
}

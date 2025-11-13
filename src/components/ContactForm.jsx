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
  }

  return (
    <form
      className="max-w-xl bg-white p-6 rounded-lg shadow"
      onSubmit={handleSubmit}
    >
      {sent && (
        <div className="mb-4 text-green-600">
          Message sent — we'll get back to you soon.
        </div>
      )}

      <label className="block mb-3">
        <div className="text-sm font-medium">Name</div>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="mt-1 w-full border px-3 py-2 rounded-md"
        />
      </label>

      <label className="block mb-3">
        <div className="text-sm font-medium">Email</div>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          className="mt-1 w-full border px-3 py-2 rounded-md"
        />
      </label>

      <label className="block mb-3">
        <div className="text-sm font-medium">Message</div>
        <textarea
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="mt-1 w-full border px-3 py-2 rounded-md"
        />
      </label>

      <button
        type="submit"
        className="px-5 py-2 bg-accent text-black rounded-md font-medium"
      >
        Send
      </button>
    </form>
  );
}

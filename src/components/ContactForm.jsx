
import React, { useState, useCallback } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({
    sent: false,
    sending: false,
    error: "",
  });

  const inputBase =
    "mt-2 w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-gray-100 placeholder-gray-400 focus:border-accent focus:ring-2 focus:ring-accent/70 outline-none transition";

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  async function fakeSend(payload) {
    return new Promise((res) => setTimeout(() => res({ ok: true }), 900));
  }

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (status.sending) return;
      setStatus({ sent: false, sending: true, error: "" });

      try {
        const res = await fakeSend(form);
        if (!res || !res.ok) throw new Error("Failed to send");
        setForm({ name: "", email: "", message: "" });
        setStatus({ sent: true, sending: false, error: "" });
        setTimeout(() => setStatus((s) => ({ ...s, sent: false })), 4000);
      } catch (err) {
        setStatus({
          sent: false,
          sending: false,
          error: "Could not send message. Try again.",
        });
      }
    },
    [form, status.sending]
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-[#0b1116dd] backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.4)] font-inter"
      noValidate
    >
      {(status.sent || status.error) && (
        <div
          role="status"
          aria-live="polite"
          className={`mb-4 py-3 px-4 rounded-md font-medium ${
            status.sent
              ? "bg-green-600/20 border border-green-600/30 text-green-300"
              : "bg-rose-600/10 border border-rose-600/30 text-rose-300"
          }`}
        >
          {status.sent
            ? "Message sent — we'll get back to you soon."
            : status.error}
        </div>
      )}

      <h2 className="text-2xl font-poppins font-semibold text-white mb-6">
        Contact Us
      </h2>

      <label className="block mb-5">
        <span className="text-sm font-montserrat text-gray-300">Name</span>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Your full name"
          aria-label="Full name"
          className={inputBase}
        />
      </label>

      <label className="block mb-5">
        <span className="text-sm font-montserrat text-gray-300">Email</span>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="you@example.com"
          aria-label="Email address"
          className={inputBase}
        />
      </label>

      <label className="block mb-6">
        <span className="text-sm font-montserrat text-gray-300">Message</span>
        <textarea
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
          placeholder="Tell us about your project..."
          aria-label="Message"
          className={`${inputBase} resize-none`}
        />
      </label>

      <button
        type="submit"
        disabled={status.sending}
        aria-disabled={status.sending}
        className={`w-full px-5 py-3 text-white font-poppins font-semibold rounded-lg shadow-lg transition transform ${
          status.sending
            ? "opacity-70 cursor-wait"
            : "hover:brightness-95 active:scale-[.997]"
        } bg-gradient-to-r from-accent to-accent/80`}
      >
        {status.sending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to subscribe right now.");
      }

      setEmail("");
      setStatus("success");
      setMessage(data.message || "You're subscribed to Savio updates.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to subscribe right now.");
    }
  }

  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[.2em] text-[#d7eadf]">
        Stay connected
      </p>
      <p className="mt-4 max-w-sm text-sm leading-6 text-white/75">
        Get the latest Savio news, events and gallery updates by email.
      </p>

      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Your email address"
          disabled={status === "loading"}
          className="min-w-0 flex-1 rounded-xl border border-white/15 bg-white px-4 py-3 text-sm text-[var(--brown-dark)] outline-none placeholder:text-black/40 focus:ring-2 focus:ring-white/50 disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-xl bg-[var(--green)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#08704a] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Joining..." : "Subscribe"}
        </button>
      </form>

      <p
        role="status"
        aria-live="polite"
        className={`mt-3 min-h-5 text-xs ${status === "error" ? "text-red-200" : "text-white/65"}`}
      >
        {message}
      </p>
    </div>
  );
}

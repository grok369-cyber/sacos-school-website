"use client";

import { FormEvent, useState } from "react";

export function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "We couldn't send your inquiry.");
      form.reset();
      setStatus("success");
      setMessage(result.message || "Your inquiry has been sent to the school.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "We couldn't send your inquiry.");
    }
  }

  return (
    <section className="container-school pb-20">
      <div className="grid gap-8 rounded-3xl bg-[var(--green-soft)] p-7 md:p-10 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[var(--green)]">Send an inquiry</p>
          <h2 className="display mt-4 text-4xl text-[var(--green-dark)]">How can we help?</h2>
          <p className="mt-5 max-w-lg leading-7 text-[var(--muted)]">
            Have a question about admissions, academics, boarding, fees, school activities or anything else?
            Send the school a message and the administration can get back to you.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="rounded-2xl bg-[var(--paper)] p-6 shadow-sm md:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" name="name" type="text" placeholder="Your full name" required />
            <Field label="Email address" name="email" type="email" placeholder="you@example.com" required />
            <Field label="Phone number" name="phone" type="tel" placeholder="+256 ..." />
            <div>
              <label htmlFor="inquiry-type" className="text-sm font-semibold text-[var(--brown-dark)]">Inquiry type</label>
              <select id="inquiry-type" name="inquiry_type" defaultValue="General inquiry" className="mt-2 w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-sm text-[var(--brown-dark)] outline-none focus:border-[var(--green)] focus:ring-2 focus:ring-[var(--green-soft)]">
                <option>General inquiry</option><option>Admissions</option><option>Academics</option><option>Boarding</option><option>Fees</option><option>School activities</option>
              </select>
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="inquiry-message" className="text-sm font-semibold text-[var(--brown-dark)]">Your message</label>
            <textarea id="inquiry-message" name="message" rows={6} required placeholder="Write your inquiry here..." className="mt-2 w-full resize-y rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-sm text-[var(--brown-dark)] outline-none placeholder:text-black/40 focus:border-[var(--green)] focus:ring-2 focus:ring-[var(--green-soft)]" />
          </div>
          <button type="submit" disabled={status === "loading"} className="mt-5 w-full rounded-xl bg-[var(--green)] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[var(--green-dark)] disabled:cursor-not-allowed disabled:opacity-60">
            {status === "loading" ? "Sending..." : "Send inquiry"}
          </button>
          <p role="status" aria-live="polite" className={`mt-3 min-h-5 text-sm ${status === "error" ? "text-red-600" : "text-[var(--muted)]"}`}>{message}</p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type, placeholder, required = false }: {
  label: string; name: string; type: string; placeholder: string; required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold text-[var(--brown-dark)]">{label}</label>
      <input id={name} name={name} type={type} required={required} placeholder={placeholder} className="mt-2 w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-sm text-[var(--brown-dark)] outline-none placeholder:text-black/40 focus:border-[var(--green)] focus:ring-2 focus:ring-[var(--green-soft)]" />
    </div>
  );
}

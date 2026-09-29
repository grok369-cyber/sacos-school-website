import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "School Events | Savio Secondary School, Kawempe",
  description: "Keep up with important dates, activities and events at Savio Secondary School, Kawempe.",
  alternates: { canonical: "/events" },
};

import { EventsGrid } from "@/components/EventsGrid";

export default function EventsPage() {
  return (
    <main>
      <section className="hero-grid border-b border-[var(--line)]">
        <div className="container-school py-20">
          <span className="text-xs font-bold uppercase tracking-[.2em] text-[var(--green)]">School calendar</span>
          <h1 className="display mt-4 text-5xl text-[var(--brown-dark)] sm:text-7xl">Events.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Keep up with important dates, activities and events at Savio Secondary School.
          </p>
        </div>
      </section>
      <section className="container-school py-20">
        <EventsGrid />
      </section>
    </main>
  );
}

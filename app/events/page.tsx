import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "School Events | Savio Secondary School, Kawempe",
  description: "Keep up with school activities, important dates and events at Savio Secondary School, Kawempe.",
  alternates: { canonical: "/events" },
};

import { EventsGrid } from "@/components/EventsGrid";

export default function EventsPage() {
  return (
    <main>
      <section className="hero-grid border-b border-[var(--line)]">
        <div className="container-school py-20">
          <span className="text-xs font-bold uppercase tracking-[.2em] text-[var(--green)]">School calendar</span>
          <h1 className="display mt-4 text-5xl text-[var(--brown-dark)] sm:text-7xl">Upcoming events.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            School life extends beyond the classroom. Learning activities, sports, cultural experiences and community
            engagements all create opportunities for students to participate, discover their interests and grow.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
            Check this calendar for event dates and details as they are confirmed and shared by the school.
          </p>
        </div>
      </section>
      <section className="container-school py-16 sm:py-20">
        <div className="mb-8 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[.18em] text-[var(--green)]">Plan ahead</span>
          <h2 className="display mt-2 text-3xl text-[var(--brown-dark)]">What’s happening at Savio</h2>
          <p className="mt-3 leading-7 text-[var(--muted)]">
            Event information will be presented here to help students, families and the wider school community stay informed.
          </p>
        </div>
        <EventsGrid />
      </section>
    </main>
  );
}

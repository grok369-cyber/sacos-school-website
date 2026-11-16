import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Staff | Savio Secondary School, Kawempe",
  description: "Learn about the teachers, administrators and staff who support learning and student life at Savio Secondary School.",
  alternates: { canonical: "/staff" },
};

import { StaffGrid } from "@/components/StaffGrid";

export default function StaffPage() {
  return (
    <main>
      <section className="hero-grid border-b border-[var(--line)]">
        <div className="container-school py-20">
          <span className="text-xs font-bold uppercase tracking-[.2em] text-[var(--green)]">Our people</span>
          <h1 className="display mt-4 text-5xl text-[var(--brown-dark)] sm:text-7xl">Meet our staff.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            A school is shaped by the people who teach, guide, encourage and support its learners. The Savio team
            contributes to an environment where students can pursue knowledge, develop character and take part in school life.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
            Get to know the educators, administrators and support staff whose work helps the school community move forward.
          </p>
        </div>
      </section>
      <section className="container-school py-16 sm:py-20">
        <div className="mb-8 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[.18em] text-[var(--green)]">The people of Savio</span>
          <h2 className="display mt-2 text-3xl text-[var(--brown-dark)]">Guidance, knowledge and support</h2>
          <p className="mt-3 leading-7 text-[var(--muted)]">
            Explore staff profiles and roles as they are published by the school.
          </p>
        </div>
        <StaffGrid />
      </section>
    </main>
  );
}

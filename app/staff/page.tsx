import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Staff | Savio Secondary School, Kawempe",
  description: "Meet the teachers, administrators and staff supporting learning and student life at Savio Secondary School.",
  alternates: { canonical: "/staff" },
};

import { StaffGrid } from "@/components/StaffGrid";

export default function StaffPage() {
  return (
    <main>
      <section className="hero-grid border-b border-[var(--line)]">
        <div className="container-school py-20">
          <span className="text-xs font-bold uppercase tracking-[.2em] text-[var(--green)]">Our people</span>
          <h1 className="display mt-4 text-5xl text-[var(--brown-dark)] sm:text-7xl">Staff.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Meet the teachers, administrators and staff who support learning and student life at Savio.
          </p>
        </div>
      </section>
      <section className="container-school py-20">
        <StaffGrid />
      </section>
    </main>
  );
}

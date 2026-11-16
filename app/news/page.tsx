import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "School News & Updates | Savio Secondary School",
  description: "Read school announcements, achievements and stories from the Savio Secondary School community in Kawempe.",
  alternates: { canonical: "/news" },
};

import { NewsGrid } from "@/components/NewsGrid";

export default function NewsPage() {
  return (
    <main>
      <section className="hero-grid border-b border-[var(--line)]">
        <div className="container-school py-20">
          <span className="text-xs font-bold uppercase tracking-[.2em] text-[var(--green)]">Savio news</span>
          <h1 className="display mt-4 text-5xl text-[var(--brown-dark)] sm:text-7xl">News & updates.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Stay connected with life at Savio Secondary School. This is where the school community can follow announcements,
            academic milestones, student activities and stories that reflect learning and life at Savio.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
            Visit this page regularly for updates from across the school, including important notices and moments worth celebrating.
          </p>
        </div>
      </section>
      <section className="container-school py-16 sm:py-20">
        <div className="mb-8 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[.18em] text-[var(--green)]">From our community</span>
          <h2 className="display mt-2 text-3xl text-[var(--brown-dark)]">Stories, notices and achievements</h2>
          <p className="mt-3 leading-7 text-[var(--muted)]">
            School life is full of progress, participation and shared achievement. Find the latest published updates below.
          </p>
        </div>
        <NewsGrid limit={12} />
      </section>
    </main>
  );
}

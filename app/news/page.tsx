import { NewsGrid } from "@/components/NewsGrid";

export default function NewsPage() {
  return (
    <main>
      <section className="hero-grid border-b border-[var(--line)]">
        <div className="container-school py-20">
          <span className="text-xs font-bold uppercase tracking-[.2em] text-[var(--green)]">Savio news</span>
          <h1 className="display mt-4 text-5xl text-[var(--brown-dark)] sm:text-7xl">News & updates.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            The latest news, announcements and stories from Savio Secondary School.
          </p>
        </div>
      </section>
      <section className="container-school py-20">
        <NewsGrid limit={12} />
      </section>
    </main>
  );
}

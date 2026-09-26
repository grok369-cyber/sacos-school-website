import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, GraduationCap, Quote } from "lucide-react";
import { NewsGrid } from "@/components/NewsGrid";
import { GalleryPreview } from "@/components/GalleryPreview";
import { sanityConfigured } from "@/lib/sanity";

const pillars = [
  { icon: GraduationCap, title: "Character & discipline", text: "A school culture where integrity, responsibility and personal growth sit alongside academic achievement." },
  { icon: BookOpen, title: "Strong academics", text: "A clear learning journey across lower and upper secondary, presented around the learner rather than the technology." },
  { icon: CalendarDays, title: "Life beyond class", text: "Activities, events, leadership and community experiences that make school life broader than the timetable." }
];

export default function HomePage() {
  return (
    <main>
      <section className="hero-grid overflow-hidden border-b border-[var(--line)]">
        <div className="container-school grid min-h-[680px] items-center gap-12 py-20 lg:grid-cols-[1.08fr_.92fr] lg:py-28">
          <div>
            <span className="inline-flex rounded-full border border-[var(--gold-soft)] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[.18em] text-[var(--gold)]">
              Savio Secondary School · Kawempe
            </span>
            <h1 className="display mt-7 max-w-3xl text-5xl leading-[.98] text-[var(--navy)] sm:text-6xl lg:text-8xl">
              Treasure in a jar of clay.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              A school community committed to forming capable, responsible and confident young people through learning, discipline and service.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/admissions" className="inline-flex items-center gap-2 rounded-full bg-[var(--navy)] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5">
                Admissions <ArrowRight size={17} />
              </Link>
              <Link href="/about" className="inline-flex rounded-full border border-[var(--line)] bg-white px-6 py-3.5 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--gold)]">
                Discover Savio
              </Link>
            </div>
            <p className="mt-7 text-xs font-semibold uppercase tracking-[.2em] text-[var(--gold)]">Fides · Scientia · Futura</p>
          </div>
          <div className="relative flex min-h-[390px] items-center justify-center">
            <div className="float-slow absolute h-72 w-72 rounded-full border border-[var(--gold-soft)] sm:h-96 sm:w-96" />
            <div className="absolute h-60 w-60 rounded-full border border-[var(--line)] bg-white/60 sm:h-80 sm:w-80" />
            <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-[var(--gold)] bg-[var(--navy)] text-center text-white shadow-2xl sm:h-60 sm:w-60">
              <div>
                <div className="display text-5xl sm:text-6xl">S</div>
                <div className="mt-2 text-[10px] uppercase tracking-[.25em] text-[var(--gold-soft)]">Savio Secondary School</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-school grid gap-5 py-16 md:grid-cols-3">
        {pillars.map(({ icon: Icon, title, text }) => (
          <article key={title} className="paper-card rounded-2xl p-7">
            <Icon className="text-[var(--gold)]" size={25} strokeWidth={1.7} />
            <h2 className="display mt-5 text-2xl text-[var(--navy)]">{title}</h2>
            <p className="mt-3 leading-7 text-[var(--muted)]">{text}</p>
          </article>
        ))}
      </section>

      <section className="bg-[var(--cream)] py-20">
        <div className="container-school grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[.2em] text-[var(--gold)]">Our heritage</span>
            <h2 className="display mt-4 text-4xl leading-tight text-[var(--navy)] sm:text-5xl">Character first. Competence follows.</h2>
          </div>
          <div className="text-lg leading-8 text-[var(--muted)]">
            <Quote className="mb-4 text-[var(--gold)]" size={30} />
            <p>Our new website keeps the spirit of the existing Savio site while moving the school into a maintainable, content-managed platform. News, events, staff profiles and gallery items can now live in Sanity instead of browser storage.</p>
          </div>
        </div>
      </section>

      <section className="container-school py-20">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div><span className="text-xs font-bold uppercase tracking-[.2em] text-[var(--gold)]">Latest</span><h2 className="display mt-2 text-4xl text-[var(--navy)]">News & updates</h2></div>
          <Link href="/news" className="text-sm font-semibold text-[var(--navy)]">View all →</Link>
        </div>
        <div className="mt-8"><NewsGrid limit={3} /></div>
      </section>

      <section className="container-school pb-24">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div><span className="text-xs font-bold uppercase tracking-[.2em] text-[var(--gold)]">Campus life</span><h2 className="display mt-2 text-4xl text-[var(--navy)]">From the gallery</h2></div>
          <Link href="/gallery" className="text-sm font-semibold text-[var(--navy)]">See gallery →</Link>
        </div>
        <div className="mt-8"><GalleryPreview /></div>
      </section>

      {!sanityConfigured && (
        <div className="container-school pb-10 text-center text-xs text-[var(--muted)]">CMS connection is not configured yet. Add the Sanity project ID to the deployment environment when ready.</div>
      )}
    </main>
  );
}

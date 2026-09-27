import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, GraduationCap, Quote, ShieldCheck } from "lucide-react";
import { NewsGrid } from "@/components/NewsGrid";
import { GalleryPreview } from "@/components/GalleryPreview";

const pillars = [
  { icon: GraduationCap, title: "Character & discipline", text: "A school culture where integrity, responsibility and personal growth sit alongside academic achievement." },
  { icon: BookOpen, title: "Learning with purpose", text: "A clear learning journey that encourages students to grow in knowledge, confidence and practical ability." },
  { icon: ShieldCheck, title: "Community & service", text: "A school community where leadership, responsibility and service are part of everyday student life." }
];

export default function HomePage() {
  return (
    <main>
      <section className="hero-grid overflow-hidden border-b border-[var(--line)]">
        <div className="container-school grid min-h-[680px] items-center gap-12 py-16 lg:grid-cols-[1.08fr_.92fr] lg:py-24">
          <div>
            <span className="inline-flex rounded-full border border-[#bdd3c5] bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-[var(--green)]">
              Savio Secondary School · Kawempe
            </span>

            <h1 className="display mt-7 max-w-3xl text-5xl leading-[.98] text-[var(--green-dark)] sm:text-6xl lg:text-8xl">
              Treasure in a jar of clay.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Welcome to Savio Secondary School — a school community dedicated to learning, character, responsibility and the development of young people.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/admissions" className="inline-flex items-center gap-2 rounded-full bg-[var(--green)] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[var(--green-dark)]">
                Admissions <ArrowRight size={17} />
              </Link>
              <Link href="/about" className="inline-flex rounded-full border border-[var(--brown-soft)] bg-white px-6 py-3.5 text-sm font-bold text-[var(--brown-dark)] transition hover:border-[var(--green)]">
                Discover Savio
              </Link>
            </div>

            <div className="mt-9 flex items-center gap-3">
              <span className="h-px w-12 bg-[var(--brown)]" />
              <span className="text-xs font-bold uppercase tracking-[.18em] text-[var(--brown)]">SACOS · Kawempe</span>
            </div>
          </div>

          <div className="relative flex min-h-[390px] items-center justify-center">
            <div className="float-slow absolute h-72 w-72 rounded-full border-2 border-[#bdd3c5] sm:h-96 sm:w-96" />
            <div className="absolute h-60 w-60 rounded-full border border-[var(--brown-soft)] bg-white/60 sm:h-80 sm:w-80" />

            <div className="relative flex h-64 w-56 items-center justify-center rounded-[2rem] border-2 border-[var(--green)] bg-white p-5 text-center shadow-2xl sm:h-72 sm:w-64">
              <img src="/savio-badge.svg" alt="Savio Secondary School badge" className="h-full w-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section className="container-school grid gap-5 py-16 md:grid-cols-3">
        {pillars.map(({ icon: Icon, title, text }) => (
          <article key={title} className="paper-card rounded-2xl border-t-4 border-t-[var(--green)] p-7">
            <Icon className="text-[var(--green)]" size={25} strokeWidth={1.8} />
            <h2 className="display mt-5 text-2xl text-[var(--brown-dark)]">{title}</h2>
            <p className="mt-3 leading-7 text-[var(--muted)]">{text}</p>
          </article>
        ))}
      </section>

      <section className="bg-[var(--cream)] py-20">
        <div className="container-school grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[.2em] text-[var(--green)]">Our identity</span>
            <h2 className="display mt-4 text-4xl leading-tight text-[var(--brown-dark)] sm:text-5xl">Rooted in school, community and purpose.</h2>
          </div>
          <div className="text-lg leading-8 text-[var(--muted)]">
            <Quote className="mb-4 text-[var(--brown)]" size={30} />
            <p>The new Savio website uses the school’s visual identity as its foundation: the deep green of the crest, warm brown tones from the uniform and campus, and a calm cream background inspired by the school imagery.</p>
          </div>
        </div>
      </section>

      <section className="container-school py-20">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div><span className="text-xs font-bold uppercase tracking-[.2em] text-[var(--green)]">Latest</span><h2 className="display mt-2 text-4xl text-[var(--brown-dark)]">News & updates</h2></div>
          <Link href="/news" className="text-sm font-bold text-[var(--green)]">View all →</Link>
        </div>
        <div className="mt-8"><NewsGrid limit={3} /></div>
      </section>

      <section className="container-school pb-24">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div><span className="text-xs font-bold uppercase tracking-[.2em] text-[var(--green)]">Campus life</span><h2 className="display mt-2 text-4xl text-[var(--brown-dark)]">From the gallery</h2></div>
          <Link href="/gallery" className="text-sm font-bold text-[var(--green)]">See gallery →</Link>
        </div>
        <div className="mt-8"><GalleryPreview /></div>
      </section>
    </main>
  );
}

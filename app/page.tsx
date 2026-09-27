import Link from "next/link";
import { BookOpen, GraduationCap, ShieldCheck } from "lucide-react";
import { HeroSlider } from "@/components/HeroSlider";
import { NewsGrid } from "@/components/NewsGrid";
import { EventsGrid } from "@/components/EventsGrid";
import { GalleryPreview } from "@/components/GalleryPreview";
import { client, sanityConfigured, urlFor } from "@/lib/sanity";
import { latestGalleryQuery, schoolSettingsQuery } from "@/lib/queries";

const pillars = [
  {
    icon: GraduationCap,
    title: "Character & discipline",
    text: "A school culture where integrity, responsibility and personal growth sit alongside academic achievement.",
  },
  {
    icon: BookOpen,
    title: "Learning with purpose",
    text: "A clear learning journey that encourages students to grow in knowledge, confidence and practical ability.",
  },
  {
    icon: ShieldCheck,
    title: "Community & service",
    text: "A school community where leadership, responsibility and service are part of everyday student life.",
  },
];

export default async function HomePage() {
  const [settings, gallery] = sanityConfigured
    ? await Promise.all([
        client.fetch<any>(schoolSettingsQuery).catch(() => null),
        client.fetch<any[]>(latestGalleryQuery).catch(() => []),
      ])
    : [null, []];

  const sanitySlides = (settings?.heroSlides || [])
    .filter((slide: any) => slide?.image)
    .map((slide: any) => ({
      image: urlFor(slide.image).width(1800).height(1100).fit("crop").url(),
      title: slide.title || settings?.motto || "Treasure in a jar of clay.",
      subtitle:
        slide.subtitle ||
        settings?.about ||
        "A school community dedicated to learning, character, responsibility and purpose.",
    }));

  const slides =
    sanitySlides.length > 0
      ? sanitySlides
      : [
          settings?.heroImage
            ? {
                image: urlFor(settings.heroImage).width(1800).height(1100).fit("crop").url(),
                title: settings?.motto || "Treasure in a jar of clay.",
                subtitle:
                  settings?.about ||
                  "A school community dedicated to learning, character, responsibility and purpose.",
              }
            : null,
          ...gallery.slice(0, 4).map((item) =>
            item.coverImage
              ? {
                  image: urlFor(item.coverImage).width(1800).height(1100).fit("crop").url(),
                  title: item.title,
                  subtitle:
                    item.caption ||
                    "Discover learning, community and life at Savio Secondary School.",
                }
              : null,
          ),
        ].filter(Boolean) as { image: string; title: string; subtitle: string }[];

  return (
    <main>
      <HeroSlider slides={slides} />

      <section className="container-school relative z-20 -mt-10 grid gap-5 pb-16 md:grid-cols-3">
        {pillars.map(({ icon: Icon, title, text }) => (
          <article key={title} className="paper-card rounded-2xl border-t-4 border-t-[var(--green)] p-7 shadow-lg">
            <Icon className="text-[var(--green)]" size={25} strokeWidth={1.8} />
            <h2 className="display mt-5 text-2xl text-[var(--brown-dark)]">{title}</h2>
            <p className="mt-3 leading-7 text-[var(--muted)]">{text}</p>
          </article>
        ))}
      </section>

      <section className="bg-[var(--cream)] py-20">
        <div className="container-school grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[.2em] text-[var(--green)]">
              Our identity
            </span>
            <h2 className="display mt-4 text-4xl leading-tight text-[var(--brown-dark)] sm:text-5xl">
              Rooted in school, community and purpose.
            </h2>
          </div>
          <div className="text-lg leading-8 text-[var(--muted)]">
            <p>
              Savio Secondary School is a place where academic growth, character,
              responsibility and service belong together. Explore the school,
              meet the team, follow events and discover the latest news.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/about" className="rounded-full bg-[var(--green)] px-5 py-3 text-sm font-bold text-white">
                About Savio
              </Link>
              <Link href="/contact" className="rounded-full border border-[var(--brown-soft)] bg-white px-5 py-3 text-sm font-bold text-[var(--brown-dark)]">
                Contact the school
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-school py-20">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[.2em] text-[var(--green)]">Latest</span>
            <h2 className="display mt-2 text-4xl text-[var(--brown-dark)]">News & updates</h2>
          </div>
          <Link href="/news" className="text-sm font-bold text-[var(--green)]">View all →</Link>
        </div>
        <div className="mt-8"><NewsGrid limit={3} /></div>
      </section>

      <section className="bg-[var(--green-dark)] py-20">
        <div className="container-school">
          <div className="flex flex-col justify-between gap-4 text-white sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[.2em] text-white/70">What's happening</span>
              <h2 className="display mt-2 text-4xl">Upcoming events</h2>
            </div>
            <Link href="/events" className="text-sm font-bold text-white">View all →</Link>
          </div>
          <div className="mt-8"><EventsGrid limit={3} /></div>
        </div>
      </section>

      <section className="container-school py-20">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[.2em] text-[var(--green)]">Campus life</span>
            <h2 className="display mt-2 text-4xl text-[var(--brown-dark)]">From the gallery</h2>
          </div>
          <Link href="/gallery" className="text-sm font-bold text-[var(--green)]">See gallery →</Link>
        </div>
        <div className="mt-8"><GalleryPreview /></div>
      </section>
    </main>
  );
}

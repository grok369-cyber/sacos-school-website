import type { Metadata } from "next";
import { Award, Building2, Quote, ShieldCheck } from "lucide-react";
import { client, sanityConfigured } from "@/lib/sanity";
import { schoolSettingsQuery } from "@/lib/queries";

export const metadata: Metadata = {
  title: "About Savio Secondary School, Kawempe",
  description:
    "Learn about Savio Secondary School, Kawempe — a mixed day and boarding school offering O-Level and A-Level education in Uganda.",
  alternates: { canonical: "/about" },
};

const fallbackAbout =
  "Savio S.S. (SACOS) is a mixed day and boarding secondary school offering both O-Level and A-Level education.";

export default async function AboutPage() {
  const settings = sanityConfigured
    ? await client.fetch<any>(schoolSettingsQuery).catch(() => null)
    : null;

  const schoolName = settings?.name || "Savio Secondary School, Kawempe";
  const motto = settings?.motto || "Treasure in a jar of clay.";
  const about = settings?.about || fallbackAbout;

  return (
    <main>
      <section className="hero-grid border-b border-[var(--line)]">
        <div className="container-school py-20 sm:py-28">
          <span className="text-xs font-bold uppercase tracking-[.2em] text-[var(--green)]">
            About Savio
          </span>
          <h1 className="display mt-4 max-w-4xl text-5xl leading-tight text-[var(--brown-dark)] sm:text-7xl">
            {schoolName}.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            {about}
          </p>
        </div>
      </section>

      <section className="container-school grid gap-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <Info title="School type">Mixed Day & Boarding</Info>
        <Info title="Levels">O-Level & A-Level</Info>
        <Info title="UNEB Centre">U3762</Info>
        <Info title="Selection code">3687</Info>
      </section>

      <section className="bg-[var(--cream)] py-20">
        <div className="container-school grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <Quote className="text-[var(--brown)]" size={38} />
            <h2 className="display mt-5 text-4xl text-[var(--brown-dark)]">
              {motto}
            </h2>
            <p className="mt-4 text-sm font-bold uppercase tracking-[.18em] text-[var(--brown)]">
              Savio school motto
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            <Stat
              icon={<ShieldCheck />}
              title="Registered"
              text="Ministry registration PSS/S/649"
            />
            <Stat
              icon={<Building2 />}
              title="Location"
              text="Kawempe Ttula, Kampala / Wakiso"
            />
            <Stat
              icon={<Award />}
              title="Achievement"
              text="UCE Division 1 and UACE top performers"
            />
          </div>
        </div>
      </section>

      {(settings?.vision || settings?.mission) && (
        <section className="container-school py-20">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[.2em] text-[var(--green)]">
              Our direction
            </span>
            <h2 className="display mt-3 text-4xl text-[var(--brown-dark)] sm:text-5xl">
              Vision & mission.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {settings?.vision && (
              <article className="paper-card rounded-2xl border-t-4 border-t-[var(--brown)] p-7">
                <p className="text-xs font-bold uppercase tracking-[.18em] text-[var(--green)]">
                  Vision
                </p>
                <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
                  {settings.vision}
                </p>
              </article>
            )}

            {settings?.mission && (
              <article className="paper-card rounded-2xl border-t-4 border-t-[var(--brown)] p-7">
                <p className="text-xs font-bold uppercase tracking-[.18em] text-[var(--green)]">
                  Mission
                </p>
                <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
                  {settings.mission}
                </p>
              </article>
            )}
          </div>
        </section>
      )}

      <section className="container-school py-20">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[.2em] text-[var(--green)]">
            Campus
          </span>
          <h2 className="display mt-3 text-4xl text-[var(--brown-dark)] sm:text-5xl">
            A growing learning environment.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
            The school profile describes modern multi-storey classroom blocks
            with spacious balconies and safety railings, a multi-level
            administrative centre, and computer laboratories supporting
            practical ICT learning under the updated UNEB lower secondary
            curriculum.
          </p>
        </div>
      </section>
    </main>
  );
}

function Info({ title, children }: { title: string; children: string }) {
  return (
    <article className="paper-card rounded-2xl border-t-4 border-t-[var(--brown)] p-6">
      <p className="text-xs font-bold uppercase tracking-[.16em] text-[var(--brown)]">
        {title}
      </p>
      <p className="mt-3 font-semibold text-[var(--brown-dark)]">{children}</p>
    </article>
  );
}

function Stat({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-2xl border border-[var(--line)] bg-white p-6">
      <div className="text-[var(--green)]">{icon}</div>
      <h3 className="display mt-4 text-xl text-[var(--brown-dark)]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{text}</p>
    </article>
  );
}

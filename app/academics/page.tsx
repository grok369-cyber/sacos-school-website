import Link from "next/link";
import { Award, Laptop, School } from "lucide-react";

const levels = [
  ["O-Level", "Lower Secondary", "Savio runs the lower secondary curriculum, with practical learning supported by computer laboratory work."],
  ["A-Level", "Upper Secondary", "The school also offers upper secondary education, with students following focused A-Level subject combinations."],
  ["UNEB", "Centre U3762", "Savio Secondary School is listed with UNEB Centre Number U3762 and Selection Code 3687."]
];

const uace = [
  ["Nakawuki Leticia", "HIL/ICT", "19 Points"],
  ["Nansubuga Sumayiya", "HIL/ICT", "18 Points"],
  ["Alinaitwe Tracy", "HEA/ICT", "17 Points"],
  ["Nakayima Shamirah", "HEL/ICT", "16 Points"]
];

const uce = [
  ["Ssuuna Ashiraf", "11 Aggregates"],
  ["Nakandi Pauline Tracy", "12 Aggregates"],
  ["Nakatudde Evelyne", "16 Aggregates"],
  ["Wamala Mubarack", "17 Aggregates"],
  ["Ssebaggala Hanim", "17 Aggregates"],
  ["Kiwalo Shafic", "18 Aggregates"]
];

export default function AcademicsPage() {
  return (
    <main>
      <section className="hero-grid border-b border-[var(--line)]">
        <div className="container-school py-20">
          <span className="text-xs font-bold uppercase tracking-[.2em] text-[var(--green)]">Academics</span>
          <h1 className="display mt-4 text-5xl text-[var(--green-dark)] sm:text-7xl">O-Level. A-Level. ICT. UNEB.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            Academic information for Savio Secondary School, including its lower and upper secondary offering, practical ICT learning and documented 2023 high performers.
          </p>
        </div>
      </section>

      <section className="container-school grid gap-6 py-20 md:grid-cols-3">
        {levels.map(([title, years, text], i) => {
          const Icon = i === 0 ? School : i === 1 ? Award : Laptop;
          return (
            <article key={title} className="paper-card rounded-2xl border-t-4 border-t-[var(--green)] p-7">
              <Icon className="text-[var(--green)]" size={27} />
              <span className="mt-5 block text-xs font-bold uppercase tracking-[.16em] text-[var(--brown)]">{years}</span>
              <h2 className="display mt-3 text-2xl text-[var(--brown-dark)]">{title}</h2>
              <p className="mt-3 leading-7 text-[var(--muted)]">{text}</p>
            </article>
          );
        })}
      </section>

      <section className="bg-[var(--cream)] py-20">
        <div className="container-school">
          <span className="text-xs font-bold uppercase tracking-[.2em] text-[var(--green)]">Hall of Fame</span>
          <h2 className="display mt-3 text-4xl text-[var(--brown-dark)] sm:text-5xl">2023 academic giants</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">Selected top candidates documented in the school profile.</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {uace.map(([name, combination, points]) => (
              <article key={name} className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[.14em] text-[var(--brown)]">UACE</p>
                <h3 className="mt-3 font-bold text-[var(--green-dark)]">{name}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{combination}</p>
                <p className="mt-4 text-2xl font-black text-[var(--green)]">{points}</p>
              </article>
            ))}
          </div>

          <h3 className="display mt-16 text-3xl text-[var(--brown-dark)]">Selected UCE Division 1 performers</h3>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {uce.map(([name, aggregates]) => (
              <div key={name} className="flex items-center justify-between rounded-xl border border-[var(--line)] bg-white px-5 py-4">
                <span className="font-semibold text-[var(--brown-dark)]">{name}</span>
                <span className="text-sm font-bold text-[var(--green)]">{aggregates}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-school py-20">
        <div className="rounded-3xl bg-[var(--green-dark)] p-8 text-white md:p-12">
          <h2 className="display text-3xl">Want to know more about studying at Savio?</h2>
          <p className="mt-4 max-w-2xl leading-7 text-white/75">Contact the school about current subjects, combinations, admissions and academic arrangements.</p>
          <Link href="/contact" className="mt-7 inline-block rounded-full bg-white px-6 py-3 text-sm font-bold text-[var(--green-dark)]">Contact Savio →</Link>
        </div>
      </section>
    </main>
  );
}

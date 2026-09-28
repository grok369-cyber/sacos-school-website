import Link from "next/link";
import { ArrowRight, Building2, FileText, MapPin, Phone } from "lucide-react";

export default function AdmissionsPage() {
  return (
    <main>
      <section className="hero-grid border-b border-[var(--line)]">
        <div className="container-school py-20 sm:py-28">
          <span className="text-xs font-bold uppercase tracking-[.2em] text-[var(--green)]">Admissions</span>
          <h1 className="display mt-4 max-w-4xl text-5xl leading-tight text-[var(--brown-dark)] sm:text-7xl">Join Savio Secondary School.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            Savio is a mixed day and boarding secondary school offering O-Level and A-Level education in Kawempe Ttula.
          </p>
        </div>
      </section>

      <section className="container-school grid gap-6 py-20 md:grid-cols-3">
        <Card icon={<Building2 />} title="Day & boarding">The school profile identifies Savio as a mixed day and boarding school.</Card>
        <Card icon={<FileText />} title="O-Level & A-Level">Both lower secondary and upper secondary education are offered.</Card>
        <Card icon={<MapPin />} title="Kawempe Ttula">The listed physical location is Kawempe Ttula, Kampala / Wakiso, Uganda.</Card>
      </section>

      <section className="container-school pb-24">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
          <div className="rounded-3xl bg-[var(--brown-dark)] p-8 text-white md:p-12">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#cfe2d7]">Admissions enquiries</p>
            <h2 className="display mt-4 text-3xl">Speak directly with the school.</h2>
            <p className="mt-4 max-w-xl leading-7 text-white/75">For current fees, entry requirements, places and admissions dates, use the official school contacts rather than outdated information.</p>
            <Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[var(--brown-dark)]">View contacts <ArrowRight size={16}/></Link>
          </div>

          <div className="rounded-3xl border border-[var(--line)] bg-[var(--cream)] p-8">
            <Phone className="text-[var(--green)]" />
            <h2 className="display mt-4 text-2xl text-[var(--brown-dark)]">Main line</h2>
            <a href="tel:+256751981614" className="mt-3 block font-bold text-[var(--green)]">+256 751 981 614</a>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">Headmaster / main administrative line listed in the school profile.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function Card({ icon, title, children }: { icon: React.ReactNode; title: string; children: string }) {
  return (
    <article className="paper-card rounded-2xl border-t-4 border-t-[var(--brown)] p-7">
      <div className="text-[var(--green)]">{icon}</div>
      <h2 className="display mt-5 text-2xl text-[var(--brown-dark)]">{title}</h2>
      <p className="mt-3 leading-7 text-[var(--muted)]">{children}</p>
    </article>
  );
}

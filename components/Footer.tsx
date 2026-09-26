import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--navy)] text-white">
      <div className="container-school grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div><div className="display text-2xl">Savio Secondary School</div><p className="mt-3 max-w-md text-sm leading-6 text-white/65">Tula Road, Kawempe Division, Kampala, Uganda.</p><p className="mt-5 text-xs font-semibold uppercase tracking-[.2em] text-[var(--gold-soft)]">Fides · Scientia · Futura</p></div>
        <div><p className="text-xs font-bold uppercase tracking-[.2em] text-[var(--gold-soft)]">Explore</p><div className="mt-4 grid gap-2 text-sm text-white/70">{[["About", "/about"], ["Academics", "/academics"], ["Admissions", "/admissions"], ["News", "/news"]].map(([l,h]) => <Link key={h} href={h}>{l}</Link>)}</div></div>
        <div><p className="text-xs font-bold uppercase tracking-[.2em] text-[var(--gold-soft)]">Contact</p><div className="mt-4 space-y-2 text-sm text-white/70"><p>Admissions and general enquiries</p><Link href="/contact" className="text-white">Contact the school →</Link></div></div>
      </div>
      <div className="border-t border-white/10"><div className="container-school flex flex-col gap-2 py-5 text-xs text-white/45 sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} Savio Secondary School</span><span>Official school website</span></div></div>
    </footer>
  );
}

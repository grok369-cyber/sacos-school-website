"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["About", "/about"],
  ["Academics", "/academics"],
  ["Admissions", "/admissions"],
  ["News", "/news"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"]
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(255,253,248,.92)] backdrop-blur-md">
      <div className="container-school flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--navy)] text-xl text-white shadow-sm">S</span>
          <span><strong className="display block text-lg leading-none text-[var(--navy)]">Savio Secondary School</strong><span className="mt-1 block text-[9px] font-bold uppercase tracking-[.18em] text-[var(--gold)]">Kawempe · Kampala</span></span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => <Link key={href} href={href} className="text-sm font-medium text-[var(--muted)] transition hover:text-[var(--navy)]">{label}</Link>)}
        </nav>
        <button className="rounded-full p-2 text-[var(--navy)] md:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav className="border-t border-[var(--line)] bg-[var(--paper)] px-4 py-4 md:hidden">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="block rounded-lg px-4 py-3 text-sm font-semibold text-[var(--ink)] hover:bg-[var(--cream)]">{label}</Link>)}</nav>}
    </header>
  );
}

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
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(255,253,249,.94)] backdrop-blur-md">
      <div className="container-school flex min-h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/savio-badge.svg" alt="Savio Secondary School badge" className="h-14 w-12 object-contain" />
          <span>
            <strong className="display block text-lg leading-none text-[var(--green-dark)]">Savio Secondary School</strong>
            <span className="mt-1 block text-[9px] font-bold uppercase tracking-[.18em] text-[var(--brown)]">Kawempe · Kampala</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--green)]">
              {label}
            </Link>
          ))}
        </nav>

        <Link href="/admissions" className="hidden rounded-full bg-[var(--green)] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[var(--green-dark)] md:inline-flex">
          Admissions
        </Link>

        <button className="rounded-full p-2 text-[var(--green)] md:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-[var(--line)] bg-[var(--paper)] px-4 py-4 md:hidden">
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className="block rounded-lg px-4 py-3 text-sm font-semibold text-[var(--brown-dark)] hover:bg-[var(--green-soft)]">
              {label}
            </Link>
          ))}
          <Link href="/admissions" onClick={() => setOpen(false)} className="mt-2 block rounded-lg bg-[var(--green)] px-4 py-3 text-center text-sm font-bold text-white">
            Admissions
          </Link>
        </nav>
      )}
    </header>
  );
}

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

function SchoolMark() {
  return (
    <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border-2 border-[var(--green)] bg-white shadow-sm">
      <span className="absolute inset-1 rounded-lg border border-[var(--brown)]" />
      <span className="relative text-center">
        <span className="block text-[7px] font-black leading-none tracking-tight text-[var(--green)]">SAVIO</span>
        <span className="block text-[6px] font-bold leading-none text-[var(--brown)]">SECONDARY</span>
        <span className="mt-0.5 block text-[8px] font-black leading-none text-[var(--green)]">SACOS</span>
      </span>
    </span>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(255,253,249,.94)] backdrop-blur-md">
      <div className="container-school flex min-h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <SchoolMark />
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

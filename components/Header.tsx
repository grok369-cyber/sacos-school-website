"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const groups = [
  {
    label: "About",
    items: [
      ["About Savio", "/about"],
      ["Staff", "/staff"],
    ],
  },
  {
    label: "Academics",
    items: [["Academics", "/academics"]],
  },
  {
    label: "Admissions",
    items: [["Admissions", "/admissions"]],
  },
  {
    label: "Campus Life",
    items: [
      ["Events", "/events"],
      ["Gallery", "/gallery"],
    ],
  },
] as const;

const directLinks = [
  ["News", "/news"],
  ["Contact", "/contact"],
] as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
  const groupIsActive = (items: readonly (readonly [string, string])[]) => items.some(([, href]) => isActive(href));

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(255,253,249,.96)] backdrop-blur-md">
      <div className="container-school flex min-h-20 items-center justify-between gap-5">
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/savio-badge.svg"
            alt="Savio Secondary School badge"
            className="h-14 w-12 shrink-0 object-contain"
          />
          <span>
            <strong className="display block text-base leading-none text-[var(--brown-dark)] sm:text-lg">
              Savio Secondary School
            </strong>
            <span className="mt-1 block text-[9px] font-bold uppercase tracking-[.18em] text-[var(--brown)]">
              Kawempe · Kampala
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          <Link
            href="/"
            className={isActive("/") ? "rounded-full bg-[var(--brown-soft)] px-3 py-2 text-sm font-bold text-[var(--brown-dark)]" : "rounded-full px-3 py-2 text-sm font-semibold text-[var(--muted)] transition hover:bg-[var(--brown-soft)] hover:text-[var(--brown-dark)]"}
          >
            Home
          </Link>

          {groups.map((group) =>
            group.items.length === 1 ? (
              <Link
                key={group.label}
                href={group.items[0][1]}
                className={isActive(group.items[0][1]) ? "rounded-full bg-[var(--brown-soft)] px-3 py-2 text-sm font-bold text-[var(--brown-dark)]" : "rounded-full px-3 py-2 text-sm font-semibold text-[var(--muted)] transition hover:bg-[var(--brown-soft)] hover:text-[var(--brown)]"}
              >
                {group.label}
              </Link>
            ) : (
              <div key={group.label} className="group relative">
                <button className={groupIsActive(group.items) ? "inline-flex items-center gap-1 rounded-full bg-[var(--brown-soft)] px-3 py-2 text-sm font-bold text-[var(--brown-dark)]" : "inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold text-[var(--muted)] transition hover:bg-[var(--brown-soft)] hover:text-[var(--brown)]"}>
                  {group.label}
                  <ChevronDown size={15} />
                </button>
                <div className="invisible absolute left-1/2 top-full w-48 -translate-x-1/2 translate-y-1 rounded-xl border border-[var(--line)] bg-[var(--paper)] p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {group.items.map(([label, href]) => (
                    <Link
                      key={href}
                      href={href}
                      className={isActive(href) ? "block rounded-lg bg-[var(--brown-soft)] px-3 py-2.5 text-sm font-bold text-[var(--brown-dark)]" : "block rounded-lg px-3 py-2.5 text-sm font-semibold text-[var(--brown-dark)] hover:bg-[var(--brown-soft)] hover:text-[var(--brown)]"}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            ),
          )}

          {directLinks.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={isActive(href) ? "rounded-full bg-[var(--brown-soft)] px-3 py-2 text-sm font-bold text-[var(--brown-dark)]" : "rounded-full px-3 py-2 text-sm font-semibold text-[var(--muted)] transition hover:bg-[var(--brown-soft)] hover:text-[var(--brown)]"}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="/admissions"
          className="hidden rounded-full bg-[var(--brown)] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[var(--brown-dark)] md:inline-flex"
        >
          Apply / Enquire
        </Link>

        <button
          className="rounded-full p-2 text-[var(--brown)] lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="max-h-[calc(100svh-5rem)] overflow-y-auto border-t border-[var(--line)] bg-[var(--paper)] px-4 py-4 lg:hidden">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={isActive("/") ? "block rounded-lg bg-[var(--brown-soft)] px-4 py-3 text-sm font-bold text-[var(--brown-dark)]" : "block rounded-lg px-4 py-3 text-sm font-semibold text-[var(--brown-dark)] hover:bg-[var(--brown-soft)]"}
          >
            Home
          </Link>

          {groups.map((group) =>
            group.items.length === 1 ? (
              <Link
                key={group.label}
                href={group.items[0][1]}
                onClick={() => setOpen(false)}
                className={isActive(group.items[0][1]) ? "block rounded-lg bg-[var(--brown-soft)] px-4 py-3 text-sm font-bold text-[var(--brown-dark)]" : "block rounded-lg px-4 py-3 text-sm font-semibold text-[var(--brown-dark)] hover:bg-[var(--brown-soft)]"}
              >
                {group.label}
              </Link>
            ) : (
              <div key={group.label} className="border-b border-[var(--line)] last:border-b-0">
                <button
                  type="button"
                  onClick={() =>
                    setMobileGroup((current) =>
                      current === group.label ? null : group.label,
                    )
                  }
                  className={groupIsActive(group.items) ? "flex w-full items-center justify-between rounded-lg bg-[var(--brown-soft)] px-4 py-3 text-sm font-bold text-[var(--brown-dark)]" : "flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold text-[var(--brown-dark)]"}
                >
                  {group.label}
                  <ChevronDown
                    size={17}
                    className={
                      mobileGroup === group.label
                        ? "rotate-180 transition-transform"
                        : "transition-transform"
                    }
                  />
                </button>
                {mobileGroup === group.label && (
                  <div className="pb-2 pl-4">
                    {group.items.map(([label, href]) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setOpen(false)}
                        className={isActive(href) ? "block rounded-lg bg-[var(--brown-soft)] px-4 py-2.5 text-sm font-bold text-[var(--brown-dark)]" : "block rounded-lg px-4 py-2.5 text-sm text-[var(--muted)] hover:bg-[var(--brown-soft)] hover:text-[var(--brown)]"}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ),
          )}

          {directLinks.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={isActive(href) ? "block rounded-lg bg-[var(--brown-soft)] px-4 py-3 text-sm font-bold text-[var(--brown-dark)]" : "block rounded-lg px-4 py-3 text-sm font-semibold text-[var(--brown-dark)] hover:bg-[var(--brown-soft)]"}
            >
              {label}
            </Link>
          ))}

          <Link
            href="/admissions"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-[var(--brown)] px-4 py-3 text-center text-sm font-bold text-white"
          >
            Apply / Enquire
          </Link>
        </nav>
      )}
    </header>
  );
}

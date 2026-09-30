"use client";

import Image from "next/image";
import { useState } from "react";

type StaffCardProps = {
  name: string;
  position: string;
  department?: string;
  bio?: string;
  imageUrl?: string;
};

export function StaffCard({
  name,
  position,
  department,
  bio,
  imageUrl,
}: StaffCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-black/5 border-l-4 border-l-[var(--brown)] bg-white p-5 shadow-[0_10px_28px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(0,0,0,0.12)] sm:p-6">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-xl bg-[var(--cream)] sm:h-40 sm:w-40">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={name}
              fill
              sizes="160px"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center px-4 text-center text-sm text-[var(--muted)]">
              No photo available
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1 pt-0.5">
          <h2 className="text-xl font-bold leading-tight text-[var(--brown-dark)] sm:text-[22px]">
            {name}
          </h2>

          <p className="mt-2 text-base font-medium leading-6 text-[var(--brown)]">
            {position}
          </p>

          {department && (
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              {department}
            </p>
          )}

          {bio && (
            <p
              className={
                expanded
                  ? "mt-4 max-w-5xl text-[15px] leading-6 text-[var(--muted)]"
                  : "mt-4 max-w-5xl text-[15px] leading-6 text-[var(--muted)] line-clamp-3"
              }
            >
              {bio}
            </p>
          )}

          {bio && (
            <button
              type="button"
              onClick={() => setExpanded((value) => !value)}
              className="mt-5 rounded-full bg-[var(--brown-dark)] px-5 py-2 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--brown)] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--brown)] focus:ring-offset-2"
              aria-expanded={expanded}
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

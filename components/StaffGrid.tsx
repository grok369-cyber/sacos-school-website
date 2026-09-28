import Image from "next/image";
import { client, sanityConfigured, urlFor } from "@/lib/sanity";
import { staffQuery } from "@/lib/queries";

export async function StaffGrid({ limit = 24 }: { limit?: number }) {
  const staff = sanityConfigured ? await client.fetch<any[]>(staffQuery).catch(() => []) : [];

  if (!staff.length) {
    return (
      <div className="rounded-2xl border border-dashed border-[var(--line)] bg-[var(--cream)] p-8 text-sm text-[var(--muted)]">
        Staff profiles will appear here once they are added and published in Sanity.
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {staff.slice(0, limit).map((member) => (
        <article key={member._id} className="paper-card overflow-hidden rounded-2xl">
          <div className="relative aspect-[4/5] bg-[var(--cream)]">
            {member.photo ? (
              <Image
                src={urlFor(member.photo).width(700).height(875).fit("crop").url()}
                alt={member.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 25vw"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center px-6 text-center text-sm font-semibold text-[var(--muted)]">
                No photo available
              </div>
            )}
          </div>
          <div className="p-6">
            <h2 className="display text-2xl text-[var(--brown-dark)]">{member.name}</h2>
            <p className="mt-2 text-sm font-bold text-[var(--brown)]">{member.position}</p>
            {member.department && (
              <p className="mt-1 text-xs font-semibold uppercase tracking-[.12em] text-[var(--muted)]">
                {member.department}
              </p>
            )}
            {member.bio && <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{member.bio}</p>}
          </div>
        </article>
      ))}
    </div>
  );
}

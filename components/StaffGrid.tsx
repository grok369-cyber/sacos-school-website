import { client, sanityConfigured, urlFor } from "@/lib/sanity";
import { staffQuery } from "@/lib/queries";
import { StaffCard } from "@/components/StaffCard";

export async function StaffGrid({ limit = 24 }: { limit?: number }) {
  const staff = sanityConfigured
    ? await client.fetch<any[]>(staffQuery).catch(() => [])
    : [];

  if (!staff.length) {
    return (
      <div className="rounded-2xl border border-[var(--line)] bg-[var(--cream)] p-8 sm:p-10">
        <span className="text-xs font-bold uppercase tracking-[.18em] text-[var(--green)]">Our people</span>
        <h3 className="display mt-3 text-2xl text-[var(--brown-dark)]">The people who make school life possible.</h3>
        <p className="mt-3 max-w-2xl leading-7 text-[var(--muted)]">
          Teachers, administrators and support staff each play an important role in guiding learners and supporting
          the wider school community. Staff profiles will be shared here as the school publishes them.
        </p>
        <p className="mt-3 text-sm font-medium text-[var(--brown)]">Visit again to learn more about the Savio team.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {staff.slice(0, limit).map((member) => (
        <StaffCard
          key={member._id}
          name={member.name}
          position={member.position}
          department={member.department}
          bio={member.bio}
          imageUrl={
            member.photo
              ? urlFor(member.photo).width(640).height(640).fit("crop").url()
              : undefined
          }
        />
      ))}
    </div>
  );
}

import { client, sanityConfigured, urlFor } from "@/lib/sanity";
import { staffQuery } from "@/lib/queries";
import { StaffCard } from "@/components/StaffCard";

export async function StaffGrid({ limit = 24 }: { limit?: number }) {
  const staff = sanityConfigured
    ? await client.fetch<any[]>(staffQuery).catch(() => [])
    : [];

  if (!staff.length) {
    return (
      <div className="rounded-2xl border border-dashed border-[var(--line)] bg-[var(--cream)] p-8 text-sm text-[var(--muted)]">
        Staff profiles will appear here once they are added and published in Sanity.
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

import Image from "next/image";
import { client, sanityConfigured, urlFor } from "@/lib/sanity";
import { eventsQuery } from "@/lib/queries";

export async function EventsGrid({ limit = 12 }: { limit?: number }) {
  const events = sanityConfigured ? await client.fetch<any[]>(eventsQuery).catch(() => []) : [];

  if (!events.length) {
    return (
      <div className="rounded-2xl border border-dashed border-[var(--line)] bg-[var(--cream)] p-8 text-sm text-[var(--muted)]">
        School events will appear here once they are added and published in Sanity.
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {events.slice(0, limit).map((event) => (
        <article key={event._id} className="paper-card overflow-hidden rounded-2xl">
          <div className="relative aspect-[16/10] bg-[var(--cream)]">
            {event.coverImage && (
              <Image
                src={urlFor(event.coverImage).width(900).height(560).fit("crop").url()}
                alt={event.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            )}
          </div>
          <div className="p-6">
            <p className="text-xs font-bold uppercase tracking-[.15em] text-[var(--gold)]">
              {formatDate(event.date)}
            </p>
            <h2 className="display mt-3 text-2xl text-[var(--green-dark)]">{event.title}</h2>
            {event.location && <p className="mt-2 text-sm font-semibold text-[var(--brown)]">{event.location}</p>}
            {event.excerpt && <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{event.excerpt}</p>}
          </div>
        </article>
      ))}
    </div>
  );
}

function formatDate(value?: string) {
  if (!value) return "School event";
  return new Intl.DateTimeFormat("en-UG", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format(new Date(value));
}

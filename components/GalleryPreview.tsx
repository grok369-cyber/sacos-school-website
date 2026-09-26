import Image from "next/image";
import { client, sanityConfigured, urlFor } from "@/lib/sanity";
import { latestGalleryQuery } from "@/lib/queries";

export async function GalleryPreview() {
  const items = sanityConfigured ? await client.fetch<any[]>(latestGalleryQuery).catch(() => []) : [];
  if (!items.length) return <div className="rounded-2xl border border-dashed border-[var(--line)] bg-[var(--cream)] p-8 text-sm text-[var(--muted)]">Gallery images will appear here once they are added in Sanity.</div>;
  return <div className="grid grid-cols-2 gap-4 md:grid-cols-4">{items.slice(0, 8).map((item) => <div key={item._id} className="relative aspect-square overflow-hidden rounded-2xl bg-[var(--cream)]">{item.coverImage && <Image src={urlFor(item.coverImage).width(700).height(700).fit("crop").url()} alt={item.title} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition duration-500 hover:scale-105" />}</div>)}</div>;
}

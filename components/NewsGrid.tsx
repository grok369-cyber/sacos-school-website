import Image from "next/image";
import Link from "next/link";
import { client, sanityConfigured, urlFor } from "@/lib/sanity";
import { latestNewsQuery } from "@/lib/queries";

export async function NewsGrid({ limit = 3 }: { limit?: number }) {
  const posts = sanityConfigured ? await client.fetch<any[]>(latestNewsQuery).catch(() => []) : [];
  if (!posts.length) return <EmptyContent label="News will appear here once it is published in Sanity." />;
  return <div className="grid gap-6 md:grid-cols-3">{posts.slice(0, limit).map((post) => <article key={post._id} className="paper-card overflow-hidden rounded-2xl"><div className="relative aspect-[16/10] bg-[var(--cream)]">{post.coverImage && <Image src={urlFor(post.coverImage).width(900).height(560).fit("crop").url()} alt={post.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />}</div><div className="p-6"><div className="text-xs font-bold uppercase tracking-[.15em] text-[var(--gold)]">{post.category || "School news"}</div><h3 className="display mt-3 text-2xl text-[var(--navy)]">{post.title}</h3><p className="mt-3 line-clamp-3 text-sm leading-6 text-[var(--muted)]">{post.excerpt}</p><Link href={`/news/${post.slug?.current || post._id}`} className="mt-5 inline-block text-sm font-semibold text-[var(--navy)]">Read more →</Link></div></article>)}</div>;
}

function EmptyContent({ label }: { label: string }) { return <div className="rounded-2xl border border-dashed border-[var(--line)] bg-[var(--cream)] p-8 text-sm text-[var(--muted)]">{label}</div>; }

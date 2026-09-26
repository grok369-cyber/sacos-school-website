import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { client, sanityConfigured, urlFor } from "@/lib/sanity";

export default async function NewsArticle({ params }: { params: Promise<{ slug: string }> }) {
  if (!sanityConfigured) notFound();
  const { slug } = await params;
  const post = await client.fetch<any>(`*[_type == "newsPost" && slug.current == $slug][0]{_id,title,excerpt,coverImage,publishedAt,category,body}`, { slug }).catch(() => null);
  if (!post) notFound();
  return <main><article className="container-school max-w-4xl py-20"><div className="text-xs font-bold uppercase tracking-[.18em] text-[var(--gold)]">{post.category || "School news"}</div><h1 className="display mt-4 text-5xl leading-tight text-[var(--navy)] sm:text-7xl">{post.title}</h1><p className="mt-5 text-sm text-[var(--muted)]">{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ""}</p>{post.coverImage && <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-3xl"><Image src={urlFor(post.coverImage).width(1400).height(800).fit("crop").url()} alt={post.title} fill sizes="(max-width: 768px) 100vw, 900px" className="object-cover" priority /></div>}<div className="mt-10 max-w-none text-lg leading-8 text-[var(--muted)]"><p>{post.excerpt}</p>{post.body && <PortableText value={post.body}/>}</div></article></main>;
}

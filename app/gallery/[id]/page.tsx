import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client, sanityConfigured, urlFor } from "@/lib/sanity";
import { galleryItemQuery } from "@/lib/queries";

type GalleryItem = {
  _id: string;
  title: string;
  caption?: string;
  coverImage?: any;
};

async function getGalleryItem(id: string) {
  if (!sanityConfigured) return null;
  return client
    .fetch<GalleryItem | null>(galleryItemQuery, { id })
    .catch(() => null);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const item = await getGalleryItem(id);

  return {
    title: item?.title
      ? `${item.title} | Savio Secondary School`
      : "Gallery | Savio Secondary School",
    description:
      item?.caption || "A photo from Savio Secondary School, Kawempe.",
  };
}

export default async function GalleryItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = await getGalleryItem(id);

  if (!item?.coverImage) {
    notFound();
  }

  const imageUrl = urlFor(item.coverImage).width(2000).auto("format").url();

  return (
    <main className="min-h-screen bg-[var(--cream)]">
      <section className="container-school py-8 sm:py-12">
        <Link
          href="/gallery"
          className="mb-8 inline-flex items-center text-sm font-bold uppercase tracking-[0.16em] text-[var(--muted)] transition-colors hover:text-[var(--brown)]"
        >
          ← Back to gallery
        </Link>

        <div className="overflow-hidden rounded-3xl bg-black shadow-2xl">
          <div className="relative flex min-h-[55vh] items-center justify-center bg-black p-3 sm:min-h-[70vh] sm:p-6 lg:min-h-[78vh]">
            <Image
              src={imageUrl}
              alt={item.title}
              width={2000}
              height={1400}
              priority
              className="max-h-[78vh] w-auto max-w-full object-contain"
            />
          </div>

          <div className="border-t border-black/10 bg-white px-6 py-6 sm:px-10 sm:py-8">
            <h1 className="text-3xl font-bold text-[var(--brown)] sm:text-4xl">
              {item.title}
            </h1>
            {item.caption && (
              <p className="mt-3 max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-lg">
                {item.caption}
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

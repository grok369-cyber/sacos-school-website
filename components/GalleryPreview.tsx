import Image from "next/image";
import Link from "next/link";
import { client, sanityConfigured, urlFor } from "@/lib/sanity";
import { latestGalleryQuery } from "@/lib/queries";

export async function GalleryPreview() {
  const items = sanityConfigured
    ? await client.fetch<any[]>(latestGalleryQuery).catch(() => [])
    : [];

  if (!items.length) {
    return (
      <div className="rounded-2xl border border-dashed border-[var(--line)] bg-[var(--cream)] p-8 text-sm text-[var(--muted)]">
        Gallery images will appear here once they are added in Sanity.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.slice(0, 12).map((item) => {
        const imageUrl = item.coverImage
          ? urlFor(item.coverImage).width(1000).height(750).fit("crop").url()
          : "";

        return (
          <Link
            key={item._id}
            href={`/gallery/${encodeURIComponent(item._id)}`}
            className="group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--cream)] shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5"
            aria-label={`View ${item.title}`}
          >
            {imageUrl && (
              <>
                <div className="absolute inset-0">
                  <Image
                    src={imageUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div
                  className="absolute inset-x-0 bottom-0 h-[48%] scale-110 bg-cover bg-center blur-xl transition-transform duration-700 ease-out group-hover:scale-[1.14]"
                  style={{ backgroundImage: `url("${imageUrl}")` }}
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 h-[50%] bg-black/55 backdrop-blur-[2px]" />
              </>
            )}

            <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-white sm:p-6">
              <h3 className="text-2xl font-bold leading-tight drop-shadow-sm">
                {item.title}
              </h3>
              {item.caption && (
                <p className="mt-2 max-w-xl text-sm leading-6 text-white/95 sm:text-[15px]">
                  {item.caption}
                </p>
              )}
              <span className="mt-3 inline-flex translate-y-1 text-xs font-bold uppercase tracking-[0.16em] text-white/0 transition-all duration-300 group-hover:translate-y-0 group-hover:text-white/85">
                View image →
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

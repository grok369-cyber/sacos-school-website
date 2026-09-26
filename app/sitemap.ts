import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  return ["/", "/about", "/academics", "/admissions", "/news", "/gallery", "/contact"].map((path) => ({ url: `${base}${path}`, lastModified: new Date() }));
}

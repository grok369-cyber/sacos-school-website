import type { MetadataRoute } from "next";

const siteUrl = "https://saviosecondaryschool.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/about",
    "/academics",
    "/admissions",
    "/news",
    "/events",
    "/staff",
    "/gallery",
    "/contact",
  ];

  return paths.map((path) => ({
    url: new URL(path, siteUrl).toString(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/contact" || path === "/admissions" ? 0.8 : 0.6,
  }));
}

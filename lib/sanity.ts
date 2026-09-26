import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const sanityConfigured = Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
export const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const client = createClient({
  projectId: sanityProjectId || "placeholder",
  dataset: sanityDataset,
  apiVersion: "2026-01-01",
  useCdn: true
});

const builder = imageUrlBuilder({ projectId: sanityProjectId || "placeholder", dataset: sanityDataset });
export const urlFor = (source: any) => builder.image(source);

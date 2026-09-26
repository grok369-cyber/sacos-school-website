import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const DEFAULT_SANITY_PROJECT_ID = "9wq1ve7n";

export const sanityConfigured = Boolean(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || DEFAULT_SANITY_PROJECT_ID
);
export const sanityProjectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || DEFAULT_SANITY_PROJECT_ID;
export const sanityDataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const client = createClient({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  apiVersion: "2026-01-01",
  useCdn: true
});

const builder = imageUrlBuilder({
  projectId: sanityProjectId,
  dataset: sanityDataset
});

export const urlFor = (source: any) => builder.image(source);

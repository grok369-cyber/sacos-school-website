'use client'

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemaTypes";

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "9wq1ve7n";

export default defineConfig({
  name: "savio-secondary-school",
  title: "Savio Secondary School",
  basePath: "/studio",
  projectId,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  plugins: [structureTool()],
  schema: { types: schemaTypes }
});

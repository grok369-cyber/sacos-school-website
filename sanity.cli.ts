import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId:
      process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "9wq1ve7n",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production"
  },
  deployment: {
    autoUpdates: true
  }
});

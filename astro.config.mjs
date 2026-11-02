import { defineConfig } from "astro/config";

// User site: https://<username>.github.io  (base stays "/")
// Keep this URL in sync with site.url in src/config.ts.
export default defineConfig({
  site: "https://example.github.io",
});

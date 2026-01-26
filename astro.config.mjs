import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://nan.do",
  trailingSlash: "never",
  integrations: [tailwind()],
  srcDir: "src",
  outDir: "dist",
});

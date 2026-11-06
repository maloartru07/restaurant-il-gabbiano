import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://il-gabbiano-demo.example",
  integrations: [tailwind()],
});

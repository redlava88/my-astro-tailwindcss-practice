// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-cn", "fr"],
    fallback: {
      fr: "en",
    },
  },
  integrations: [tailwind()],
});
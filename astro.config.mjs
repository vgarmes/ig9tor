// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Inter",
        cssVariable: "--font-inter",
        styles: ["normal"],
        weights: ["400 500"],
        subsets: ["latin"],
      },
       {
        provider: fontProviders.google(),
        name: "EB Garamond",
        cssVariable: "--font-garamond",
        styles: ["normal"],
        weights: ["400 600"],
        subsets: ["latin"],
      },
    ],
  },
});

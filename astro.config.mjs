import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import icon from "astro-icon";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://dcc.cse.unsw.edu.au",
  integrations: [tailwind(), mdx(), sitemap(), react(), icon()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});

// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  trailingSlash: "always",
  site: "https://samrank.com",
  integrations: [tailwind(), sitemap({ changefreq: "weekly", priority: 0.9, lastmod: new Date() }), react()]
});
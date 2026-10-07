import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import codeTheme from './src/code-theme.json' with { type: 'json' };
import manualHast from './src/lib/manual-hast.mjs';

export default defineConfig({
  site: 'https://reksstudio.github.io',
  base: '/v2',
  outDir: '../v2',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    assets: 'assets',
    inlineStylesheets: 'always',
  },
  compressHTML: true,
  markdown: {
    shikiConfig: { theme: codeTheme },
    processor: satteri({
      features: { smartPunctuation: false },
      hastPlugins: [() => manualHast()],
    }),
  },
});

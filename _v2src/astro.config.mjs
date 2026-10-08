import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import codeTheme from './src/code-theme.json' with { type: 'json' };
import manualHast from './src/lib/manual-hast.mjs';
import { referenceMdast } from './src/lib/reference.mjs';

const base = '/v2/';

export default defineConfig({
  site: 'https://reksstudio.github.io',
  base,
  outDir: '../v2',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    assets: 'assets',
    inlineStylesheets: 'always',
  },
  compressHTML: true,
  markdown: {
    shikiConfig: { theme: codeTheme, langAlias: { psithon: 'text', log: 'text' } },
    processor: satteri({
      features: { smartPunctuation: false, math: true, headingAttributes: true },
      mdastPlugins: [() => referenceMdast()],
      hastPlugins: [(ctx) => manualHast(ctx, base)],
    }),
  },
});

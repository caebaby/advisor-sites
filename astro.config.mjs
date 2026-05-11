import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import yaml from '@rollup/plugin-yaml';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import editableRegions from '@cloudcannon/editable-regions/astro-integration';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { siteFonts } from './site-fonts.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://advisor-sites.netlify.app',
  output: 'static',
  outDir: 'dist',
  fonts: siteFonts,
  integrations: [
    {
      name: 'builder-preview-dev-only',
      hooks: {
        'astro:config:setup': ({ command, injectRoute, updateConfig }) => {
          if (command === 'dev') {
            injectRoute({
              pattern: '/component-docs/builder-preview',
              entrypoint: './src/component-docs/pages/builder-preview.astro',
              prerender: false,
            });
            updateConfig({
              adapter: {
                name: 'dev-only-server-preview',
                serverEntrypoint: '',
                supportedAstroFeatures: {
                  serverOutput: 'stable',
                  staticOutput: 'stable',
                  hybridOutput: 'stable',
                  sharpImageService: 'stable',
                },
              },
            });
          }
        },
      },
    },
    editableRegions(),
    icon({
      iconDir: path.resolve(__dirname, 'src/icons'),
      svgoOptions: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupIds: false,
              },
            },
          },
        ],
      },
    }),
    sitemap({
      filter: (page) => {
        if (page.endsWith('/404') || page.endsWith('/404.html')) return false;
        if (page.includes('/component-docs')) return false;
        return true;
      },
    }),
    mdx(),
  ],
  vite: {
    plugins: [tailwindcss(), yaml()],
    build: {
      minify: 'esbuild',
      chunkSizeWarningLimit: 1024,
    },
    css: {
      devSourcemap: true,
    },
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@building-blocks': path.resolve(__dirname, 'src/components/building-blocks'),
        '@core-elements': path.resolve(__dirname, 'src/components/building-blocks/core-elements'),
        '@forms': path.resolve(__dirname, 'src/components/building-blocks/forms'),
        '@wrappers': path.resolve(__dirname, 'src/components/building-blocks/wrappers'),
        '@navigation': path.resolve(__dirname, 'src/components/navigation'),
        '@page-sections': path.resolve(__dirname, 'src/components/page-sections'),
        '@features': path.resolve(__dirname, 'src/components/page-sections/features'),
        '@builders': path.resolve(__dirname, 'src/components/page-sections/builders'),
        '@data': path.resolve(__dirname, 'src/data'),
        '@content': path.resolve(__dirname, 'src/content'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@component-docs': path.resolve(__dirname, 'src/component-docs'),
        '@layouts': path.resolve(__dirname, 'src/layouts'),
        '@component-utils': path.resolve(__dirname, 'src/components/utils'),
        '@styles': path.resolve(__dirname, 'src/styles'),
      },
    },
  },
});

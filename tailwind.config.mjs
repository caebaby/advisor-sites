// tailwind.config.mjs
import { defineConfig } from 'tailwindcss';

export default defineConfig({
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary:    '#1B2B4B',
        accent:     '#C9A96E',
        background: '#FAF8F5',
        surface:    '#FFFFFF',
        'text-primary': '#1A1A2E',
        'text-muted':   '#6B7280',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans:  ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
});

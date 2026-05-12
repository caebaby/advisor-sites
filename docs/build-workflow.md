# Advisor Sites — Build Workflow

How we built the Axiom Advisor Website OS prototype. This document covers the full stack, architecture decisions, and deployment setup so any developer can pick up where we left off.

---

## Stack

| Layer | Tool | Notes |
|---|---|---|
| Framework | Astro v6 | Static site generator (`output: 'static'`) |
| Styling | Tailwind CSS v4 | CSS-first config — no `tailwind.config.mjs` |
| CMS | CloudCannon | Git-based, visual editing, connects to GitHub |
| Hosting | Netlify | Auto-deploys on every push to `master` |
| Repo | GitHub | `github.com/caebaby/advisor-sites` |

---

## Architecture

### Base: CloudCannon Astro Component Starter

We cloned (not forked) the [CloudCannon Astro Component Starter](https://github.com/CloudCannon/astro-component-starter) as the foundation. It provides:

- A pre-built component registry system (`renderBlock.astro`)
- CSS layer architecture (`@layer reset, base, components, page-sections, utils, overrides`)
- CloudCannon CMS integration patterns
- 40+ pre-built UI components

### Page Composition Pattern

Every page uses a `pageSections` array in its frontmatter. Each item has a `_component` path and props:

```yaml
# src/content/pages/index.md
pageSections:
  - _component: page-sections/advisor/advisor-hero
    headline: "Your Financial Life, Finally Under Control"
    heroImage: "https://images.unsplash.com/..."
  - _component: page-sections/advisor/who-we-help
    heading: "Who We Work With"
```

The `renderBlock.astro` component auto-discovers components via `import.meta.glob`. A component at `src/components/page-sections/advisor/AdvisorHero.astro` registers as `page-sections/advisor/advisor-hero` (kebab-case of filename + directory path).

**Important naming rule:** Avoid acronyms in filenames. `AdvisorBottomCTA.astro` registers as `advisor-bottom-c-t-a` (broken). Name it `AdvisorBottomCta.astro` → registers correctly as `advisor-bottom-cta`.

### Content Structure

```
src/
├── content/
│   ├── pages/          # .md files — one per page, holds pageSections
│   ├── blog/           # .mdx files — blog posts
│   └── landing/        # .md files — landing pages
├── data/               # .json files — global site data
│   ├── site.json       # Firm name, advisor, scheduling URL, CTAs
│   ├── mainNav.json    # Logo, nav links, CTA button
│   ├── footer.json     # Footer links, socials, compliance disclaimer
│   ├── services.json   # Service offerings
│   └── testimonials.json
└── components/
    └── page-sections/
        └── advisor/    # All custom advisor section components
```

### Custom Advisor Components

All live in `src/components/page-sections/advisor/`:

| File | Registers as | Purpose |
|---|---|---|
| `AdvisorHero.astro` | `advisor-hero` | Hero with headline, subheadline, dual CTAs, image |
| `WhoWeHelp.astro` | `who-we-help` | 3-column persona cards with icons |
| `HowWeHelp.astro` | `how-we-help` | 4-step numbered process |
| `AdvisorCredentials.astro` | `advisor-credentials` | Designation badges |
| `AdvisorTestimonials.astro` | `advisor-testimonials` | Client quote cards |
| `ServiceCards.astro` | `service-cards` | Service offering grid |
| `AdvisorBio.astro` | `advisor-bio` | Two-column bio with photo |
| `AdvisorBottomCta.astro` | `advisor-bottom-cta` | Full-width navy CTA band |

---

## Key Technical Decisions

### Tailwind v4 Setup

The starter ships with Tailwind v4. **Do not use `@astrojs/tailwind`** — it only supports Tailwind v3 and will break the build.

Correct setup:
- Integration: `@tailwindcss/vite` as a Vite plugin in `astro.config.mjs`
- Config: CSS-first in `src/styles/global.css` using `@import "tailwindcss"` + `@theme {}` block

```css
/* src/styles/global.css */
@import "tailwindcss";

@theme {
  --color-primary: #1B2B4B;
  --color-accent: #C9A96E;
  --color-background: #FAF8F5;
  --font-family-serif: "DM Serif Display", Georgia, serif;
  --font-family-sans: "Plus Jakarta Sans", system-ui, sans-serif;
}
```

### Scoped CSS for Responsive Grids

The starter's CSS layer system (`@layer`) causes Tailwind responsive classes (`lg:grid-cols-2`) to lose specificity battles. Every advisor component uses scoped `<style>` blocks with explicit media queries instead of Tailwind responsive utilities:

```astro
<style>
  .advisor-hero-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  @media (min-width: 1024px) {
    .advisor-hero-grid { grid-template-columns: 1fr 1fr; }
  }
</style>
```

### Blog Pagination

Blog feed uses `src/pages/blog/[...page].astro` (not `index.astro`) for Astro's built-in pagination support.

### Content Config

Content collections are configured in `src/content.config.ts` (not `src/content/config.ts` — Astro v6 moved this).

---

## Design Tokens

| Token | Value | Usage |
|---|---|---|
| Navy | `#1B2B4B` | Primary headings, nav, CTA backgrounds |
| Gold | `#C9A96E` | Accent, primary CTA buttons, icons |
| Cream | `#FAF8F5` | Page backgrounds |
| White | `#FFFFFF` | Card surfaces |
| Heading font | DM Serif Display | All `<h1>`–`<h3>` |
| Body font | Plus Jakarta Sans | Body text, UI |

---

## Pages

| Route | Source file | Sections |
|---|---|---|
| `/` | `src/content/pages/index.md` | Hero, WhoWeHelp, HowWeHelp, Credentials, Testimonials, BottomCTA |
| `/about/` | `src/content/pages/about.md` | AdvisorBio, Credentials, BottomCTA |
| `/services/` | `src/content/pages/services.md` | ServiceCards, BottomCTA |
| `/resources/` | `src/content/pages/resources.md` | BottomCTA |
| `/blog/` | `src/pages/blog/[...page].astro` | Paginated post list |
| `/blog/[slug]/` | `src/pages/blog/[slug].astro` | Individual post |
| `/landing/[slug]/` | `src/pages/landing/[...slug].astro` | Minimal header, video placeholder, calendar |

---

## CloudCannon CMS

Config lives in `cloudcannon.config.yml` at the repo root. It defines:

- **Collections** — pages, blog, landing, data files
- **Inputs** — field types for every editable prop (text, image, url, etc.)
- **Structures** — reusable field groups (e.g. `pageSections` array items, bullet points)

Every prop passed to an advisor component is wired as an editable input in CloudCannon. Editors click any field in the visual editor to update it without touching code.

---

## Deployment Flow

```
Developer edits code → pushes to master → Netlify rebuilds → live site updates
Editor saves in CloudCannon → CloudCannon commits to GitHub → Netlify rebuilds → live site updates
```

- **Live site:** https://advisorsites.netlify.app
- **Repo:** https://github.com/caebaby/advisor-sites
- **Production branch:** `master`
- **Build command:** `npm run build`
- **Publish directory:** `dist`

---

## Local Development

```bash
git clone https://github.com/caebaby/advisor-sites.git
cd advisor-sites
npm install
npm run dev        # starts at http://localhost:4321
npm run build      # production build to /dist
```

Node 22+ required.

---

## What's Next (Design + Feature Work)

The current build is scope-first — all 7 pages are live and CMS-wired. Design polish is the next priority:

- Replace placeholder Unsplash images with real advisor photos
- Improve typography hierarchy and spacing
- Add micro-animations (already scaffolded via `[data-animate]` in global CSS)
- Build out the Resources page with a proper blog/article listing
- Replace Calendly placeholder URLs with real scheduling links
- Add real firm name, advisor name, and compliance disclaimer

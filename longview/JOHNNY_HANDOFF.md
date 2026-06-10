# LongView Planning Partners — Replit Transition Guide
**For:** Johnny (developer)  
**From:** Chris Evans  
**Repo:** `github.com/caebaby/advisor-sites` → folder `longview/`  
**Date:** May 2026

---

## ⛔ Hard Rules — Read Before Touching Anything

These are absolute. Break any of these and the site breaks visually or functionally.

### Architecture
- **No npm. No build step. No framework.** Pure static HTML — no React, Vue, Astro, or anything else. Every page is a self-contained `.html` file.
- **No shared CSS file.** All CSS lives inline in each page's `<style>` block. Do not extract it. Do not link an external stylesheet.
- **No shared JS file.** All JS lives at the bottom of each page's `<body>`. Do not link external scripts except Google Fonts and the embeds listed in Section 12.
- **No package.json.** If you find yourself running `npm install`, stop. Wrong project.

### Files & Paths
- **Never rename or move `images/longview-logo.png`.** Referenced in the nav of every page. Rename it and the nav breaks everywhere.
- **Never rename any HTML file.** Every internal link is hardcoded. Renaming breaks navigation.
- **Never delete an image without checking all 23 pages** via grep first.

### CSS
- **Never hardcode hex values.** Always use the CSS variables in `:root` (see Section 5).
- **Never change CSS variable names or values.** The entire color system depends on them.
- **Never remove the Google Fonts `<link>` tag.** It loads Libre Baskerville + DM Sans. Remove it and the site looks like Times New Roman.

### Animations
- **Never add `class="reveal"` to hero section elements.** `reveal` starts at `opacity:0`. Hero content is always in the viewport — it becomes invisible and never animates in. Only add `reveal` to content below the fold.
- **Never remove `io.unobserve(e.target)` from the IntersectionObserver.** Prevents scroll flicker. Required.
- **If you add a new `reveal-children` grid, count its children** and add matching `nth-child` rules. Items beyond the last rule stay permanently invisible (see Section 6).

### Content & Compliance
- **Never publish with placeholder testimonials.** They are fake. SEC Marketing Rule 206(4)-1 requires real, disclosed quotes only.
- **Never edit the MML Investors Services compliance disclosure** on the licensing page. Verbatim from CRN202804-8138873.
- **Never remove the amber compliance callout boxes** from any blog post.

---

## 1. Quick Start — GitHub → Replit

1. In Replit: **Create Repl → Import from GitHub**
2. Paste: `https://github.com/caebaby/advisor-sites`
3. Set the root directory to `longview/`
4. **The `.replit` file is already configured** — just hit Run. No manual setup needed.
5. Entry point: `index.html` auto-redirects to the homepage.

**There is no npm, no build step, no package.json.** Every page is a self-contained `.html` file with all CSS and JS inline.

---

## 1b. Replit Run Config (already in `.replit` — for reference)

```toml
run = "python3 -m http.server 3000"
entrypoint = "index.html"

[deployment]
deploymentTarget = "static"
publicDir = "."

[[ports]]
localPort = 3000
externalPort = 80
```

**There is no npm, no build step, no package.json.** Every page is a self-contained `.html` file with all CSS and JS inline.

---

## 2. What This Is

A full marketing website for **LongView Planning Partners** — a fee-only, fiduciary financial planning firm serving physicians and dentists. The site's job is to convert visitors into booked Icebreaker Calls.

- **23 production HTML pages** (see Section 4)
- **Pure static HTML** — CSS inline per file, vanilla JS only
- **No CMS, no framework, no dependencies**
- **All fonts** loaded from Google Fonts CDN
- **All local images** in `/images/` folder

---

## 3. File Structure

```
Work/Longview/Website/
├── index.html                          ← Entry point — redirects to homepage
│
├── PRODUCTION PAGES ─────────────────────────────────────
├── longview_homepage_v8.html           ← Homepage (PRIMARY)
├── longview_who-we-serve.html          ← Who We Serve
├── longview_process.html               ← Our Process
├── longview_team.html                  ← Our Team
├── longview_advisor-profile.html       ← John Prather profile
├── longview_advisor-profile-esposito.html  ← Marcus Esposito profile
├── longview_advisor-profile-holmes.html    ← W. Louis Holmes profile
├── longview_blog.html                  ← Blog / Resources directory
├── longview_blog-post.html             ← PSLF blog post
├── longview_post-whole-life-trap.html  ← Whole Life Trap post
├── longview_post-first-year-attending.html ← First Year Attending post
├── longview_post-tax-planning.html     ← Tax Planning post
├── longview_post-burnout-number.html   ← Burnout Number post
├── longview_post-work-optional.html    ← Work-Optional post
├── longview_landing-pslf.html          ← PSLF lead capture landing page
├── longview_post-assessment.html       ← Post-Typeform VSL + booking page
├── longview_services.html              ← Our Services (full page)
├── longview_icp-earlycareer.html       ← ICP: Residents, Fellows & New Attendings
├── longview_icp-laterstage.html        ← ICP: Established Attendings & Pre-Retirement
├── longview_icp-diy.html               ← ICP: Self-Managing Physician
├── longview_book.html                  ← Booking page (Calendly embed)
├── longview_licensing.html             ← Licensing & Disclosures
│
├── DEV / REFERENCE (do not publish at production URLs) ──
├── longview_sitemap.html               ← Page inventory reference
├── thumbnail-options.html              ← Design reference only
│
├── LEGACY (do not deploy) ───────────────────────────────
├── longview_homepage_v6.html
├── longview_homepage_v7.html
├── longview_landing.html
├── longview_team-member.html
│
├── images/                             ← All local photos + brand assets
│   ├── longview-logo.png               ← Used in nav on EVERY page
│   ├── longview-process-wheel.png      ← Process page diagram
│   └── [16 team member photos]
│
├── JOHNNY_HANDOFF.md                   ← This file
├── HANDOFF_CHECKLIST.md                ← Launch checklist
├── STATUS.md                           ← Session log
└── CLAUDE.md                           ← Full project context + copy strategy
```

---

## 4. Complete Sitemap — All Pages + Internal Links

### Navigation (identical on every interior page)

| Nav Label | Links To | Status |
|-----------|----------|--------|
| Why LongView | `longview_homepage_v8.html` | ✅ |
| Our Services | `longview_services.html` | ✅ |
| Who We Serve | `longview_who-we-serve.html` | ✅ |
| Our Process | `longview_process.html` | ✅ |
| Our Team | `longview_team.html` | ✅ |
| Resources | `longview_blog.html` | ✅ |
| **Schedule an Icebreaker Call →** | `longview_book.html` | ✅ needs Calendly |

> **Homepage exception:** "Who We Serve" uses `#pain` anchor to scroll to the homepage ICP section. All other nav links go to pages.

### Footer (identical on every page)

| Footer Link | Links To |
|-------------|----------|
| Licensing | `longview_licensing.html` |
| FINRA BrokerCheck | `https://brokercheck.finra.org` (external) |
| ADV Part 2 | `[ADV_PART2_URL]` — **PLACEHOLDER, needs real SEC link** |
| Privacy Policy | `#` — **DEAD** |
| Disclosures | `#` — **DEAD** |
| Form ADV | `#` — **DEAD** (duplicate of ADV Part 2) |
| LinkedIn | `#` — **DEAD** |
| Facebook | `#` — **DEAD** |

### Page-Level Cross-Links

| From Page | Links To | Purpose |
|-----------|----------|---------|
| Homepage | `longview_book.html` | All CTAs |
| Homepage | `longview_team.html` | Team section |
| Homepage | `longview_process.html` | Process section |
| Homepage | `longview_blog.html` | Resources section |
| Homepage | `longview_blog-post.html` | PSLF featured post |
| Homepage | `longview_post-work-optional.html` | Work-optional post |
| Homepage | `longview_post-first-year-attending.html` | First year post |
| Team page | `longview_advisor-profile.html` | John Prather "View Full Profile" |
| Team page | `longview_advisor-profile-esposito.html` | Marcus Esposito "View Full Profile" |
| Team page | `longview_advisor-profile-holmes.html` | W. Louis Holmes "View Full Profile" |
| All 6 blog posts (sidebar) | `longview_post-assessment.html` | **TEMP** — replace with real Typeform URL |
| Who We Serve | `longview_landing-pslf.html` | PSLF lead magnet CTA |
| Who We Serve | `longview_blog-post.html` | PSLF blog post link |
| Who We Serve | `longview_post-whole-life-trap.html` | Whole life post link |
| Who We Serve | `longview_post-tax-planning.html` | Tax planning post link |
| Who We Serve | `longview_post-burnout-number.html` | Burnout post link |
| Process page | `longview_landing-pslf.html` | PSLF CTA in process |
| All advisor profiles | `longview_team.html` | Back to team |
| All advisor profiles | `longview_book.html` | Book with this advisor |

### Dead Links Summary (fix before launch)

| Link | Location | Fix |
|------|----------|-----|
| `Privacy Policy` footer | Every page | Create page or link to external |
| `Disclosures` footer | Every page | Create page or use licensing page |
| `LinkedIn` footer | Every page | Get real URL from client |
| `Facebook` footer | Every page | Get real URL from client |
| `[ADV_PART2_URL]` footer | Every page | Get SEC ADV Part 2 link from client |
| `[TYPEFORM_URL]` blog sidebars | All 6 blog posts | Get from client; currently points to `longview_post-assessment.html` as temp |
| Calendly embed | `longview_book.html` | Get URL from client |

---

## 5. Design System — Exact Tokens

**Never hardcode hex values. Always use CSS variables.**

### Color Tokens

```css
:root {
  --lv-navy:   #0773BB;  /* Primary CTAs, active nav, links */
  --lv-dark:   #054A82;  /* Hover states, dark section bgs */
  --lv-deeper: #032F57;  /* Top bar, darkest bgs, hero gradient */
  --lv-sky:    #38B0E3;  /* Accents, card border-top, underlines, strokes */
  --lv-light:  #8CD7F7;  /* Glass icons, light accents */
  --lv-gray:   #939598;  /* Secondary body text, sub-labels */
  --lv-gl:     #D1D2D4;  /* Borders, dividers, hairlines */
  --lv-off:    #F4F8FC;  /* Alt section backgrounds */
  --ink:       #0F1923;  /* Primary heading / dark text */
  --body:      #3D4A58;  /* Body copy */
  --max:       1240px;   /* Max content width */
}
```

### Typography

**Both fonts are required on every page. Remove either one and the site breaks visually.**

```html
<!-- Paste into <head> of every page -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet">
```

| Font | Use | CSS |
|------|-----|-----|
| **Libre Baskerville** | Headlines, display, serif accents | `font-family: 'Libre Baskerville', serif` |
| **DM Sans** | Body copy, nav, UI, labels | `font-family: 'DM Sans', sans-serif` |

### Core Component Rules

```css
/* Nav logo — image, not text */
.logo img { height: 44px; width: auto; display: block; }

/* Content container */
.wrap { width: 100%; max-width: 1240px; margin: 0 auto; padding: 0 52px; }

/* Card top accent — always sky, never navy */
.team-card, .blog-card, .service-card {
  border-top: 3px solid #38B0E3; /* use var(--lv-sky) */
}

/* Section headline underline accent */
.ul { padding-bottom: 4px; border-bottom: 2.5px solid var(--lv-sky); }

/* Standard section padding */
.sec { padding: 88px 0; }
.sec.alt { background: var(--lv-off); border-top: 1px solid #dde8f2; border-bottom: 1px solid #dde8f2; }

/* Nav */
.nav-out { background: #fff; border-bottom: 1px solid rgba(209,210,212,.6); position: sticky; top: 0; z-index: 200; }
.nav-out .wrap { height: 76px; display: flex; align-items: center; justify-content: space-between; }

/* Primary CTA button */
.ncta {
  font-size: 13px; font-weight: 600; padding: 11px 24px;
  background: var(--lv-navy); color: #fff; border-radius: 4px;
  transition: background .22s, box-shadow .22s, transform .22s;
}
.ncta:hover { background: var(--lv-dark); box-shadow: 0 6px 20px rgba(7,115,187,.3); transform: translateY(-1px); }
```

### Hero Gradient (exact — do not approximate)

```css
/* Dark navy hero used on all interior pages */
.page-hero {
  background: linear-gradient(135deg, #032F57 0%, #054A82 100%);
  position: relative; overflow: hidden;
}
/* Dot texture overlay on hero */
.page-hero::before {
  content: ''; position: absolute; inset: 0;
  background-image: radial-gradient(circle, rgba(255,255,255,.055) 1px, transparent 1px);
  background-size: 28px 28px;
}
```

### Gradient Text (homepage H1 only)

```css
/* Line 1: white */
color: #ffffff;

/* Line 2: gradient — must have display:block or display:inline-block, NEVER inline */
background: linear-gradient(105deg, #ffffff 0%, #c2e8f8 20%, #8CD7F7 42%, #4ab8e8 65%, #1a96d4 82%, #0e80c0 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
display: inline-block; /* REQUIRED — display:inline clips the gradient */
```

---

## 6. Animation System — Do Not Break

The scroll animations run via a single vanilla `IntersectionObserver`. **Do not replace with a library.** Do not remove the CSS classes.

### CSS Classes

| Class | Behavior |
|-------|----------|
| `.reveal` | Fade up on scroll (opacity 0→1, translateY 28px→0) |
| `.reveal-left` | Slide from left |
| `.reveal-right` | Slide from right |
| `.reveal-scale` | Scale in (0.92→1) |
| `.reveal-children` | Staggered children — parent observed, children animate with nth-child delays |

### Required CSS (copy exactly)

```css
/* Single reveal elements */
.reveal {
  opacity: 0; transform: translateY(28px);
  transition: opacity .65s cubic-bezier(.22,1,.36,1), transform .65s cubic-bezier(.22,1,.36,1);
  will-change: opacity, transform; backface-visibility: hidden;
}
.reveal.visible { opacity: 1; transform: translateY(0); }

/* Staggered grid children */
.reveal-children > * {
  opacity: 0; transform: translateY(22px);
  transition: opacity .55s cubic-bezier(.22,1,.36,1), transform .55s cubic-bezier(.22,1,.36,1);
  will-change: opacity, transform; backface-visibility: hidden;
}
/* CRITICAL: rules must cover the maximum number of children in ANY grid.
   Team page has 14 planners — rules go to :nth-child(17). Never fewer than the grid count. */
.reveal-children.visible > *:nth-child(1)  { opacity:1; transform:translateY(0); transition-delay:.05s }
.reveal-children.visible > *:nth-child(2)  { opacity:1; transform:translateY(0); transition-delay:.12s }
.reveal-children.visible > *:nth-child(3)  { opacity:1; transform:translateY(0); transition-delay:.19s }
.reveal-children.visible > *:nth-child(4)  { opacity:1; transform:translateY(0); transition-delay:.26s }
.reveal-children.visible > *:nth-child(5)  { opacity:1; transform:translateY(0); transition-delay:.33s }
.reveal-children.visible > *:nth-child(6)  { opacity:1; transform:translateY(0); transition-delay:.40s }
.reveal-children.visible > *:nth-child(7)  { opacity:1; transform:translateY(0); transition-delay:.47s }
.reveal-children.visible > *:nth-child(8)  { opacity:1; transform:translateY(0); transition-delay:.54s }
.reveal-children.visible > *:nth-child(9)  { opacity:1; transform:translateY(0); transition-delay:.61s }
.reveal-children.visible > *:nth-child(10) { opacity:1; transform:translateY(0); transition-delay:.68s }
.reveal-children.visible > *:nth-child(11) { opacity:1; transform:translateY(0); transition-delay:.75s }
.reveal-children.visible > *:nth-child(12) { opacity:1; transform:translateY(0); transition-delay:.82s }
.reveal-children.visible > *:nth-child(13) { opacity:1; transform:translateY(0); transition-delay:.89s }
.reveal-children.visible > *:nth-child(14) { opacity:1; transform:translateY(0); transition-delay:.96s }
.reveal-children.visible > *:nth-child(15) { opacity:1; transform:translateY(0); transition-delay:1.03s }
.reveal-children.visible > *:nth-child(16) { opacity:1; transform:translateY(0); transition-delay:1.10s }
.reveal-children.visible > *:nth-child(17) { opacity:1; transform:translateY(0); transition-delay:1.17s }
```

### Required JS (copy exactly — paste before `</body>` on every page)

```javascript
(function(){
  var classes = ['reveal','reveal-children'];
  var targets = document.querySelectorAll(classes.map(function(c){return '.'+c}).join(','));
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.01, rootMargin: '0px 0px -20px 0px' });
  targets.forEach(function(el){ io.observe(el); });
})();
```

**Critical rules:**
- `io.unobserve(e.target)` must be present — prevents re-triggering and scroll flicker
- `threshold: 0.01` — fires as soon as 1% of element is in view
- `rootMargin: '0px 0px -20px 0px'` — elements trigger 20px before the bottom edge
- `will-change` + `backface-visibility` on the CSS — GPU compositing, prevents flicker

### ⚠️ Gotcha: nth-child count must cover ALL children
If you add a new grid with `reveal-children`, count its children. If it has more than 17, add more nth-child rules. Items beyond the last rule stay permanently invisible.

---

## 7. Images

### Required in `/images/`

| File | Used On | Notes |
|------|---------|-------|
| `longview-logo.png` | **Every page** (nav) | Do not rename or move — referenced in all 20 pages |
| `longview-process-wheel.png` | Process page | 4-phase circular diagram from brochure |
| `john-prather-card-v4.jpg` | Team page, John Prather profile | |
| `john-prather.jpg` | John Prather advisor profile header | |
| `marcus-esposito-v6.jpg` | Team page, Esposito profile | |
| `louis-holmes-v2.jpg` | Team page, Holmes profile | |
| `beau-hill.jpg` | Team page | |
| `cooper-smith.jpg` | **NOT used** — replaced by CDN URL below | Can delete |
| `garrett-east.jpg` | Team page | |
| `jason-schultz.jpg` | Team page | |
| `john-jordan.jpg` | Team page | |
| `mitchell-marino.jpg` | Team page | |
| `noah-douglas.jpg` | Team page | |
| `ale-works.jpg` | Team page (support staff) | |
| `chelsea-leguenec.jpg` | Team page (support staff) | |
| `savannah-reeves.jpg` | Team page (support staff) | |
| `susan-shorter.jpg` | Team page (support staff) | |
| `wilson-yearwood.jpg` | Team page (support staff) | |

### CDN Images (already wired — no local file needed)

| Person | URL |
|--------|-----|
| Andy Vinson | `https://cdn.prod.website-files.com/5b7f182e0151a0d755efd64c/5b96edb75630ee9e880a19d5_Vinson.jpg` |
| Cooper Smith | `https://cdn.prod.website-files.com/5b7f182e0151a0d755efd64c/630664801b031cee2f9d31c5_7.png` |
| Tierra Waddell | LongView CDN (check team page source) |

### Legacy Images (can delete — not referenced)

`cooper-smith.jpg`, `john-prather-card.jpg`, `john-prather-card-v2.jpg`, `john-prather-card-v3.jpg`, `louis-holmes.jpg`, `marcus-esposito.jpg`, `marcus-esposito-v2.jpg` through `v5.jpg`

---

## 8. Mobile Requirements

Every page must pass at: **375px · 768px · 1024px · 1440px**

### Existing responsive breakpoints (already in all files)

```css
@media(max-width: 900px) {
  .wrap { padding: 0 28px; }
  /* Multi-column grids collapse to 1-2 columns */
}
@media(max-width: 600px) {
  /* Single column, reduced font sizes */
}
```

### Mobile rules to enforce on every page

- Body text minimum **16px** on mobile — never smaller
- Touch targets minimum **44×44px** (buttons, nav links, CTAs)
- No horizontal scroll at any breakpoint — test with browser devtools
- Nav: hamburger menu must work on mobile (already implemented)
- Hero H1: reduce font-size to ~32px on mobile (check each page)
- `.wrap` padding: `0 28px` on mobile (already set)
- Images: `max-width: 100%` on all `<img>` tags
- Cards: grid collapses to single column on mobile (`grid-template-columns: 1fr`)
- Blog thumbnails: `aspect-ratio: 1200/630` maintained at all widths

---

## 9. Performance Requirements

### Images
- Compress all `/images/*.jpg` — run through [squoosh.app](https://squoosh.app) or ImageOptim
- Target: all images under 200KB
- Add `loading="lazy"` to all images **below the fold** (hero images stay eager)
- Add `width` and `height` attributes to all `<img>` tags to prevent layout shift

### Fonts
- Google Fonts already loaded with `rel="preconnect"` — keep this
- Consider `font-display: swap` for the Google Fonts URL if not already present

### General
- Minify all HTML/CSS before final deploy
- No render-blocking scripts (all JS is at end of `<body>` — keep it there)

---

## 10. SEO — Required on Every Page

Add to the `<head>` of every production page. Replace placeholders with real values.

```html
<!-- Primary Meta -->
<title>[PAGE TITLE] — LongView Planning Partners</title>
<meta name="description" content="[150 chars max — unique per page]">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://www.longviewplan.com/[page-slug]">

<!-- Open Graph (social sharing) -->
<meta property="og:type" content="website">
<meta property="og:title" content="[PAGE TITLE] — LongView Planning Partners">
<meta property="og:description" content="[Same as meta description]">
<meta property="og:url" content="https://www.longviewplan.com/[page-slug]">
<meta property="og:image" content="https://www.longviewplan.com/images/longview-og-default.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:site_name" content="LongView Planning Partners">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[PAGE TITLE] — LongView Planning Partners">
<meta name="twitter:description" content="[Same as meta description]">
<meta name="twitter:image" content="https://www.longviewplan.com/images/longview-og-default.jpg">
```

### OG Image
- Create one default OG image: `images/longview-og-default.jpg` — 1200×630px
- Use the dark navy brand aesthetic (like blog thumbnails — Option A style)
- Blog posts can use their blog thumbnail as the OG image

### Schema Markup (add to homepage + team pages)

```html
<!-- Homepage: LocalBusiness -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "LongView Planning Partners",
  "url": "https://www.longviewplan.com",
  "telephone": "901-322-9114",
  "email": "info@longviewplan.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "618 Oakleaf Office Lane, Suite 300",
    "addressLocality": "Memphis",
    "addressRegion": "TN",
    "postalCode": "38117"
  },
  "description": "Fee-only, fiduciary financial planning for physicians and dentists."
}
</script>

<!-- Team / advisor pages: Person -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "[Advisor Name]",
  "jobTitle": "[Title]",
  "worksFor": { "@type": "Organization", "name": "LongView Planning Partners" },
  "url": "https://www.longviewplan.com/[page-slug]"
}
</script>
```

### Suggested Meta Descriptions Per Page

| Page | Suggested Description |
|------|-----------------------|
| Homepage | Fee-only financial planning for physicians and dentists. No commissions, fiduciary standard, exclusively serving medical professionals in Memphis and nationwide. |
| Who We Serve | Whether you're a resident with student loans or an attending thinking about retirement, LongView works exclusively with physicians and dentists at every career stage. |
| Our Process | See how LongView's 4-phase planning process — Discover, Plan, Implement, Guide — gives physicians and dentists a clear financial roadmap. |
| Our Team | Meet the fee-only financial planners at LongView Planning Partners. CFP®, CSLP®, and CPA credentials, all focused exclusively on physician and dentist households. |
| Blog | Financial insights for physicians and dentists — student loan strategy, tax planning, retirement, and more from LongView Planning Partners. |

---

## 11. Analytics Scripts

Insert into `<head>` of every production page after `<meta charset>`. Replace `G-XXXXXXXXXX` and `XXXXXXXXXXXXXXXXX` with real IDs from client.

```html
<!-- Google Analytics GA4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>

<!-- Meta Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'XXXXXXXXXXXXXXXXX');
  fbq('track', 'PageView');
</script>
<noscript>
  <img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=XXXXXXXXXXXXXXXXX&ev=PageView&noscript=1"/>
</noscript>
```

---

## 12. Embeds — Exact Locations + Placeholder Replacement

### Typeform (Assessment)

**What it is:** Physician financial readiness quiz. After completion, Typeform redirects to `longview_post-assessment.html`.

**Current temp wiring:** All 6 blog post sidebars link to `longview_post-assessment.html` as placeholder.

**What to do:**
1. Get Typeform URL from client (format: `https://form.typeform.com/to/XXXXXXXX`)
2. Find/replace `href="longview_post-assessment.html"` in all 6 blog posts with real Typeform URL
3. In Typeform settings: set redirect on completion → `https://www.longviewplan.com/longview_post-assessment.html`

**Files to update:**
- `longview_blog-post.html`
- `longview_post-whole-life-trap.html`
- `longview_post-first-year-attending.html`
- `longview_post-tax-planning.html`
- `longview_post-burnout-number.html`
- `longview_post-work-optional.html`

### Calendly (Booking)

**What it is:** Icebreaker Call scheduler. Embedded in the booking page.

**Current placeholder in `longview_book.html`:**
```html
<!-- CALENDLY PLACEHOLDER — replace this entire div -->
<div style="background:var(--lv-off);border:2px dashed var(--lv-gl);border-radius:8px;padding:80px 40px;text-align:center;color:var(--lv-gray)">
  [Calendly embed goes here]
</div>
```

**Replace with:**
```html
<!-- Calendly inline widget -->
<div class="calendly-inline-widget" data-url="https://calendly.com/[ACCOUNT]/[EVENT]" style="min-width:320px;height:700px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
```

**Also add Calendly to:** All three advisor profile pages have a booking section — wire the same Calendly URL there.

### Video Embed (VSL / Post-Assessment Page)

**Location:** `longview_post-assessment.html` — video section

**Current placeholder:**
```html
<div class="video-wrap">
  <div class="video-placeholder">
    <!-- VIDEO PLACEHOLDER — replace with real embed -->
    [video play button SVG]
  </div>
</div>
```

**Replace `.video-placeholder` div with:**
```html
<!-- Wistia -->
<div class="wistia_embed wistia_async_[VIDEO_ID]" style="height:360px;width:100%">&nbsp;</div>
<script src="//fast.wistia.com/assets/external/E-v1.js" async></script>

<!-- OR YouTube -->
<iframe width="100%" height="360" src="https://www.youtube.com/embed/[VIDEO_ID]"
  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen style="border-radius:8px;display:block;"></iframe>
```

### ADV Part 2 Link

**Find/replace across all pages:** `href="#" …ADV Part 2` and `[ADV_PART2_URL]`

```bash
# To find all occurrences:
grep -rn "ADV_PART2_URL\|ADV Part 2" *.html
```

Replace `#` with the real SEC EDGAR link (format: `https://www.sec.gov/cgi-bin/browse-edgar?...`)

---

## 13. Pre-Launch Checklist

### Client Must Provide First

- [ ] Calendly URL (booking link)
- [ ] Typeform URL (assessment quiz)
- [ ] Video URL (Wistia or YouTube) for VSL page
- [ ] GA4 Measurement ID (`G-XXXXXXXXXX`)
- [ ] Meta Pixel ID (15-16 digit number)
- [ ] ADV Part 2 link (SEC filing)
- [ ] Real testimonials × 3 (SEC Marketing Rule 206(4)-1 compliant)
- [ ] Social media URLs (LinkedIn, Facebook)
- [ ] Privacy Policy page / URL
- [ ] Founding year → fill in `[XX] years in practice`
- [ ] Household count verification (currently `1,500+`)
- [ ] AUM figure for advisor profiles
- [ ] Cooper Smith replacement photo *(currently using CDN — may want a local file)*
- [ ] ⚠️ **Fee-only vs. MML conflict** — site markets as "fee-only" but licensing shows MML Investors Services (MassMutual BD). Client must clarify before launch.

### Dev Must Build

- [ ] **Our Services page** — every nav has a dead `#` link. P0.
- [ ] OG default image (`images/longview-og-default.jpg`, 1200×630px)
- [ ] SEO meta tags on all pages (see Section 10)
- [ ] Schema markup on homepage + team pages (see Section 10)
- [ ] GA4 snippet on all pages (see Section 11)
- [ ] Meta Pixel snippet on all pages (see Section 11)
- [ ] Wire Typeform URL in all 6 blog post sidebars (see Section 12)
- [ ] Wire Calendly embed in `longview_book.html` + advisor profiles (see Section 12)
- [ ] Wire video embed in `longview_post-assessment.html` (see Section 12)
- [ ] Wire ADV Part 2 link in all footers + licensing page
- [ ] Wire HubSpot / GHL form backend on all lead capture forms
- [ ] Replace `[XX]` stat placeholders throughout (founding year, household count, AUM)
- [ ] Fix dead footer links (Privacy Policy, Disclosures, Social)
- [ ] Add `loading="lazy"` to below-fold images
- [ ] Add `width`/`height` to all `<img>` tags
- [ ] Compress all images in `/images/` to under 200KB
- [ ] Add `<link rel="canonical">` on every page
- [ ] Add real testimonials after client provides + SEC sign-off
- [ ] Mobile QA at 375px, 768px, 1024px, 1440px — all pages
- [ ] Favicon (not currently set on any page)

### Verify Before Go-Live

- [ ] No broken internal links (run a link checker)
- [ ] No placeholder text visible (`[XX]`, `[VERIFY`, `[TYPEFORM`, `[CALENDLY`, `[ADV`)
- [ ] Scroll animations work on all pages (check team + blog especially)
- [ ] All forms submit correctly (test with real data)
- [ ] Calendly embed loads and books correctly
- [ ] Typeform redirects to post-assessment page after completion
- [ ] GA4 receiving pageviews (check Realtime in GA4)
- [ ] Meta Pixel firing (check with Meta Pixel Helper browser extension)
- [ ] All advisor profile "Book a Call" buttons work
- [ ] Mobile nav opens/closes on all pages
- [ ] Logo image loads on all pages (if it breaks, the nav looks wrong)

---

## 14. Compliance Notes (Do Not Overlook)

- **All testimonials are placeholder** — do not launch with fake quotes. SEC Marketing Rule 206(4)-1.
- **Licensing page** (`longview_licensing.html`) has real insurance license numbers — verify they're current with client before launch.
- **MML Investors Services disclosure** is verbatim from CRN202804-8138873 — do not edit the text.
- **FINRA BrokerCheck** link is in every footer — already wired to `https://brokercheck.finra.org`.
- **All 6 blog posts** have amber compliance callout boxes — do not remove them.
- **ADV Part 2 link** is a legal requirement for an RIA — must be live before launch.

---

*Questions? Contact Chris Evans — Chris@chrisaevans.com*

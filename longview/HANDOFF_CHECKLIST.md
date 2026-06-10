# LongView Planning Partners — Replit Handoff Checklist
**Handoff to:** Johnny (Replit build)  
**Prepared by:** Chris / Claude  
**Last updated:** May 2026  
**Repo:** Clone from GitHub → all files ready to serve

---

## Status Key
- ✅ Done / ship-ready
- 🔧 Dev task (Johnny)
- 📋 Client must provide before launch
- ⚠️ Known issue / blocker
- 🗑️ Legacy — do not deploy to production

---

## 1. Page Inventory

### Production Pages (deploy all of these)

| Page | File | Status | Notes |
|------|------|--------|-------|
| Homepage | `longview_homepage_v8.html` | ✅ | Primary conversion page |
| Who We Serve | `longview_who-we-serve.html` | ✅ | |
| Our Process | `longview_process.html` | ✅ | |
| Our Team | `longview_team.html` | ✅ | |
| John Prather Profile | `longview_advisor-profile.html` | ✅ | |
| Marcus Esposito Profile | `longview_advisor-profile-esposito.html` | ✅ | |
| W. Louis Holmes Profile | `longview_advisor-profile-holmes.html` | ✅ | |
| Blog Directory | `longview_blog.html` | ✅ | Thumbnails are CSS-based (no image files needed) |
| PSLF Post | `longview_blog-post.html` | ✅ | |
| Whole Life Trap Post | `longview_post-whole-life-trap.html` | ✅ | |
| First Year Attending Post | `longview_post-first-year-attending.html` | ✅ | |
| Tax Planning Post | `longview_post-tax-planning.html` | ✅ | |
| Burnout Number Post | `longview_post-burnout-number.html` | ✅ | |
| Work-Optional Post | `longview_post-work-optional.html` | ✅ | |
| PSLF Landing Page | `longview_landing-pslf.html` | ✅ | |
| Post-Assessment / VSL | `longview_post-assessment.html` | ✅ | Needs video URL + Calendly embed |
| Booking Page | `longview_book.html` | ✅ | Needs Calendly embed URL |
| Licensing & Disclosures | `longview_licensing.html` | ✅ | |
| **Our Services** | `longview_services.html` | ✅ | Built — wired on all pages |
| **ICP: Early Career** | `longview_icp-earlycareer.html` | ✅ | Residents, Fellows & New Attendings |
| **ICP: Late Stage** | `longview_icp-laterstage.html` | ✅ | Established Attendings & Pre-Retirement |
| **ICP: DIY Physician** | `longview_icp-diy.html` | ✅ | Self-Managing Physician |
| Index redirect | `index.html` | ✅ | Redirects to homepage |

### Reference / Dev Pages (do not deploy to production URL)

| File | Purpose |
|------|---------|
| `longview_sitemap.html` | Dev reference — page inventory, integrations checklist |
| `thumbnail-options.html` | Design reference — 3 blog thumbnail options (A was selected) |

### Legacy (do not deploy)

| File | Notes |
|------|-------|
| `longview_homepage_v6.html` | Superseded by v8 |
| `longview_homepage_v7.html` | Superseded by v8 |
| `longview_landing.html` | Generic template only |
| `longview_team-member.html` | Superseded by advisor-profile pages |

---

## 2. Client Must Provide (Launch Blockers)

| Item | Used Where | Notes |
|------|-----------|-------|
| 📋 **Calendly URL** | `longview_book.html` + every booking CTA | Replace placeholder `[CALENDLY_URL]` |
| 📋 **Typeform URL** | All 6 blog post sidebars | Replace `href="longview_post-assessment.html"` (currently temp-wired for demo). Set Typeform redirect → `longview_post-assessment.html` |
| 📋 **Video embed** | `longview_post-assessment.html` | Drop Wistia or YouTube ID into VSL placeholder |
| 📋 **Real testimonials (3)** | Homepage testimonial section | SEC Marketing Rule 206(4)-1 compliance required — no placeholders at launch |
| 📋 **ADV Part 2 link** | Footer (all pages) + licensing page | Link to SEC filing — replace `[ADV_PART2_URL]` throughout |
| 📋 **Founding year** | "XX years in practice" on multiple pages | Verify with Jerry |
| 📋 **Household count** | Homepage, who-we-serve | Research suggests 1,500+ — must verify before publishing |
| 📋 **AUM figure** | Advisor profile pages | Do not estimate — verify or omit |
| 📋 **Cooper Smith photo (no long hair)** | Team page | Replace `images/cooper-smith.jpg` — client to provide new headshot |
| 📋 **GA4 Measurement ID** | All pages | Format: `G-XXXXXXXXXX` |
| 📋 **Meta Pixel ID** | All pages | Format: 15–16 digit number |
| 📋 **HubSpot or GHL account** | All lead capture forms | Needed to wire form submissions |
| 📋 **Video URLs** | Homepage video section + advisor profile pages | Wistia or YouTube embed IDs |
| 📋 **⚠️ Fee-only vs MML conflict** | Homepage, who-we-serve, trust bars | Site markets as "fee-only" but licensing page shows MML Investors Services (MassMutual BD). Client must clarify before launch — legal/compliance risk. |

---

## 3. Dev Tasks for Johnny

### P0 — Must complete before any client-facing demo

| Task | Notes |
|------|-------|
| 🔧 **Wire Calendly embed** | `longview_book.html` placeholder + all advisor profile booking sections |
| 🔧 **Wire Typeform** | Replace `href="longview_post-assessment.html"` in all 6 blog post sidebars with real Typeform URL |

### P1 — Before launch

| Task | Notes |
|------|-------|
| 🔧 Install GA4 | Add `gtag.js` snippet to `<head>` on all production pages |
| 🔧 Install Meta Pixel | Add pixel snippet to `<head>` on all production pages |
| 🔧 Wire form backend | HubSpot or GHL form IDs on lead capture forms (homepage, PSLF landing, blog sidebars) |
| 🔧 Replace stat placeholders | Search for `[XX]` and `[VERIFY` across all files |
| 🔧 Add real testimonials | After client provides + SEC sign-off |
| 🔧 ADV Part 2 links | Find/replace `[ADV_PART2_URL]` across footer + licensing page |
| 🔧 Mobile QA | All pages at 375px, 768px, 1024px, 1440px |
| 🔧 Wire VSL video | Drop embed ID into `longview_post-assessment.html` video section |

### P2 — Polish / pre-launch

| Task | Notes |
|------|-------|
| 🔧 Image compression | Run `/images/*.jpg` through squoosh or similar — some files are large |
| 🔧 SEO meta + OG tags | Claude can generate these — just needs to implement site-wide |
| 🔧 Schema markup | LocalBusiness + Person schemas |
| 🔧 Andy Vinson photo | CDN image currently used with CSS crop — swap for real headshot when provided |
| 🔧 Cooper Smith photo | Replace `images/cooper-smith.jpg` with new headshot (📋 client to provide) |
| 🔧 Favicon | Not set on any page currently |

---

## 4. Replit Setup Instructions

### Getting Started
1. In Replit: **Import from GitHub** → paste the repo URL
2. No build step — this is pure static HTML
3. Set the run command to a simple static server:
   ```
   python3 -m http.server 3000
   ```
   Or use Replit's built-in **Static** template
4. Entry point: `index.html` → auto-redirects to `longview_homepage_v8.html`

### File Structure
```
/
├── index.html                    ← Entry point (redirect)
├── longview_homepage_v8.html     ← Homepage
├── longview_team.html            ← Team page
├── longview_blog.html            ← Blog directory
├── [all other pages...]
├── images/                       ← All local photos
│   ├── longview-logo.png         ← Used in nav on ALL pages
│   ├── longview-process-wheel.png
│   └── [all team member photos]
├── HANDOFF_CHECKLIST.md          ← This file
├── CLAUDE.md                     ← Full project context + copy strategy
└── LONGVIEW_COPY_MAP.md          ← Research-driven copy map
```

### ⚠️ Do Not Break These
- `images/longview-logo.png` — used in the nav on every single page. Do not rename or move.
- Google Fonts `<link>` in every page `<head>` — removing this breaks typography site-wide
- The `index.html` redirect — entry point for the site

---

## 5. Design Preservation Rules

### Brand Color Tokens — Exact Values
```css
--lv-navy:   #0773BB   /* Primary CTAs, links, active nav */
--lv-dark:   #054A82   /* Hover states, dark sections */
--lv-deeper: #032F57   /* Topbar, darkest backgrounds, hero */
--lv-sky:    #38B0E3   /* Accents, card border-top, underlines */
--lv-light:  #8CD7F7   /* Glass icons, light accents */
--lv-gray:   #939598   /* Secondary body text */
--lv-gl:     #D1D2D4   /* Borders, dividers */
--lv-off:    #F4F8FC   /* Alt section backgrounds */
--ink:       #0F1923   /* Primary heading text */
--body:      #3D4A58   /* Body copy */
```
All colors use CSS vars — never hardcode hex values.

### Typography — Exact Google Fonts String
```html
<link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet">
```
- **Headlines / display:** Libre Baskerville (serif)
- **Body / UI / nav:** DM Sans

### Design Rules — Do Not Change
- Card top accent: `border-top: 3px solid #38B0E3` (always sky, never navy)
- Max content width: `1240px` via `.wrap` class
- Hairline borders: `1px solid` throughout — editorial feel
- Nav logo: `<img src="images/longview-logo.png">` — not text

### If Migrating to Next.js / Astro
1. Keep all CSS vars exactly as listed
2. Keep the Google Fonts import — do not substitute system fonts
3. Port `IntersectionObserver` scroll animations as-is (vanilla JS, no deps)
4. If using Tailwind: configure `tailwind.config` with exact hex values — do not use defaults
5. Keep `/images/` path relative

---

## 6. Nav Reference (standard across all pages)

```
Why LongView    → longview_homepage_v8.html
Our Services    → longview_services.html
Who We Serve    → longview_who-we-serve.html
Our Process     → longview_process.html
Our Team        → longview_team.html
Resources       → longview_blog.html
CTA             → "Schedule an Icebreaker Call" → longview_book.html
```

---

## 7. Images in `/images/`

### In Active Use
| File | Used On |
|------|---------|
| `longview-logo.png` | Every page (nav) |
| `longview-process-wheel.png` | Process page |
| `john-prather-card-v4.jpg` | Team page, advisor profile |
| `john-prather.jpg` | Advisor profile header |
| `marcus-esposito-v6.jpg` | Team page, Esposito profile |
| `louis-holmes-v2.jpg` | Team page, Holmes profile |
| `beau-hill.jpg` | Team page |
| `cooper-smith.jpg` | Team page — **⚠️ needs replacement (long hair)** |
| `garrett-east.jpg` | Team page |
| `jason-schultz.jpg` | Team page |
| `john-jordan.jpg` | Team page |
| `mitchell-marino.jpg` | Team page |
| `noah-douglas.jpg` | Team page |
| `ale-works.jpg` | Team page |
| `chelsea-leguenec.jpg` | Team page |
| `savannah-reeves.jpg` | Team page |
| `susan-shorter.jpg` | Team page |
| `wilson-yearwood.jpg` | Team page |

### CDN Images (not local files)
| Person | Source |
|--------|--------|
| Andy Vinson | `cdn.prod.website-files.com` — longviewplan.com CDN |
| Tierra Waddell | `cdn.prod.website-files.com` — longviewplan.com CDN |

### Legacy / Unused (can delete)
`john-prather-card.jpg`, `john-prather-card-v2.jpg`, `john-prather-card-v3.jpg`, `louis-holmes.jpg`, `marcus-esposito.jpg`, `marcus-esposito-v2.jpg` through `v5.jpg`

---

## 8. Compliance Notes

- All testimonials are **placeholder** — do not launch with fake quotes (SEC Marketing Rule 206(4)-1)
- Licensing page has real insurance license numbers — verify still current before launch
- MML Investors Services disclosure is verbatim from CRN202804-8138873 — do not edit
- FINRA BrokerCheck link is in every page footer — already wired
- All 6 blog posts have amber compliance callout boxes — do not remove
- ADV Part 2 link appears as `[ADV_PART2_URL]` throughout — needs real SEC link

---

*Full copy strategy and ICP research: `CLAUDE.md` and `LONGVIEW_COPY_MAP.md`*

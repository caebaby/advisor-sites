# LongView — Copy Changes for Replit
**For:** Johnny  
**Prepared by:** Chris / Claude  
**Date:** June 2026  
**Scope:** Full compliance sweep — fee language, NAPFA, institution names

---

## Hard Rules (Apply to Every Page)

1. **Never name another financial institution, firm, or product brand** — no "Northwestern Mutual," "MassMutual," "Ameriprise," etc. Not even in placeholder quotes. If a quote references a named firm, genericize it: "my previous advisor" / "my old firm."
2. **"Fiduciary" replaces "fee-only" everywhere** — fee-only is a regulated term LongView cannot claim. Fiduciary is accurate and defensible.
3. **Do not add NAPFA back** — removed intentionally. Do not restore it.
4. **Do not change the MML Investors Services / FINRA disclosure on `longview_licensing.html`** — that's a required legal disclosure, verbatim.
5. **Do not change `longview_process.html` line 341** — the footnote about commissions is a required compliance disclosure. Keep it exactly as-is.

---

## What's Already Done — Skip These

| Change | Files |
|---|---|
| NAPFA removed | All pages |
| Author bio credential bars (Fee-Only · NAPFA Member → Fiduciary · SEC Registered) | All 6 blog posts + book page |
| Author bio description ("fee-only, fiduciary firm" → "fiduciary firm") | All 6 blog posts |
| Homepage trust bar → SEC Registered RIA | Homepage |
| Homepage cred stat label → Fiduciary. Always. | Homepage |
| Homepage form trust text | Homepage |
| Who We Serve — institution name removed from pull quote (line 340) | Who We Serve |
| First-year-attending advisor selection paragraph (line 309) | First-year-attending post |

---

## Step 1 — Global Find/Replace (Run These First)

Run in Replit's find/replace across all `.html` files. **Case-sensitive where noted.**

| Find | Replace with | Notes |
|---|---|---|
| `fee-only fiduciary advisors` | `fiduciary advisors` | Catches all 6 blog sidebar bios |
| `fee-only, SEC-registered investment adviser` | `SEC-registered investment adviser` | Catches legal text in all advisor profiles |
| `fee-only, fiduciary registered investment adviser` | `fiduciary, SEC-registered investment adviser` | Whole life post disclaimer |
| `Fee-only, fiduciary` | `Fiduciary` | Catches combined labels |
| `fee-only, fiduciary` | `fiduciary` | Lowercase version |
| `Fee-only fiduciary` | `Fiduciary` | Title case combined |
| `fee-only fiduciary` | `fiduciary` | Lowercase combined |
| `No commissions, ever` | `Fiduciary standard, always` | Trust bar items |
| `no commissions, ever` | `fiduciary standard, always` | Lowercase version |
| `No Commission Products` | `Fiduciary Standard` | Book page trust item |
| `Fee-only` | `Fiduciary` | Title case standalone |
| `fee-only` | `fiduciary` | Lowercase standalone — run last |

> After global replace, work through the manual rewrites below. Some lines need the full surrounding sentence rewritten, not just a label swap.

---

## Step 2 — Manual Rewrites by Page

---

### `longview_homepage_v8.html`

**Line 7 — Meta description**

OLD: `Fee-only fiduciary financial planning exclusively for physicians and dentists. No commissions. No products. Just a plan that works as hard as you do.`

NEW: `Fiduciary financial planning exclusively for physicians and dentists. A plan built entirely around your outcome — not around what you buy or invest in.`

---

**Line 507 — Hero subhead**

OLD: `We work exclusively with physicians and dentists — and only as fiduciaries. No commissions. No products. No upsell. Just a plan that works as hard as you do.`

NEW: `We work exclusively with physicians and dentists — and only as fiduciaries. Our fee is the same regardless of what you buy, what you invest, or what products you choose. Just a plan built entirely around your outcome.`

---

**Line 550 — Hero glass panel footnote**

OLD: `Fee-only · Fiduciary · Physicians & Dentists only · No commission products`

NEW: `Fiduciary · Physicians & Dentists only · SEC Registered`

---

**Line 634 — Pain section body**

OLD: `If you were approached during residency with a whole life insurance policy, you're not uniquely gullible — you were targeted. We've never sold a commission product. We never will. Fee-only means we earn nothing when you buy something.`

NEW: `If you were approached during residency with a whole life insurance policy, you're not alone — it happens to nearly every physician in training. As fiduciaries, we're legally required to recommend what's right for you. Our fee doesn't change based on what you buy — which means neither does our advice.`

---

**Line 757 — Investment services body**

OLD: `Evidence-based. Low-cost. Built around your plan, not around products we're incentivized to sell. Because we're fee-only, your returns stay yours.`

NEW: `Evidence-based. Low-cost. Built around your plan, not around any product outcome. As fiduciaries, your returns stay yours.`

---

**Line 765 — Insurance services body**

OLD: `Disability. Malpractice. Life. We review what you have, flag what you're missing, and — because we earn no commissions — we'll tell you when you have too much.`

NEW: `Disability. Malpractice. Life. We review what you have, flag what you're missing, and give you an honest answer about what you actually need. As fiduciaries, our recommendation is the same regardless of the outcome.`

---

**Line 1180 — Quiz card body**

OLD: `Most don't. Fee-only fiduciary advisors are rare here. Most earn commissions on what they sell you.`

NEW: `Most don't. Ask any advisor how they're compensated and whether their fee changes based on what you buy. The answer tells you everything.`

---

**Line 1187 — Quiz option**

OLD: `Yes — written plan from a fee-only advisor`

NEW: `Yes — written plan from a fiduciary advisor`

---

### `longview_who-we-serve.html`

**Line 7 — Meta description**

OLD: `LongView Planning Partners serves physicians and dentists exclusively — early career and established. Fee-only, fiduciary, no commissions.`

NEW: `LongView Planning Partners serves physicians and dentists exclusively — early career and established. Fiduciary. SEC Registered.`

---

**Line 332 — ICP section body**

OLD: `...and in your absence, someone sold you a whole life policy you didn't need.`

NEW: `...and in your absence, financial decisions got made without the kind of objective advice a fiduciary provides.`

---

**Lines 374–375 — Situation card**

OLD headline: `Someone sold you a whole life policy during residency and now you're not sure if you lost money or just wasted it.`

NEW headline: `You bought a whole life policy during residency and you're not sure if it still makes sense for your situation.`

---

OLD body: `This is the single most common financial wound among early career physicians. We see it every week. We'll tell you exactly what you have, what it's costing you, and what your options are — with no product to sell in return. You don't know who to ask because everyone seems to have something to sell. We don't.`

NEW body: `This is one of the most common questions we hear from early career physicians. We'll tell you exactly what you have, what it's costing you, and what your options are. As fiduciaries, our analysis has no agenda — our fee is the same whether you keep the policy, modify it, or walk away from it.`

---

**Line 607 — FAQ answer**

OLD: `We are fee-only and fiduciary. We don't sell insurance products, annuities, or commission-based investments. If you've been told you need those, let's talk about whether that's actually true.`

NEW: `We're fiduciaries — legally required to recommend what's in your interest. Ask us how we're compensated, and we'll tell you. If you have questions about whether a product you've been recommended is right for you, that's exactly what an icebreaker call is for.`

---

### `longview_services.html`

**Line 261 — Investment card body**

OLD: `Evidence-based. Low-cost. Built around your plan, not around products we're incentivized to sell.`

NEW: `Evidence-based. Low-cost. Built around your plan and your outcome — not around any particular product.`

---

**Line 274 — Insurance card body**

OLD: `...and — because we earn no commissions — we'll tell you when you have too much.`

NEW: `...and give you an honest answer about what you actually need. As fiduciaries, our recommendation is the same regardless of the outcome.`

---

**Line 314 — Differentiation headline**

OLD: `No commissions. Ever.`

NEW: `Our fee never changes based on what you buy.`

---

**Line 315 — Differentiation body**

OLD: `We earn nothing from the products we recommend. That means we can tell you when you don't need more insurance, when a cheaper fund is better, when doing nothing is the right call.`

NEW: `As fiduciaries, our fee is the same regardless of the product, the fund, or the outcome. That means we can tell you when you don't need more insurance, when a cheaper fund is better, when doing nothing is the right call.`

---

**Line 401 — CTA subtext**

OLD: `No commissions. No products. Fee-only, fiduciary, always.`

NEW: `Fiduciary standard, always. Our fee is independent of what you buy, what you invest, or what you choose — so the advice is, too.`

---

### `longview_icp-earlycareer.html`

**Line 385 — Objection answer**

OLD: `We're fee-only. We earn nothing from the products we recommend — no commissions on insurance, no kickbacks on investments, no revenue-sharing with anyone. Our only incentive is to give you advice that's actually right. Check our disclosures — it's in writing.`

NEW: `We're fiduciaries — legally required to act in your best interest. Our fee is the same regardless of what you buy or invest in. Check our disclosures — it's in writing, not a talking point.`

---

**Line 396 — CTA subtext**

OLD: `...and most physicians make them alone, or with someone who has something to sell.`

NEW: `...and most physicians make them without a fiduciary in their corner.`

---

### `longview_icp-laterstage.html`

**Line 303 — Work-optional section body**

OLD: `The physician who has an advisor almost certainly has one who earns commissions or AUM-based fees tied to keeping assets under management. That advisor has no structural incentive to tell the physician "you're done — you could walk tomorrow."`

NEW: `Most financial advice is oriented toward accumulation — growing assets, staying invested, deferring the conversation about what "enough" actually looks like. As fiduciaries, our job is to answer the question you're actually asking: when can I stop if I want to?`

---

**Line 400 — Objection answer**

OLD: `We're fee-only — we earn nothing from products, commissions, or revenue-sharing. Our compensation doesn't change based on what you buy. Check our disclosures. It's in writing, not a talking point.`

NEW: `We're fiduciaries — our compensation doesn't change based on what you buy or invest in. Check our disclosures. It's in writing, not a talking point.`

---

### `longview_icp-diy.html`

**Line 437 — Objection answer**

OLD: `No assets under management. No commissions. No ongoing relationship unless you want one. It's a one-time, flat-fee review by a fee-only CFP® who works exclusively with physicians — nothing more, nothing less.`

NEW: `No assets under management. No ongoing relationship unless you want one. It's a one-time, flat-fee review by a fiduciary CFP® who works exclusively with physicians — nothing more, nothing less.`

---

**Line 457 — CTA subtext**

OLD: `30 minutes. A fee-only CFP® who works exclusively with physicians. A written summary you keep no matter what. No pitch, no pressure, no follow-up unless you ask.`

NEW: `30 minutes. A fiduciary CFP® who works exclusively with physicians. A written summary you keep no matter what. No pressure, no follow-up unless you ask.`

---

### `longview_team.html`

**Line 261 — Page hero subheading**

OLD: `Fee-only fiduciaries who work exclusively with physicians and dentists.`

NEW: `Fiduciaries who work exclusively with physicians and dentists.`

---

### `longview_advisor-profile.html` (John Prather)

**Line 431 — Bio copy**

OLD: `Fee-only means I don't earn commissions. Fiduciary means I'm legally required to put your interests first. Neither of those is unusual in isolation. But pairing them with twenty years of working exclusively inside medicine — that's what makes the difference.`

NEW: `Fiduciary means I'm legally required to put your interests first — and my fee stays the same regardless of what you buy, invest, or choose. Pair that with twenty years working exclusively inside medicine, and that's what makes the difference.`

---

**Line 476 — Who I work with resolution**

OLD: `...No products. No recommendations designed around what earns commission. Just the truth about where you are and a plan to get where you want to be.`

NEW: `...No agenda. Just the truth about where you are and a plan to get where you want to be.`

---

**Line 515 — Video caption placeholder**

OLD: `...why fee-only planning is different.`

NEW: `...why fiduciary planning is different.`

---

**Line 548 — Process section subheading**

OLD: `No pressure, no products, no pitch.`

NEW: `No pressure, no pitch.`

---

**Line 767 — Booking card note**

OLD: `Fee-only — no commissions, no products`

NEW: `Fiduciary standard — fee independent of your choices`

---

### `longview_advisor-profile-esposito.html` (Marcus Esposito)

**Line 378 — Conviction quote**

OLD: `"I teach financial literacy to fourth-year medical students at UT because the financial system isn't designed to give physicians a fair shot. Fee-only planning is the fix."`

NEW: `"I teach financial literacy to fourth-year medical students at UT because the financial system isn't designed to give physicians a fair shot. Fiduciary planning is the fix."`

---

**Line 432 — Bio copy**

OLD: `Fee-only means I earn no commissions. Fiduciary means I'm legally required to put your interests first. Combine that with a seat inside a medical school...`

NEW: `Fiduciary means I'm legally required to put your interests first — and my fee stays the same regardless of what you buy or invest in. Combine that with a seat inside a medical school...`

---

**Line 716 — About section**

OLD: `The credential stack — CFP® and ChFC — reflects a deliberate commitment to planning depth over sales production. Fee-only means no commissions, ever. Fiduciary means the legal obligation to act in your interest, not his.`

NEW: `The credential stack — CFP® and ChFC — reflects a deliberate commitment to planning depth. Fiduciary means the legal obligation to act in your interest — and a fee structure that never changes based on what you buy.`

---

Same line 476 / 515 / 548 / 767 changes as John Prather profile above.

---

### `longview_advisor-profile-holmes.html` (W. Louis Holmes)

**Line 421 — Section eyebrow**

OLD: `Why I left banking for fee-only planning`

NEW: `Why I left banking to practice as a fiduciary`

---

**Line 428 — Bio copy**

OLD: `...I wanted to practice the only way that made sense to me: fee-only, fiduciary, and built entirely around the client's interest.`

NEW: `...I wanted to practice the only way that made sense to me: fiduciary, and built entirely around the client's interest.`

---

**Line 713 — About section**

OLD: `W. Louis Holmes spent twenty years inside the banking world before transitioning to fee-only financial planning in 2010...`

NEW: `W. Louis Holmes spent twenty years inside the banking world before transitioning to fiduciary financial planning in 2010...`

---

Same line 476 / 515 / 548 / 769 changes as John Prather profile above.

---

### `longview_post-first-year-attending.html`

**Line 306 — Mistake cost label**

OLD: `What it costs: Commission-laden products, inappropriate recommendations, misaligned incentives for years`

NEW: `What it costs: Products not aligned with your situation, inappropriate recommendations, misaligned incentives for years`

---

**Line 307 — Mistake body paragraph**

OLD: `New attendings receive financial advisor outreach from multiple directions — the hospital's "preferred" advisor, colleagues' referrals, advisors who specialize in "physician planning." The branding of physician specialization has become common enough that it no longer signals anything meaningful about whether an advisor is actually fee-only, fiduciary, or structured in a way that aligns their incentives with yours. Many advisors who describe themselves as physician specialists earn commissions on insurance products and investment products. The recommendation they give is limited to what they can sell. This is not always conscious malpractice — but it is a structural conflict that affects what gets recommended.`

NEW: `New attendings receive financial advisor outreach from multiple directions — the hospital's "preferred" advisor, colleagues' referrals, advisors who specialize in "physician planning." The branding of physician specialization has become common enough that it no longer signals anything meaningful about whether an advisor is actually structured in a way that aligns their incentives with yours. Ask any advisor how they're compensated and whether that changes based on what you buy. That question alone will tell you more than their credential list.`

---

**Line 420 — Author bio text (bottom of post)**

OLD: `...We earn no commissions from any product, ever.`

NEW: *(Remove this sentence — it's a factual claim that needs client verification. The bio reads fine without it.)*

---

**Line 459 — Article CTA subtext**

OLD: `We work exclusively with physicians. No commissions. No products to sell you. Just the analysis your first year deserves.`

NEW: `We work exclusively with physicians. As fiduciaries, our advice is the same regardless of what you buy. Just the analysis your first year deserves.`

---

### `longview_post-burnout-number.html`

**Line 303 — Article body**

OLD: `The physician who has an advisor almost certainly has one who earns commissions or AUM-based fees tied to keeping assets under management. That advisor has no structural incentive to tell the physician "you're done — you could walk tomorrow." The physician may be paying for advice that is oriented toward accumulation, not toward answering the question they actually need answered.`

NEW: `Most financial planning is built around accumulation. Fewer advisors are structured to answer the question that actually matters at this stage: when could you stop if you wanted to? A fiduciary whose fee is independent of your portfolio size has every reason to give you an honest answer.`

---

### `longview_post-work-optional.html`

**Line 303 — Article body** *(same paragraph as burnout post)*

OLD: `The physician who has an advisor almost certainly has one who earns commissions or AUM-based fees tied to keeping assets under management. That advisor has no structural incentive to tell the physician "you're done — you could walk tomorrow."`

NEW: `Most financial planning is built around accumulation. Fewer advisors are structured to answer the question that actually matters at this stage: when could you stop if you wanted to? A fiduciary whose fee is independent of your portfolio size has every reason to give you an honest answer.`

---

### `longview_landing-pslf.html`

**Line 7 — Meta description**

OLD: `...Get a free 20-minute loan strategy review from a fee-only CSLP® certified advisor. No pitch. No products.`

NEW: `...Get a free 20-minute loan strategy review from a fiduciary CSLP® certified advisor. No pitch. No agenda.`

---

**Line 252 — Hero trust**

OLD: `20 minutes. Fee-only advisors. No pitch. No products to sell.`

NEW: `20 minutes. Fiduciary advisors. No pitch. Advice with no agenda.`

---

**Line 482 — Form trust**

OLD: `Fee-only · Fiduciary · CSLP® certified advisors on staff`

NEW: `Fiduciary · CSLP® certified advisors on staff`

---

### `longview_post-assessment.html`

**Line 284 — Booking subtext**

OLD: `30 minutes with a fee-only advisor who works exclusively with physicians...No products. No pitch.`

NEW: `30 minutes with a fiduciary advisor who works exclusively with physicians...No pitch. No agenda other than your situation.`

---

### `longview_blog.html`

**Line 294 — Whole life blog card excerpt**

OLD: `Someone came to your hospital to sell you a whole life policy. Here's why it happened, why it's almost always the wrong product, and what to do if you already bought one.`

NEW: `Whole life policies are commonly pitched to physicians in training. Here's what they are, how to evaluate one, and what to do if you already have one.`

---

### `longview_licensing.html`

**Line 335 — Footer tagline**

OLD: `Fee-only fiduciary planning for physicians and dentists.`

NEW: `Fiduciary planning for physicians and dentists.`

---

## Step 3 — Whole Life Blog Post (Special Case — Needs Client Input First)

**File:** `longview_post-whole-life-trap.html`

⚠️ **Do not publish this post until LPP confirms the new angle.** The current article positions whole life insurance as a trap. LongView uses whole life as a legitimate strategy for some clients — the article as written contradicts that.

**While waiting on the full rewrite, make these changes now:**

**Line 243 — Article subhead**

OLD: `If someone approached you during residency about a "physician-specific" insurance policy, you weren't uniquely gullible — you were targeted.`

NEW: `If someone approached you during residency about a "physician-specific" insurance policy, you're not alone — this is one of the most common financial situations we see.`

---

**Line 267 — Body paragraph**

OLD: `If that happened to you, you weren't being naïve. You were being targeted. Physicians in training represent one of the most sought-after prospects in the insurance sales industry...`

NEW: `If that happened to you, you weren't being naïve. Physicians in training are actively marketed to — high future income, a trusted credential, and a professional identity that makes physician-specific framing compelling. It's worth understanding the structure of that outreach before evaluating any recommendation.`

---

**Line 277 — Conflict of interest paragraph**

OLD: `...the structure of commissioned insurance sales creates a conflict of interest that is important to understand before any conversation happens.`

NEW: `...compensation structures vary significantly across the financial industry, and understanding how an advisor is paid is an important part of evaluating any recommendation.`

---

**Line 303 — Compliance note inside math section**

OLD: `Speak with a fee-only advisor for analysis specific to your situation.`

NEW: `Speak with a fiduciary advisor for analysis specific to your situation.`

---

**Line 317 — Questions to ask list item**

OLD: `...Fee-only advisors earn no commissions on any product. [VERIFY fee-only status with client before publishing]`

NEW: `A fiduciary advisor is legally required to recommend what's in your best interest. Always ask how they're compensated.`

---

**Line 329 — What to do if you have a policy**

OLD: `...the right decision depends on...what your broader financial picture looks like. That analysis should be done with a fee-only advisor who earns nothing from the outcome.`

NEW: `...the right decision depends on...what your broader financial picture looks like. That analysis should be done with a fiduciary advisor whose recommendation doesn't change based on the outcome.`

---

**Line 405 — Author bio text**

OLD: `...We earn no commissions, ever.`

NEW: *(Remove this sentence — same as first-year-attending post. Verify with client before adding back.)*

---

**Line 443 — Article CTA headline**

OLD: `Talk to a fee-only advisor who earns nothing from your insurance decisions.`

NEW: `Talk to a fiduciary advisor who will give you an honest evaluation of your situation.`

---

**Line 444 — Article CTA subtext**

OLD: `No commissions. No products. No agenda other than your outcome.`

NEW: `No agenda other than your outcome. 20-minute call, no pitch.`

---

## Step 4 — Verification

After all changes, run this in Replit's terminal:

```bash
grep -rn -i "fee-only\|fee only\|NAPFA\|no commissions\|Northwestern\|Ameriprise\|MassMutual\|commission product\|earn nothing from" --include="*.html" .
```

Zero results = clean (the only valid exceptions are on `longview_licensing.html` in the MML Investors Services legal disclosure block — those are required and must stay).

---

*Brand rules and architecture: `CLAUDE.md` | Full handoff context: `HANDOFF_CHECKLIST.md`*

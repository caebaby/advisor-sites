/**
 * Seed Sanity with advisor-relevant Blog Posts + Pages for the Harmon Wealth faux site.
 * Usage: SANITY_TOKEN=<your-token> node scripts/seed-sanity-content.mjs
 */

import { createClient } from '@sanity/client'

const token = process.env.SANITY_TOKEN
if (!token) {
  console.error('❌  Set SANITY_TOKEN=<editor-token> before running')
  process.exit(1)
}

const client = createClient({
  projectId: '0if7655p',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

let k = 0
const key = () => `k${++k}`

// Portable Text helpers
const p = (text) => ({
  _type: 'block',
  _key: key(),
  style: 'normal',
  markDefs: [],
  children: [{ _type: 'span', _key: key(), text, marks: [] }],
})
const h = (text, style = 'h2') => ({
  _type: 'block',
  _key: key(),
  style,
  markDefs: [],
  children: [{ _type: 'span', _key: key(), text, marks: [] }],
})

// ── Blog Posts ────────────────────────────────────────────────────────────────
const blogPosts = [
  {
    _id: 'post-how-much-to-retire',
    _type: 'blogPost',
    title: 'How Much Do You Actually Need to Retire?',
    slug: { _type: 'slug', current: 'how-much-do-you-need-to-retire' },
    publishedAt: '2026-04-28T09:00:00Z',
    author: 'James R. Harmon',
    tags: ['Retirement', 'Planning'],
    excerpt:
      'The honest answer is not a single number — it is a range that depends on how you actually want to live. Here is how we think about it.',
    body: [
      p(
        'Every prospective client asks some version of the same question in the first meeting: "Do I have enough?" It is the right question. It is also the wrong way to start.'
      ),
      h('Start with the life, not the number'),
      p(
        'A retirement number only means something once it is attached to a specific life. Two households with identical portfolios can have completely different answers because one wants a paid-off house and quiet years, and the other wants to travel six months a year and help fund grandchildren’s education.'
      ),
      h('The 4% rule is a starting point, not a plan'),
      p(
        'The often-cited 4% withdrawal guideline is a useful sanity check, not a strategy. Sequence-of-returns risk, tax location, Social Security timing, and healthcare costs all move the real answer materially.'
      ),
      h('What we actually do'),
      p(
        'We build a cash-flow model that stress-tests your plan against poor early returns, higher inflation, and a long lifespan. If the plan survives the bad scenarios, the good ones take care of themselves.'
      ),
    ],
    seoDescription:
      'There is no single retirement number. Here is the framework we use to find the range that fits your actual life.',
  },
  {
    _id: 'post-hidden-tax-cost',
    _type: 'blogPost',
    title: 'The Hidden Tax Cost of Doing Nothing',
    slug: { _type: 'slug', current: 'hidden-tax-cost-of-doing-nothing' },
    publishedAt: '2026-04-14T09:00:00Z',
    author: 'James R. Harmon',
    tags: ['Tax Strategy', 'Planning'],
    excerpt:
      'The most expensive tax mistakes are not the ones you make — they are the opportunities you never took.',
    body: [
      p(
        'Most people think of tax planning as something that happens in April. By then, the year is over and almost every meaningful lever has already been pulled or missed.'
      ),
      h('Roth conversion windows close quietly'),
      p(
        'The years between retirement and required minimum distributions are often the lowest-bracket years of someone’s life. Filling those brackets with strategic Roth conversions can save six figures over a retirement — but only if you act inside the window.'
      ),
      h('Tax-loss harvesting is not just for down years'),
      p(
        'Even in strong markets, individual positions decline. Systematically harvesting those losses to offset future gains compounds quietly in your favor.'
      ),
      h('The cost of inertia'),
      p(
        'Doing nothing feels safe. It is not free. It is simply a cost you never see on a statement.'
      ),
    ],
    seoDescription:
      'Proactive tax planning beats tax filing. Here is what doing nothing really costs you.',
  },
  {
    _id: 'post-pay-off-mortgage',
    _type: 'blogPost',
    title: 'Should You Pay Off Your Mortgage Early?',
    slug: { _type: 'slug', current: 'should-you-pay-off-your-mortgage-early' },
    publishedAt: '2026-03-30T09:00:00Z',
    author: 'James R. Harmon',
    tags: ['Cash Flow', 'Planning'],
    excerpt:
      'The math says one thing. Your sleep says another. A good plan accounts for both.',
    body: [
      p(
        'This is one of the most common questions we get, and the answer is rarely purely mathematical.'
      ),
      h('The math case'),
      p(
        'If your mortgage rate is below what a diversified portfolio is reasonably expected to earn, the spreadsheet favors investing the difference. That is true on average and over long periods.'
      ),
      h('The reason math is not the whole answer'),
      p(
        'A paid-off home lowers your required income in retirement, which lowers sequence risk, which lowers the size of the portfolio you need. It also removes a fixed obligation during the years you have the least flexibility.'
      ),
      h('Our take'),
      p(
        'For households approaching retirement, the certainty of a lower required spend often outweighs a modest expected return spread. We model both paths and let you see the trade-off in real numbers before you decide.'
      ),
    ],
    seoDescription:
      'Pay off the mortgage or invest? We model both paths so you can decide with real numbers.',
  },
]

// ── Pages ──────────────────────────────────────────────────────────────────────
const homePage = {
  _id: 'page-home',
  _type: 'page',
  title: 'Home',
  slug: { _type: 'slug', current: 'home' },
  seoDescription:
    'Harmon Wealth Advisors — fee-only financial planning, investment management, and tax strategy in Austin, TX.',
  pageSections: [
    {
      _type: 'advisorHero',
      _key: key(),
      headline: 'Clarity. Confidence. A Plan Built Around You.',
      subheadline:
        'Fee-only financial planning for physicians, executives, and business owners who want a real plan — not just a portfolio.',
      ctaLabel: 'Schedule a Consultation',
      ctaUrl: 'https://calendly.com/placeholder',
      secondaryLabel: 'See How We Help',
      secondaryUrl: '/services',
    },
    {
      _type: 'whoWeHelp',
      _key: key(),
      heading: 'Who We Work With',
      personas: [
        { _type: 'persona', _key: key(), title: 'Physicians', description: 'Late starters with high income, complex benefits, and little time.', iconName: 'stethoscope' },
        { _type: 'persona', _key: key(), title: 'Tech Executives', description: 'Equity comp, concentrated stock, and liquidity events to navigate.', iconName: 'briefcase' },
        { _type: 'persona', _key: key(), title: 'Business Owners', description: 'Personal and business finances that need to be planned as one.', iconName: 'building-office' },
      ],
    },
    {
      _type: 'howWeHelp',
      _key: key(),
      heading: 'How We Work',
      steps: [
        { _type: 'step', _key: key(), title: 'Discover', description: 'We map where you are today — every dollar, goal, and constraint.' },
        { _type: 'step', _key: key(), title: 'Design', description: 'We build a plan stress-tested against the scenarios that matter.' },
        { _type: 'step', _key: key(), title: 'Implement', description: 'We execute and adjust as your life changes — not just once a year.' },
      ],
    },
    {
      _type: 'serviceCards',
      _key: key(),
      heading: 'What We Do',
      subheading: 'Comprehensive, fee-only, and built around your situation.',
    },
    {
      _type: 'advisorBio',
      _key: key(),
      heading: 'Meet Your Advisor',
      name: 'James R. Harmon, CFP®, CPWA®',
      bio: 'James founded Harmon Wealth Advisors after fifteen years advising high-net-worth families at larger firms, where he saw too many plans built around products instead of people.\n\nHe holds the CFP® and CPWA® designations and works with a deliberately small number of households so every plan gets real attention.',
    },
    {
      _type: 'advisorCredentials',
      _key: key(),
      heading: 'Credentials & Experience',
      credentials: [
        { _type: 'credential', _key: key(), name: 'CFP®', description: 'Certified Financial Planner' },
        { _type: 'credential', _key: key(), name: 'CPWA®', description: 'Certified Private Wealth Advisor' },
      ],
      yearsExperience: 15,
      aumDisplay: '$320M+ AUM',
    },
    {
      _type: 'advisorTestimonials',
      _key: key(),
      heading: 'What Clients Say',
      complianceNote:
        "Client testimonials may not be representative of all clients' experiences. Past performance is not indicative of future results.",
    },
    {
      _type: 'advisorBottomCta',
      _key: key(),
      heading: 'Ready to Build a Plan That Works for You?',
      subheading:
        "Schedule a complimentary 30-minute consultation and let's talk about where you are and where you want to go.",
      ctaLabel: 'Schedule a Consultation',
      ctaUrl: 'https://calendly.com/placeholder',
    },
  ],
}

const aboutPage = {
  _id: 'page-about',
  _type: 'page',
  title: 'About',
  slug: { _type: 'slug', current: 'about' },
  seoDescription:
    'About James R. Harmon and Harmon Wealth Advisors — fee-only fiduciary planning in Austin, TX.',
  pageSections: [
    {
      _type: 'advisorBio',
      _key: key(),
      heading: 'About James',
      name: 'James R. Harmon, CFP®, CPWA®',
      bio: 'James spent the first part of his career inside large wealth management firms. He left to build something simpler: fee-only advice with no products to sell and no conflicts to manage around.\n\nHe lives in Austin with his family and works with a limited roster of households so the advice stays personal.',
    },
    {
      _type: 'advisorCredentials',
      _key: key(),
      heading: 'Credentials',
      credentials: [
        { _type: 'credential', _key: key(), name: 'CFP®', description: 'Certified Financial Planner' },
        { _type: 'credential', _key: key(), name: 'CPWA®', description: 'Certified Private Wealth Advisor' },
        { _type: 'credential', _key: key(), name: 'Fiduciary', description: 'Legally bound to act in your best interest, always' },
      ],
      yearsExperience: 15,
      aumDisplay: '$320M+ AUM',
    },
    {
      _type: 'advisorBottomCta',
      _key: key(),
      heading: "Let's Talk",
      subheading: 'A 30-minute conversation is the best way to see if we are a fit.',
      ctaLabel: 'Schedule a Consultation',
      ctaUrl: 'https://calendly.com/placeholder',
    },
  ],
}

// ── Run ───────────────────────────────────────────────────────────────────────
async function seed() {
  console.log('🌱 Seeding blog posts + pages...\n')
  const all = [...blogPosts, homePage, aboutPage]
  for (const doc of all) {
    try {
      await client.createOrReplace(doc)
      console.log(`✅  ${doc._type}: ${doc._id}`)
    } catch (err) {
      console.error(`❌  ${doc._id}: ${err.message}`)
    }
  }
  console.log('\n✨ Done — refresh Studio to see Blog Post + Page populated.')
}

seed()

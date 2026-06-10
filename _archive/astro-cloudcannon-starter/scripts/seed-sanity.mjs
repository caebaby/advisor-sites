/**
 * Seed Sanity with the faux advisor site data from src/data/*.json
 * Usage: SANITY_TOKEN=<your-token> node scripts/seed-sanity.mjs
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

// ── Site Settings ────────────────────────────────────────────────────────────
const siteSettings = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  firmName: 'Harmon Wealth Advisors',
  advisorName: 'James R. Harmon',
  advisorCredentials: 'CFP®, CPWA®',
  advisorTitle: 'Founder & Lead Advisor',
  tagline: 'Clarity. Confidence. A Plan Built Around You.',
  phone: '(512) 555-0174',
  email: 'james@harmonwealth.com',
  address: '400 W. 15th Street, Suite 1200, Austin, TX 78701',
  schedulingUrl: 'https://calendly.com/placeholder',
  linkedinUrl: 'https://linkedin.com/in/placeholder',
  twitterUrl: 'https://twitter.com/placeholder',
  complianceDisclaimer:
    "Client testimonials may not be representative of all clients' experiences. Past performance is not indicative of future results. James R. Harmon is a registered investment adviser.",
  footerDisclaimer:
    'Harmon Wealth Advisors is a registered investment adviser in the State of Texas. This website is for informational purposes only and does not constitute investment advice.',
  bottomCtaHeading: 'Ready to Build a Plan That Works for You?',
  bottomCtaBody:
    "Schedule a complimentary 30-minute consultation and let's talk about where you are and where you want to go.",
  bottomCtaLabel: 'Schedule a Consultation',
  bottomCtaUrl: 'https://calendly.com/placeholder',
}

// ── Services ─────────────────────────────────────────────────────────────────
const services = [
  {
    _id: 'service-financial-planning',
    _type: 'service',
    title: 'Financial Planning',
    slug: { _type: 'slug', current: 'financial-planning' },
    icon: 'chart-bar',
    description:
      'A comprehensive financial plan that accounts for where you are today and maps a clear, achievable path to where you want to be. We review every dimension of your financial life — income, expenses, insurance, taxes, and estate — and build a living document that evolves as your life does.',
    ctaLabel: 'Learn More',
    ctaUrl: '/services/#financial-planning',
    order: 1,
  },
  {
    _id: 'service-investment-management',
    _type: 'service',
    title: 'Investment Management',
    slug: { _type: 'slug', current: 'investment-management' },
    icon: 'trending-up',
    description:
      'Evidence-based portfolio construction aligned with your goals, timeline, and risk tolerance. No commission-driven product recommendations — just a disciplined, low-cost investment strategy built around your specific situation.',
    ctaLabel: 'Learn More',
    ctaUrl: '/services/#investment-management',
    order: 2,
  },
  {
    _id: 'service-tax-strategy',
    _type: 'service',
    title: 'Tax Strategy',
    slug: { _type: 'slug', current: 'tax-strategy' },
    icon: 'document-text',
    description:
      'Proactive tax planning — not just tax filing. We identify opportunities to reduce your lifetime tax burden through Roth conversions, tax-loss harvesting, entity structure optimization, and coordination with your CPA.',
    ctaLabel: 'Learn More',
    ctaUrl: '/services/#tax-strategy',
    order: 3,
  },
  {
    _id: 'service-estate-planning',
    _type: 'service',
    title: 'Estate Planning',
    slug: { _type: 'slug', current: 'estate-planning' },
    icon: 'shield-check',
    description:
      'Ensure your assets go where you intend and your family is protected. We work alongside estate attorneys to review your documents, beneficiary designations, titling, and trust structures.',
    ctaLabel: 'Learn More',
    ctaUrl: '/services/#estate-planning',
    order: 4,
  },
  {
    _id: 'service-insurance-review',
    _type: 'service',
    title: 'Insurance Review',
    slug: { _type: 'slug', current: 'insurance-review' },
    icon: 'umbrella',
    description:
      'An independent, unbiased review of your life, disability, long-term care, and liability coverage. We identify over- or under-insurance, recommend appropriate coverage levels — without selling you anything.',
    ctaLabel: 'Learn More',
    ctaUrl: '/services/#insurance-review',
    order: 5,
  },
]

// ── Testimonials ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    _id: 'testimonial-sarah-m',
    _type: 'testimonial',
    quote:
      "Working with James completely changed how I think about our finances. For the first time, I feel like we have a real plan — not just a portfolio. He explained everything in plain English and never made me feel rushed.",
    clientName: 'Dr. Sarah M.',
    clientTitle: 'Physician',
    clientLocation: 'Austin, TX',
    featured: true,
    order: 1,
  },
  {
    _id: 'testimonial-michael-t',
    _type: 'testimonial',
    quote:
      "I came to James after my company's IPO with a lot of complexity and a lot of anxiety. He helped me build a diversified plan, navigate the tax implications, and actually sleep at night. I can't recommend him highly enough.",
    clientName: 'Michael T.',
    clientTitle: 'Tech Executive',
    clientLocation: 'Austin, TX',
    featured: true,
    order: 2,
  },
]

// ── Run ───────────────────────────────────────────────────────────────────────
async function seed() {
  console.log('🌱 Seeding Sanity dataset...\n')

  const all = [siteSettings, ...services, ...testimonials]

  for (const doc of all) {
    try {
      await client.createOrReplace(doc)
      console.log(`✅  ${doc._type}: ${doc._id}`)
    } catch (err) {
      console.error(`❌  ${doc._id}: ${err.message}`)
    }
  }

  console.log('\n✨ Done — refresh your Studio to see the content.')
}

seed()

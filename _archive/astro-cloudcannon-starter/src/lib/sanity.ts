/**
 * Sanity client utility.
 *
 * Usage in Astro components (preferred — uses the integration-managed client):
 *   import { sanityClient } from 'sanity:client'
 *
 * Usage in plain TypeScript files (standalone client defined here):
 *   import { client } from '@/lib/sanity'
 *
 * The sanity:client virtual module is injected by @sanity/astro and picks up
 * projectId / dataset from the astro.config.mjs integration config.
 */
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'placeholder',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: import.meta.env.PROD, // CDN for production builds; live for dev
})

// ── Common GROQ queries ───────────────────────────────────────────────────

/** Fetch site settings document */
export const QUERY_SITE_SETTINGS = `*[_type == "siteSettings"][0]`

/** Fetch all services ordered by display order */
export const QUERY_SERVICES = `*[_type == "service"] | order(order asc)`

/** Fetch all testimonials ordered by display order */
export const QUERY_TESTIMONIALS = `*[_type == "testimonial"] | order(order asc)`

/** Fetch homepage page document (slug = "home") with all page sections */
export const QUERY_HOMEPAGE = `*[_type == "page" && slug.current == "home"][0]`

/** Fetch published blog posts newest-first */
export const QUERY_BLOG_POSTS = `
  *[_type == "blogPost" && defined(publishedAt)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    image,
    author,
    tags
  }
`

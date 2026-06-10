import { defineType, defineField, defineArrayMember } from 'sanity'

// ── Page section object types ─────────────────────────────────────────────

const advisorHeroSection = defineArrayMember({
  type: 'object',
  name: 'advisorHero',
  title: 'Advisor Hero',
  fields: [
    defineField({ name: 'headline', title: 'Headline', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'subheadline', title: 'Subheadline', type: 'text', rows: 2 }),
    defineField({ name: 'ctaLabel', title: 'Primary CTA Label', type: 'string' }),
    defineField({ name: 'ctaUrl', title: 'Primary CTA URL', type: 'string' }),
    defineField({ name: 'secondaryLabel', title: 'Secondary CTA Label', type: 'string' }),
    defineField({ name: 'secondaryUrl', title: 'Secondary CTA URL', type: 'string' }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt Text', type: 'string' })],
    }),
    defineField({ name: 'heroImageUrl', title: 'Hero Image URL (external)', type: 'url', description: 'Use instead of uploaded image for external URLs' }),
    defineField({ name: 'heroImageAlt', title: 'Hero Image Alt Text', type: 'string' }),
  ],
  preview: { select: { title: 'headline' }, prepare: ({ title }: { title: string }) => ({ title: `Hero: ${title}` }) },
})

const whoWeHelpSection = defineArrayMember({
  type: 'object',
  name: 'whoWeHelp',
  title: 'Who We Help',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({
      name: 'personas',
      title: 'Personas',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'persona',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
            defineField({ name: 'iconName', title: 'Icon Name', type: 'string', description: 'e.g. stethoscope, briefcase, building-office' }),
          ],
          preview: { select: { title: 'title' } },
        }),
      ],
    }),
  ],
  preview: { select: { title: 'heading' }, prepare: ({ title }: { title: string }) => ({ title: `Who We Help: ${title}` }) },
})

const howWeHelpSection = defineArrayMember({
  type: 'object',
  name: 'howWeHelp',
  title: 'How We Help',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'step',
          fields: [
            defineField({ name: 'title', title: 'Step Title', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
          ],
          preview: { select: { title: 'title' } },
        }),
      ],
    }),
  ],
  preview: { select: { title: 'heading' }, prepare: ({ title }: { title: string }) => ({ title: `How We Help: ${title}` }) },
})

const serviceCardsSection = defineArrayMember({
  type: 'object',
  name: 'serviceCards',
  title: 'Service Cards',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'string' }),
  ],
  preview: { select: { title: 'heading' }, prepare: ({ title }: { title: string }) => ({ title: `Services: ${title}` }) },
})

const advisorBioSection = defineArrayMember({
  type: 'object',
  name: 'advisorBio',
  title: 'Advisor Bio',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'name', title: 'Advisor Name', type: 'string' }),
    defineField({ name: 'bio', title: 'Bio', type: 'text', rows: 6, description: 'Use blank lines to separate paragraphs' }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt Text', type: 'string' })],
    }),
    defineField({ name: 'imageUrl', title: 'Photo URL (external)', type: 'url' }),
    defineField({ name: 'imageAlt', title: 'Photo Alt Text', type: 'string' }),
  ],
  preview: { select: { title: 'heading' }, prepare: ({ title }: { title: string }) => ({ title: `Bio: ${title}` }) },
})

const advisorCredentialsSection = defineArrayMember({
  type: 'object',
  name: 'advisorCredentials',
  title: 'Advisor Credentials',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({
      name: 'credentials',
      title: 'Credentials',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'credential',
          fields: [
            defineField({ name: 'name', title: 'Credential Name', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'description', title: 'Description', type: 'string' }),
          ],
          preview: { select: { title: 'name' } },
        }),
      ],
    }),
    defineField({ name: 'yearsExperience', title: 'Years of Experience', type: 'number' }),
    defineField({ name: 'aumDisplay', title: 'AUM Display Text', type: 'string', description: 'e.g. $320M+ AUM' }),
  ],
  preview: { select: { title: 'heading' }, prepare: ({ title }: { title: string }) => ({ title: `Credentials: ${title}` }) },
})

const advisorTestimonialsSection = defineArrayMember({
  type: 'object',
  name: 'advisorTestimonials',
  title: 'Advisor Testimonials',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'complianceNote', title: 'Compliance Note', type: 'text', rows: 2 }),
  ],
  preview: { select: { title: 'heading' }, prepare: ({ title }: { title: string }) => ({ title: `Testimonials: ${title}` }) },
})

const advisorBottomCtaSection = defineArrayMember({
  type: 'object',
  name: 'advisorBottomCta',
  title: 'Bottom CTA',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'subheading', title: 'Subheading / Body', type: 'text', rows: 2 }),
    defineField({ name: 'ctaLabel', title: 'CTA Button Label', type: 'string' }),
    defineField({ name: 'ctaUrl', title: 'CTA Button URL', type: 'string' }),
  ],
  preview: { select: { title: 'heading' }, prepare: ({ title }: { title: string }) => ({ title: `Bottom CTA: ${title}` }) },
})

// ── Page document type ────────────────────────────────────────────────────

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'seoImage',
      title: 'SEO / OG Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'pageSections',
      title: 'Page Sections',
      type: 'array',
      of: [
        advisorHeroSection,
        whoWeHelpSection,
        howWeHelpSection,
        serviceCardsSection,
        advisorBioSection,
        advisorCredentialsSection,
        advisorTestimonialsSection,
        advisorBottomCtaSection,
      ],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'slug.current' },
    prepare: ({ title, subtitle }: { title: string; subtitle: string }) => ({
      title,
      subtitle: `/${subtitle}`,
    }),
  },
})

import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'firmName',
      title: 'Firm Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'advisorName',
      title: 'Advisor Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'advisorCredentials',
      title: 'Advisor Credentials',
      description: 'e.g. CFP®, CPWA®',
      type: 'string',
    }),
    defineField({
      name: 'advisorTitle',
      title: 'Advisor Title',
      description: 'e.g. Founder & Lead Advisor',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'schedulingUrl',
      title: 'Scheduling URL',
      description: 'Calendly or other booking link',
      type: 'url',
    }),
    defineField({
      name: 'social',
      title: 'Social Links',
      type: 'object',
      fields: [
        defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
        defineField({ name: 'twitter', title: 'Twitter/X URL', type: 'url' }),
      ],
    }),
    defineField({
      name: 'complianceDisclaimer',
      title: 'Compliance Disclaimer',
      description: 'Shown near testimonials',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'footerDisclaimer',
      title: 'Footer Disclaimer',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'bottomCtaHeading',
      title: 'Bottom CTA Heading',
      type: 'string',
    }),
    defineField({
      name: 'bottomCtaBody',
      title: 'Bottom CTA Body',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'bottomCtaLabel',
      title: 'Bottom CTA Button Label',
      type: 'string',
    }),
    defineField({
      name: 'bottomCtaUrl',
      title: 'Bottom CTA Button URL',
      type: 'url',
    }),
  ],
  preview: {
    select: { title: 'firmName', subtitle: 'advisorName' },
  },
})

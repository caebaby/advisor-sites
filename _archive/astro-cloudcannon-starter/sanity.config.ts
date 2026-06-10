import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schema'

export default defineConfig({
  name: 'advisor-site',
  title: 'Advisor Site',

  // These will be replaced with real values once the Sanity project is created.
  // Run: npx sanity init  — or create a project at https://sanity.io/manage
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'placeholder',
  dataset: process.env.PUBLIC_SANITY_DATASET || 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

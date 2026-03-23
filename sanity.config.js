import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { newsSchema } from './src/sanity/schemas/news'

export default defineConfig({
  name: 'faten-tamim-studio',
  title: 'Faten Tamim — News CMS',
  projectId: 'q5qqwix8',
  dataset: 'production',
  plugins: [
    structureTool(),
    visionTool(),
  ],
  schema: {
    types: [newsSchema],
  },
})

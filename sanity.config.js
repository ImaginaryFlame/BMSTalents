import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schema } from './studio/schemas'

const projectId = 'p69ujrgc'
const dataset = 'production'

export default defineConfig({
  projectId,
  dataset,
  plugins: [
    deskTool(),
    visionTool(),
  ],
  schema,
  title: 'BMSTalents',
  apiVersion: '2024-03-19',
  useCdn: true
})

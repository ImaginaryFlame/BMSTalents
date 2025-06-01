import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'votre-project-id', // Remplacez par votre Project ID
  dataset: 'production', // ou le nom de votre dataset
  apiVersion: '2024-03-19', // utilisez la date du jour
  useCdn: true, // `false` si vous voulez des données en temps réel
}) 
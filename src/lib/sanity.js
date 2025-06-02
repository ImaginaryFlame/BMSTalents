import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'p69ujrgc', // Remplacez par votre Project ID
  dataset: 'production', // ou le nom de votre dataset
  apiVersion: '2024-03-19', // utilisez la date du jour
  useCdn: true, // false si vous voulez des données en temps réel
  token: import.meta.env.VITE_SANITY_TOKEN, // Ajout du token
  ignoreBrowserTokenWarning: true
})

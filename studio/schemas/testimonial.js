export const testimonialSchema = {
  name: 'testimonial',
  title: 'Témoignage',
  type: 'document',
  fields: [
    {
      name: 'author',
      title: 'Auteur',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'role',
      title: 'Rôle',
      type: 'string'
    },
    {
      name: 'company',
      title: 'Entreprise',
      type: 'string'
    },
    {
      name: 'content',
      title: 'Contenu',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'rating',
      title: 'Note',
      type: 'number',
      validation: Rule => Rule.min(1).max(5)
    }
  ]
} 
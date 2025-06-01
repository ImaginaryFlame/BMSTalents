export const serviceSchema = {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'icon',
      title: 'Icône',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'features',
      title: 'Fonctionnalités',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'price',
      title: 'Prix',
      type: 'number'
    },
    {
      name: 'isPopular',
      title: 'Service populaire',
      type: 'boolean',
      initialValue: false
    }
  ]
} 
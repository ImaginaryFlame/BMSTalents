export const talentSchema = {
  name: 'talent',
  title: 'Talent',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'role',
      title: 'Rôle',
      type: 'string',
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
      name: 'bio',
      title: 'Biographie',
      type: 'text'
    },
    {
      name: 'skills',
      title: 'Compétences',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'socialLinks',
      title: 'Liens sociaux',
      type: 'object',
      fields: [
        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url'
        },
        {
          name: 'github',
          title: 'GitHub',
          type: 'url'
        }
      ]
    }
  ]
} 
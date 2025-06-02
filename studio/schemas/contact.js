export const contact = {
    name: 'contact',
    title: 'Message de contact',
    type: 'document',
    fields: [
      {
        name: 'nom',
        title: 'Nom',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: Rule => Rule.required().email()
      },
      {
        name: 'message',
        title: 'Message',
        type: 'text',
        validation: Rule => Rule.required()
      },
      {
        name: 'date',
        title: 'Date de réception',
        type: 'datetime',
        initialValue: () => new Date().toISOString()
      },
      {
        name: 'status',
        title: 'Statut',
        type: 'string',
        options: {
          list: [
            { title: 'Non lu', value: 'unread' },
            { title: 'En cours', value: 'in-progress' },
            { title: 'Répondu', value: 'replied' }
          ]
        },
        initialValue: 'unread'
      }
    ],
    preview: {
      select: {
        title: 'nom',
        subtitle: 'email',
        date: 'date'
      },
      prepare({ title, subtitle, date }) {
        return {
          title,
          subtitle: `${subtitle} - ${new Date(date).toLocaleDateString()}`
        }
      }
    }
  }

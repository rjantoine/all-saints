export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.max(50).warning('Shorter titles are usually better')
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Description',
          type: 'string',
          description: 'For the visually impaired'
        }
      ]
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: (new Date()).toISOString()
    },
    {
      name: 'startTime',
      title: 'Start Time',
      type: 'datetime',
    },
    {
      name: 'endTime',
      title: 'End Time',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      initialValue: '80 Forks Road East, Welland, ON, L3B 5K5'
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
    // prepare(selection) {
    //   const {author} = selection
    //   return Object.assign({}, selection, {
    //     subtitle: author && `by ${author}`,
    //   })
    // },
  },
}

export default {
  name: 'event',
  title: 'Events',
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
      validation: (Rule) => Rule.required().custom((slug) => {
        if (typeof slug === "undefined") return true
        const regex = /(^[a-z0-9-]+$)/
        if (regex.test(slug.current)) return true
        else return "Invalid slug: Only numbers, lowercase letters, and dashes are permitted. Click \"Generate\" to fix." // Error message goes here
      }),
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
      ],
      validation: Rule => Rule.required()
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

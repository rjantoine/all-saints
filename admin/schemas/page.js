export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'A slug of (index) indicates the homepage.',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: (new Date()).toISOString()
    },
    {
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [{type: 'section'}, {type: 'hero'}, {type: 'imageTextSection'}, {type: 'mission'}]
    }
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
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
      validation: (Rule) => Rule.required().custom((slug) => {
        if (typeof slug === "undefined") return true
        const regex = /(^[a-z0-9-]+$)/
        if (regex.test(slug.current)) return true
        else return "Invalid slug: Only numbers, lowercase letters, and dashes are permitted. Click \"Generate\" to fix." // Error message goes here
      }),
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
      of: [{type: 'section'}, {type: 'columnsSection'}, {type: 'hero'}, {type: 'imageTextSection'}, {type: 'mission'}, {type: 'quote'}, {type: 'gallery'}, {type: 'documentsDisplay'}]
    }
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}

export default {
  name: 'ministry',
  title: 'Ministries',
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
      validation: Rule => Rule.required(),
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
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{type: 'section'}, {type: 'columnsSection'}, {type: 'hero'}, {type: 'imageTextSection'}, {type: 'mission'}, {type: 'quote'}, {type: 'gallery'}, {type: 'documentsDisplay'}]
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
}

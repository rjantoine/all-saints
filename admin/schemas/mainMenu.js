export default {
  name: 'mainMenuItems',
  title: 'Main Menu',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'link',
      title: 'Link',
      type: 'link'
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}

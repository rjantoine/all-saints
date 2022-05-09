import link from './link'

export default {
  name: 'menuItems',
  title: 'Menu Items',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    link,
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

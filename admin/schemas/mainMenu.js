import link from './link'

export default {
  name: 'mainMenuItems',
  title: 'Main Menu',
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

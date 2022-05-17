export default {
    name: 'gallery',
    title: 'Gallery',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            title: 'Images',
            name: 'images',
            type: 'array',
            of: [
                {
                    name: 'image',
                    title: 'Image',
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
            ],
        }
    ],

    preview: {
        select: {
            title: 'title',
        },
        prepare({title}) {
            return {
                title: `[Gallery] ${title}`
            }
        },
    },
}

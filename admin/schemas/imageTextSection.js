export default {
    name: 'imageTextSection',
    title: 'Image Text Section',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        },
        {
            name: 'css_id',
            title: 'CSS ID',
            type: 'string',
        },
        {
            name: 'css_classname',
            title: 'CSS Class Name',
            type: 'string',
        },
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
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        },
    ]
}
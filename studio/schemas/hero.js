export default {
    name: 'hero',
    title: 'Hero',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'backgroundImage',
            title: 'Background Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'buttonTitle',
            title: 'Button Title',
            type: 'string',
        },
        {
            name: 'buttonLink',
            title: 'Button Link',
            type: 'url',
            validation: Rule => Rule.uri({allowRelative: true})
        },
    ]
}
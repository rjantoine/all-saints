export default {
    name: 'section',
    title: 'Section',
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
            name: 'fullscreen',
            title: 'Full Screen',
            description: 'Do you want the content to go all the way to the edge of the screen?',
            type: 'boolean',
            initialValue: false
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        },
    ]
}
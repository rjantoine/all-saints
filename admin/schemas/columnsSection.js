export default {
    name: 'columnsSection',
    title: 'Columns Section',
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
            title: 'Body',
            name: 'body',
            type: 'array',
            of: [{type: 'column'}]
        }
    ]
}
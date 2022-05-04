export default {
    name: 'column',
    title: 'Column',
    type: 'object',
    fields: [
        {
            name: 'className',
            title: 'Class',
            type: 'string',
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        },
    ]
}
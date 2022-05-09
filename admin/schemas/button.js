export default {
    name: 'button',
    title: 'Button',
    type: 'object',
    fields: [
        {
            name: 'text',
            title: 'Text',
            type: 'string',
        },
        {
            name: 'className',
            title: 'Class Name',
            type: 'string',
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url',
            validation: Rule => Rule.uri({allowRelative: true})
        },
    ],
}
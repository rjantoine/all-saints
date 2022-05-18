export default {
    name: 'linkButton',
    title: 'Link Button',
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
            type: 'link',
        },
    ],
    preview: {
        select: {
            text: 'text',
        },
        prepare({text}) {
            return {
                title: `[Link Button] ${text}`,
            }
        },
    },
}
export default {
    name: 'youtube',
    title: 'Youtube',
    type: 'object',
    fields: [
        {
            name: 'vid',
            title: 'Youtube Video ID',
            type: 'string',
            validation: Rule => Rule.required()
        },
    ],
    preview: {
        select: {
            vid: 'vid',
        },
        prepare({vid}) {
            return {
                title: `[Youtube] ${vid}`,
            }
        },
    },
}
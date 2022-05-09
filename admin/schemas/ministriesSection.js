import client from 'part:@sanity/base/client'

export default {
    name: 'ministriesSection',
    title: 'Ministries Section',
    type: 'object',
    fields: [
        {
            name: 'className',
            title: 'Class Name',
            type: 'string',
        },
        {
            name: 'ministries',
            title: 'Ministries',
            type: 'array',
            of: [{type: 'ministry'}],
            initialValue: async () => (await client.fetch(`*[_type == 'ministry']`))
        }
    ],
    preview: {
        prepare() {
            return {
                title: '[Ministries Section]'
            }
        },
    },
}
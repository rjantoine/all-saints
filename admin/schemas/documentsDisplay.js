import client from 'part:@sanity/base/client'

export default {
    name: 'documentsDisplay',
    title: 'Documents Display',
    type: 'object',
    fields: [
        {
            name: 'className',
            title: 'Class Name',
            type: 'string',
        },
        {
            name: 'documentsType',
            title: 'Documents Type',
            type: 'string',
            options: {
                list: [
                    {title: "News", value: "news"},
                    {title: "Events", value: "events"},
                    {title: "Ministries", value: "ministries"},
                    {title: "Map", value: 'map'}
                ],
            }
        },
        {
            name: 'displayStyle',
            title: 'Display Style',
            type: 'string',
            hidden: ({ parent }) => !['news', 'events', 'ministries'].includes(parent?.documentsType),
            options: {
                list: [
                    {title: "Pagination", value: "pagination"},
                    {title: "Carousel", value: "carousel"},
                ],
            }
        }
    ],
    preview: {
        select: {
            documentsType: 'documentsType',
        },
        prepare({documentsType}) {
            return {
                title: `[${documentsType} Display]`
            }
        },
    },}
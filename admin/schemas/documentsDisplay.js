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
                    {title: "Ministries", value: "ministries"}
                ],
            }
        },
        {
            name: 'displayStyle',
            title: 'Display Style',
            type: 'string',
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
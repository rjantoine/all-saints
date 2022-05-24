import Link from 'next/link'

export default function SanityLink({value:{linkType, blank, href=''}, children}) {
    // select(link.internalLink->_type == 'page' => '', link.internalLink->_type) + '/' + select(link.internalLink->slug.current == 'index' => '', link.internalLink->slug.current), link.href)}`)
    // if(linkType == 'internal') href = `${internalLink?._type == 'page' ? '' : internalLink?._type}/${internalLink?.slug?.current == 'index' ? '' : internalLink?.slug?.current}`
    return <a href={href} target={blank ? '_blank' : '_self'}>{children}</a>
}

export const groqLinkProjection = `
    ...,
    body[]{
        ...,
        link{
            _type == "link" => {
                ...,
                "href": select(@.linkType == 'internal' => select(@.internalLink->_type == 'page' => '', select(@.internalLink->_type == 'event' => '/events', select(@.internalLink->_type == 'ministry' => '/ministries', '/'+@.internalLink->_type))) + '/' + select(@.internalLink->slug.current == 'index' => '', @.internalLink->slug.current), @.href)
            }
        },
        markDefs[]{
            ...,
            _type == "link" => {
                ...,
                "href": select(@.linkType == 'internal' => select(@.internalLink->_type == 'page' => '', select(@.internalLink->_type == 'event' => '/events', select(@.internalLink->_type == 'ministry' => '/ministries', '/'+@.internalLink->_type))) + '/' + select(@.internalLink->slug.current == 'index' => '', @.internalLink->slug.current), @.href)
            }
        }
    }
`

// export default {
//     name: "link",
//     title: "Link",
//     type: "object",
//     fields: [
//         {
//             title: "Select the type of link",
//             description:
//                 "External links go to other websites using the format `https://www.google.com`. Internal links are restricted to other pages in the SANITY database.",
//             name: "linkType",
//             type: "string",
//             options: {
//                 list: [
//                     { title: "External", value: "external" },
//                     { title: "Internal", value: "internal" },
//                 ],
//                 layout: "radio",
//             },
//         },
//         {
//             title: "URL",
//             name: "href",
//             type: "url",
//             hidden: ({ parent }) => parent?.linkType !== "external", // hidden if link type is not external
//             validation: Rule => Rule.uri({
//                 allowRelative: true,
//                 scheme: ['http', 'https', 'mailto', 'tel']
//             })
//         },
//         {
//             title: "Open in new tab?",
//             name: "blank",
//             description: "Read https://css-tricks.com/use-target_blank/",
//             type: "boolean",
//             hidden: ({ parent }) => parent?.linkType !== "external", // hidden if link type is not external
//             initialValue: false
//         },
//         {
//             name: "internalLink",
//             type: "reference",
//             title: "Internal Link",
//             hidden: ({ parent }) => parent?.linkType !== "internal", // hidden if link type is not internal
//             to: [
//                 { type: "page" },
//                 { type: "news" },
//                 { type: "event" },
//                 { type: "ministry" },
//                 // other types you may want to link to
//             ],
//         },
//     ],
// }
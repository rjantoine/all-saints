import imageUrlBuilder from "@sanity/image-url";
import client from "./client";

export const builder = imageUrlBuilder(client)
export const urlFor = source => builder.image(source)

export const urlForLink = link => {
    if(link?.linkType == 'internal') return (link?.internalLink?._type == 'page' ? '' : '/'+(link?.internalLink?._type == 'event' ? 'events' : (link?.internalLink?._type == 'ministry' ? 'ministries' : link?.internalLink?._type))) + '/' + (link?.internalLink?.slug?.current == 'index' ? '' : link?.internalLink?.slug?.current)
    else return link?.href
}

export const findLinks = async obj => {
    for(let key in obj) {
        if(key == '_type' && obj[key] == 'link' && obj.linkType == 'internal') {
            if(obj.internalLink) {
                obj.internalLink = (await client.fetch(`*[_id == "${obj.internalLink._ref}"]`))[0] || null
                obj["href"] = urlForLink(obj)
            }
        }
        if(Array.isArray(obj[key])) obj[key].map(o => findLinks(o))
    }
    return obj
}
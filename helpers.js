import imageUrlBuilder from "@sanity/image-url";
import client from "./client";

export const builder = imageUrlBuilder(client)
export const urlFor = source => builder.image(source)

export const urlForLink = link => {
    if(link?.linkType == 'internal') return (link?.internalLink?._type == 'page' ? '' : link?.internalLink?._type) + '/' + (link?.internalLink?.slug?.current == 'index' ? '' : link?.internalLink?.slug?.current)
    else return link?.href
}
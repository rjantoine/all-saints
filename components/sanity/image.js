import {urlFor} from "../../helpers";
import Link from "next/link"

// @TODO Add alt
export default function Image({width, height, fit, value: image, withLink, ...props}) {
    let img = urlFor(image)

    if(height) img = img.height(height)
    else if(image.height) img = img.height(image.height)


    if(width) img = img.width(width)
    else if(image.width) img = img.width(image.width)

    if(fit) img = img.fit(fit)

    const classWidth = (image.className && (image.className.includes('w-75') || image.className.includes('w-50') || image.className.includes('w-25'))) ? '' : 'w-100'

    return <>
        { !withLink && <img src={img.url()} className={`${classWidth}${image.className || ''}`.trim()} alt={image.alt} /> }
        { withLink && <Link href={img.url()}><a {...withLink}><img src={img.url()} className={`${classWidth}${image.className || ''}`.trim()} alt={image.alt} /></a></Link> }
    </>
}
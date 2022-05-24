import {urlFor} from "../../helpers";
import Link from "next/link"

// @TODO Add alt
export default function Image({width, height, fit, value: image, withLink, ...props}) {
    let img = urlFor(image)
    if(height) img = img.height(height)
    if(width) img = img.width(width)
    if(fit) img = img.fit(fit)
    
    return <>
        { !withLink && <img src={img.url()} className={`w-100 ${image.className}`.trim()} alt={image.alt} {...props} /> }
        { withLink && <Link href={img.url()}><a {...withLink}><img src={img.url()} className={`w-100 ${image.className}`.trim()} alt={image.alt} {...props} /></a></Link> }
    </>
}
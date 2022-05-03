import {urlFor} from "../../helpers";

// @TODO Add alt
export default function Image({width, height, value: image, ...props}) {
    const img = urlFor(image).width(width).height(height)
    return <img src={img.url()} alt="" {...props} />
}
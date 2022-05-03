import {PortableText} from "@portabletext/react";
import image from './sanity/image'

export default function Column(object) {
    const {className, body} = object.value
    return <div className={className}>
        <PortableText
            value={body}
            components={{types:{image}}}
        />
    </div>
}
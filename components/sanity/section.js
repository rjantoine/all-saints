import {PortableText} from "@portabletext/react";
import column from "../column";
import image from './image'
import button from './button'
import gallery from './gallery'
import PageSection from "../pageSection"

export default function Section({value: {css_id: id, css_classname: className, title, subtitle, body, fullscreen}}) {
    return <PageSection id={id} className={`portable_text ${className}`.trim()} title={title} subtitle={subtitle} fullscreen={fullscreen}>
        <PortableText value={body} components={{types:{column, image, button, gallery}}} />
    </PageSection>
}
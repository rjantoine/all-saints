import {PortableText} from "@portabletext/react";
import column from "../column";
import image from './image'
import button from './button'
import PageSection from "../pageSection"

export default function ColumnsSection({value: {css_id: id, css_classname: className, title, subtitle, body, fullscreen}}) {
    return <PageSection id={id} className={`portable_text ${className}`.trim()} title={title} subtitle={subtitle} fullscreen={fullscreen} nocolumns>
        <PortableText value={body} components={{types:{column, image, button}}} />
    </PageSection>
}
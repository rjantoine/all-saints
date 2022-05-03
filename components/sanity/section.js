import {PortableText} from "@portabletext/react";
import column from "../column";
import PageSection from "../pageSection"

export default function Section({value: {css_id: id, css_classname: className, title, subtitle, body, fullscreen}}) {
    return <PageSection id={id} className={className} title={title} subtitle={subtitle} fullscreen={fullscreen}>
        <PortableText value={body} components={{types:{column}}} />
    </PageSection>
}
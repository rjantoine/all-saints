import {PortableText} from "@portabletext/react";
import column from "../column";
import button from "./button"
import Image from './image';
import PageSection from "../pageSection";

export default function ImageTextSection({value: {css_id, css_classname, title, subtitle, image: img, body}}) {
    return <PageSection id={css_id} className={css_classname} title={title} subtitle={subtitle} nocolumns>
        <div className="col-lg-6">
            <div className="about_image"><Image value={img} width={690} height={448} /></div>
        </div>
        <div className="col-lg-6">
            <div className="about_content">
                <div className="about_text">
                    <PortableText value={body} components={{types:{column, button}}} />
                </div>
            </div>
        </div>
    </PageSection>
}
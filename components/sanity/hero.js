import {urlFor} from '../../helpers'
import {PortableText} from "@portabletext/react";

export default function Hero({value: {title, description, backgroundImage, buttonLink, buttonTitle}}) {
    return <div className="hero">
        <div className="hero_background" style={{
            backgroundImage: 'url('+urlFor(backgroundImage)+'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))',
            backgroundBlendMode: 'overlay'
        }}></div>
        <div className="hero_content text-center">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="hero_title">{title}</div>
                        <div className="hero_text"><PortableText value={description} /></div>
                        <div className="button hero_link"><a href={buttonLink}>{buttonTitle}</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
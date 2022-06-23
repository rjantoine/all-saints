import {urlFor} from '../../helpers'
import {PortableText} from "@portabletext/react"
import Link from 'next/link'

export default function Hero({value: {title, description, backgroundImage, buttonLink, buttonTitle}}) {
    return <div className="hero">
        <div className="hero_background" style={{
            backgroundImage: 'url('+urlFor(backgroundImage)+'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))',
            backgroundBlendMode: 'overlay'
        }}></div>
        <div className="hero_content text-center h-100" style={{paddingTop: 80}}>
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col mx-2">
                        <div className="hero_title">{title}</div>
                        <div className="hero_text"><PortableText value={description} /></div>
                        <div className="button hero_link"><Link href={buttonLink}><a>{buttonTitle}</a></Link></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
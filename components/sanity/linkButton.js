import Link from 'next/link'
import {urlForLink} from 'helpers'

export default function button({value: {className, text, link}}) {
    return <div className={`button ${className}`.trim()}><Link href={urlForLink(link)}><a>{text}</a></Link></div>
}
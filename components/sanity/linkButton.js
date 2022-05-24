// import Link from 'next/link'
// import {urlForLink} from 'helpers'
import SanityLink from './link'

export default function button({value: {className, text, link}}) {
    return <div className={`button ${className}`.trim()}><SanityLink value={link}>{text}</SanityLink></div>
}
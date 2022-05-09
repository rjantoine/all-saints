import Link from 'next/link'

export default function button({value: {className, text, link}}) {
    return <div className={`button ${className}`.trim()}><Link href={link}><a>{text}</a></Link></div>
}
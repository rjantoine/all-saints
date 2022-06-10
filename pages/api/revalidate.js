import { isValidRequest } from '@sanity/webhook'
import client from "client"
import { urlForLink } from "helpers"

export default async function handler(req, res) {
    // if (!isValidRequest(req, 'ABC')) {
    //     const invalidRequest = 'Invalid request'
    //     return res.status(401).json({ message: invalidRequest })
    // }

    const staleRoutes = ['/']
    const { slug, _type } = req?.body
    console.log('Request body: '+JSON.stringify(req?.body))
    if(_type == 'page' && slug !== 'index') staleRoutes.push('/'+slug)
    if(_type == 'news') {
        const news = await client.fetch(`*[_type == "news"]{'slug':slug.current}`)
        news.forEach(post => staleRoutes.push('/news/'+post.slug))
        staleRoutes.push('/news')
    }
    if(_type == 'event') {
        const events = await client.fetch(`*[_type == "event"]{'slug':slug.current}`)
        events.forEach(post => staleRoutes.push('/events/'+post.slug))
        staleRoutes.push('/events')
    }
    if(_type == 'ministry') {
        const ministries = await client.fetch(`*[_type == "ministry"]{'slug':slug.current}`)
        ministries.forEach(post => staleRoutes.push('/ministries/'+post.slug))
        staleRoutes.push('/ministries')
    }
    if(_type == 'mainMenuItems' || _type == 'footerMenuItems') {
        const allRoutes = await client.fetch(`*[slug != null]{slug, _type}`)
        allRoutes.forEach(route => {
            if(route._type !== 'page' || route.slug.current !== 'index') staleRoutes.push(urlForLink({linkType: 'internal', internalLink: route}))
        })
    }

    console.log(`[Next.js] Revalidating: ${staleRoutes.join(', ')}`)
    let revalidate = false
    try {
        await Promise.all(
            staleRoutes.map((route) => res.unstable_revalidate(route))
        )
        const updatedRoutes = `Updated routes: ${staleRoutes.join(', ')}`
        console.log(updatedRoutes)
        return res.status(200).json({ success: true, message: updatedRoutes, })
    } catch (err) {
        return res.status(501).json({ error: JSON.stringify(err), message: err.message })
    }
}
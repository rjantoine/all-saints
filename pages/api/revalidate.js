import { isValidRequest } from '@sanity/webhook'

export default async function handler(req, res) {
    // if (!isValidRequest(req, 'ABC')) {
    //     const invalidRequest = 'Invalid request'
    //     return res.status(401).json({ message: invalidRequest })
    // }

    const staleRoutes = ['/']
    const { slug, _type } = req?.body
    console.log('Request body: '+req?.body)
    if(slug?.current !== 'index') {
        if(_type == 'page') staleRoutes.push('/'+slug?.current)
        if(_type == 'news') {
            staleRoutes.push('/news/'+slug?.current)
            staleRoutes.push('/news')
        }
        if(_type == 'event') {
            staleRoutes.push('/events/'+slug?.current)
            staleRoutes.push('/events')
        }
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
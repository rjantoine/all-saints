import { isValidRequest } from '@sanity/webhook'

export default async function handler(req, res) {
    if (!isValidRequest(req, 'ABC')) {
        const invalidRequest = 'Invalid request'
        return res.status(401).json({ message: invalidRequest })
    }

    const staleRoutes = ['/']

    console.log("[Next.js] Revalidating...")
    let revalidate = false
    try {
        await Promise.all(
            staleRoutes.map((route) => res.unstable_revalidate(route))
        )
        const updatedRoutes = `Updated routes: ${staleRoutes.join(', ')}`
        return res.status(200).json({ success: true, message: updatedRoutes, })
    } catch (err) {
        return res.status(501).json({ error: JSON.stringify(err), message: err.message }).body(JSON.stringify(err))
    }
}
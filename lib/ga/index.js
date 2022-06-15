// log the pageview with their URL
export const NEXT_PUBLIC_GOOGLE_ANALYTICS = 'G-R27ZEFH18M'
export const pageview = (url) => {
    window.gtag('config', NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
    })
}

// log specific events happening.
export const event = ({ action, params }) => {
    window.gtag('event', action, params)
}
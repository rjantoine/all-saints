import client from "../client"
import Layout from '../components/layout'
import {fetchGlobalProps} from '../components/layout'
import HomeBar from '../components/homeBar'
import {PortableText} from "@portabletext/react";
import hero from "../components/sanity/hero";
import section from '../components/sanity/section'
import columnsSection from '../components/sanity/columnsSection'
import imageTextSection from '../components/sanity/imageTextSection'
import mission from '../components/sanity/mission'
import quote from '../components/sanity/quote'
import gallery from '../components/sanity/gallery'

export default function Pages({page, ...globalProps}) {
    return <Layout title={page.title} {...globalProps}>
        <HomeBar title={page.title} breadcrumbs={[{title:'Home', link:'/'}]}/>
        <PortableText value={page.body} />
    </Layout>
}

export async function getStaticProps({params: {slug}}) {
    const pages = await client.fetch(`*[_type == 'page' && slug.current == '${slug}']`)
    const globalProps = await fetchGlobalProps(client)

    return {
        props: {
            page: pages[0],
            ...globalProps
        }
    }
}

export async function getStaticPaths() {
    const pages = await client.fetch(`*[_type == "page"]{slug}`)
    return {
        paths: pages.map(page => ({params: {slug: page.slug.current}})),
        fallback: false
    }
}
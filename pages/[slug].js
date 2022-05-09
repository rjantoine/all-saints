import client from "../client"
import Layout from '../components/layout'
import {fetchLayoutProps} from '../components/layout'
import HomeBar from '../components/homeBar'
import {PortableText} from "@portabletext/react";
import hero from "../components/sanity/hero";
import section from '../components/sanity/section'
import columnsSection from '../components/sanity/columnsSection'
import imageTextSection from '../components/sanity/imageTextSection'
import mission from '../components/sanity/mission'
import quote from '../components/sanity/quote'
import ministriesSection from '../components/sanity/ministriesSection'

export default function Pages({page, layoutProps}) {
    return <Layout title={page.title} layoutProps={layoutProps}>
        <HomeBar title={page.title} breadcrumbs={[{title:'Home', link:'/'}]}/>
        <PortableText
            value={page.body}
            components={{types:{hero, section, columnsSection, imageTextSection, mission, quote, ministriesSection}}}
        />
    </Layout>
}

export async function getStaticProps({params: {slug}}) {
    const pages = await client.fetch(`*[_type == 'page' && slug.current == '${slug}']`)
    const layoutProps = await fetchLayoutProps(client)

    return {
        props: {
            page: pages[0],
            layoutProps
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
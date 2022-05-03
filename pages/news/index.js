import client from "../../client"
import Layout from "../../components/layout"
import HomeBar from '../../components/homeBar'
import PageSection from '../../components/pageSection'
import Image from '../../components/sanity/image'
import {PortableText} from "@portabletext/react"
import LatestNews from "../../components/latestNews"

export default function News({latest}) {
    latest.map(post => {
        post.publishedAt = new Date(post.publishedAt)
    })

    return <Layout title={'News'}>
        <HomeBar title="News" breadcrumbs={[{title:'Home', link:'/'}]}/>
        <PageSection className="latest_news" title="Latest News" subtitle="Be part of a community of people experiencing God together.">
            <LatestNews news={latest} />
        </PageSection>
    </Layout>
}

export async function getStaticProps() {
    const latest = await client.fetch(`*[_type == "news"] | order(publishedAt desc)`)
    return {
        props: {
            latest
        }
    }
}
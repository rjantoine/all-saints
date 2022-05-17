import client from "../../client"
import Layout from "../../components/layout"
import {fetchGlobalProps} from '../../components/layout'
import HomeBar from '../../components/homeBar'
import PageSection from '../../components/pageSection'
import Image from '../../components/sanity/image'
import {PortableText} from "@portabletext/react"
import LatestNews from "../../components/latestNews"

export default function News({latest, ...globalProps}) {
    latest.map(post => {
        post.publishedAt = new Date(post.publishedAt)
    })

    return <Layout title={'News'} {...globalProps}>
        <HomeBar title="News" breadcrumbs={[{title:'Home', link:'/'}]}/>
        <PageSection className="latest_news" title="Latest News" subtitle="Be part of a community of people experiencing God together." nocolumns>
            <LatestNews news={latest} />
        </PageSection>
    </Layout>
}

export async function getStaticProps() {
    const latest = await client.fetch(`*[_type == "news"] | order(publishedAt desc)`)
    const globalProps = await fetchGlobalProps(client)

    return {
        props: {
            latest,
            ...globalProps
        }
    }
}
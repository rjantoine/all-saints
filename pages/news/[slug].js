import client from "../../client"
import Layout from "../../components/layout"
import {fetchLayoutProps} from '../../components/layout'
import HomeBar from '../../components/homeBar'
import PageSection from '../../components/pageSection'
import Image from '../../components/sanity/image'
import {PortableText} from "@portabletext/react"
import LatestNews from "../../components/latestNews"

export default function News({post, latest, layoutProps}) {
    post.publishedAt = new Date(post.publishedAt)
    latest.map(post => {
        post.publishedAt = new Date(post.publishedAt)
    })

    return <Layout title={post.title + ' | News'} layoutProps={layoutProps}>
        <HomeBar title={post.title} breadcrumbs={[{title:'Home', link:'/'}, {title: 'News', link: '/news/'}]}/>
        <PageSection title={post.title}>
            <Image value={post.mainImage} width={1170} height={500} style={{width: '100%'}} />
            <p className="w-100 my-4">
                <i className="fa fa-calendar-o mr-2" aria-hidden="true" style={{color: '#b10707'}}></i>
                {post.publishedAt.toLocaleDateString('en-CA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <PortableText
                value={post.body}
            />
        </PageSection>
        <PageSection className="latest_news" title="Latest News" subtitle="Be part of a community of people experiencing God together.">
            <LatestNews news={latest} />
        </PageSection>

    </Layout>
}

export async function getStaticProps({params: {slug}}) {
    const news = await client.fetch(`*[_type == 'news' && slug.current == "${slug}"]`)
    const latest = await client.fetch(`*[_type == "news"] | order(publishedAt desc)`)
    const layoutProps = await fetchLayoutProps(client)

    return {
        props: {
            post: news[0],
            latest,
            layoutProps
        }
    }
}

export async function getStaticPaths() {
    const news = await client.fetch(`*[_type == "news"]{slug}`)
    return {
        paths: news.map(post => ({params: {slug: post.slug.current}})),
        fallback: false
    }
}
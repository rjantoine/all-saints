import client from "../../client";
import Layout from "../../components/layout";
import {fetchLayoutProps} from '../../components/layout'
import HomeBar from '../../components/homeBar'
import PageSection from '../../components/pageSection'
import Image from '../../components/sanity/image'
import {PortableText} from "@portabletext/react";
import MinistriesSection from '../../components/sanity/ministriesSection'

export default function Ministry({ministry, ministries, layoutProps}) {
    return <Layout title={ministry.title + ' | Ministries'} layoutProps={layoutProps}>
        <HomeBar title={ministry.title} breadcrumbs={[{title:'Home', link:'/'}, {title: 'Ministries', link: '/ministries'}]}/>
        <PageSection title={ministry.title}>
            <Image value={ministry.mainImage} width={1170} height={500} style={{width: '100%'}} />
            <PortableText
                value={ministry.body}
            />
        </PageSection>
        <PageSection title="Our Ministries" alt>
            <MinistriesSection value={{ministries}} />
        </PageSection>
    </Layout>
}

export async function getStaticProps({params: {slug}}) {
    const ministry = (await client.fetch(`*[_type == 'ministry' && slug.current == "${slug}"]`))[0]
    const ministries = await client.fetch(`*[_type == "ministry"]`)
    const layoutProps = await fetchLayoutProps(client)

    return {
        props: {
            ministry,
            ministries,
            layoutProps
        }
    }
}

export async function getStaticPaths() {
    const ministries = await client.fetch(`*[_type == "ministry"]{slug}`)
    return {
        paths: ministries.map(ministry => ({params: {slug: ministry.slug.current}})),
        fallback: false
    }
}
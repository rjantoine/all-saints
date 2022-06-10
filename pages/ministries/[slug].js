import client from "../../client";
import Layout from "@/components/layout";
import {fetchGlobalProps} from '@/components/layout'
import HomeBar from '@/components/homeBar'
import PageSection from '@/components/pageSection'
import Image from '@/components/sanity/image'
import {PortableText} from "@portabletext/react";
import MinistriesSection from '@/components/sanity/ministriesSection'
import {groqLinkProjection} from '@/components/sanity/link'
import {urlForLink, findLinks} from 'helpers'
import Error from '../404'

export default function Ministry({ministry, ministries, ...globalProps}) {
    if(!ministry) return <Error />
    
    return <Layout title={ministry.title + ' | Ministries'} {...globalProps}>
        <HomeBar title={ministry.title} breadcrumbs={[{title:'Home', link:'/'}, {title: 'Serving our community', link: '/serving-our-community'}]}/>
        <PageSection title={ministry.title} className="pb-5">
            <Image value={ministry.mainImage} width={1170} height={500} fit="max" style={{width: '100%'}} className="mb-5" />
        </PageSection>
        <PortableText value={ministry.body} />

        <PageSection title="Serving our community" alt>
            <div className="row">
                <div className="col-12">
                    <MinistriesSection ministries={ministries} />
                </div>
            </div>
        </PageSection>
    </Layout>
}

export async function getStaticProps({params: {slug}}) {
    const ministries = await client.fetch(`*[_type == 'ministry' && slug.current == "${slug}" && !(_id in path("drafts.**"))]{${groqLinkProjection}}`)
    if(ministries.length == 0) return { notFound: true }

    const ministry = await findLinks(ministries[0])
    const globalProps = await fetchGlobalProps(client)

    return {
        props: {
            ministry,
            ...globalProps
        }
    }
}

export async function getStaticPaths() {
    const ministries = await client.fetch(`*[_type == "ministry" && !(_id in path("drafts.**"))]{slug}`)
    return {
        paths: ministries.map(ministry => ({params: {slug: ministry.slug.current}})),
        fallback: 'blocking'
    }
}
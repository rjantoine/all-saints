import client from "../../client";
import Layout from "@/components/layout";
import {fetchGlobalProps} from '@/components/layout'
import HomeBar from '@/components/homeBar'
import PageSection from '@/components/pageSection'
import Image from '@/components/sanity/image'
import {PortableText} from "@portabletext/react";
import MinistriesSection from '@/components/sanity/ministriesSection'
import {groqLinkProjection} from '@/components/sanity/link'

export default function Ministry({ministry, ministries, ...globalProps}) {
    return <Layout title={ministry.title + ' | Ministries'} {...globalProps}>
        <HomeBar title={ministry.title} breadcrumbs={[{title:'Home', link:'/'}, {title: 'Ministries', link: '/ministries'}]}/>
        <PageSection title={ministry.title}>
            <Image value={ministry.mainImage} width={1170} height={500} fit="max" style={{width: '100%'}} className="mb-5" />
            <PortableText
                value={ministry.body}
            />
        </PageSection>
        <PageSection title="Our Ministries" alt>
            <div class="row">
                <div className="col-12">
                    <MinistriesSection ministries={ministries} />
                </div>
            </div>
        </PageSection>
    </Layout>
}

export async function getStaticProps({params: {slug}}) {
    const ministry = (await client.fetch(`*[_type == 'ministry' && slug.current == "${slug}"]{${groqLinkProjection}}`))[0]
    const globalProps = await fetchGlobalProps(client)

    return {
        props: {
            ministry,
            ...globalProps
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
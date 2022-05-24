import client from "../../client";
import Layout from "@/components/layout";
import {fetchGlobalProps} from '@/components/layout'
import HomeBar from '@/components/homeBar'
import PageSection from '@/components/pageSection'
import Image from '@/components/sanity/image'
import {PortableText} from "@portabletext/react";
import UpcomingEvents from '@/components/upcomingEvents'

export default function EventIndex({events, ...globalProps}) {
    events.map(event => {
        event.startTime = event.startTime ? new Date(event.startTime) : event.startTime
        event.endTime = event.endTime ? new Date(event.endTime) : event.endTime
    })
    
    return <Layout title="Events" {...globalProps}>
        <HomeBar title="Events" breadcrumbs={[{title:'Home', link:'/'}]}/>
        <PageSection title="Upcoming Events" fullscreen alt>
            <div className="mx-5"><UpcomingEvents events={events} itemsPerPage={6} /></div>
        </PageSection>
    </Layout>
}

export async function getStaticProps() {
    const globalProps = await fetchGlobalProps(client)

    return {
        props: {
            ...globalProps
        }
    }
}
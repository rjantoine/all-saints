import client from "../../client";
import Layout from "../../components/layout";
import HomeBar from '../../components/homeBar'
import PageSection from '../../components/pageSection'
import Image from '../../components/sanity/image'
import {PortableText} from "@portabletext/react";
import UpcomingEvents from '../../components/upcomingEvents'

export default function EventIndex({upcoming}) {
    upcoming.map(event => {
        event.startTime = new Date(event.startTime)
        event.endTime = new Date(event.endTime)
    })
    
    return <Layout title="Events">
        <HomeBar title="Events" breadcrumbs={[{title:'Home', link:'/'}]}/>
        <PageSection title="Upcoming Events" fullscreen alt>
            <UpcomingEvents events={upcoming} />
        </PageSection>
    </Layout>
}

export async function getStaticProps() {
    const upcoming = await client.fetch(`*[_type == "event" && startTime > now()] | order(startTime)`)
    return {
        props: {
            upcoming
        }
    }
}
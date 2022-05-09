import client from "../../client";
import Layout from "../../components/layout";
import {fetchLayoutProps} from '../../components/layout'
import HomeBar from '../../components/homeBar'
import PageSection from '../../components/pageSection'
import Image from '../../components/sanity/image'
import {PortableText} from "@portabletext/react";
import UpcomingEvents from '../../components/upcomingEvents'

export default function EventIndex({upcoming, layoutProps}) {
    upcoming.map(event => {
        event.startTime = event.startTime ? new Date(event.startTime) : event.startTime
        event.endTime = event.endTime ? new Date(event.endTime) : event.endTime
    })
    
    return <Layout title="Events" layoutProps={layoutProps}>
        <HomeBar title="Events" breadcrumbs={[{title:'Home', link:'/'}]}/>
        <PageSection title="Upcoming Events" fullscreen alt>
            <UpcomingEvents events={upcoming} />
        </PageSection>
    </Layout>
}

export async function getStaticProps() {
    const upcoming = await client.fetch(`*[_type == "event" && endTime > now()] | order(startTime)`)
    const layoutProps = await fetchLayoutProps(client)

    return {
        props: {
            upcoming,
            layoutProps
        }
    }
}
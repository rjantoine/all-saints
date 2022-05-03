import client from "../../client";
import Layout from "../../components/layout";
import HomeBar from '../../components/homeBar'
import PageSection from '../../components/pageSection'
import Image from '../../components/sanity/image'
import {PortableText} from "@portabletext/react";
import UpcomingEvents from '../../components/upcomingEvents'

export default function Event({event, upcoming}) {
    event.startTime = new Date(event.startTime)
    event.endTime = new Date(event.endTime)
    upcoming.map(event => {
        event.startTime = new Date(event.startTime)
        event.endTime = new Date(event.endTime)
    })


    return <Layout title={event.title + ' | Events'}>
        <HomeBar title={event.title} breadcrumbs={[{title:'Home', link:'/'}, {title: 'Events', link: '/events/'}]}/>
        <PageSection>
            <div className="row">
                <div className="col-lg-6">
                    <div className="upcoming_image"><Image value={event.mainImage} width={690} height={460} style={{width: '100%'}}/></div>
                </div>
                <div className="col-lg-6">
                    <div className="row mt-0 mb-5">
                        <div className="col-3 text-center">
                            <div className="py-3" style={{background: '#b10707'}}>
                                <div className="event_day">{event.startTime.getDate()}</div>
                                <div className="event_month">{event.startTime.toLocaleString('en-CA', {month: 'short'})}</div>
                                <div className="event_year">{event.startTime.getFullYear()}</div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="event_title mt-1">{event.title}</div>
                            <ul className="event_row">
                                <li>
                                    <div className="event_icon"><img src="/images/calendar.png" alt="" /></div>
                                    <span>{event.startTime.toLocaleString('en-CA', { timeStyle: 'short', hour12: true })} - {event.endTime.toLocaleString('en-CA', { timeStyle: 'short', hour12: true })}</span>
                                </li>
                                <li>
                                    <div className="event_icon"><img src="/images/location.png" alt="" /></div>
                                    <span>{event.location}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="event_text mb-4">
                        <PortableText
                            value={event.body}
                        />
                    </div>

                    <div className="event_timer_container ml-lg-auto">
                        <ul className="event_timer">
                            <li>
                                <div id="day" className="event_num">00</div>
                                <div className="event_ss">day</div>
                            </li>
                            <li>
                                <div id="hour" className="event_num">00</div>
                                <div className="event_ss">hrs</div>
                            </li>
                            <li>
                                <div id="minute" className="event_num">00</div>
                                <div className="event_ss">min</div>
                            </li>
                            <li>
                                <div id="second" className="event_num">00</div>
                                <div className="event_ss">sec</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </PageSection>
        <PageSection title="Upcoming Events" fullscreen alt>
            <UpcomingEvents events={upcoming} />
        </PageSection>
    </Layout>
}

export async function getStaticProps({params: {slug}}) {
    const events = await client.fetch(`*[_type == 'event' && slug.current == "${slug}"]`)
    const upcoming = await client.fetch(`*[_type == "event" && startTime > now()] | order(startTime)`)
    return {
        props: {
            event: events[0],
            upcoming
        }
    }
}

export async function getStaticPaths() {
    const events = await client.fetch(`*[_type == "event"]{slug}`)
    return {
        paths: events.map(event => ({params: {slug: event.slug.current}})),
        fallback: false
    }
}
import client from "../../client";
import Layout from "@/components/layout";
import {fetchGlobalProps} from '@/components/layout'
import HomeBar from '@/components/homeBar'
import PageSection from '@/components/pageSection'
import Image from '@/components/sanity/image'
import {PortableText} from "@portabletext/react";
import UpcomingEvents from '@/components/upcomingEvents'
import {groqLinkProjection} from '@/components/sanity/link'
import {findLinks} from 'helpers'
import Error from '../404'
import React, { useState, useEffect } from 'react';

export default function Event({event, events, ...globalProps}) {
    const [timeLeft, setTimeLeft] = useState(((new Date(event.startTime)).getTime() - (new Date()).getTime()))

    if(!event) return <Error />
    event.startTime = event.startTime ? new Date(event.startTime) : event.startTime
    event.endTime = event.endTime ? new Date(event.endTime) : event.endTime
    events.map(event => {
        event.startTime = event.startTime ? new Date(event.startTime) : event.startTime
        event.endTime = event.endTime ? new Date(event.endTime) : event.endTime
    })

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(((new Date(event.startTime)).getTime() - (new Date()).getTime()))
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return <Layout title={event.title + ' | Events'} {...globalProps}>
        <HomeBar title={event.title} breadcrumbs={[{title:'Home', link:'/'}, {title: 'Events', link: '/events/'}]}/>
        <PageSection>
            <div className="row mt-5">
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
                            {timeLeft}
                            <ul className="event_row">
                                <li>
                                    <div className="event_icon"><img src="/images/calendar.png" alt="" /></div>
                                    <span>{event.startTime.toLocaleString('en-CA', { timeStyle: 'short', hour12: true })} - {event.endTime ? event.endTime.toLocaleString('en-CA', { timeStyle: 'short', hour12: true }) : '?'}</span>
                                </li>
                                <li>
                                    <div className="event_icon"><img src="/images/location.png" alt="" /></div>
                                    <span>{event.location}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="event_text mb-4 portable_text">
                        <PortableText
                            value={event.body}
                        />
                    </div>

                    <div className="event_timer_container d-flex justify-content-center">
                        <ul className="event_timer" data-event-time={event.startTime}>
                            <li>
                                <div id="days" className="event_num">{Math.floor(timeLeft/1000/60/60/24)}</div>
                                <div className="event_ss">day</div>
                            </li>
                            <li>
                                <div id="hours" className="event_num">{Math.floor(((timeLeft/1000) % (60*60*24))/60/60)}</div>
                                <div className="event_ss">hrs</div>
                            </li>
                            <li>
                                <div id="minutes" className="event_num">{Math.floor(((timeLeft/1000) % (60*60))/60)}</div>
                                <div className="event_ss">min</div>
                            </li>
                            <li>
                                <div id="seconds" className="event_num">{Math.floor((timeLeft/1000) % (60))}</div>
                                <div className="event_ss">sec</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </PageSection>
        <PageSection title="Upcoming Events" fullscreen alt>
            <UpcomingEvents events={events} />
        </PageSection>
    </Layout>
}

export async function getStaticProps({params: {slug}}) {
    const events = await client.fetch(`*[_type == 'event' && slug.current == "${slug}" && !(_id in path("drafts.**"))]{${groqLinkProjection}}`)
    if(events.length == 0) return { notFound: true }

    const event = await findLinks(events[0])
    const globalProps = await fetchGlobalProps(client)


    return {
        props: {
            event,
            ...globalProps
        }
    }
}

export async function getStaticPaths() {
    const events = await client.fetch(`*[_type == "event" && !(_id in path("drafts.**"))]{slug}`)
    return {
        paths: events.map(event => ({params: {slug: event.slug.current}})),
        fallback: 'blocking'
    }
}
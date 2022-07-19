import React, { useState, useEffect } from 'react';
import client from '../client'
import imageUrlBuilder from '@sanity/image-url'
import Image from "./sanity/image";
import Link from 'next/link'

import Carousel from './carousel'
import Pagination from './pagination'

export default function UpcomingEvents({events, itemsPerPage=3, carousel, className}) {
    events.map(event => {
        event.startTime = event.startTime ? new Date(event.startTime) : event.startTime
        event.endTime = event.endTime ? new Date(event.endTime) : event.endTime
    })
    const nowTime1 = Date.now()
    const [activeEvents, setActiveEvents] = useState(setActiveEvents(events.filter(event => event.endTime > nowTime1)))
    useEffect(() => {
        const nowTime2 = Date.now()
        setActiveEvents(events.filter(event => event.endTime > nowTime2))
    }, []);

    const itemComponent = event => {
        const cId = Date.now();
        return <div key={cId+'-'+event._id} data-key={event._id} className="mb-5 pb-5">
            <div className="bg-light">
                <Link href={`/events/${event.slug.current}`}><a><Image className="bg-white" value={event.mainImage} width={690} height={345} style={{width: '100%'}} /></a></Link>
                <div className="row mt-0">
                    <div className="col-3 text-center">
                        <div className="py-4 py-md-3" style={{background: '#b10707'}}>
                            <div className="event_day">{event.startTime.getDate()}</div>
                            <div className="event_month">{event.startTime.toLocaleString('en-CA', {month: 'short'})}</div>
                            <div className="event_year">{event.startTime.getFullYear()}</div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="event_title mt-1"><Link href={`/events/${event.slug.current}`}><a>{event.title}</a></Link></div>
                        <ul className="event_row">
                            <li>
                                <div className="event_icon"><img src="/images/calendar.png" alt="" /></div>
                                <span>{event.startTime.toLocaleString('en-CA', { timeStyle: 'short', hour12: true })} - {event.endTime ? event.endTime.toLocaleString('en-CA', { timeStyle: 'short', hour12: true }) : '?'}
                                </span>
                            </li>
                            <li>
                                <div className="event_icon"><img src="/images/location.png" alt="" /></div>
                                <span>{event.location}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    }

    return <div className={`container-fluid${className ? ' '+className : ''}`}>
        { carousel && <Carousel
            items={activeEvents}
            itemsPerPage={{default:1, lg: 2, xl:3}}
            itemComponent={itemComponent}
        /> }
        { carousel || <Pagination
            items={activeEvents}
            itemsPerRow={{default:1, lg: 2, xl:3}}
            itemsPerPage={12}
            itemComponent={itemComponent}
        /> }
    </div>
}
import client from '../client'
import imageUrlBuilder from '@sanity/image-url'
import Image from "./sanity/image";
import Link from 'next/link'

import React, { useState } from 'react';


export default function UpcomingEvents({events}) {
    const [eventsPage, setEventsPage] = useState(0)
    const eventsPerPage = 3
    const totalEventPages = Math.ceil(events.length / eventsPerPage)

    const nextEventsPage = (e) => {
        e.preventDefault()
        setEventsPage(Math.min(eventsPage+1, totalEventPages-1))
    }

    const prevEventsPage = (e) => {
        e.preventDefault()
        setEventsPage(Math.max(0, eventsPage-1))
    }


    return <div className="container-fluid">
        <div className="row h-100">
            <div className="d-none d-md-block col col-1 my-auto text-center">
                { eventsPage > 0 && <a onClick={prevEventsPage} style={{fontSize: '5em'}}><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="0.48em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 608 1280"><path fill="#b10707" d="M595 288q0 13-10 23L192 704l393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10L23 727q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z"/></svg></a> }
            </div>
            <civ className="col col-12 col-md-10">
                <div className="row pl-md-5">
                    { events.slice(eventsPage*eventsPerPage, (eventsPage+1)*eventsPerPage).map((event, i) => <div key={event._id} className="col col-12 col-md-6 col-xl-4 pr-md-5 mb-5">
                        <div className="bg-light">
                            <Link href={`/events/${event.slug.current}`}><a><Image className="bg-white" value={event.mainImage} width={690} height={345} style={{width: '100%'}} loading="lazy" /></a></Link>
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
                    </div> )}
                </div>
            </civ>
            <div className="d-none d-md-block col col-1 my-auto text-center">
                { eventsPage < totalEventPages-1 && <a onClick={nextEventsPage} style={{fontSize: '5em'}}><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="0.48em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 608 1280"><g transform="translate(608 0) scale(-1 1)"><path fill="#b10707" d="M595 288q0 13-10 23L192 704l393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10L23 727q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z"/></g></svg></a> }
            </div>
        </div>
        <div className="row mt-4">
            <div className="col col-12 justify-content-center">
                <nav>
                    <ol className="carousel-indicators">
                        { [...Array(totalEventPages).keys()].map(page =>
                            <li onClick={(e) => { e.preventDefault(); setEventsPage(page) }} className={page == eventsPage ? 'active' : ''}></li>
                        ) }
                    </ol>
                </nav>
            </div>
        </div>
    </div>
}
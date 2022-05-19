import client from '../client'
import imageUrlBuilder from '@sanity/image-url'
import Image from "./sanity/image";
import Link from 'next/link'

import Pagination from './pagination'


export default function UpcomingEvents({events, itemsPerPage=3}) {
    return <div className="container-fluid">
        <Pagination items={events} itemsPerPage={itemsPerPage}
            itemComponent={event => <div key={event._id} className="col col-12 col-md-6 col-xl-4 pr-md-5 mb-5">
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
            </div>}
        />
    </div>
}
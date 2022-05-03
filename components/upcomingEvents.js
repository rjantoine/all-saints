import client from '../client'
import imageUrlBuilder from '@sanity/image-url'
import Image from "./sanity/image";
import Link from 'next/link'

export default function UpcomingEvents({events}) {
    return <div className="container-fluid">
        <div className="row pl-md-5">
            { events.map((event, i) => <div key={event._id} className="col col-12 col-md-6 col-xl-4 pr-md-5">
                <Link href={`/events/${event.slug.current}`}><a><Image value={event.mainImage} width={690} height={345} style={{width: '100%'}} /></a></Link>
                <div className="row mt-0 mt-md-3 mb-5">
                    <div className="col-3 text-center">
                        <div className="py-3" style={{background: '#b10707'}}>
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
                                <span>{event.startTime.toLocaleString('en-CA', { timeStyle: 'short', hour12: true })} - {event.endTime.toLocaleString('en-CA', { timeStyle: 'short', hour12: true })}</span>
                            </li>
                            <li>
                                <div className="event_icon"><img src="/images/location.png" alt="" /></div>
                                <span>{event.location}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> )}
        </div>
    </div>
    return <div
        className="events_items d-flex flex-lg-row flex-column align-items-lg-start align-items-center justify-content-lg-between justify-content-center">
        { events.map((event, i) => <div key={event._id} className="events_item">
            <div className="events_item_image">
                <Image value={event.mainImage} width={690} height={345} />
            </div>
            <div className="events_item_content d-flex flex-row align-items-start justify-content-start">
                <div className="event_date d-flex flex-column align-items-center justify-content-center">
                    <div className="event_day">{event.startTime.getDate()}</div>
                    <div className="event_month">{event.startTime.toLocaleString('en-CA', {month: 'short'})}</div>
                    <div className="event_year">{event.startTime.getFullYear()}</div>
                </div>
                <div className="event_content">
                    <div className="event_title"><Link href={`/events/${event.slug.current}`}><a>{event.title}</a></Link></div>
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

        </div>) }
    </div>
}
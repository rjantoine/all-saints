import Image from './image'
import PageSection from '../pageSection'
import Link from 'next/link'
import LatestNews from "../latestNews"
import UpcomingEvents from '../upcomingEvents'
import MinistriesSection from './ministriesSection'

export default function DocumentsDisplay({value:{className, documentsType, displayStyle}, ministries, news, events}) {
    switch(documentsType) {
        case 'ministries': return <MinistriesSection ministries={ministries} />
        case 'news': return <LatestNews news={news} carousel={displayStyle == 'carousel'} />
        case 'events': return <UpcomingEvents events={events} carousel={displayStyle == 'carousel'} />
        case 'map': return map
        default: return []
    }
}

const map = <div className="contact_map">
    <div className="map">
        <div id="google_map" className="google_map">
            <div className="map_container">
                <div id="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2920.4546234944096!2d-79.24504528255615!3d42.947623100000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d337ad9b58b78b%3A0xc444db9d524064cd!2sAll%20Saints%20Anglican%20Church!5e0!3m2!1sen!2sca!4v1654284260208!5m2!1sen!2sca"
                        width="100%" height="500" style={{border: 0}} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </div>

</div>
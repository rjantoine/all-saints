import Image from './image'
import PageSection from '../pageSection'
import Link from 'next/link'
import LatestNews from "../latestNews"
import UpcomingEvents from '../upcomingEvents'
import MinistriesSection from './ministriesSection'

export default function DocumentsDisplay({value:{className, documentsType}, ministries}) {
    switch(documentsType) {
        case 'ministries': return <MinistriesSection ministries={ministries} />
        case 'news': return <LatestNews news={news} />
        case 'events': return <UpcomingEvents events={events} />
        default: return []
    }
}
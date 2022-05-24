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
        default: return []
    }
}
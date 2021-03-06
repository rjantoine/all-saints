import Layout from '../components/layout'
import {fetchGlobalProps} from '../components/layout'
import client from '../client'
import {PortableText} from "@portabletext/react";
import hero from "../components/sanity/hero";
import section from '../components/sanity/section'
import imageTextSection from '../components/sanity/imageTextSection'
import mission from '../components/sanity/mission'
import UpcomingEvents from "../components/upcomingEvents";
import PageSection from "../components/pageSection";
import LatestNews from "../components/latestNews";
import Gallery from "../components/sanity/gallery"
import {groqLinkProjection} from '@/components/sanity/link'
import {findLinks} from 'helpers'

import Carousel from '../components/carousel'

export default function HomePage({page, events, news, ...globalProps}) {
  events.map(event => {
    event.startTime = event.startTime ? new Date(event.startTime) : event.startTime
    event.endTime = event.endTime ? new Date(event.endTime) : event.endTime
  })

  news.map(post => {
    post.publishedAt = new Date(post.publishedAt)
  })

  return <Layout title={page.title} events={events} news={news} {...globalProps} >
    <div>
      <PortableText value={page.body} />
      {/*<PageSection className="events" title="Upcoming events" subtitle="Experience God's Presence" fullscreen>*/}
      {/*  <UpcomingEvents events={events} carousel />*/}
      {/*</PageSection>*/}

      {/*<PageSection className="latest_news" title="Latest News" subtitle="Be part of a community of people experiencing God together." fullscreen>*/}
      {/*  <LatestNews news={news} carousel />*/}
      {/*</PageSection>*/}
    </div>
  </Layout>
}

export async function getStaticProps(ctx) {
  const pages = await client.fetch(`*[_type == 'page' && slug.current == "index" && !(_id in path("drafts.**"))]{${groqLinkProjection}}`)
  if(pages.length == 0) return { notFound: true }
  
  const page = await findLinks(pages[0])
  const globalProps = await fetchGlobalProps(client)

  // const currentPage = ctx.params.currentPage || 0
  // const qtyPerPage = 3
  // const min = currentPage * qtyPerPage
  // const max = min + qtyPerPage

  return {
    props: {
      page,
      ...globalProps
    }
  }
}
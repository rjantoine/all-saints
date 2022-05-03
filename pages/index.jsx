import Layout from '../components/layout'
import client from '../client'
import {PortableText} from "@portabletext/react";
import hero from "../components/sanity/hero";
import section from '../components/sanity/section'
import imageTextSection from '../components/sanity/imageTextSection'
import mission from '../components/sanity/mission'
import UpcomingEvents from "../components/upcomingEvents";
import PageSection from "../components/pageSection";
import LatestNews from "../components/latestNews";

export default function HomePage({page, events, news}) {
  events.map(event => {
    event.startTime = new Date(event.startTime)
    event.endTime = new Date(event.endTime)
  })

  news.map(post => {
    post.publishedAt = new Date(post.publishedAt)
  })


  return <Layout title={page.title}>
    <div>
      <PortableText
          value={page.body}
          components={{types:{hero, section, imageTextSection, mission}}}
      />
      <PageSection className="events" title="Upcoming events" subtitle="Experience God's Presence" fullscreen>
        <UpcomingEvents events={events} />
      </PageSection>

      <PageSection className="latest_news" title="Latest News" subtitle="Be part of a community of people experiencing God together.">
        <LatestNews news={news} />
      </PageSection>
    </div>
  </Layout>
}

export async function getStaticProps(context) {
  const pages = await client.fetch(`*[_type == 'page' && slug.current == "index"]`)
  const events = await client.fetch(`*[_type == "event" && startTime > now()] | order(startTime)[0...3]`)
  const news = await client.fetch(`*[_type == "news"] | order(publishedAt desc)[0...3]`)

  return {
    props: {
      page: pages[0],
      events,
      news
    }
  }
}
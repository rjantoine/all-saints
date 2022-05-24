import {toPlainText} from '@portabletext/react'
import Image from "./sanity/image";
import Link from 'next/link'

import Carousel from './carousel'
import Pagination from './pagination'

export default function LatestNews({news, carousel}) {
    const itemComponent = post => <div key={post._id} className="news_post_col">
        <div className="news_post">
            <div className="news_image">
                <Link href={'/news/'+post.slug.current}><a><Image value={post.mainImage} width={690} height={503} /></a></Link>
            </div>
            <div className="news_post_content">
                <div className="news_post_title">
                    <Link href={'/news/'+post.slug.current}><a>{post.title}</a></Link>
                </div>
                <div className="news_post_meta">
                    <ul>
                        <li><i className="fa fa-calendar-o" aria-hidden="true"></i><span className="ml-2">{post.publishedAt.toLocaleDateString('en-CA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span></li>
                    </ul>
                </div>
                <div className="news_post_text">
                    <p>
                        {toPlainText(post.body).split(' ').slice(0, 30).join(' ')}
                        {toPlainText(post.body).split(' ').slice(0, 30).join(' ').length < toPlainText(post.body).length ? '...' : ''}
                    </p>
                    <p>{/* @TODO Add Text preview */}</p>
                </div>
            </div>
        </div>
    </div>

    return <>
        { carousel && <Carousel
            items={news}
            itemsPerPage={{default:1, lg: 2, xl:3}}
            itemComponent={itemComponent}
        /> }
        { carousel || <div style={{width:'90%', marginLeft:'5%'}}><Pagination
            items={news}
            itemsPerRow={{default:1, lg: 2, xl:3}}
            itemsPerPage={12}
            itemComponent={itemComponent}
        /></div> }
    </>
}
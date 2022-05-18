import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChurch, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
import {PortableTextComponentsProvider} from '@portabletext/react'
import image from './sanity/image'
import button from './sanity/button'
import linkButton from './sanity/linkButton'
import gallery from './sanity/gallery'
import column from './column'
import hero from "./sanity/hero";
import section from './sanity/section'
import columnsSection from './sanity/columnsSection'
import imageTextSection from './sanity/imageTextSection'
import mission from './sanity/mission'
import quote from './sanity/quote'
import DocumentsDisplay from './sanity/documentsDisplay'

export default function Layout({ title, description, children, mainMenuItems, footerMenuItems, news, events, ministries}) {
    const email = 'info@allsaintsdaincity.ca'
    const phone = '(905) 735-0061'
    const fb = 'https://www.facebook.com/daincitychurch/'

    const sanityComponents = {
        types:{
            column, image, button, linkButton, gallery, hero, section, columnsSection, imageTextSection, mission, quote, gallery,
            documentsDisplay: ({value}) => <DocumentsDisplay value={value} ministries={ministries} news={news} events={events} />
        }
    }

    return (
        <>
            <Head>
                <title>{title} | All Saints Anglican Church - Dain City</title>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" type="text/css" href="/styles/bootstrap4/bootstrap.min.css" />
                <link href="/plugins/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
                <link rel="stylesheet" type="text/css" href="/plugins/OwlCarousel2-2.2.1/owl.carousel.css" />
                <link rel="stylesheet" type="text/css" href="/plugins/OwlCarousel2-2.2.1/owl.theme.default.css" />
                <link rel="stylesheet" type="text/css" href="/plugins/OwlCarousel2-2.2.1/animate.css" />
                <link href="/plugins/colorbox/colorbox.css" rel="stylesheet" type="text/css" />
                <link rel="stylesheet" type="text/css" href="/styles/main_styles.css" />
                <link rel="stylesheet" type="text/css" href="/styles/responsive.css"/>
                <script defer src="/js/jquery-3.2.1.min.js"></script>
                <script defer src="/styles/bootstrap4/popper.js"></script>
                <script defer src="/styles/bootstrap4/bootstrap.min.js"></script>
                <script defer src="/plugins/OwlCarousel2-2.2.1/owl.carousel.js"></script>
                <script defer src="/plugins/easing/easing.js"></script>
                <script defer src="/plugins/parallax-js-master/parallax.min.js"></script>
                <script defer src="/plugins/colorbox/jquery.colorbox-min.js"></script>
                <script defer src="/js/custom.js"></script>
            </Head>
            <div className="super_container">
                <header className="header">
                    <div className="top_bar">
                        <div className="top_bar_background" style={{backgroundImage:'url(/images/top_bar.jpg)'}}></div>
                        <div className="top_bar_container">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div
                                            className="top_bar_content d-flex flex-row align-items-center justify-content-start">
                                            <ul className="top_bar_contact_list">
                                                <li>
                                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                                    <div>Email: {email}</div>
                                                </li>
                                                <li>
                                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                                    <div>Call Us: {phone}</div>
                                                </li>
                                            </ul>
                                            <div className="top_bar_social ml-auto">
                                                <ul className="social_list">
                                                    <li><Link href="https://www.facebook.com/daincitychurch/"><a target="_blank">
                                                        <i className="fa fa-facebook" aria-hidden="true"></i>
                                                    </a></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header_container">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="header_content d-flex flex-row align-items-center justify-content-start">
                                        <div className="logo_container">
                                            <a href="/">
                                                <div className="logo" style={{width: 75}}><FontAwesomeIcon icon={faChurch} style={{height: 60}} /></div>
                                                <div className="logo_text" style={{verticalAlign: 'inherit'}}><a href="/" style={{color: 'inherit'}}>All Saint<br />Anglican Church</a></div>
                                            </a>
                                        </div>
                                        <nav className="main_nav_contaner ml-auto">
                                            <ul className="main_nav">
                                                { mainMenuItems.map(({title, link}, i) =>
                                                    <li key={`menuItem${i}`}><a href={link}>{title}</a></li>
                                                )}
                                            </ul>
                                            <div className="search_button"><i className="fa fa-search" aria-hidden="true"></i></div>
                                        </nav>

                                        <div className="hamburger ml-auto">
                                            <i className="fa fa-bars" aria-hidden="true"></i>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header_search_container">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div
                                        className="header_search_content d-flex flex-row align-items-center justify-content-end">
                                        <form action="#" className="header_search_form">
                                            <input type="search" className="search_input" placeholder="Search"
                                                   required="required" />
                                                <button
                                                    className="header_search_button d-flex flex-column align-items-center justify-content-center">
                                                    <i className="fa fa-search" aria-hidden="true"></i>
                                                </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
            <main><PortableTextComponentsProvider components={sanityComponents}>{children}</PortableTextComponentsProvider></main>
            <footer className="footer" style={{backgroundImage: 'url(/images/footer.jpg)'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 footer_col">
                            <div className="footer_column footer_contact_column">
                                <div className="footer_logo_container">
                                    <a href="/">
                                        <div className="footer_logo_text" style={{lineHeight: 1}}>All Saints<br />Anglican Church</div>
                                    </a>
                                </div>
                                <div className="footer_contact">
                                    <ul>
                                        <li>
                                            <div><i className="fa fa-map-marker" aria-hidden="true"></i></div>
                                            <span>80 Forks Road East, Welland, ON, L3B 5K5</span></li>
                                        <li>
                                            <div><i className="fa fa-phone" aria-hidden="true"></i></div>
                                            <span>{phone}</span></li>
                                        <li>
                                            <div><i className="fa fa-envelope" aria-hidden="true"></i></div>
                                            <span>{email}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-9 footer_col">
                            <div className="footer_column footer_links">
                                <div className="footer_title">useful links</div>
                                <ul className="footer_links_list">
                                    { footerMenuItems.map(({title, link}, i) => <li key={`footerItem${i}`}>
                                        <a href={link}><i className="fa fa-angle-double-right" aria-hidden="true"></i> {title}</a>
                                    </li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row copyright_row">
                        <div className="col">
                            <div
                                className="copyright_container d-flex flex-lg-row flex-column align-items-center justify-content-lg-start justify-content-center">
                                <div
                                    className="copyright">
                                    Copyright &copy;
                                    <script>document.write(new Date().getFullYear());</script>
                                    All rights reserved
                                </div>
                                <div className="footer_social ml-lg-auto">
                                    <ul>
                                        <li><a href="https://www.facebook.com/daincitychurch/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export async function fetchGlobalProps(client) {
    const mainMenuItems = await client.fetch(`*[_type == 'mainMenuItems']| order(order asc) {title, 'link':select(link.linkType == 'internal' => select(link.internalLink->_type == 'page' => '', link.internalLink->_type) + '/' + select(link.internalLink->slug.current == 'index' => '', link.internalLink->slug.current), link.href)}`)
    const footerMenuItems = await client.fetch(`*[_type == 'footerMenuItems']| order(order asc) {title, 'link':select(link.linkType == 'internal' => select(link.internalLink->_type == 'page' => '', link.internalLink->_type) + '/' + select(link.internalLink->slug.current == 'index' => '', link.internalLink->slug.current), link.href)}`)
    const events = await client.fetch(`*[_type == "event" && endTime > now()] | order(startTime)`)
    const news = await client.fetch(`*[_type == "news"] | order(publishedAt desc)[0...3]`)
    const ministries = await client.fetch(`*[_type == "ministry"]| order(order asc)`)

    return {mainMenuItems, footerMenuItems, events, news, ministries}
}

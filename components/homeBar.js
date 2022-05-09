import Link from 'next/link'

export default function HomeBar({title, breadcrumbs}) {
    /*
    Breadcrumbs
    [{title: 'Title', link: '#'}, ...]
     */
    return <div className="home">
        <div className="home_background" style={{backgroundImage:'url(/images/events.jpg)'}}></div>
        <div className="home_content">
            <div className="container">
                <div className="row">
                    <div className="col d-flex flex-row align-items-center justify-content-start">
                        <div className="home_title">{title}</div>
                        <div className="breadcrumbs ml-auto">
                            <ul>
                                { breadcrumbs && breadcrumbs.map(b => <li key={b._id}><Link href={b.link}><a>{b.title}</a></Link></li>) }
                                <li>{title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
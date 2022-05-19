export default function Carousel({carouselPages=[]}) {
    const cId = Date.now();
    return <div id={`carousel-${cId}`} className="carousel slide">
        <ol className="carousel-indicators">
            { [...Array(carouselPages.length).keys()].map(i => <li data-target={`#carousel-${cId}`} data-slide-to={i} className={i == 0 ? 'active' : ''}></li>)}
        </ol>
        <div className="carousel-inner" style={{width:'90%', marginLeft: '5%'}}>
            { carouselPages.map((item, i) => <div className={`carousel-item${i == 0 ? ' active' : ''}`} key={`carousel-${cId}-${i}`}>{item}</div>) }
        </div>
        <a className="carousel-control-prev" href={`#carousel-${cId}`} role="button" data-slide="prev" style={{width:'5%'}}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href={`#carousel-${cId}`} role="button" data-slide="next" style={{width:'5%'}}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
}
const CarouselInstance = ({cId, breakPoint, carouselPages, className}) => {
    return <div key={`carousel-inst-${breakPoint}-${cId}`} id={`carousel-${breakPoint}-${cId}`} className={`carousel slide${className ? ' '+className : ''}`} data-interval="false">
        <ol className="carousel-indicators">
            { [...Array(carouselPages.length).keys()].map(i => <li key={`carousel-ind-${breakPoint}-${cId}-${i}`} data-target={`#carousel-${breakPoint}-${cId}`} data-slide-to={i} className={i == 0 ? 'active' : ''}></li>)}
        </ol>
        <div className="carousel-inner" style={{width:'90%', marginLeft: '5%'}}>
            { carouselPages.map((item, i) => <div className={`carousel-item${i == 0 ? ' active' : ''}`} key={`carousel-${breakPoint}-${cId}-${i}`}>{item}</div>) }
        </div>
        <a className="carousel-control-prev" href={`#carousel-${breakPoint}-${cId}`} role="button" data-slide="prev" style={{width:'5%'}}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href={`#carousel-${breakPoint}-${cId}`} role="button" data-slide="next" style={{width:'5%'}}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
}
export default function Carousel({items=[], itemsPerPage, itemComponent, colsByBreakPoint, className, ...props}) {
    if(!isNaN(itemsPerPage)) itemsPerPage={default:itemsPerPage}

    if(itemsPerPage.hasOwnProperty('xs')) {
        itemsPerPage['default'] = itemsPerPage['xs']
        delete itemsPerPage['xs']
    }

    const allBreakPoints=['default', 'sm', 'md', 'lg', 'xl'].filter(b => itemsPerPage.hasOwnProperty(b))

    return Object.keys(itemsPerPage).map(b => {
        const carouselPages = []
        const totalPages = Math.ceil(items.length / itemsPerPage[b])
        const colWidth = Math.ceil(12/itemsPerPage[b])
        for(let page = 0; page < totalPages; page++) {
            carouselPages.push(<div className="row justify-content-center">{items.slice(page*itemsPerPage[b], (page+1)*itemsPerPage[b]).map(item =>
                <div className={`col-${colWidth}`}>{itemComponent(item)}</div>
            )}</div>)
        }
        let classNameObject = {}
        classNameObject['default'] = 'none'
        classNameObject[b] = 'block'
        if(allBreakPoints.indexOf(b) < allBreakPoints.length-1) classNameObject[allBreakPoints[allBreakPoints.indexOf(b)+1]] = 'none'
        const cId = Date.now();
        return <div key={`carousel-${b}-${cId}`} className={Object.keys(classNameObject).map(o => (`d-${o == 'default' ? '' : o+'-'}${classNameObject[o]}`)).join(' ')}>{CarouselInstance({cId, breakPoint: b, carouselPages, className})}</div>
    })

}


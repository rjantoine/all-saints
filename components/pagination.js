import Carousel from './carousel'
export default function Pagination({items, itemsPerPage, itemComponent}) {
    const carouselPages = []
    const totalPages = Math.ceil(items.length / itemsPerPage)

    for(let page = 0; page < totalPages; page++) {
        carouselPages.push(<div className="row">{items.slice(page*itemsPerPage, (page+1)*itemsPerPage).map(item => itemComponent(item))}</div>)
    }
    return <Carousel carouselPages={carouselPages} />
}
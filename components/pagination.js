import { useState } from 'react'
import Carousel from './carousel'

export default function Pagination({items, itemsPerRow, itemsPerPage, itemComponent, ...props}) {
    const [page, setPage] = useState(0)
    const pId = Date.now()

    if(!isNaN(itemsPerRow)) itemsPerRow={default:itemsPerRow}

    const totalPages = Math.ceil(items.length/itemsPerPage)
    return <>
        { [...Array(totalPages).keys()].map(p =>
            <div className={`row${p == page ? '' : ' d-none'}`} key={`pagination-${pId}-${p}`}>
                { items.slice(p*itemsPerPage, (p+1)*itemsPerPage).map(i => <div key={`pagination-${pId}-${p}-${i}`} className={Object.keys(itemsPerRow).map(i => `col${i == 'default' ? '' : '-'+i}-${Math.ceil(12/itemsPerRow[i])}`).join(' ')}>{itemComponent(i)}</div>) }
            </div>
        ) }
        <div className="d-flex justify-content-center">
            <nav aria-label="Page navigation example mx-auto">
                <ul className="pagination">
                    { page > 0 && <li className="page-item"><a onClick={e => {e.preventDefault(); setPage(Math.max(0, page-1))}} className="page-link" key={`pagination-${pId}-nav-prev`} href="#">Previous</a></li> }
                    { [...Array(totalPages).keys()].map(p => <li key={`pagination-${pId}-nav-${p}`} className="page-item"><a onClick={e => {e.preventDefault(); setPage(p)}} className={`page-link${p == page ? ' current' : ''}`} href="#">{p+1}</a></li>) }
                    { page < totalPages-1 && <li key={`pagination-${pId}-nav-next`} onClick={e => {e.preventDefault(); setPage(Math.min(totalPages, page+1))}} className="page-item"><a className="page-link" href="#">Next</a></li> }
                </ul>
            </nav>
        </div>
    </>
}
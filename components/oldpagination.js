import React, { useState } from 'react';

// <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
//     <ol className="carousel-indicators">
//         <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
//         <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//         <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//     </ol>
//     <div className="carousel-inner" style={{width:'90%', marginLeft: '5%'}}>
//         <div className="carousel-item active">
//             <div className="row justify-content-center">
//                 <div className="col col-12 col-md-6 col-xl-4 pr-md-5 mb-5">
//                     <div className="bg-light"><a href="/events/vendors-market-may-24-2022"><img className="bg-white"
//                                                                                                 src="https://cdn.sanity.io/images/9eq07096/production/d6852e7552dcd56c21520143d523f3f3f5dcfe64-2048x1536.jpg?rect=4,321,2044,1022&amp;w=690&amp;h=345"
//                                                                                                 alt="" style={{width:'100%'}}
//                                                                                                 loading="lazy" /></a>
//                         <div className="row mt-0">
//                             <div className="col-3 text-center">
//                                 <div className="py-4 py-md-3" style={{background:'#b10707'}}>
//                                     <div className="event_day">24</div>
//                                     <div className="event_month">May</div>
//                                     <div className="event_year">2022</div>
//                                 </div>
//                             </div>
//                             <div className="col-9">
//                                 <div className="event_title mt-1"><a href="/events/vendors-market-may-24-2022">Vendor's Market</a>
//                                 </div>
//                                 <ul className="event_row">
//                                     <li>
//                                         <div className="event_icon"><img src="/images/calendar.png" alt="" /></div>
//                                         <span>2:30 PM - 6:00 PM</span></li>
//                                     <li>
//                                         <div className="event_icon"><img src="/images/location.png" alt="" /></div>
//                                         <span>80 Forks Road East, Welland, ON, L3B 5K5</span></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col col-12 col-md-6 col-xl-4 pr-md-5 mb-5">
//                     <div className="bg-light"><a href="/events/line-dancing-may-25-2022"><img className="bg-white"
//                                                                                               src="https://cdn.sanity.io/images/9eq07096/production/dc6b8f90e86c7da84a2685726cd9b05aa56f5719-1000x500.png?w=690&amp;h=345"
//                                                                                               alt="" style={{width:'100%'}}
//                                                                                               loading="lazy" /></a>
//                         <div className="row mt-0">
//                             <div className="col-3 text-center">
//                                 <div className="py-4 py-md-3" style={{background:'#b10707'}}>
//                                     <div className="event_day">25</div>
//                                     <div className="event_month">May</div>
//                                     <div className="event_year">2022</div>
//                                 </div>
//                             </div>
//                             <div className="col-9">
//                                 <div className="event_title mt-1"><a href="/events/line-dancing-may-25-2022">Line Dancing</a>
//                                 </div>
//                                 <ul className="event_row">
//                                     <li>
//                                         <div className="event_icon"><img src="/images/calendar.png" alt="" /></div>
//                                         <span>1:00 PM - 2:00 PM</span></li>
//                                     <li>
//                                         <div className="event_icon"><img src="/images/location.png" alt="" /></div>
//                                         <span>80 Forks Road East, Welland, ON, L3B 5K5</span></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col col-12 col-md-6 col-xl-4 pr-md-5 mb-5">
//                     <div className="bg-light"><a href="/events/vendors-market-may-31-2022"><img className="bg-white"
//                                                                                                 src="https://cdn.sanity.io/images/9eq07096/production/d6852e7552dcd56c21520143d523f3f3f5dcfe64-2048x1536.jpg?rect=4,321,2044,1022&amp;w=690&amp;h=345"
//                                                                                                 alt="" style={{width:'100%'}}
//                                                                                                 loading="lazy" /></a>
//                         <div className="row mt-0">
//                             <div className="col-3 text-center">
//                                 <div className="py-4 py-md-3" style={{background:'#b10707'}}>
//                                     <div className="event_day">31</div>
//                                     <div className="event_month">May</div>
//                                     <div className="event_year">2022</div>
//                                 </div>
//                             </div>
//                             <div className="col-9">
//                                 <div className="event_title mt-1"><a href="/events/vendors-market-may-31-2022">Vendor's Market</a>
//                                 </div>
//                                 <ul className="event_row">
//                                     <li>
//                                         <div className="event_icon"><img src="/images/calendar.png" alt="" /></div>
//                                         <span>2:30 PM - 6:00 PM</span></li>
//                                     <li>
//                                         <div className="event_icon"><img src="/images/location.png" alt="" /></div>
//                                         <span>80 Forks Road East, Welland, ON, L3B 5K5</span></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className="carousel-item">
//             <div className="row justify-content-center">
//                 <div className="col col-12 col-md-6 col-xl-4 pr-md-5 mb-5">
//                     <div className="bg-light"><a href="/events/vendors-market-may-24-2022"><img className="bg-white"
//                                                                                                 src="https://cdn.sanity.io/images/9eq07096/production/d6852e7552dcd56c21520143d523f3f3f5dcfe64-2048x1536.jpg?rect=4,321,2044,1022&amp;w=690&amp;h=345"
//                                                                                                 alt="" style={{width:'100%'}}
//                                                                                                 loading="lazy" /></a>
//                         <div className="row mt-0">
//                             <div className="col-3 text-center">
//                                 <div className="py-4 py-md-3" style={{background:'#b10707'}}>
//                                     <div className="event_day">24</div>
//                                     <div className="event_month">May</div>
//                                     <div className="event_year">2022</div>
//                                 </div>
//                             </div>
//                             <div className="col-9">
//                                 <div className="event_title mt-1"><a href="/events/vendors-market-may-24-2022">Vendor's Market</a>
//                                 </div>
//                                 <ul className="event_row">
//                                     <li>
//                                         <div className="event_icon"><img src="/images/calendar.png" alt="" /></div>
//                                         <span>2:30 PM - 6:00 PM</span></li>
//                                     <li>
//                                         <div className="event_icon"><img src="/images/location.png" alt="" /></div>
//                                         <span>80 Forks Road East, Welland, ON, L3B 5K5</span></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col col-12 col-md-6 col-xl-4 pr-md-5 mb-5">
//                     <div className="bg-light"><a href="/events/line-dancing-may-25-2022"><img className="bg-white"
//                                                                                               src="https://cdn.sanity.io/images/9eq07096/production/dc6b8f90e86c7da84a2685726cd9b05aa56f5719-1000x500.png?w=690&amp;h=345"
//                                                                                               alt="" style={{width:'100%'}}
//                                                                                               loading="lazy" /></a>
//                         <div className="row mt-0">
//                             <div className="col-3 text-center">
//                                 <div className="py-4 py-md-3" style={{background:'#b10707'}}>
//                                     <div className="event_day">25</div>
//                                     <div className="event_month">May</div>
//                                     <div className="event_year">2022</div>
//                                 </div>
//                             </div>
//                             <div className="col-9">
//                                 <div className="event_title mt-1"><a href="/events/line-dancing-may-25-2022">Line Dancing</a>
//                                 </div>
//                                 <ul className="event_row">
//                                     <li>
//                                         <div className="event_icon"><img src="/images/calendar.png" alt="" /></div>
//                                         <span>1:00 PM - 2:00 PM</span></li>
//                                     <li>
//                                         <div className="event_icon"><img src="/images/location.png" alt="" /></div>
//                                         <span>80 Forks Road East, Welland, ON, L3B 5K5</span></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col col-12 col-md-6 col-xl-4 pr-md-5 mb-5">
//                     <div className="bg-light"><a href="/events/vendors-market-may-31-2022"><img className="bg-white"
//                                                                                                 src="https://cdn.sanity.io/images/9eq07096/production/d6852e7552dcd56c21520143d523f3f3f5dcfe64-2048x1536.jpg?rect=4,321,2044,1022&amp;w=690&amp;h=345"
//                                                                                                 alt="" style={{width:'100%'}}
//                                                                                                 loading="lazy" /></a>
//                         <div className="row mt-0">
//                             <div className="col-3 text-center">
//                                 <div className="py-4 py-md-3" style={{background:'#b10707'}}>
//                                     <div className="event_day">31</div>
//                                     <div className="event_month">May</div>
//                                     <div className="event_year">2022</div>
//                                 </div>
//                             </div>
//                             <div className="col-9">
//                                 <div className="event_title mt-1"><a href="/events/vendors-market-may-31-2022">Vendor's Market</a>
//                                 </div>
//                                 <ul className="event_row">
//                                     <li>
//                                         <div className="event_icon"><img src="/images/calendar.png" alt="" /></div>
//                                         <span>2:30 PM - 6:00 PM</span></li>
//                                     <li>
//                                         <div className="event_icon"><img src="/images/location.png" alt="" /></div>
//                                         <span>80 Forks Road East, Welland, ON, L3B 5K5</span></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className="carousel-item">
//             <div className="row justify-content-center">
//                 <div className="col col-12 col-md-6 col-xl-4 pr-md-5 mb-5">
//                     <div className="bg-light"><a href="/events/vendors-market-may-24-2022"><img className="bg-white"
//                                                                                                 src="https://cdn.sanity.io/images/9eq07096/production/d6852e7552dcd56c21520143d523f3f3f5dcfe64-2048x1536.jpg?rect=4,321,2044,1022&amp;w=690&amp;h=345"
//                                                                                                 alt="" style={{width:'100%'}}
//                                                                                                 loading="lazy" /></a>
//                         <div className="row mt-0">
//                             <div className="col-3 text-center">
//                                 <div className="py-4 py-md-3" style={{background:'#b10707'}}>
//                                     <div className="event_day">24</div>
//                                     <div className="event_month">May</div>
//                                     <div className="event_year">2022</div>
//                                 </div>
//                             </div>
//                             <div className="col-9">
//                                 <div className="event_title mt-1"><a href="/events/vendors-market-may-24-2022">Vendor's Market</a>
//                                 </div>
//                                 <ul className="event_row">
//                                     <li>
//                                         <div className="event_icon"><img src="/images/calendar.png" alt="" /></div>
//                                         <span>2:30 PM - 6:00 PM</span></li>
//                                     <li>
//                                         <div className="event_icon"><img src="/images/location.png" alt="" /></div>
//                                         <span>80 Forks Road East, Welland, ON, L3B 5K5</span></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col col-12 col-md-6 col-xl-4 pr-md-5 mb-5">
//                     <div className="bg-light"><a href="/events/line-dancing-may-25-2022"><img className="bg-white"
//                                                                                               src="https://cdn.sanity.io/images/9eq07096/production/dc6b8f90e86c7da84a2685726cd9b05aa56f5719-1000x500.png?w=690&amp;h=345"
//                                                                                               alt="" style={{width:'100%'}}
//                                                                                               loading="lazy" /></a>
//                         <div className="row mt-0">
//                             <div className="col-3 text-center">
//                                 <div className="py-4 py-md-3" style={{background:'#b10707'}}>
//                                     <div className="event_day">25</div>
//                                     <div className="event_month">May</div>
//                                     <div className="event_year">2022</div>
//                                 </div>
//                             </div>
//                             <div className="col-9">
//                                 <div className="event_title mt-1"><a href="/events/line-dancing-may-25-2022">Line Dancing</a>
//                                 </div>
//                                 <ul className="event_row">
//                                     <li>
//                                         <div className="event_icon"><img src="/images/calendar.png" alt="" /></div>
//                                         <span>1:00 PM - 2:00 PM</span></li>
//                                     <li>
//                                         <div className="event_icon"><img src="/images/location.png" alt="" /></div>
//                                         <span>80 Forks Road East, Welland, ON, L3B 5K5</span></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col col-12 col-md-6 col-xl-4 pr-md-5 mb-5">
//                     <div className="bg-light"><a href="/events/vendors-market-may-31-2022"><img className="bg-white"
//                                                                                                 src="https://cdn.sanity.io/images/9eq07096/production/d6852e7552dcd56c21520143d523f3f3f5dcfe64-2048x1536.jpg?rect=4,321,2044,1022&amp;w=690&amp;h=345"
//                                                                                                 alt="" style={{width:'100%'}}
//                                                                                                 loading="lazy" /></a>
//                         <div className="row mt-0">
//                             <div className="col-3 text-center">
//                                 <div className="py-4 py-md-3" style={{background:'#b10707'}}>
//                                     <div className="event_day">31</div>
//                                     <div className="event_month">May</div>
//                                     <div className="event_year">2022</div>
//                                 </div>
//                             </div>
//                             <div className="col-9">
//                                 <div className="event_title mt-1"><a href="/events/vendors-market-may-31-2022">Vendor's Market</a>
//                                 </div>
//                                 <ul className="event_row">
//                                     <li>
//                                         <div className="event_icon"><img src="/images/calendar.png" alt="" /></div>
//                                         <span>2:30 PM - 6:00 PM</span></li>
//                                     <li>
//                                         <div className="event_icon"><img src="/images/location.png" alt="" /></div>
//                                         <span>80 Forks Road East, Welland, ON, L3B 5K5</span></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" style={{width:'5%'}}>
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="sr-only">Previous</span>
//     </a>
//     <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" style={{width:'5%'}}>
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="sr-only">Next</span>
//     </a>
// </div>

export default function Pagination({items, itemsPerPage, itemComponent}) {
    const [page, setPage] = useState(0)
    const totalPages = Math.ceil(items.length / itemsPerPage)

    return <>
        <div className="row h-100">
            <div className="d-none d-md-block col col-1 my-auto text-center">
                { page > 0 && <a onClick={(e) => { e.preventDefault(); setPage(Math.max(0, page-1)) }} style={{fontSize: '5em'}}><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="0.48em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 608 1280"><path fill="#b10707" d="M595 288q0 13-10 23L192 704l393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10L23 727q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z"/></svg></a> }
            </div>
            <div className="col col-12 col-md-10">
                <div className="row justify-content-center">
                    { items.slice(page*itemsPerPage, (page+1)*itemsPerPage).map(item => itemComponent(item)) }
                </div>
            </div>
            <div className="d-none d-md-block col col-1 my-auto text-center">
                { page < totalPages-1 && <a onClick={(e) => { e.preventDefault(); setPage(Math.min(page+1, totalPages))}} style={{fontSize: '5em'}}><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="0.48em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 608 1280"><g transform="translate(608 0) scale(-1 1)"><path fill="#b10707" d="M595 288q0 13-10 23L192 704l393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10L23 727q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z"/></g></svg></a> }
            </div>
        </div>
        { totalPages > 1 && <div className="row mt-4">
            <div className="col col-12 justify-content-center">
                <nav>
                    <ol className="carousel-indicators">
                        { [...Array(totalPages).keys()].map(p =>
                            <li onClick={(e) => { e.preventDefault(); setPage(p) }} className={p == page ? 'active' : ''}></li>
                        ) }
                    </ol>
                </nav>
            </div>
        </div> }
    </>
}
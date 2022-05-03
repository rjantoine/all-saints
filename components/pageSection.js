export default function PageSection({title, subtitle, fullscreen, alt, className='', children}) {
    return <div className={`section ${className} ${alt ? 'bg-light' : ''}`.trim()}>
        <div className="container">
            { (title || subtitle) && <div className="row">
                <div className="col">
                    <div className="section_title_container text-center">
                        <div className="section_title">{title}</div>
                        <div className="section_subtitle">{subtitle}</div>
                    </div>
                </div>
            </div> }
            {!fullscreen && <div className="row section_row">{children}</div>}
        </div>
        {fullscreen && <div className="row section_row">{children}</div>}}
    </div>
}
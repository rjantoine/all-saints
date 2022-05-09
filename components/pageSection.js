export default function PageSection({title, subtitle, fullscreen, nocolumns=false, alt, className='', children}) {
    return <div className={`section ${className} ${alt ? 'bg-light' : ''} ${(!title && !subtitle) ? 'pt-0' : ''}`.trim()}>
        <div className="container">
            { (title || subtitle) && <div className="row">
                <div className="col">
                    <div className="section_title_container text-center">
                        <div className="section_title">{title}</div>
                        <div className="section_subtitle">{subtitle}</div>
                    </div>
                </div>
            </div> }
            {!fullscreen && <div className="row section_row">
                {!nocolumns && <div className="col">{children}</div>}
                {nocolumns && children}
            </div>}
        </div>
        {fullscreen && <div className="row section_row"><div className="col">{children}</div></div>}
    </div>
}
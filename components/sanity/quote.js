export default function Quote({value:{className, text, source}}) {
    return <div className={`quote ${className}`.trim()}>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="quote_container text-center">
                        <div className="quote_quote">“{text}”
                        </div>
                        <div className="quote_icon"><img src="/images/quote_2.png" />
                        </div>
                        <div className="quote_source">{source}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
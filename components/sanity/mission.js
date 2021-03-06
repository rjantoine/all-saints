export default function Mission({value: {missionText, communityText, beliefText}}) {
    return <div style={{backgroundImage: 'url(images/mission.jpg)'}}>
        <div className="row">
            <div className="col col-12 col-md-4 p-5 text-center">
                <div className="mission_icon"><i className="fa fa-bell-o" aria-hidden="true"></i></div>
                <div className="mission_title">our mission</div>
                <div className="mission_text">
                    {missionText}
                </div>
            </div>
            <div className="col col-12 col-md-4 p-5 text-center">
                <div className="mission_icon"><i className="fa fa-flag-o" aria-hidden="true"></i></div>
                <div className="mission_title">our community</div>
                <div className="mission_text">
                    {communityText}
                </div>
            </div>
            <div className="col col-12 col-md-4 p-5 text-center">
                <div className="mission_icon"><i className="fa fa-heart-o" aria-hidden="true"></i></div>
                <div className="mission_title">our belief</div>
                <div className="mission_text">
                    {beliefText}
                </div>
            </div>
        </div>
    </div>
    return <div className="mission" style={{backgroundImage: 'url(images/mission.jpg)'}}>
        <div className="mission_items d-flex flex-row flex-wrap align-items-start justify-content-start">

            <div className="mission_item text-center">
                <div className="mission_icon"><i className="fa fa-bell-o" aria-hidden="true"></i></div>
                <div className="mission_title">our mission</div>
                <div className="mission_text">
                    {missionText}
                </div>
            </div>

            <div className="mission_item text-center">
                <div className="mission_icon"><i className="fa fa-flag-o" aria-hidden="true"></i></div>
                <div className="mission_title">our community</div>
                <div className="mission_text">
                    {communityText}
                </div>
            </div>

            <div className="mission_item text-center">
                <div className="mission_icon"><i className="fa fa-heart-o" aria-hidden="true"></i></div>
                <div className="mission_title">our belief</div>
                <div className="mission_text">
                    {beliefText}
                </div>
            </div>
        </div>
    </div>
}
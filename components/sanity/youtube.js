export default function Youtube({value: {vid}}) {
    return <iframe className="embedded-video-16-9" src={`https://www.youtube.com/embed/${vid}`} title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen />
}
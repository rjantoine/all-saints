import Image from './image'

export default function Gallery({value: {images}}) {
    return <div className="gallery d-flex flex-row flex-wrap align-items-start justify-content-center">
        { images.map(image => <div className="gallery_item">
            <Image value={image} width={384} height={280} withLink={{className:"colorbox cboxElement"}} style={{width: '100%'}} />
        </div>)}
    </div>
}
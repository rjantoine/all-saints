import Image from './image'

export default function Gallery({value: {images}}) {
    const cId = Date.now();
    return <div className="gallery d-flex flex-row flex-wrap align-items-start justify-content-center">
        { images.map(image => <div key={image._key} className="gallery_item">
            <Image value={image} width={384} height={280} withLink={{className:"colorbox cboxElement", rel:`gallery-${cId}`}} style={{width: '100%'}} />
        </div>)}
    </div>
}
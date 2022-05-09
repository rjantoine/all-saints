import Image from './image'
import PageSection from '../pageSection'
import Link from 'next/link'

export default function MinistriesSection({value:{className, ministries}}) {
    return <div className={`container ${className}`.trim()}>
        <div className="row">
            { ministries.map(ministry => <div key={ministry._id} className="col-md-4 mx-auto">
                <Link href={`/ministries/${ministry.slug.current}`}>
                    <a>
                        <Image value={ministry.mainImage} width={800} height={600} style={{width: '100%'}} />
                        <p className="text-center mt-2 font-weight-bold">{ministry.title}</p>
                    </a>
                </Link>
            </div> ) }
        </div>
    </div>
}
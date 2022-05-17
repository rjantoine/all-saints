import Image from './image'
import PageSection from '../pageSection'
import Link from 'next/link'

export default function MinistriesSection({ministries}) {
    return <div className="row justify-content-center">{ ministries.map(ministry => <div key={ministry._id} className="col-md-4">
        <Link href={`/ministries/${ministry.slug.current}`}>
            <a>
                <Image value={ministry.mainImage} width={800} height={600} style={{width: '100%'}} />
                <p className="text-center mt-2 mb-4 font-weight-bold">{ministry.title}</p>
            </a>
        </Link>
    </div> ) }</div>
}
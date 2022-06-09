import Head from 'next/head'
import Layout from 'components/layout'
import {fetchGlobalProps} from '../components/layout'
import client from "../client"

export default function Custom404({...globalProps}) {
    return <Layout title="404" {...globalProps}>
        <Head>
            <meta name="robots" content="noindex" />
        </Head>
        <div className="row mb-5" style={{marginTop: 200}}>
            <div className="container">
                <div className="col">
                    <div className="section_title_container text-center">
                        <div className="section_title">404 - Page Not Found</div>
                        <div className="section_subtitle"></div>
                    </div>
                    <p className="text-center mb-5">I'm sorry, the page you are looking for is unavailable. Please choose an item from the menu or return to the homepage.</p>
                    <div className="button mx-auto"><a href="/" target="_self">Go to Homepage</a></div>
                </div>
            </div>
        </div>
    </Layout>
}

export async function getStaticProps(ctx) {
    const globalProps = await fetchGlobalProps(client)

    return {
        props: {
            ...globalProps
        }
    }
}
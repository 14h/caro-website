import Container from '../../components/container'
import Layout from '../../components/layout'
import Head from 'next/head'
import Header from "../../components/header";

export default function About() {

    return (
        <>
            <Layout>
                <Head>
                </Head>
                <Container>
                    <Header selected_nav_elem='about'/>
                    <div className='mt-32'>
                        ABOUT PAGE
                    </div>
                </Container>
            </Layout>
        </>
    )
}

import {useRouter} from 'next/router';
import Head from 'next/head';
import ErrorPage from 'next/error';

import {useState} from "react";

import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import Carousel, {Dots} from '@brainhubeu/react-carousel';

import Container from '../../components/container';
import Header from '../../components/header';
import Layout from '../../components/layout';
import {get_all_projects, get_project} from '../../lib/api';

//https://www.framer.com/api/motion/

export default function Post({project}) {
    const router = useRouter();
    const [value, setValue] = useState(0);

    if (!router.isFallback && !project) {
        return <ErrorPage statusCode={404}/>
    }

    if (router.isFallback) {
        return (
            <Layout>
                <Container>
                    <Header/>
                    <div
                        className='text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mt-20 text-center md:text-left'>Loading…
                    </div>
                </Container>
            </Layout>
        )
    }

    return (
        <Layout>
            <Container>
                <Header
                    selected_nav_elem='projects'
                />
                <article>
                    <Head>
                        <title>
                            {project.name}
                        </title>
                        {/*<meta property="og:image" content={project.coverImage.url}/>*/}
                    </Head>
                    <div className="mt-48 container-l mx-auto">
                        <h1 className="text-6xl md:text-6xl lg:text-7xl font-bold md:leading-none mt-48 mb-12 text-center">
                            {project.name}
                        </h1>
                        <div className='lg:flex'>
                            <div className='m-8 lg:w-3/12'>
                                {documentToReactComponents(project.sideText)}
                            </div>
                            <div className='m-8 lg:w-9/12'>
                                <Carousel
                                    value={value}
                                    onChange={setValue}
                                    infinite={true}
                                >
                                    {
                                        project.images?.map(
                                            (img) => (
                                                <img
                                                    key={img?.fields?.file?.url}
                                                    src={img?.fields?.file?.url ?? ''}
                                                    style={{
                                                        maxWidth: '100%',
                                                    }}
                                                />
                                            )
                                        )
                                    }
                                </Carousel>
                                <Carousel
                                    value={value}
                                    onChange={setValue}
                                    addArrowClickHandler={true}
                                    slidesPerPage={5}
                                    infinite={true}
                                    arrowLeft={<a href='#'>⟵</a>}
                                    arrowRight={<a href='#'>⟶</a>}
                                >
                                    {
                                        project.images?.map(
                                            (img, key) => (
                                                <img
                                                    key={img?.fields?.file?.url}
                                                    src={img?.fields?.file?.url ?? ''}
                                                    onClick={() => setValue(key)}
                                                    style={{
                                                        maxWidth: '100%',
                                                        padding: '10px',
                                                    }}
                                                />
                                            )
                                        )
                                    }
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </article>
            </Container>
        </Layout>
    )
}

export async function getStaticProps({params}) {

    const project = await get_project(params.slug)
    return {
        props: {
            project: project ?? null,
        },
    }
}

export async function getStaticPaths() {
    const projects = await get_all_projects()

    return {
        paths: projects?.map(({slug}) => `/projects/${slug}`) ?? [],
        fallback: true,
    }
}

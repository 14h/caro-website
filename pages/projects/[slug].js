import {useRouter} from 'next/router';
import Head from 'next/head';
import ErrorPage from 'next/error';
import Container from '../../components/container';
import Header from '../../components/header';
import Layout from '../../components/layout';
import {get_all_projects, get_project} from '../../lib/api';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import {useState} from "react";

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
                    <div className='text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left'>Loading…</div>
                </Container>
            </Layout>
        )
    }
    console.log(project)

    return (
        <Layout>
            <Container>
                <Header
                    selected_nav_elem='projects'
                />
                    <div className='mt-32'>
                        <article>
                            <Head>
                                <title>
                                    {project.name}
                                </title>
                                {/*<meta property="og:image" content={project.coverImage.url}/>*/}
                            </Head>
                            <div className="mt-20 max-w-6xl mx-auto">
                                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold md:leading-none mb-12 text-center">
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
                                        >
                                            {
                                                project.images?.map(
                                                    (img, key) => (
                                                        <img
                                                            key={key}
                                                            src={img?.fields?.file?.url ?? ''}
                                                        />
                                                    )
                                                )
                                            }
                                        </Carousel>
                                        <Dots
                                            value={value}
                                            onChange={setValue}
                                            number={4}
                                            thumbnails={
                                                project.images.map(
                                                    (img, key) => (
                                                        <img
                                                            key={key}
                                                            className="h-32"
                                                            src={img?.fields?.file?.url ?? ''}
                                                        />
                                                    )
                                                )
                                            }
                                        />
                                        {/*<img*/}
                                        {/*    src={project.images[0].fields.file.url}*/}
                                        {/*    alt={project.name}*/}
                                        {/*/>*/}
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
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

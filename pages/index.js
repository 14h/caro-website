import Container from '../components/container'
import Layout from '../components/layout'
import {get_all_projects} from '../lib/api'
import Head from 'next/head'
import Link from "next/link";
import {useState} from "react";

export default function Index({projects}) {
    const [visible, set_visible] = useState(false);

    setTimeout(() => {
        set_visible(true);
    }, 3000);

    console.log(projects);

    return (
        <div className='overflow-y-hidden'>
            <Layout>
                <Head>
                </Head>
                <Container>
                    <div
                        className='h-screen flex flex-col items-center justify-around py-16 bg-black'
                    >
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='font-mushroom text-6xl lg:text-8xl text-center text-white'>
                                CAROLIN HAUKE
                            </h1>
                            <span className='text-white text-2xl font-mushroom'>
                                Cinematography
                            </span>
                        </div>
                        <div className='flex flex-row justify-center items-center'>
                            <Link href='/projects'>
                                <div className={`text-white font-mushroom p-4 cursor-pointer border-b-2 border-solid border-transparent hover:border-gray-300`}>
                                    WORK
                                </div>
                            </Link>
                            <Link href='/work-in-progress'>
                                <div className={`text-white font-mushroom p-4 cursor-pointer border-b-2 border-solid border-transparent hover:border-gray-300`}>
                                    WORK IN PROGRESS
                                </div>
                            </Link>
                            <Link href='/about'>
                                <div className={`text-white font-mushroom p-4 cursor-pointer border-b-2 border-solid border-transparent hover:border-gray-300 `}>
                                    ABOUT
                                </div>
                            </Link>
                        </div>
                    </div>
                </Container>
            </Layout>
        </div>
    )
}

export async function getStaticProps() {
    const projects = await get_all_projects()
    return {
        props: {
            projects
        },
    }
}

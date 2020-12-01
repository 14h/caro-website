import Container from '../../components/container'
import Layout from '../../components/layout'
import Head from 'next/head'
import Header from "../../components/header";
import {get_all_projects} from "../../lib/api";
import React, {useState} from "react";


export default function Projects({projects}) {
    console.log(projects);

    return (
        <>
            <Layout>
                <Head>
                </Head>
                <Container>
                    <Header
                        selected_nav_elem='projects'
                    />
                    <h1 className="mt-16 text-6xl md:text-6xl lg:text-7xl font-bold md:leading-none mb-12 text-center font-mushroom">
                        WORK
                    </h1>
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto px-20 relative`}>

                        {
                            projects.map(
                                (project, index) => (
                                    <a
                                        key={`project_${index}`}
                                        href={`/projects/${project.slug}`}
                                    >
                                        <div
                                            className='relative overflow-hidden'
                                        >
                                            <img
                                                className='h-auto w-full object-cover'
                                                src={project?.coverImage?.fields?.file?.url ?? ''}
                                                alt={project.slug}
                                            />
                                            <div
                                                className='absolute top-0 right-0 left-0 bottom-0 z-10 bg-black bg-opacity-50 hover:bg-opacity-50 text-white flex flex-col justify-center items-center text-3xl transition opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out'
                                            >
                                                <div className='relative'>
                                                    <div>{project.name}</div>
                                                    <div className='absolute bottom-0 left-4 right-4 w-100 border border-white'/>
                                                </div>
                                                <div
                                                    className='text-base text-gray-500 mt-4'
                                                >
                                                    {project.category}
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                )
                            )
                        }
                    </div>
                </Container>
            </Layout>
        </>
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

import Link from 'next/link'
import {motion} from "framer-motion";

export default function Header({selected_nav_elem}) {


    return (
        <motion.div
            layoutId='bg-black'
            className='bg-black text-white fixed top-0 left-0 right-0 z-50  pt-2'
        >
            <div
                className="container-l mx-auto lg:flex flex-row justify-between items-center"
            >
                <Link href="/">
                    <div className='flex flex-row justify-center items-center m-4 lg:ml-16'>
                        <a className="hover:underline text-center">
                            <motion.h1
                                className='font-mushroom text-2xl lg:text-3xl text-center text-white'
                                layoutId='carolin-hauke'
                            >
                                CAROLIN HAUKE
                            </motion.h1>
                            <motion.span
                                className='text-white text-md lg:text-xl font-mushroom'
                                layoutId='cinematography'
                            >
                                CINEMATOGRAPHY
                            </motion.span>
                        </a>
                    </div>
                </Link>

                <div className='flex flex-row justify-center items-center lg:mr-20 mb-4 lg:mb-0'>
                    <Link href='/projects'>
                        <div className={`font-mushroom p-4 cursor-pointer border-b-2 border-solid ${selected_nav_elem === 'projects' ? 'border-gray-400' : 'border-transparent'} hover:border-gray-300`}>
                            WORK
                        </div>
                    </Link>
                    {/*<Link href='/work-in-progress'>*/}
                    {/*    <div className={`font-mushroom p-4 cursor-pointer border-b-2 border-solid ${selected_nav_elem === 'work_in_progress' ? 'border-gray-400' : 'border-transparent'} hover:border-gray-300`}>*/}
                    {/*        WORK IN PROGRESS*/}
                    {/*    </div>*/}
                    {/*</Link>*/}
                    <Link href='/about'>
                        <div className={`font-mushroom p-4 cursor-pointer border-b-2 border-solid ${selected_nav_elem === 'about' ? 'border-gray-400' : 'border-transparent'} hover:border-gray-300`}>
                            ABOUT
                        </div>
                    </Link>
                </div>

            </div>
        </motion.div>
    )
}

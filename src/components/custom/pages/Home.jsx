import React from 'react'
import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <section className='h-screen flex justify-center items-center overflow-hidden'>
            <div className="relative h-screen w-full">
                <div className="absolute -z-10 dark:mix-blend-hard-light bg-pink-500/75 top-40 left-1/2 w-72 h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96  rounded-full filter blur-xl animate-blob"></div>
                <div className="absolute -z-10 dark:mix-blend-hard-light bg-blue-500/25 top-60 left-1/3 w-72 h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96  rounded-full filter blur-xl animate-blob animate-delay-2000"></div>
                <div className="absolute -z-10 dark:mix-blend-hard-light bg-purple-500/50 top-40 left-1/4 w-72 h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96  rounded-full filter blur-xl animate-blob animate-delay-4000"></div>
                <div className="flex flex-col gap-4 px-4 h-screen justify-center items-center w-full">
                    <h1 className='text-6xl xl:text-8xl 2xl:text-9xl font-caveat font-heading-medium'>Shared <span className='text-yellow-400'>ToDo</span></h1>
                    <p className='text-center font-edu xl:text-lg 2xl:text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, neque?</p>
                    <Link to={'dashboard'}>
                        <Button className="mt-4 2xl:text-xl">Go to dashboard <span><MoveRight /></span></Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Home
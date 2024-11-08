import React from 'react'

function Home() {
    return (
        <section className='h-screen flex justify-center items-center'>
            <div className="relative h-screen w-full">
                <div className="absolute mix-blend-overlay top-40 left-1/2 w-72 h-72 bg-white/75 rounded-full filter blur-xl animate-blob"></div>
                <div className="absolute mix-blend-overlay top-60 left-1/3 w-72 h-72 bg-white/25 rounded-full filter blur-xl animate-blob animate-delay-2000"></div>
                <div className="absolute mix-blend-overlay top-40 left-1/4 w-72 h-72 bg-white/50 rounded-full filter blur-xl animate-blob animate-delay-4000"></div>
                <div className="flex h-screen justify-center items-center w-full">
                    <h1 className='text-6xl font-caveat font-heading-medium'>Shared <span className='text-yellow-400'>ToDo</span></h1>
                </div>
            </div>
        </section>
    )
}

export default Home
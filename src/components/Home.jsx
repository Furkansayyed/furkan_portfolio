import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-scroll';

export default function Home() {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>

            {/* container */}

            <div className='max-w-[1000px] mx-auto px-8 md:px-28 lg:px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Hi, my name is </p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[rgb(204,214,246)]'>Furkan Sayyed</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a &nbsp;
                    <Typewriter
                        words={['Full Stack MERN Developer.', 'django developer.', 'Programmer.', 'Ethical Hacker.']}
                        loop={true}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>Passionate about technology and cybersecurity, I am a versatile professional with a keen interest in Python and JavaScript web development.</p>

                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work
                        <span className='group-hover:rotate-90 duration-300'>
                            <Link to="work" smooth={true} duration={500}> <HiArrowNarrowRight className='ml-3' /> </Link>
                        </span>

                    </button>
                </div>
            </div>
        </div >
    )
}

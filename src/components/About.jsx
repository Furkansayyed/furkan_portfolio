import React from 'react'

export default function About() {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300 '>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4 '>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 '>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I’m Furkan Sayyed, nice to meet you.Please take a look around!</p>
                    </div>
                    <div>
                        <p>
                            Passionate about technology and cybersecurity, I am a versatile professional with a keen interest in Python and JavaScript web development. With a creative mindset and a knack for problem-solving, I thrive on building innovative web applications and exploring the fascinating world of cybersecurity.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

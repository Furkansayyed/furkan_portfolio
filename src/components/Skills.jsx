import React from 'react'
import SkillCard from './SkillCard'
import data from '../assets/data/skillsData'

export default function Skills() {
    const frontendTech = data.filter(
        (item) => item.category === "Frontend"
    );

    const backendTech = data.filter(
        (item) => item.category === "Backend"
    );

    const dataTech = data.filter(
        (item) => item.category === "Database"
    );

    const othersTech = data.filter(
        (item) => item.category === "Others"
    );

    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300 overflow-auto sm:overflow-hidden'>
            <div className='sm:text-center pt-0 ml-2'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                <p className='py-4'> {'//'} These are the technologies I've worked with</p>
            </div>

            <div className="lg:flex space-y-5 sm:space-y-3 lg:space-y-0 md:flex-wrap sm:justify-center sm:items-center sm:gap-10 sm:w-[1250px] lg:mx-auto lg:px-0 md:px-40">
                <SkillCard title="Frontend" technologies={frontendTech} />
                <SkillCard title="Backend" technologies={backendTech} />
                <SkillCard title="Database" technologies={dataTech} />
                <SkillCard title="Others" technologies={othersTech} />
            </div>
        </div>
    )
}

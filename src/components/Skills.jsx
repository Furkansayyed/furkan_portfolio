import React from 'react'
import SkillCard from './SkillCard'

export default function Skills() {
    const frontendTech = ['React', 'HTML', 'CSS', 'JavaScript', 'Tailwind', 'Bootstrap', 'Jquery'];
    const backendTech = ['Node.js', 'Express', 'MongoDB', 'REST API'];
    const othersTech = ['Git', 'Webpack', 'Babel', 'NPM'];
    return (
        <div name='skills' className='w-full sm:h-screen bg-[#0a192f] text-gray-300 overflow-auto sm:overflow-hidden'>
            <div className='text-center pt-2'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                <p className='py-4'> {'//'} These are the technologies I've worked with</p>
            </div>

            <div className="sm:flex space-y-3 sm:space-y-0 sm:flex-wrap sm:justify-center sm:items-center sm:gap-10 sm:w-[1250px] sm:mx-auto">
                <SkillCard title="Frontend" technologies={frontendTech} />
                <SkillCard title="Backend" technologies={backendTech} />
                <SkillCard title="Others" technologies={othersTech} />
            </div>
        </div>
    )
}

import React from 'react'
import SkillCard from './SkillCard'

export default function Skills() {
    const frontendTech = ['React', 'HTML', 'CSS', 'JavaScript', 'Tailwind', 'Bootstrap', 'Jquery'];
    const backendTech = ['Node.js', 'Express', 'MongoDB', 'REST API'];
    const othersTech = ['Git', 'Webpack', 'Babel', 'NPM'];
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='text-center pt-5'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                <p className='py-4'>// These are the technologies I've worked with</p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-10">
                <SkillCard title="Frontend" technologies={frontendTech} />
                <SkillCard title="Backend" technologies={backendTech} />
                <SkillCard title="Others" technologies={othersTech} />
            </div>
        </div>
    )
}

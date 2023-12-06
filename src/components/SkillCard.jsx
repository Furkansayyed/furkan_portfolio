import React from 'react'

export default function SkillCard({ title, technologies }) {
    return (
        <div className="shadow-md shadow-[#040c16] sm:hover:scale-110  duration-500  sm:rounded-sm border-pink-400 border-2 mx-3 sm:w-[450px] sm:h-[250px] sm:mx-0 rounded">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <div className="flex flex-wrap sm:-mx-2 justify-center">
                    {technologies.map((tech, index) => (
                        <div key={index} className="p-2">
                            <div className="border-white border flex rounded-md p-2 gap-2 justify-center items-center">
                            <img src={tech.techIcon} alt="" style={{ width: '30px' }} />
                                {tech.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

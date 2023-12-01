import React from 'react'

export default function SkillCard({ title, technologies }) {
    return (
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 w-[550px]">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <div className="flex flex-wrap -mx-2">
                    {technologies.map((tech, index) => (
                        <div key={index} className="p-2">
                            <div className="bg-gray-200 rounded-md p-2">{tech}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

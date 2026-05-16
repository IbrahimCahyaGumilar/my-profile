import React from 'react'

import Subtitle from '../elements/Subtitle';
import { FaHtml5, FaCss3, FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from 'react-icons/ri';
import { GrMysql } from 'react-icons/gr';

const Tools = () => {
    const tools = [
        { name: "HTML", icon: <FaHtml5 size={25} color="#e34c26" /> },
        { name: "CSS", icon: <FaCss3 size={25} color="#1572b6" /> },
        { name: "JavaScript", icon: <FaJs size={25} color="#f7df1e" /> },
        { name: "Tailwind CSS", icon: <RiTailwindCssFill size={25} color="#06b6d4" /> },
        { name: "MySQL", icon: <GrMysql size={25} color="#f7df1e" /> },

    ];
    return (
        <div
            id="skills"
            className="w-full min-h-screen"
            data-aos="fade-up"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col gap-12">
                <Subtitle>
                    Tools
                </Subtitle>

                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
                    {tools.map((tool, i) => (
                        <div key={tool.name}
                            className='flex justify-center'
                            data-aos="fade-up"
                            data-aos-delay={100 + i * 200}>

                            <div className='shadow-md shadow-sky-400 flex items-center py-4 px-6 w-full max-w-[200px] rounded-lg bg-[#1a1a1a]'>
                                {tool.icon}
                                <p className="ml-2 font-semibold">{tool.name}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Grid Skill */}
                {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-8 px-12 sm:px-0">
                    {tools.map((tool, i) => (
                        <div
                            key={tool.name}
                            className="shadow-md shadow-sky-400 flex flex-col items-center py-5 rounded-lg bg-[#1a1a1a]"
                            data-aos="fade-up"
                            data-aos-delay={100 + i * 200}
                        >
                            <img
                                src={tool.img}
                                alt={tool.name}
                                className="w-20 hover:scale-105 duration-200"
                            />
                            <p className="mt-4 font-semibold">{tool.name}</p>
                        </div>
                    ))}
                </div> */}
            </div>
        </div>
    )
}

export default Tools
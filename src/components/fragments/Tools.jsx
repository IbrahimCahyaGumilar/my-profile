import React from 'react'

import Subtitle from '../elements/Subtitle';
import { FaHtml5, FaCss3, FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from 'react-icons/ri';
import { GrMysql } from 'react-icons/gr';
import { SiLaragon, SiPostman, SiGithub, SiFigma, SiGooglegemini, SiOpenai } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const Tools = () => {
    const tools = [
        { name: "HTML", icon: <FaHtml5 size={25} color="#007acc" /> },
        { name: "CSS", icon: <FaCss3 size={25} color="#007acc" /> },
        { name: "JavaScript", icon: <FaJs size={25} color="#007acc" /> },
        { name: "Tailwind CSS", icon: <RiTailwindCssFill size={25} color="#007acc" /> },
        { name: "MySQL", icon: <GrMysql size={25} color="#007acc" /> },
        { name: "Laragon", icon: <SiLaragon size={25} color="#007acc" /> },
        { name: "Postman", icon: <SiPostman size={25} color="#007acc" /> },
        { name: "VsCode", icon: <VscVscode size={25} color="#007acc" /> },
        { name: "Github", icon: <SiGithub size={25} color="#007acc" /> },
        { name: "Figma", icon: <SiFigma size={25} color="#007acc" /> },
        { name: "Gemini AI", icon: <SiGooglegemini size={25} color="#007acc" /> },
        { name: "ChatGPT", icon: <SiOpenai size={25} color="#007acc" /> },

    ];
    return (
        <div
            id="tools"
            className="container mx-auto px-6 md:px-12 min-h-screen pt-20 flex items-center justify-center"
            data-aos="fade-up"
        >
            <div className="max-w-screen-lg mx-auto">
                <Subtitle>
                    Tools
                </Subtitle>

                <div className='flex flex-wrap justify-center gap-6 max-w-5xl mx-auto'>
                    {tools.map((tool, i) => (
                        <div key={tool.name}
                            className='flex justify-center items-center'
                            data-aos="fade-up"
                            data-aos-delay={100 + i * 200}>

                            <div className='shadow-md shadow-sky-400 flex items-center py-4 px-6 w-[180px] rounded-lg bg-[#1a1a1a]'>
                                {tool.icon}
                                <p className="ml-2 font-semibold">{tool.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Tools
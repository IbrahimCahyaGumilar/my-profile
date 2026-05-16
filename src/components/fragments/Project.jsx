import React from 'react'

import cuttingFashion from "../../assets/images/cutting-fashion.png";
import pontaRamen from "../../assets/images/ponta-ramen.png";
import conwood from "../../assets/images/conwood.png";
import property from "../../assets/images/property.png";

const Project = () => {
    const projects = [
        {
            id: 1,
            title: "Website Company Profile",
            img: cuttingFashion,
            tech: [],
            live: "https://cutting-fashion.vercel.app/",
            repo: "https://github.com/IbrahimCahyaGumilar/fashion-frontend",
        },
        {
            id: 2,
            title: "Website Restoran",
            img: pontaRamen,
            tech: [],
            live: "https://ponta-ramen.netlify.app/",
            repo: "https://github.com/IbrahimCahyaGumilar/ponta-ramen",
        },
        {
            id: 3,
            title: "Conwood",
            img: conwood,
            tech: [],
            live: "https://www.conwood.com/",
            repo: "https://github.com/IbrahimCahyaGumilar/web-school",
        },
        {
            id: 4,
            title: "Website Properti",
            img: property,
            tech: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
            live: "https://hasanahland.com/",
            repo: "https://github.com/IbrahimCahyaGumilar/web-school",
        },
    ];
    return (
        <div
            id="project"
            className="w-full min-h-screen pt-32 md:pt-20"
            data-aos="fade-up"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col gap-12">
                <h1
                    className="text-4xl font-semibold text-sky-400 text-center"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    My Projects
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map(( proj, i ) => (
                        <div
                            key={proj.id}
                            className="shadow-md shadow-sky-400 rounded-lg overflow-hidden bg-[#1a1a1a] duration-700 hover:scale-105"
                            data-aos="fade-up"
                            data-aos-delay={300 + i * 200}
                        >
                            <img
                                src={proj.img}
                                alt={proj.title}
                                className="w-full"
                            />
                            <div className="p-4 flex flex-col items-center">
                                <h2 className="text-xl font-semibold mb-3 text-center">
                                    {proj.title}
                                </h2>
                                <div className="flex justify-center gap-4 flex-wrap">
                                    <a href={proj.live} target="_blank" rel="noopener noreferrer" className="cursor-pointer text-sm font-medium border-2 border-sky-400 text-white hover:bg-sky-400 hover:text-black px-4 py-2 rounded-md transition duration-700">
                                        View Live
                                    </a>
                                    {/* <a href={proj.repo} target="_blank" rel="noopener noreferrer">
                                            <button className="text-sm font-medium border-2 border-sky-400 text-white hover:bg-sky-400 hover:text-black px-4 py-2 rounded-md transition duration-200">
                                                GitHub Repo
                                            </button>
                                        </a> */}
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Project
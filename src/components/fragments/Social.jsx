import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const Social = () => {

    const items = [
        {
            id: 1,
            icon: <HiOutlineMail size={24} />,
            link: "mailto:ibrahimcahya08@gmail.com"
        },
        {
            id: 2,
            icon: <FaGithub size={24} />,
            link: "https://github.com/IbrahimCahyaGumilar"
        }
    ]
    return (
        <div
            id="social"
            className="hidden lg:flex flex-col fixed bottom-0 left-10 z-[70] pointer-events-auto"
        >
            <ul className="flex flex-col gap-8">
                {items.map(({ id, icon, link }) => (
                    <li key={id}>
                        <a
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-white hover:text-sky-400 transition"
                        >
                            {icon}
                        </a>
                    </li>
                ))}


                <div className="flex items-center ml-3 w-[2px] h-14 bg-white"></div>
            </ul>
        </div>
    )
}

export default Social
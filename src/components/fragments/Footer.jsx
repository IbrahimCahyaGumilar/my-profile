import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
    const socialLinks = [
        { id: 1, icon: <HiOutlineMail size={25} />, href: "mailto:ibrahimcahya08@gmail.com" },
        { id: 2, icon: <FaGithub size={25} />, href: "https://github.com/IbrahimCahyaGumilar" }
    ];
    return (
        <footer className="py-6 mt-20 border-t border-slate-900 text-center">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex justify-center gap-6 text-white text-2xl mb-4 lg:hidden">
                    {socialLinks.map((social) => (
                        <a
                            key={social.id}
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-sky-400 transition"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
                <p className="text-sm text-gray-400">
                    &copy; 2025 Ibrahim Cahya Gumilar. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
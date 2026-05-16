import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true, offset: 100 });

        const handleScroll = () => {
            if (window.scrollY > 0 && menuOpen) setMenuOpen(false);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [menuOpen]);

    // Smooth scroll
    useEffect(() => {
        document.documentElement.style.scrollBehavior = "smooth";
        return () => {
            document.documentElement.style.scrollBehavior = "auto";
        };
    }, []);
    return (
        <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md z-[60] shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-3xl font-bold font-logo tracking-wide text-white">
                    Portfolio
                </div>

                <ul className={`font-medium flex flex-col md:flex-row gap-6 md:gap-10 fixed md:static top-1/2 left-0 translate-y-1/2 transition-all duration-500 ease-in-out ${menuOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 bg-slate-800 md:bg-transparent px-8 py-6 md:p-0 shadow-lg md:shadow-none`}>
                    {["Home", "About", "Skills", "Project"].map((item) => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="font-navbar relative text-xl text-white hover:text-sky-400 transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                <button className="relative w-8 h-6 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className={`absolute left-0 w-full h-[2px] bg-white transition-transform duration-300 ${menuOpen ? "top-2.5 rotate-45" : "top-0"}`} />
                    <span className={`absolute left-0 w-full h-[2px] bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : "top-2.5"}`} />
                    <span className={`absolute left-0 w-full h-[2px] bg-white transition-transform duration-300 ${menuOpen ? "top-2.5 -rotate-45" : "bottom-0"}`} />
                </button>
            </div>
        </nav>
    )
}

export default Navbar
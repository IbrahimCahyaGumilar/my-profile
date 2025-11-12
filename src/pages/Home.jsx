import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Assets
import CSS from "../assets/images/portfolio1/css.png";
import CV from "../assets/images/portfolio1/CV_ATS.pdf";
import HTML from "../assets/images/portfolio1/html.png";
import People from "../assets/images/portfolio1/people.png";
import Tailwind from "../assets/images/portfolio1/tailwind.png";
import icReact from "../assets/images/portfolio1/react.png";
import pontaRamen from "../assets/images/portfolio1/ponta-ramen.png";
import property from "../assets/images/portfolio1/property.png";
import conwood from "../assets/images/portfolio1/conwood.png";

import { FaInstagram, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Home = () => {
    const [typedText, setTypedText] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const fullName = "Ibrahim Cahya Gumilar";
    const indexRef = useRef(0);
    const intervalRef = useRef(null);

    // Typing animation & AOS setup
    useEffect(() => {
        AOS.init({ duration: 1000, once: true, offset: 100 });

        intervalRef.current = setInterval(() => {
            const currentIndex = indexRef.current;
            if (currentIndex < fullName.length) {
                setTypedText((prev) => prev + fullName[currentIndex]);
                indexRef.current += 1;
            } else {
                clearInterval(intervalRef.current);
            }
        }, 140);

        const handleScroll = () => {
            if (window.scrollY > 0 && menuOpen) setMenuOpen(false);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            clearInterval(intervalRef.current);
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

    const skills = [
        { name: "HTML", img: HTML },
        { name: "CSS", img: CSS },
        { name: "Tailwind", img: Tailwind },
        { name: "React", img: icReact },
    ];

    const projects = [
        {
            title: "Website Restoran",
            img: pontaRamen,
            tech: [],
            live: "https://ponta-ramen.netlify.app/",
            repo: "https://github.com/IbrahimCahyaGumilar/ponta-ramen",
        },
        {
            title: "Website Properti",
            img: property,
            tech: [],
            live: "https://hasanahland.com/",
            repo: "https://github.com/IbrahimCahyaGumilar/web-school",
        },
        {
            title: "Conwood",
            img: conwood,
            tech: [],
            live: "https://www.conwood.com/",
            repo: "https://github.com/IbrahimCahyaGumilar/web-school",
        },
    ];

    const socialLinks = [
        {
            id: 1,
            icon: <HiOutlineMail size={25} />,
            href: "mailto:ibrahimcahya08@gmail.com",
        },
        {
            id: 2,
            icon: <FaGithub size={25} />,
            href: "https://github.com/IbrahimCahyaGumilar",
        },
        {
            id: 3,
            icon: <FaInstagram size={25} />,
            href: "https://www.instagram.com/ibrahim_cahya08/",
        },
    ];

    return (
        <div className="bg-[#111] text-white">
            {/*  NAVBAR  */}
            <nav className="fixed top-0 left-0 w-full bg-black/95 backdrop-blur-md z-[60] shadow-md">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-3xl font-bold font-logo tracking-wide text-white">
                        Ibrahim
                    </div>

                    {/* Menu Links */}
                    <ul
                        className={`font-medium flex flex-col md:flex-row gap-6 md:gap-10 fixed md:static top-full left-0 translate-y-full md:translate-y-0 transition-all duration-500 ease-in-out ${menuOpen ? "translate-x-0" : "-translate-x-full"
                            } md:translate-x-0 bg-slate-800 md:bg-transparent px-8 py-6 md:p-0 shadow-lg md:shadow-none`}
                    >
                        {["Home", "About", "Skills", "Project"].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    onClick={() => setMenuOpen(false)}
                                    className="font-navbar relative text-xl text-white hover:text-sky-400 transition duration-300 
                  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px]
                  after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Hamburger Button */}
                    <button
                        className="relative w-8 h-6 md:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span
                            className={`absolute left-0 w-full h-[2px] bg-white transition-transform duration-300 ${menuOpen ? "top-2.5 rotate-45" : "top-0"
                                }`}
                        />
                        <span
                            className={`absolute left-0 w-full h-[2px] bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0 top-2.5" : "top-2.5"
                                }`}
                        />
                        <span
                            className={`absolute left-0 w-full h-[2px] bg-white transition-transform duration-300 ${menuOpen ? "top-2.5 -rotate-45" : "bottom-0"
                                }`}
                        />
                    </button>
                </div>
            </nav>

            {/*  HERO  */}
            <section
                id="home"
                className="max-w-7xl mx-auto px-6 min-h-screen flex flex-col md:flex-row items-center md:justify-between pt-24 gap-10"
            >
                {/* kiri */}
                <div className="max-w-lg">
                    <h2 className="text-sky-400 text-lg md:text-xl font-bold">
                        Hi, my name is
                    </h2>
                    <h1 className="text-white text-5xl lg:text-7xl font-bold mt-4 leading-tight">
                        <span className="border-r-2 border-sky-400 pr-1">
                            {typedText}
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl font-bold italic mt-4 mb-6">
                        Front-end Web Developer
                    </p>
                    <a href={CV} target="_blank" rel="noopener noreferrer" className="cursor-pointer border-2 border-sky-400 text-sky-400 px-10 py-2 md:px-12 md:py-3 rounded-lg hover:bg-sky-300 hover:text-black font-bold transition duration-300">
                        View CV
                    </a>
                </div>

                {/* kanan */}
                <div className="relative z-0 flex justify-center items-end">
                    <figure className="relative z-10 max-w-md mx-auto">
                        <img
                            src={People}
                            alt="Coding"
                            className="w-11/12 h-auto drop-shadow-xl"
                        />
                    </figure>

                    {/* Blob */}
                    <svg
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute -bottom-28 left-[45%] -translate-x-1/2 w-full z-0 opacity-90"
                    >
                        <path
                            fill="#38bdf8"  // sky-400
                            d="M55.7,-41.1C58.9,-26.5,39.2,-7.7,26.1,4.1C12.9,15.9,6.5,20.6,0.6,20.3C-5.3,19.9,-10.6,14.6,-24.4,2.4C-38.2,-9.8,-60.4,-28.8,-57.8,-43C-55.1,-57.2,-27.6,-66.7,-0.7,-66.3C26.2,-65.9,52.4,-55.6,55.7,-41.1Z"
                            transform="translate(100 100) scale(1.4)"
                        />
                    </svg>
                </div>
            </section>


            {/* Section About */}
            <section
                id="about"
                className="container mx-auto px-6 min-h-screen pt-24 flex items-center justify-center"
                data-aos="fade-up"
            >
                <div className="lg:w-6/12 w-full text-justify">
                    <div className="relative flex justify-center mb-8">
                        <h2
                            className="text-center text-4xl font-semibold text-sky-400 mb-2 relative after:content-[''] after:absolute after:left-0 after:bottom-[-10px] after:w-1/2 after:h-[3px] after:bg-sky-400"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            About
                        </h2>
                    </div>

                    <p
                        className="text-lg leading-relaxed mb-6"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        Saya Ibrahim Cahya Gumilar berasal dari Sukabumi Jawa Barat adalah seorang fresh graduate S1 Jurusan Teknik Informatika di Universitas Nusa Putra Sukabumi, yang memiliki semangat tinggi untuk mengembangkan karier di dunia kerja. Selama masa studi, saya memiliki pengalaman magang selama 8 bulan di PT Nugraha Kreasi Digital yang bergerak di bidang pengembangan web. Saya ditempatkan sebagai Frontend Web Developer mempelajari cara membuat tampilan web yang responsif dengan menggunakan Tailwind CSS serta mempelajari framework React.js, Laravel dan dapat bekerjasama dengan tim.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        {["Musik", "Gambar", "Menonton", "Game"].map((hobby, i) => (
                            <div
                                key={hobby}
                                className="cursor-default flex items-center gap-2 px-6 py-2 border-2 border-sky-400 text-sky-400 rounded-full font-bold"
                                data-aos="fade-up"
                                data-aos-delay={700 + i * 200}
                            >
                                <span>{hobby}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* <section
                id="about"
                className="max-w-7xl mx-auto px-6 min-h-screen pt-24 flex flex-col-reverse md:flex-row items-center justify-between gap-10"
                data-aos="fade-up"
            >
                <figure
                    className="md:w-1/2 w-full flex justify-center"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <img
                        src={People}
                        alt="People"
                        className="w-full max-w-md h-auto object-contain"
                    />
                </figure>

                <div className="md:w-6/12 w-full text-justify">
                    <h2
                        className="text-4xl font-semibold text-sky-400 mb-8"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        About
                    </h2>
                    <p
                        className="text-lg leading-relaxed mb-6"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        Saya Ibrahim Cahya Gumilar berasal dari Sukabumi Jawa Barat adalah seorang fresh graduate S1 Jurusan Teknik Informatika di Universitas Nusa Putra Sukabumi, yang memiliki semangat tinggi untuk mengembangkan karier di dunia kerja. Selama masa studi, saya memiliki pengalaman magang selama 8 bulan di PT Nugraha Kreasi Digital yang bergerak di bidang pengembangan web. Saya ditempatkan sebagai Frontend Web Developer mempelajari cara membuat tampilan web yang responsif dengan menggunakan Tailwind CSS serta mempelajari framework React.js, Laravel dan dapat bekerjasama dengan tim.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        {["Music", "Game"].map((hobby, i) => (
                            <div
                                key={hobby}
                                className="cursor-default flex items-center gap-2 px-6 py-2 border-2 border-sky-400 text-sky-400 rounded-full font-bold"
                                data-aos="fade-up"
                                data-aos-delay={700 + i * 200}
                            >
                                <span>{hobby}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/*  SOCIAL (Desktop)  */}
            <section
                id="social"
                className="hidden lg:flex flex-col fixed top-[70%] left-10 z-[70] pointer-events-auto"
            >
                <ul className="flex flex-col gap-8">
                    {socialLinks.map(({ id, icon, href }) => (
                        <li key={id}>
                            <a
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                className="text-white hover:text-sky-400 transition"
                            >
                                {icon}
                            </a>
                        </li>
                    ))}
                    <div className="flex items-center ml-3 w-[2px] h-[10rem] bg-white"></div>
                </ul>
            </section>

            {/*  SKILLS  */}
            <section
                id="skills"
                className="w-full min-h-screen pt-32 md:pt-20"
                data-aos="fade-up"
            >
                <div className="max-w-screen-lg mx-auto p-4 flex flex-col gap-12">
                    <div className="relative flex justify-center mb-8">
                        <h2
                            className="text-center text-4xl font-semibold text-sky-400 mb-2 relative after:content-[''] after:absolute after:left-0 after:bottom-[-10px] after:w-1/2 after:h-[3px] after:bg-sky-400"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            Skills
                        </h2>
                    </div>

                    {/* Grid Skill */}
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-8 px-12 sm:px-0">
                        {skills.map((skill, i) => (
                            <div
                                key={skill.name}
                                className="shadow-md shadow-sky-400 flex flex-col items-center py-5 rounded-lg bg-[#1a1a1a]"
                                data-aos="fade-up"
                                data-aos-delay={100 + i * 200}
                            >
                                <img
                                    src={skill.img}
                                    alt={skill.name}
                                    className="w-20 hover:scale-105 duration-200"
                                />
                                <p className="mt-4 font-semibold">{skill.name.toUpperCase()}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ===== PROJECTS ===== */}
            <section
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
                        {projects.map((proj, i) => (
                            <div
                                key={proj.title}
                                className="shadow-md shadow-sky-400 rounded-lg overflow-hidden bg-[#1a1a1a]"
                                data-aos="fade-up"
                                data-aos-delay={300 + i * 200}
                            >
                                <img
                                    src={proj.img}
                                    alt={proj.title}
                                    className="duration-200 hover:scale-105 w-full"
                                />
                                <div className="p-4 flex flex-col items-center">
                                    <h2 className="text-xl font-semibold mb-3 text-center">
                                        {proj.title}
                                    </h2>
                                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                                        {proj.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="bg-sky-400 text-black text-sm font-medium px-3 py-1 rounded-full"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex justify-center gap-4 flex-wrap">
                                        <a href={proj.live} target="_blank" rel="noopener noreferrer" className="cursor-pointer text-sm font-medium border-2 border-sky-400 text-white hover:bg-sky-400 hover:text-black px-4 py-2 rounded-md transition duration-200">
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
            </section>

            {/* ===== FOOTER ===== */}
            <footer className="py-6 mt-32 border-t border-slate-900 text-center">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="flex justify-center gap-6 text-white text-2xl mb-4 lg:hidden">
                        {socialLinks.map(({ id, icon, href }) => (
                            <a
                                key={id}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-sky-400 transition"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400">
                        &copy; 2025 Ibrahim Cahya Gumilar. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Home;

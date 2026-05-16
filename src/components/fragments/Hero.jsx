import React from 'react'
import CV from "../../assets/images/CV_ATS.pdf";
import People from "../../assets/images/people.png";

const Hero = () => {
    return (
        <section id="home" className="max-w-7xl mx-auto px-6 min-h-screen flex flex-col md:flex-row items-center md:justify-between pt-24 gap-10">
            <div className="max-w-lg">
                <h2 className="text-sky-400 text-lg md:text-xl font-bold"
                    data-aos="fade-up"
                    data-aos-delay="500">Hi, my name is</h2>
                <h1 className="text-white text-5xl lg:text-7xl font-bold mt-4 leading-tight"
                    data-aos="fade-up"
                    data-aos-delay="600">
                    <span className="">
                        Ibrahim Cahya Gumilar
                    </span>
                </h1>
                <p className="text-lg md:text-xl font-bold italic mt-4 mb-6"
                    data-aos="fade-up"
                    data-aos-delay="700">Front-end Web Developer</p>

                <a href={CV} target="_blank" rel="noopener noreferrer" className="inline-block cursor-pointer border-2 border-sky-400 text-sky-400 px-10 py-2 md:px-12 md:py-3 rounded-lg hover:bg-sky-300 duration-700 hover:text-black font-bold"
                    data-aos="fade-up"
                    data-aos-delay="800">
                    View CV
                </a>
            </div>

            <div className="relative z-0 flex justify-center items-end"
                data-aos="fade-up"
                data-aos-delay="900">
                <figure className="relative z-10 max-w-md mx-auto">
                    <img src={People} alt="Coding" className="w-11/12 h-auto drop-shadow-xl" />
                </figure>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-28 left-[45%] -translate-x-1/2 w-full z-0 opacity-90">
                    <path fill="#38bdf8" d="M55.7,-41.1C58.9,-26.5,39.2,-7.7,26.1,4.1C12.9,15.9,6.5,20.6,0.6,20.3C-5.3,19.9,-10.6,14.6,-24.4,2.4C-38.2,-9.8,-60.4,-28.8,-57.8,-43C-55.1,-57.2,-27.6,-66.7,-0.7,-66.3C26.2,-65.9,52.4,-55.6,55.7,-41.1Z" transform="translate(100 100) scale(1.4)" />
                </svg>
            </div>
        </section>
    )
}

export default Hero
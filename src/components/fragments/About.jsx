import React from 'react'
import Subtitle from '../elements/Subtitle'

const About = () => {
    return (
        <div
            id="about"
            className="container mx-auto px-6 md:px-12 min-h-screen pt-24 flex items-center justify-center"
            data-aos="fade-up"
        >
            <div className="lg:w-6/12 w-full text-justify">
                <Subtitle>
                    About
                </Subtitle>

                <p
                    className="text-lg leading-relaxed mb-6"
                    data-aos="fade-up"
                    data-aos-delay="500"
                >
                    Saya adalah Fresh Graduate Teknik Informatika yang berfokus pada pengembangan Frontend Web. Memiliki pengalaman magang sebagai Frontend Developer selama 8 bulan dalam membangun tampilan web responsif menggunakan React.js dan Tailwind CSS serta berkolaborasi dalam tim pengembangan.

                    Saya memiliki minat besar pada pengembangan antarmuka yang modern, bersih, dan mudah digunakan, serta terus mengembangkan kemampuan melalui project mandiri dan pembelajaran teknologi terbaru.

                    Saat ini saya terbuka untuk kesempatan sebagai Frontend Developer dan siap berkembang bersama tim profesional.
                </p>
            </div>
        </div>
    )
}

export default About
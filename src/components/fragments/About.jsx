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
        </div>
    )
}

export default About
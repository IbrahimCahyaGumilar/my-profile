import React from 'react'

const Subtitle = (props) => {
    const { children } = props;
    return (
        <div className="relative flex justify-center mb-16 lg:mb-20">
            <h2
                className="text-center text-4xl font-semibold text-sky-400 
                relative after:content-[''] after:absolute after:left-0 after:bottom-[-10px] after:w-1/2 after:h-[3px] after:bg-sky-400"
                data-aos="fade-up"
                data-aos-delay="300"
            >
                {children}
            </h2>
        </div>
    )
}

export default Subtitle
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SpaceBackground from "../components/SpaceBackground";

import Contact from "../components/fragments/Contact";
import Navbar from "../components/fragments/Navbar";
import Hero from "../components/fragments/Hero";
import About from "../components/fragments/About";
import Social from "../components/fragments/Social";
import Project from "../components/fragments/Project";
import Footer from "../components/fragments/Footer";
import Tools from "../components/fragments/Tools";

const Home = () => {
    return (
        <div className="relative w-full text-white overflow-hidden">
            <SpaceBackground />
            {/*  NAVBAR  */}
            <Navbar />

            {/* HERO */}
            <Hero />


            {/* Section About */}
            <About />

            {/*  SOCIAL (Desktop)  */}
            <Social />

            {/*  Tools  */}
            <Tools />


            {/* Projects */}
            <Project />

            {/* Contact */}
            <Contact />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;

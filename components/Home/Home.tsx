"use client";
import React from "react";
import { useEffect } from "react";
import Hero from "./Hero/Hero";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Footer from "./Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {

    useEffect(() => {
      const initAOS = async() => {
        await import('aos');

        AOS.init(
          {
            duration: 1000,
            easing: 'ease',
            once: true,
            anchorPlacement: "top-bottom",
          }
        )
      };

      initAOS();
    }, [])

    return (
      <div className="bg-gradient-to-b from-[#0d0d1f] to-[#5a213e] min-h-screen overflow-hidden">
        <section id="home">
          <Hero />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Footer />
        </section>
      </div>
    );
}

export default Home;
"use client";
import React from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

const Home = () => {
    return (
      <div className="bg-gradient-to-b from-[#0d0d1f] to-[#5a213e] min-h-screen overflow-hidden">
        <Hero />
        <Resume />
        <Projects />
        <Skills />
      </div>
    );
}

export default Home;
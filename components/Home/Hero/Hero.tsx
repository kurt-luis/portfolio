'use client';
import React from 'react'
import Image from 'next/image';
import TypeWriter from 'typewriter-effect';
import { BsArrowRight } from 'react-icons/bs';
import ParticlesHero from './ParticleBackground';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-[#f8f6f7] overflow-hidden flex-col">
        <ParticlesHero />
        <div className="relative z-10 flex flex-col items-center">
            <Image
                src="/images/pic1.jpg"
                alt="Hero Image"
                width={150}
                height={150}
                className="rounded-full border-8 border-[#5a213e]/50"
            />

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6 text-center font-bold tracking-wide">
                Undergraduate engineer building<br /> <span className="text-[#d4b886]">high-performance systems</span> <br /> 
                and <span className="text-[#d4b886]">intelligent web apps.</span> 
            </h1>

            <h2 className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center">
                Hi! I'm Kurt - An aspiring <span className="text-[#d4b886] font-bold">
                    <TypeWriter options={{
                        strings: [
                            "AI Engineer.",
                            "Machine Learning Researcher.",
                            "Full-Stack Developer."
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 75,
                        deleteSpeed: 50,
                        wrapperClassName: "pl-2",
                        }} 
                    />
                </span>
            </h2>

            <button className="mt-6 px-10 py-4 bg-[#c1a36e] hover:bg-[#d4b886] transition-all duration-300
            cursor-pointer rounded-full text-lg font-medium">
                <span>See my work</span>
                <BsArrowRight className="w-5 h-5 ml-2 inline-block" />
            </button>
        </div>
    </div>
  )
}

export default Hero;
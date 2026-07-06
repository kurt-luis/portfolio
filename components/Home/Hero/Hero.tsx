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
                src="/images/heropic.jpg"
                alt="Hero Image"
                width={150}
                height={150}
                className="rounded-full border-8 border-[#d4b886]/80"
                data-aos="fade-up"
                loading="eager"
            />

            <h1 data-aos="fade-up" data-aos-delay="1000" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6 text-center font-bold tracking-wide">
                Undergraduate engineer building<br /> <span className="text-[#d4b886]">high-performance systems</span> <br /> 
                and <span className="text-[#d4b886]">intelligent web apps.</span> 
            </h1>

            <h2 data-aos="fade-up" data-aos-delay="1200" className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                <span>Hi! I'm Kurt - An aspiring</span>
                
                <span className="text-[#d4b886] font-bold min-h-[20px] sm:min-h-[32px]">
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
                        }} 
                    />
                </span>
            </h2>
        </div>
    </div>
  )
}

export default Hero;
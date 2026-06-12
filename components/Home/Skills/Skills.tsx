"use client";
import React from 'react';
import { 
    SiCplusplus, 
    SiNextdotjs, 
    SiPython, 
    SiReact, 
    SiTailwindcss, 
    SiTypescript,
} from 'react-icons/si';
import Tilt from "react-parallax-tilt";

const skills = [
    { name: 'Python', icon: <SiPython />, level: 'Advanced', colorClass: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20' },
    { name: 'C++', icon: <SiCplusplus />, level: 'Advanced', colorClass: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20' },
    { name: 'TypeScript', icon: <SiTypescript />, level: 'Advanced', colorClass: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20' },
    { name: 'React', icon: <SiReact />, level: 'Proficient', colorClass: 'text-[#d4b886] bg-[#d4b886]/10 border-[#d4b886]/20' },
    { name: 'Next.js', icon: <SiNextdotjs />, level: 'Proficient', colorClass: 'text-[#d4b886] bg-[#d4b886]/10 border-[#d4b886]/20' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 'Proficient', colorClass: 'text-[#d4b886] bg-[#d4b886]/10 border-[#d4b886]/20' },
];

const Skills = () => {
    return (
        <div className="text-[#f8f6f7] pt-16 pb-24 max-w-7xl mx-auto px-4">
            <h1 data-aos="fade-up" className="text-center text-4xl md:text-5xl xl:text-6xl font-bold text-[#f8f6f7] mb-16">
                My <span className="text-[#d4b886]">Skills</span>
            </h1>

            <div data-aos="fade-up" data-aos-delay="500" className="flex flex-wrap justify-center gap-6">
                {skills.map((skill) => (
                    <Tilt key={skill.name} scale={1.1} transitionSpeed={400}>
                        <div className="bg-[#0d0d1f]/70 border border-white/5 w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition-all duration-300 hover:shadow-[0_10px_20px_rgba(212,184,134,0.1)] group">
                            
                            <div className="text-5xl mb-4 text-[#f8f6f7] group-hover:text-[#d4b886] transition-colors duration-300">
                                {skill.icon}
                            </div>
                            
                            <p className="text-[#f8f6f7] font-medium mb-3">
                                {skill.name}
                            </p>
                            
                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${skill.colorClass}`}>
                                {skill.level}
                            </span>

                        </div>
                    </Tilt>
                ))}
            </div>
        </div>
    );
}

export default Skills;
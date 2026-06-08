import React from 'react'
import Image from 'next/image'
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className="pt-16 pb-16">
        <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-[#f8f6f7]">
            See my <br /> recent <span className="text-[#d4b886]"> projects </span>
        </h1>
        <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
            {/* First Project */}
            <ProjectCard 
                title="EEEInventory: A Smart Inventory System" 
                description="A web dashboard ingesting component stock data from a collection of sensors wired to an ESP32 microcontroller." 
                imageUrl="/images/eeeinventory.png" 
                technologies={['HTML', 'CSS', 'JavaScript', 'C++', 'Firebase']} 
                tags={['Smart Systems', 'Electronics', 'Embedded', 'Firebase']} 
            />

            {/* Second Project */}
            <ProjectCard 
                title="Parallel Implementations of the LeNet-5 Architecture on the CIFAR-10 Dataset" 
                description="Implementation and performance analysis of a parallelized LeNet-5 from scratch." 
                imageUrl="/images/code.png" 
                technologies={['CUDA', 'C++', 'Python']} 
                tags={['Parallel Computing', 'Artificial Intelligence', 'Optimization']} 
                githubUrl="https://github.com/kurt-luis/parallel-lenet5"
            />
        </div>

    </div>
  )
}

export default Projects;
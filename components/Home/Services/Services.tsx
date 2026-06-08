import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className="pt-16 pb-16">
        <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-[#f8f6f7]">
            Collaborate with brand <br /> and agencies to create <br /> impactful results
        </h1>

        <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center">
            <div>
                <ServiceCard />
            </div>
        </div>
    </div>
  )
}

export default Services
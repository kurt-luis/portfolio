import React from 'react'
import ResumeCard from './ResumeCard'
import { FaCodepen, FaReact } from 'react-icons/fa'
import { BiAward, BiBrain } from 'react-icons/bi'

const Resume = () => {
  return (
    <div className="pt-20 pb-16">
        <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
            {/* Work */}
            <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-[#f8f6f7]">My  
                    <span className="text-[#d4b886]"> Experience</span>
                </h1>
                <div className="mt-10">
                    <ResumeCard 
                        Icon={FaCodepen} 
                        date="Jul. 2025 - Dec. 2025"
                        role="Machine Learning Engineer"
                        text={
                            <ul className="list-disc pl-5 space-y-2 marker:text-[#d4b886]">
                                <li>
                                    Built an LLM-powered dashboard and data pipeline to automate demographic analysis and audience sizing.
                                </li>
                                <li>
                                    Refactored failing Apache Airflow DAGs to restore daily data pipeline reliability.
                                </li>
                            </ul>
                        }
                    />
                    <ResumeCard 
                        Icon={FaReact} 
                        date="Nov. 2023 - Jan. 2025"
                        role="ML Research Consultant" 
                        text={
                            <ul className="list-disc pl-5 space-y-2 marker:text-[#d4b886]">
                                <li>
                                    Instructed research teams on practical machine learning techniques, data organization, and model evaluation.
                                </li>
                                <li>
                                    Guided a Python-based NLP project on SMS scam detection to the final defense round of a national research fair.
                                </li>
                            </ul>
                        }
                    />
                </div>
            </div>

            {/* Education */}
            <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-[#f8f6f7]">My  
                    <span className="text-[#d4b886]"> Education</span>
                </h1>
                <div className="mt-10">
                    <ResumeCard 
                        Icon={BiBrain} 
                        role="University of the Philippines Diliman" 
                        date="September 2023 - Present" 
                        text={
                            <ul className="list-disc pl-5 space-y-2 marker:text-[#d4b886]">
                                <li>
                                    Bachelor of Science in Electronics Engineering
                                </li>
                                <li>
                                    Algolympics 2025: Rank 9
                                </li>
                            </ul>
                        }
                    />
                    <ResumeCard 
                        Icon={BiAward} 
                        role="Pasig City Science High School" 
                        date="2017 - 2023" 
                        text={
                            <ul className="list-disc pl-5 space-y-2 marker:text-[#d4b886]">
                                <li>
                                    SAT: 1370
                                </li>
                                <li>
                                    2023 DOST-SEI Youth Excellence in Science Awardee
                                </li>
                                <li>
                                    2023 Best in Computational Research
                                </li>
                                <li>
                                    2023 Programmer of the Year
                                </li>
                                <li>
                                    2022 Gawad PCSHS Student Achievement Award in Mathematics
                                </li>
                            </ul>
                        }
                    />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Resume
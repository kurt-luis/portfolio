"use client";

import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { BsChevronDown } from 'react-icons/bs';

type Props = {
    role: string;
    organization?: string;
    Icon: IconType;
    date?: string;
    text: string | React.ReactNode;
}

const ResumeCard = ({ role, organization, Icon, date, text } : Props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-6">
            <div 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-start space-x-6 bg-[#0d0d1f]/50 hover:bg-[#0d0d1f]/70 transition-colors duration-300 p-4 sm:p-8 rounded-md cursor-pointer group"
            >
                <div className="sm:w-14 sm:h-14 w-10 h-10 bg-[#0d0d1f] rounded-full flex items-center justify-center flex-col shrink-0">
                    <Icon className="sm:w-8 sm:h-8 w-6 h-6 text-[#f8f6f7]" />
                </div>
                
                <div className="flex-1 w-full">
                    <div className="flex justify-between items-start w-full">
                        <div>
                            {date && (
                                <h1 className="mb-2 sm:px-6 sm:py-1.5 px-4 py-1 rounded-full bg-[#d4b886] text-[#5a213e] w-fit sm:text-lg text-sm font-bold">
                                    {date}
                                </h1>
                            )}
                            <h1 className="text-[#d4b886] text-xl sm:text-2xl font-semibold">
                                {role}
                            </h1>
                            <h2 className="text-[#f8f6f7]/90 text-base sm:text-lg font-medium mt-1">
                                {organization}
                            </h2>
                        </div>
                        
                        <BsChevronDown 
                            className={`text-[#f8f6f7] w-6 h-6 transform transition-transform duration-300 mt-1 shrink-0 ${
                                isOpen ? "rotate-180" : ""
                            }`} 
                        />
                    </div>

                    <div 
                        className={`grid transition-all duration-300 ease-in-out ${
                            isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                        }`}
                    >
                        <div className="overflow-hidden">
                            <div className="text-[#f8f6f7]/80 text-sm sm:text-base leading-relaxed">
                                {text}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumeCard;
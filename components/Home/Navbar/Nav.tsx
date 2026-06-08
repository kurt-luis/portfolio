"use client";

import React, { useState, useEffect} from 'react'
import { FaCode } from 'react-icons/fa';
import { BiDownload } from 'react-icons/bi';
import Link from 'next/link';
import { NavLinks } from '@/constant/constant';
import { HiBars3BottomRight } from 'react-icons/hi2';

type Props = {
    openNav: () => void;
}

const Nav = ({ openNav }: Props) => {

    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) setNavBg(true);
            else setNavBg(false);
        };

        window.addEventListener('scroll', handler);

        return () => window.removeEventListener('scroll', handler);

    }, []);


  return (
    <div className={`transition-all ${navBg ? 'bg-[#0d0d1f]/80 backdrop-blur-md shadow-md' : 'fixed' }
    duration-200 h-[12vh] z-[10000] fixed w-full`}>
        <div className="flex items-center h-full justify-between w-[90%] mx-auto">
            {/* LOGO */}
            <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
                    <FaCode className="w-5 h-5 text-black" />
                </div>
                <h1 className="text-xl hidden sm:block md:text-2xl text-[#f8f6f7] font-bold">Kurt Luis</h1>
            </div>
            { /* NAV LINKS */}
            <div className="hidden lg:flex items-center space-x-10">
                {NavLinks.map((link) => {
                    return <Link key={link.id} href={link.url} className="text-base hover:text-[#d4b886] text-[#f8f6f7] font-medium transition-all duration-200">

                        <p>{link.label}</p>
                    </Link>
                })}
            </div>
            {/* Buttons */}
            <div className="flex items-center space-x-4">
                {/* CV Button */}
                <button className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-[#5a213e] hover:bg-[#8e556c]
                transition-all duration-300 text-white flex items-center space-x-2">
                    <BiDownload className="w-5 h-5" />
                    <span>Download CV</span>
                </button>

                {/* Burger Menu */}
                <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-[#f8f6f7] lg:hidden"/>
            </div>
        </div>
    </div>
  )
}

export default Nav;
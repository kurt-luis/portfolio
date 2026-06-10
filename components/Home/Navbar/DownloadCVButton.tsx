import React from 'react';
import { BsDownload } from 'react-icons/bs';

const DownloadCVButton = () => {
  return (
    <a 
        href="/Landoy-CV.pdf" 
        download="Landoy-CV.pdf"
        className="inline-flex items-center gap-3 px-8 py-3 bg-[#d4b886] text-[#0d0d1f] text-sm sm:text-base font-bold rounded-full hover:bg-white hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(212,184,134,0.3)] transition-all duration-300 shadow-lg group"
    >
        <span>Download CV</span>
        <BsDownload className="w-4 h-4 font-bold group-hover:translate-y-1 transition-transform duration-300" />
    </a>
  );
}

export default DownloadCVButton;
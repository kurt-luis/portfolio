import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0d0d1f] py-12 border-t border-white/5 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

                {/* Branding / Name */}
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold text-[#f8f6f7]">Kurt Luis S. Landoy</h2>
                    <p className="text-[#f8f6f7]/60 mt-2 text-sm tracking-wide">
                        BS Electronics Engineering student @ UP Diliman
                    </p>
                </div>

                {/* Direct Contact Links */}
                <div className="flex flex-col items-center md:items-start space-y-4">
                    <a 
                        href="mailto:ks.landoy@gmail.com" 
                        className="flex items-center space-x-3 text-[#f8f6f7]/80 hover:text-[#d4b886] transition-colors duration-300"
                    >
                        <FaEnvelope className="w-5 h-5" />
                        <span className="text-sm font-medium">ks.landoy@gmail.com</span>
                    </a>
                    <a 
                        href="tel:+639296348131" 
                        className="flex items-center space-x-3 text-[#f8f6f7]/80 hover:text-[#d4b886] transition-colors duration-300"
                    >
                        <FaPhoneAlt className="w-5 h-5" />
                        <span className="text-sm font-medium">+63 929 634 8131</span>
                    </a>
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                    <a 
                        href="https://github.com/kurt-luis" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-[#f8f6f7]/5 border border-white/10 flex items-center justify-center text-[#f8f6f7] hover:bg-[#d4b886] hover:border-[#d4b886] hover:text-[#0d0d1f] transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(212,184,134,0.4)] hover:-translate-y-1"
                        aria-label="GitHub Profile"
                    >
                        <FaGithub className="w-6 h-6" />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/kurt-luis-landoy-b88a16324/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-[#f8f6f7]/5 border border-white/10 flex items-center justify-center text-[#f8f6f7] hover:bg-[#d4b886] hover:border-[#d4b886] hover:text-[#0d0d1f] transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(212,184,134,0.4)] hover:-translate-y-1"
                        aria-label="LinkedIn Profile"
                    >
                        <FaLinkedin className="w-6 h-6" />
                    </a>
                    <a 
                        href="https://www.facebook.com/krokkrokkrokk/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-[#f8f6f7]/5 border border-white/10 flex items-center justify-center text-[#f8f6f7] hover:bg-[#d4b886] hover:border-[#d4b886] hover:text-[#0d0d1f] transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(212,184,134,0.4)] hover:-translate-y-1"
                        aria-label="Facebook Profile"
                    >
                        <FaFacebook className="w-6 h-6" />
                    </a>
                </div>
            </div>

            {/* Bottom Copyright Bar */}
            <div className="mt-12 pt-8 border-t border-white/5 text-center">
                <p className="text-[#f8f6f7]/40 text-sm">
                    © {new Date().getFullYear()} Kurt Luis S. Landoy. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
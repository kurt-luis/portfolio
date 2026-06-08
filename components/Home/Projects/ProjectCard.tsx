import React from 'react';
import Image from 'next/image';

type Props = {
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    tags?: string[];
    githubUrl?: string;
}

const ProjectCard = ({ title, description, imageUrl, technologies, tags, githubUrl }: Props) => {
    return (
        <div className="group flex flex-col bg-[#0d0d1f]/50 hover:bg-[#0d0d1f]/80 transition-all duration-300 rounded-xl p-4 sm:p-6 border border-white/5 h-full">
            <div className="relative w-full h-56 sm:h-64 md:h-72 rounded-lg overflow-hidden mb-5 shrink-0">
                <Image 
                    src={imageUrl} 
                    alt={title} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" 
                />
            </div>

            <div className="flex flex-col flex-grow">
                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                        {tags.map((tag, index) => (
                            <span 
                                key={index} 
                                className="px-3 py-1 rounded-full text-xs font-semibold bg-[#d4b886]/10 text-[#d4b886] border border-[#d4b886]/20 tracking-wide"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                <h1 className="text-xl sm:text-2xl font-bold text-[#f8f6f7] mb-2">
                    {title}
                </h1>
                <p className="text-[#f8f6f7]/70 text-sm sm:text-base mb-6 line-clamp-3 leading-relaxed">
                    {description}
                </p>

                <div className="mt-auto">
                    <div className="mb-4">
                        <h3 className="text-xs text-[#f8f6f7]/50 uppercase tracking-widest mb-2 font-semibold">
                            Technologies
                        </h3>
                        <div className="flex flex-wrap gap-x-4 gap-y-1">
                            {technologies.map((tech, index) => (
                                <span key={index} className="text-sm font-mono text-[#f8f6f7]/80 flex items-center">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4b886] mr-2"></span>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {githubUrl && (
                        <a 
                            href={githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 text-sm font-semibold text-[#f8f6f7] hover:text-[#d4b886] transition-colors duration-200 pt-4 border-t border-white/10 w-full"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            <span>View on GitHub</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
'use client';

import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { HiEye } from 'react-icons/hi';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    previewLink?: string;
    githubLink?: string;
    imagePosition: 'left' | 'right';
}

const ProjectCard = ({ title, description, image, technologies, previewLink, githubLink, imagePosition }: ProjectCardProps) => {
    const contentOrder = imagePosition === 'left' ? 'md:order-2' : '';
    const imageOrder = imagePosition === 'left' ? 'md:order-1' : '';

    return (
        <div className="flex flex-col md:flex-row bg-white rounded-md  border-1 border-gray-200/90 overflow-hidden gap-8">
            <div className={`w-full md:w-1/2 ${contentOrder}`}>
                <div className="p-8 space-y-6 h-full">
                    <h3 className="text-2xl md:text-3xl font-semibold text-heading">{title}</h3>
                    <p className="text-base md:text-lg text-paragraph leading-relaxed">{description}</p>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-[#00856F] text-white rounded-md text-sm md:text-base font-medium"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-4 pt-4">
                        {previewLink && (
                            <a
                                href={previewLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#2A2A2A] text-white rounded-md hover:bg-[#404040] transition-colors text-base md:text-lg"
                            >
                                <HiEye className="text-xl" />
                                Preview
                            </a>
                        )}
                        {githubLink && (
                            <a
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#2A2A2A] text-white rounded-md hover:bg-[#404040] transition-colors text-base md:text-lg"
                            >
                                <FaGithub className="text-xl" />
                                GitHub
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <div className={`w-full md:w-1/2 ${imageOrder}`}>
                <div className="relative h-[300px] md:h-full w-full">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectCard; 
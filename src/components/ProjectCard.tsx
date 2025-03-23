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

const getTechColor = (tech: string): { bg: string; text: string } => {
    const colors: { [key: string]: { bg: string; text: string } } = {
        'React': { bg: '#3B82F6', text: '#FFFFFF' },
        'TypeScript': { bg: '#2563EB', text: '#FFFFFF' },
        'JavaScript': { bg: '#EAB308', text: '#FFFFFF' },
        'HTML': { bg: '#DC2626', text: '#FFFFFF' },
        'CSS': { bg: '#0EA5E9', text: '#FFFFFF' },
        'Tailwind': { bg: '#14B8A6', text: '#FFFFFF' },
        'AWS': { bg: '#F97316', text: '#FFFFFF' }
    };
    return colors[tech] || { bg: '#2A2A2A', text: '#FFFFFF' };
};

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
                        {technologies.map((tech, index) => {
                            const { bg, text } = getTechColor(tech);
                            return (
                                <span
                                    key={index}
                                    className="px-3 py-1.5 rounded-md text-sm font-medium"
                                    style={{ 
                                        backgroundColor: bg, 
                                        color: text,
                                        border: `1px solid ${text === '#FFFFFF' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'}`
                                    }}
                                >
                                    {tech}
                                </span>
                            );
                        })}
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
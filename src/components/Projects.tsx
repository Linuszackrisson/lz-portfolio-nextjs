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
        <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden gap-8">
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

const Projects = () => {
    const projects = [
        {
            title: "Anslagstavla-App",
            description: "En fullstack-applikation för en digital anslagstavla där användare kan posta, ändra, ta bort och filtrera meddelanden efter användare och datum. Frontend byggd med React och deployad på AWS S3. Backend använder Serverless Framework med API Gateway, Lambda och DynamoDB.",
            image: "/anslag.png",
            technologies: ["HTML", "CSS", "JavaScript", "React"],
            previewLink: "https://example.com/preview",
            githubLink: "https://github.com/yourusername/anslagstavla"
        },
        {
            title: "PickMyPlate",
            description: "En interaktiv app som inspirerar matlagning genom att föreslå recept från ett externt API. Användare väljer matkategori eller får slumpmässiga förslag, och utforskar detaljerade receptinstruktioner, ingredienslistor och videotutorials.",
            image: "/mealmock.png",
            technologies: ["HTML", "TailwindCSS", "JavaScript", "React"],
            previewLink: "https://example.com/preview",
            githubLink: "https://github.com/yourusername/pickmyplate"
        },
        {
            title: "Cardclub.se",
            description: "Implementerade en dynamisk framstegsindikator som motiverar kunder att nå en anpassningsbar spendergräns för att få en gratis gåva. Indikatorn uppdateras i realtid baserat på varukorgens totalsumma.",
            image: "/cardclub.png",
            technologies: ["HTML", "CSS", "JavaScript"],
            previewLink: "https://example.com/preview",
            githubLink: "https://github.com/yourusername/cardclub"
        },
        {
            title: "LZ Web Landing Page",
            description: "En landing page för en just nu fiktiv webbyrå i Arvika, skapad för att få en djupare förståelse för TailwindCSS och Typescript, med extra fokus på design och användarupplevelse.",
            image: "/lzweb.png",
            technologies: ["Next.js", "TypeScript", "Tailwind"],
            githubLink: "https://github.com/yourusername/lz-web"
        }
    ];

    return (
        <section className="w-full bg-[#f9f9f9] py-20">
            <div className="mx-auto w-full px-4 sm:px-6 md:px-8 max-w-3xl lg:max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-heading mb-12">Projekt</h2>
                <p className="text-base md:text-lg text-paragraph mb-16">Här är några av mina senaste projekt, fler hittar du <a href="https://github.com/yourusername" className="text-[#00856F] hover:underline">här</a>.</p>
                
                <div className="grid grid-cols-1 gap-16">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            {...project}
                            imagePosition={index % 2 === 0 ? 'left' : 'right'}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects; 
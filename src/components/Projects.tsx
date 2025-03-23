'use client';

import ProjectCard from './ProjectCard';

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
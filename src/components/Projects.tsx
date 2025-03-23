'use client';

import ProjectCard from './ProjectCard';

const Projects = () => {
    const projects = [
        {
            title: "Morgan Freeware",
            description: "En plattform där användare kan hitta gratis alternativ till kostsam programvara, bläddra bland kategorier och betygsätta olika program. Genom projektet fick jag en djupare förståelse för fullstack-utveckling, inklusive databashantering, backend-logik och frontend-design. ",
            image: "/morganfreeware.png",
            technologies: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
            previewLink: "https://morgan-freeware-22vyau2ko-linuszackrissons-projects.vercel.app/",
            githubLink: "https://github.com/Linuszackrisson/morgan-freeware"
        },
        {
            title: "PickMyPlate",
            description: "En interaktiv app som inspirerar matlagning genom att föreslå recept från ett externt API. Användare väljer matkategori eller får slumpmässiga förslag, och utforskar detaljerade receptinstruktioner, ingredienslistor och videotutorials.",
            image: "/mealmock.png",
            technologies: ["HTML", "Tailwind", "JavaScript", "React"],
            previewLink: "https://linuszackrisson.github.io/PickMyPlate/",
            githubLink: "https://github.com/Linuszackrisson/PickMyPlate"
        },
        {
            title: "Anslagstavla-App",
            description: "En fullstack-applikation för en digital anslagstavla där användare kan posta, ändra, ta bort och filtrera meddelanden efter användare och datum. Frontend byggd med React och deployad på AWS S3. Backend använder Serverless Framework med API Gateway, Lambda och DynamoDB.",
            image: "/anslag.png",
            technologies: ["React", "CSS", "JavaScript", "AWS"],
            previewLink: "https://anslagstavlan-app.s3.eu-north-1.amazonaws.com/index.html",
            githubLink: "https://github.com/Linuszackrisson/anslagstavla-app"
        },
        {
            title: "Lzweb.se",
            description: "En landing page för en just nu fiktiv webbyrå i Arvika, skapad för att få en djupare förståelse för TailwindCSS och Typescript, med extra fokus på design och användarupplevelse.",
            image: "/lzweb.png",
            technologies: ["React", "TypeScript", "Tailwind"],
            previewLink: "https://linuszackrisson.github.io/lzweb-landingpage/",
            githubLink: "https://github.com/Linuszackrisson/lzweb-landingpage"
        }
    ];

    return (
        <section id="projekt" className="w-full bg-[#f9f9f9] py-20">
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
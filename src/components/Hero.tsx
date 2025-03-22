import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import linuspfp from '../../public/linuspfp2.jpg';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="w-full">
        <div className="relative z-10">
          <main className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-x-16">
              <div className="lg:w-1/2 text-center lg:text-left">
                <h1 className="text-heading text-6xl font-bold leading-tight">
                  Fullstack <br /> Utvecklare
                </h1>
                <p className="text-paragraph text-xl mt-10">
                  Hej! Jag heter Linus Zackrisson och är en passionerad och entusiastisk utvecklare lokaliserad i Arvika.📍
                </p>
                <div className="flex justify-center lg:justify-start mt-10 space-x-4 text-heading">
                  <a href="https://www.linkedin.com/in/linus-zackrisson/" target="_blank" rel="noopener noreferrer" className="text-5xl hover:text-[#0d9275] transition-colors">
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com/linuszackrisson" target="_blank" rel="noopener noreferrer" className="text-5xl hover:text-[#0d9275] transition-colors">
                    <FaGithub />
                  </a>
                </div>
              </div>
              <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
                <Image 
                  src={linuspfp} 
                  alt="Linus Zackrisson" 
                  width={400} 
                  height={400}
                  quality={100}
                  className="rounded-lg object-cover object-center"
                />
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-heading mt-16">Teknisk Kompetens</h2>
            <div className="skill-icons flex flex-wrap justify-center gap-3 mt-4">
              <img src="https://skillicons.dev/icons?i=html" alt="HTML" className="w-12 h-12 hover:opacity-80 transition-opacity" />
              <img src="https://skillicons.dev/icons?i=css" alt="CSS" className="w-12 h-12 hover:opacity-80 transition-opacity" />
              <img src="https://skillicons.dev/icons?i=js" alt="JavaScript" className="w-12 h-12 hover:opacity-80 transition-opacity" />
              <img src="https://skillicons.dev/icons?i=ts" alt="TypeScript" className="w-12 h-12 hover:opacity-80 transition-opacity" />
              <img src="https://skillicons.dev/icons?i=react" alt="React" className="w-12 h-12 hover:opacity-80 transition-opacity" />
              <img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js" className="w-12 h-12 hover:opacity-80 transition-opacity" />
              <img src="https://skillicons.dev/icons?i=nextjs" alt="Next.js" className="w-12 h-12 hover:opacity-80 transition-opacity" />
              <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind" className="w-12 h-12 hover:opacity-80 transition-opacity" />
              <img src="https://skillicons.dev/icons?i=rails" alt="Ruby on Rails" className="w-12 h-12 hover:opacity-80 transition-opacity" />
              <img src="https://skillicons.dev/icons?i=aws" alt="AWS" className="w-12 h-12 hover:opacity-80 transition-opacity" />
              <img src="https://skillicons.dev/icons?i=github" alt="GitHub" className="w-12 h-12 hover:opacity-80 transition-opacity" />
              <img src="https://skillicons.dev/icons?i=supabase" alt="Supabase" className="w-12 h-12 hover:opacity-80 transition-opacity" />
              <img src="https://skillicons.dev/icons?i=firebase" alt="Firebase" className="w-12 h-12 hover:opacity-80 transition-opacity" />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Hero; 
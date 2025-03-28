import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import linuspfp from '../../public/linuspfp2.jpg';
import Skills from './Skills';

const Hero = () => {
  return (
    <section id="hem" className="w-full bg-[#f9f9f9]">
      <div className="min-h-screen mx-auto w-full px-4 sm:px-6 md:px-8 max-w-3xl lg:max-w-5xl">
        <div className="flex flex-col items-left justify-center min-h-screen pt-24 md:pt-24">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-x-16">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-heading text-6xl font-bold leading-tight">
                Fullstack <br /> Utvecklare
              </h1>
              <p className="text-paragraph text-xl mt-10">
                Hej! Jag heter Linus Zackrisson och är en passionerad och entusiastisk utvecklare lokaliserad i Arvika.📍
              </p>
              
              <div className="flex justify-center lg:justify-start mt-10 space-x-4 text-heading">
                <a href="https://www.linkedin.com/in/linus-zackrisson-367542273/" target="_blank" rel="noopener noreferrer" className="text-5xl hover:text-[#0d9275] transition-colors">
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
                className="rounded-md border-1 border-gray-200/90 object-cover object-center"
              />
            </div>
          </div>
          <div className="mt-20">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
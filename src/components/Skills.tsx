'use client'
import React, { useState } from 'react';

interface Skill {
  name: string;
  icon: string;
  description: string;
}

const skills: Skill[] = [
  {
    name: "HTML",
    icon: "html",
    description: "Semantisk HTML och BEM-konventioner är något jag strävar efter i varje projekt."
  },
  {
    name: "CSS",
    icon: "css",
    description: "Föredrar flexbox före grid när det gäller layout. Responsiv design är givet i varje projekt."
  },
  {
    name: "JavaScript",
    icon: "js",
    description: "Läste JavaScript första gången 2010, lär mig nya saker än idag."
  },
  {
    name: "TypeScript",
    icon: "ts",
    description: "Sen jag blev introudcerad till TypeScript 2023 har jag inte använt något annat. Det är numera en stor del av min vardag."
  },
  {
    name: "SQL",
    icon: "postgresql",
    description: "Grundläggande kunskaper i SQL för databashantering och datamodellering."
  },
  {
    name: "React",
    icon: "react",
    description: "React tog mig till nya höjder. Ett fantastiskt ramverk jag använder till nästan alla projekt."
  },
  {
    name: "Node.js",
    icon: "nodejs",
    description: "Grundläggande kunskaper i att bygga API:er och backend-lösningar med Express."
  },
  {
    name: "Next.js",
    icon: "nextjs",
    description: "Har börjat använda Next.js nu på senare tid, bland annat för att bygga denna sida."
  },
  {
    name: "Tailwind",
    icon: "tailwind",
    description: "Används i alla min projekt numera, fick mig att bli både snabbare och mer effektiv."
  },
  {
    name: "Ruby on Rails",
    icon: "rails",
    description: "Lärde mig grundläggande kunskaper i Ruby on Rails under min LIA på Bowter."
  },
  {
    name: "AWS",
    icon: "aws",
    description: "Kunskap inom AWS-tjänster för molninfrastruktur och deployment."
  },
  {
    name: "GitHub",
    icon: "github",
    description: "Github är en no brainer. Har du förresten besökt min?"
  },
  {
    name: "Supabase",
    icon: "supabase",
    description: "Ett alternativ till Firebase, men mitt förstahandsval för backend-tjänster och realtidsdatabas. Jag älskar enkelheten."
  },
  {
    name: "Firebase",
    icon: "firebase",
    description: "Mitt andrahandsval för backend-tjänster."
  }
];

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);

  return (
    <div className="w-full">
        <div className="skill-title flex flex-col w-full mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-8">Teknisk Kompetens</h2>
          <div className="flex items-center gap-2 text-base md:text-lg text-paragraph mb-8">
            <span>Klicka på ikonerna för att läsa mer om mina erfarenheter</span>
            <span className="animate-bounce">↓</span>
          </div>
        </div>
        <div className="skill-icons flex flex-wrap justify-center gap-2">
          {skills.map((skill) => (
            <div key={skill.name} className="relative">
              <img
                src={`https://skillicons.dev/icons?i=${skill.icon}`}
                alt={skill.name}
                className="w-13 h-13 hover:opacity-80 transition-opacity cursor-pointer"
                onClick={() => setActiveSkill(activeSkill?.name === skill.name ? null : skill)}
              />
              {activeSkill?.name === skill.name && (
                <div className="absolute z-50 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg mt-2 w-64">
                  <h3 className="text-base md:text-lg font-semibold text-heading mb-2">{skill.name}</h3>
                  <p className="text-sm md:text-base text-paragraph leading-relaxed">{skill.description}</p>
                  <div className="absolute -top-2 left-4 w-4 h-4 bg-white dark:bg-gray-800 transform rotate-45"></div>
                </div>
              )}
            </div>
          ))}
        </div>
    </div>
  );
};

export default Skills; 
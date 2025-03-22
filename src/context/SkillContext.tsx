'use client'

import React, { createContext, useContext, useState } from 'react';

interface Skill {
  name: string;
  description: string;
}

interface SkillContextType {
  activeSkill: Skill | null;
  setActiveSkill: (skill: Skill | null) => void;
}

const SkillContext = createContext<SkillContextType | undefined>(undefined);

export const SkillProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);

  return (
    <SkillContext.Provider value={{ activeSkill, setActiveSkill }}>
      {children}
    </SkillContext.Provider>
  );
};

export const useSkill = () => {
  const context = useContext(SkillContext);
  if (context === undefined) {
    throw new Error('useSkill must be used within a SkillProvider');
  }
  return context;
}; 
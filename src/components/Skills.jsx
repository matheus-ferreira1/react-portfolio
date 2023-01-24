import React from "react";
import SkillCard from "./SkillCard";
import { skills } from "../constants/constants";

const Skills = () => {
  return (
    <section className="w-full px-4 py-16 md:py-32 bg-gray-2 text-white">
      <div className="max-w-[1240px] mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
          Habilidades<span className="text-yellow-500">.</span>
        </h1>
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import { FC } from "react";

import { skillsData } from "../constants/data";
import SkillCard from "./SkillCard";

interface SkillsProps {}

const Skills: FC<SkillsProps> = ({}) => {
  return (
    <section className="flex flex-col justify-center items-center max-w-5xl px-10 md:mx-auto py-11">
      <h1 className="text-2xl font-semibold">Habilidades</h1>
      <div className="mt-12 grid md:grid-cols-2  gap-4">
        {skillsData.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;

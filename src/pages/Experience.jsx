import React from "react";
import ExperienceCard from "../components/ExperienceCard";
import { experience } from "../constants/constants";

const Experience = () => {
  return (
    <section className="w-full px-4 py-32 bg-gray-1 text-white">
      <div className="max-w-[1240px] mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
          Experiência<span className="text-yellow-500">.</span>
        </h1>
        <div className="flex flex-col justify-center sm:flex-row sm:flex-wrap gap-4">
          {experience.map((item) => (
            <ExperienceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

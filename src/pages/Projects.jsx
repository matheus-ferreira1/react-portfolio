import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants/constants";

const Projects = () => {
  return (
    <section className="w-full px-4 py-16 md:py-32 bg-gray-2 text-white">
      <div className="max-w-[1240px] mx-auto">
        <h1 className="capitalize text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
          meu portfolio<span className="text-yellow-500">.</span>
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {projects
            .map((item, idx) => (
              <ProjectCard id={idx} key={item.id} item={item} />
            ))
            .reverse()}
        </div>
      </div>
    </section>
  );
};

export default Projects;

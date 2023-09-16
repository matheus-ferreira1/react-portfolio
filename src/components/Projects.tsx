import { FC } from "react";
import { projectsData } from "../constants/data";
import ProjectCard from "./ProjectCard";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <div
      id="projects"
      className="scroll-mt-20 flex flex-col justify-center items-center max-w-4xl px-10 md:mx-auto py-11"
    >
      <h1 className="text-2xl font-semibold">Projetos</h1>
      <section className="mt-4 flex flex-col gap-4">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </section>
    </div>
  );
};

export default Projects;

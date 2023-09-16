import { FC } from "react";
import placeholderImage from "../../public/placeholder.png";
import Keyword from "./Keyword";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imagePath?: string;
  demo?: string;
  code?: string;
}

const buttonStyle =
  "py-2 px-4 rounded-full cursor-pointer font-semibold bg-gray-900 text-gray-200 hover:bg-gray-700  transition-all duration-200";

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  imagePath,
  demo,
  code,
}) => {
  return (
    <div className="group">
      <section className="bg-gray-100 max-w-3xl border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap my-4 gap-2 ">
            {tags.map((tag, index) => (
              <Keyword key={index}>{tag}</Keyword>
            ))}
          </ul>
          <section className="flex items-center gap-2">
            <a href={demo} target="_blank" className={buttonStyle}>
              Demo
            </a>
            <a href={code} target="_blank" className={buttonStyle}>
              Code
            </a>
          </section>
        </div>

        <img
          src={imagePath ? imagePath : placeholderImage}
          alt=""
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </div>
  );
};

export default ProjectCard;

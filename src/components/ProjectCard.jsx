import React from "react";
import { useNavigate } from "react-router-dom";

const KeywordCard = ({ children }) => {
  return (
    <h5 className="bg-gray-900 text-gray-400 rounded-md p-2 capitalize text-xs">
      {children}
    </h5>
  );
};

const ProjectCard = ({ item, id }) => {
  const navigate = useNavigate();

  const { title, imagePath, description, stack } = item;
  return (
    <article
      className="bg-black px-6 py-8 rounded-lg flex flex-col cursor-pointer w-full md:max-w-[400px] hover:shadow-xl hover:shadow-gray-800 duration-200"
      onClick={() => navigate(`/project/${id}`)}
    >
      <img className="h-[250px] w-full object-cover" src={imagePath} />
      <div>
        <h1 className="text-xl font-bold mt-2">{title}</h1>
        <div className="flex gap-1 flex-wrap my-3">
          {stack.map((item) => (
            <KeywordCard key={item}>{item}</KeywordCard>
          ))}
        </div>
        <p className="font-light text-gray-400 text-justify truncate">
          {description}
        </p>
      </div>
    </article>
  );
};

export default ProjectCard;

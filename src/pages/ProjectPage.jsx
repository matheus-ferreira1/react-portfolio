import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../constants/constants";

const KeywordCard = ({ children }) => {
  return (
    <h5 className="bg-gray-100 text-gray-800 rounded-md p-2 capitalize text-sm">
      {children}
    </h5>
  );
};

const ProjectPage = () => {
  const { id } = useParams();
  const { code, demo, description, imagePath, stack, title } = projects[id];

  return (
    <div>
      <section className="w-full px-4 py-16 md:py-32 bg-white text-gray-2">
        <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="w-[600px] h-[300px] border border-red-600">
            {/* <img
              className="bg-transparent w-[455px] mx-auto my-4"
              src=""
              alt=""
            /> */}
          </div>
          <div className="px-4 w-auto md:w-[50%] flex flex-col justify-center gap-2 my-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold py-2">
              {title}
              <span className="text-yellow-500">.</span>
            </h1>

            <div className="flex gap-2 flex-wrap my-3">
              {stack.map((item) => (
                <KeywordCard key={item}>{item}</KeywordCard>
              ))}
            </div>
            <p className="text-gray-800 text-lg text-justify">{description}</p>

            <div className="mt-4 flex gap-4 items-center">
              <a
                className="bg-gray-200 hover:bg-gray-400 duration-200 text-gray-800 capitalize font-bold rounded-md px-4 py-3"
                target="_blank"
                href={code}
              >
                code
              </a>
              <a
                className="bg-gray-200 hover:bg-gray-400 duration-200 text-gray-800 capitalize font-bold rounded-md px-4 py-3"
                target="_blank"
                href={demo}
              >
                demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;

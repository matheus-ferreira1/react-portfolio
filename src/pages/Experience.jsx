import React from "react";
import ExperienceCard from "../components/ExperienceCard";
import FormacaoCard from "../components/FormacaoCard";
import {
  experience,
  formacao,
  courses,
  languages,
} from "../constants/constants";
import { HiOutlineBookOpen } from "react-icons/hi";
import { HiOutlineLanguage } from "react-icons/hi2";
import CourseCard from "../components/CourseCard";

const Experience = () => {
  return (
    <>
      <section className="w-full px-4 py-14 md:py-32 bg-gray-1 text-white">
        <div className="max-w-[1240px] mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            Experiência<span className="text-yellow-500">.</span>
          </h1>
          <div className="flex flex-col justify-center items-center gap-4">
            {experience.map((item) => (
              <ExperienceCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
      <section className="w-full px-4 py-16 md:py-32 bg-white text-gray-1">
        {/* formação - graduação  */}
        <div className="max-w-[1240px] mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            Formação<span className="text-yellow-500">.</span>
          </h1>
          <div className="flex flex-wrap md:flex-row justify-center items-center gap-4 w-full">
            {formacao.map((item) => (
              <FormacaoCard key={item.id} item={item} />
            ))}
          </div>
        </div>
        {/* cursos  */}
        <div className="max-w-[800px] mx-auto mt-16">
          <h1 className="text-lg uppercase font-bold mb-8 flex items-center text-gray-500 tracking-widest">
            <HiOutlineBookOpen className=" mr-2 text-yellow-500 text-2xl" />
            Cursos
            <span className="text-yellow-500">.</span>
          </h1>
          <ul className="flex flex-wrap md:flex-row justify-center items-center gap-4 w-full">
            {courses.map((item) => (
              <CourseCard key={item.id} item={item} />
            ))}
          </ul>
        </div>
        {/* idiomas */}
        <div className="max-w-[800px] mx-auto mt-16">
          <h1 className="text-lg uppercase font-bold mb-8 flex items-center text-gray-500 tracking-widest">
            <HiOutlineLanguage className="mr-2 text-yellow-500 text-2xl" />
            idiomas
            <span className="text-yellow-500">.</span>
          </h1>
          <ul className="flex flex-col justify-center items-start gap-4 w-full text-gray-800 ">
            {languages.map((item) => (
              <li key={item.id} className="capitalize">
                {item.name} /{" "}
                <span className="text-gray-500">{item.fluency}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Experience;

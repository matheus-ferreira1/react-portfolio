import React from "react";
import { formationItems } from "../constants/constants";

const AboutItem = ({ item }) => {
  const { institute, nivel, title } = item;
  return (
    <article className="bg-gray-800 text-gray-200 border border-l-gray-600 p-4 rounded-md">
      <h3 className="uppercase text-sm font-light">{nivel}</h3>
      <div className="font-semibold flex items-center">
        <div className="w-8 h-[4px] bg-yellow-500 mr-3" />
        {title}
      </div>
      <h4 className="uppercase text-base">{institute}</h4>
    </article>
  );
};

const About = () => {
  return (
    <section className="w-full px-4 lg:px-0 py-28 bg-gray-50 text-black">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-4">
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            Sobre mim<span className="text-yellow-500">.</span>
          </h1>

          <p className="text-justify tracking-wide bg-gray-100 rounded-md px-16 py-8 text-lg font-semibold text-gray-800">
            Amante da tecnologia, sempre procurando aprender mais e compartilhar
            experiências. Meu objetivo é avançar na carreira como Desenvolvedor
            Web Full Stack. Trabalhando em projetos web desde 2021 e
            desenvolvendo habilidades com ferramentas e tecnologias front e back
            end. Possuo inglês fluente.
          </p>
        </div>
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            Formação<span className="text-yellow-500">.</span>
          </h1>

          <div className="">
            {formationItems.map((item) => (
              <AboutItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

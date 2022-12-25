import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Laptop from "../assets/laptop.jpg";

const Hero = () => {
  return (
    <section className="w-full bg-gray-1 py-16 px-4 text-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div>
          <img
            className="bg-transparent w-[50%] mx-auto my-4"
            src={Laptop}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center gap-2 my-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold py-2">
            Matheus Ferreira
            <span className="text-yellow-500">.</span>
          </h1>
          <h3 className="uppercase text-gray-600 font-bold">
            Desenvolvedor Web FullStack
          </h3>
          <p className="text-gray-300">
            Estudante de Análise e Desenvolvimento de Sistemas, Bacharel em
            Biotecnologia. Evangelista do JavaScript Vanilla.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              className="hover:text-yellow-500 duration-200"
              href="https://github.com/matheus-ferreira1"
              target="_blank"
            >
              <FaGithub size={30} />
            </a>
            <a
              className="hover:text-yellow-500 duration-200"
              href="https://www.linkedin.com/in/matheus-ferreira33/"
              target="_blank"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              className="hover:text-yellow-500 duration-200"
              href="mailto:matheustferreira33@gmail.com"
              target="_blank"
            >
              <HiMail size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

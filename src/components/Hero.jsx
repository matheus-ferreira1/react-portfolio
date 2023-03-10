import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Laptop from "../assets/laptop.jpg";

const Hero = () => {
  return (
    <section className="w-full mx-auto my-auto bg-white py-16 md:py-32 px-4 text-black">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="w-[70%] md:w-[50%]">
          <img
            className="bg-transparent w-[455px] mx-auto my-4"
            src={Laptop}
            alt=""
          />
        </div>
        <div className="px-4 w-auto md:w-[50%] flex flex-col justify-center gap-2 my-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold py-2">
            Matheus Ferreira
            <span className="text-yellow-500">.</span>
          </h1>
          <h3 className="uppercase text-gray-700 text-xl font-semibold">
            Desenvolvedor Web FullStack
          </h3>
          <p className="text-gray-600 text-lg">
            Desenvolvedor de software apaixonado por aprender e criar.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a
              className="hover:text-yellow-500 duration-200"
              href="https://github.com/matheus-ferreira1"
              target="_blank"
            >
              <FaGithub size={50} />
            </a>
            <a
              className="hover:text-yellow-500 duration-200"
              href="https://www.linkedin.com/in/matheus-ferreira33/"
              target="_blank"
            >
              <FaLinkedin size={50} />
            </a>
            <a
              className="hover:text-yellow-500 duration-200"
              href="mailto:matheustferreira33@gmail.com"
              target="_blank"
            >
              <HiMail size={50} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

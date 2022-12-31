import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="w-full px-4 lg:px-0 py-24 bg-black text-white max-w-[1240px] mx-auto flex flex-col gap-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="self-center text-center text-2xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-0">
          Vamos fazer algo <br />
          <span className="text-yellow-500">sensacional</span>.
        </h1>
        <div className="flex gap-3">
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

      <div className="flex flex-col justify-center items-center">
        <p>Feito com ❤ e ☕</p>
        <p className="font-light text-sm text-gray-400">
          &copy; 2023 - Matheus Ferreira
        </p>
      </div>
    </footer>
  );
};

export default Footer;

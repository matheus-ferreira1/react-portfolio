import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="w-full px-4 lg:px-0 py-24 bg-black text-white max-w-[1240px] mx-auto flex flex-col gap-8">
      <div className="flex justify-center items-center gap-4">
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

      <div className="flex flex-col justify-center items-center">
        <p>
          Feito com <span className="text-yellow-500">❤</span> e ☕ por Matheus
          Ferreira
        </p>
        <p className="font-light text-sm text-gray-400">
          Copyright &copy; 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;

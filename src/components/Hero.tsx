import { FC } from "react";
import { FiDownload } from "react-icons/fi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Button from "./Button";
import profilePic from "../../public/profile.jpeg";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <main className="flex flex-col justify-center items-center gap-4 p-14 relative">
      <div className="bg-[#fad3d4] absolute z-1 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
      <div className="bg-[#f5f4d3] absolute z-1 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

      <div className="z-10">
        <img
          src={profilePic}
          alt="Matheus' profile picture"
          className="h-24 w-24 rounded-full object-cover border-[0.20rem] border-white shadow-xl"
        />
      </div>
      <h1 className="z-10 text-gray-800 dark:text-gray-200 font-medium !leading-[1.5] text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-5xl mx-auto text-center">
        <span className="font-bold">Olá!</span> Eu sou o Matheus,{" "}
        <span className="font-bold">desenvolvedor de software full-stack</span>{" "}
        com <span className="font-bold">2 anos</span> de experiência. Apaixonado
        por novas tecnologias e desafios.
      </h1>
      <div className="mt-4 z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button href="" fullWidth label="Download CV" icon={FiDownload} />
        <div className="flex gap-4">
          <Button
            href="https://www.linkedin.com/in/matheus-ferreira33/"
            outline
            icon={AiFillLinkedin}
          />
          <Button
            href="https://github.com/matheus-ferreira1"
            outline
            icon={AiFillGithub}
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;

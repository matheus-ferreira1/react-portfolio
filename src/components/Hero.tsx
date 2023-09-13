import { FC } from "react";
import Button from "./Button";
import { FiDownload } from "react-icons/fi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <main className="flex flex-col justify-center items-center gap-4 p-16 relative">
      <div className="bg-[#fad3d4] absolute z-1 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
      <div className="bg-[#f5f4d3] absolute z-1 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

      <div className="z-10">imagem</div>
      <h1 className="z-10 text-gray-800 dark:text-gray-200 text-3xl font-medium !leading-[1.5] sm:text-4xl lg:text-5xl max-w-5xl mx-auto text-center">
        <span className="font-bold">Olá. Eu sou o Matheus!</span> Sou{" "}
        <span className="font-bold">desenvolvedor de software full-stack</span>{" "}
        com <span className="font-bold">2 anos</span> de experiência. Apaixonado
        por novas tecnologias e desafios.
      </h1>
      <div className="mt-4 z-10 flex items-center justify-center gap-4">
        <Button href="" fullWidth label="Download CV" icon={FiDownload} />
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
    </main>
  );
};

export default Hero;

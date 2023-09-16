import { FC } from "react";

interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
  return (
    <article
      id="about"
      className="scroll-mt-20 flex flex-col justify-center items-center max-w-4xl px-10 md:mx-auto py-11"
    >
      <h1 className="text-2xl font-semibold">Sobre mim</h1>
      <p className="mt-4 font-thin text-center leading-relaxed">
        Após concluir o Bacharelado em Biotegnologia e ingressar no Mestrado em
        Engenharia Química (UFBA), decidi seguir a minha paixão por tecnologia.
        Comecei meus estudos de forma autodidata, através de cursos livres e
        bootcamps online, me aprofundando no desenvolvimento web full-stack.
        Minha parte favorita da programação é o aspecto de resolução de
        problemas. Adoro a sensação de finalmente encontrar e executar a solução
        para um problema do usuário.
        <br />
        Atualmente curso Análise e Desenvolvimento de Sistemas e atuo como
        desenvolvedor full-stack com Delphi, PHP, Angular, SQL Server e
        Firebird. Minha stack principal é React, Next.js, Node.js e SQL Server.
        Estou sempre em busca de aprender novas tecnologias e ferramentas.
      </p>
    </article>
  );
};

export default About;

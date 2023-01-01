import { FaReact, FaNodeJs, FaTools } from "react-icons/fa";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    path: "/",
  },
  {
    id: "projects",
    title: "Projects",
    path: "/projects",
  },
  {
    id: "experience",
    title: "Experience",
    path: "/experience",
  },
];

export const skills = [
  {
    id: 1,
    name: "front-end",
    Icon: FaReact,
    color: "#61DAFB",
    tools:
      "React, Redux, Angular, HTML, CSS, Bootstrap, MaterialUI, TailwindCSS, StyledComponents",
  },
  {
    id: 2,
    name: "back-end",
    Icon: FaNodeJs,
    color: "#64B649",
    tools: "Node, Express, Nest, Java, Spring, MySQL, MongoDB, GraphQL",
  },
  {
    id: 3,
    name: "ferramentas",
    Icon: FaTools,
    color: "#ECB71F",
    tools: "NPM, Yarn, Linux",
  },
];

export const formationItems = [
  {
    id: "biotecnologia",
    title: "Biotecnologia",
    institute: "ufba",
    nivel: "bacharelado",
  },
  {
    id: "ads",
    title: "Análise e Desenvolvimento de Sistemas",
    institute: "faculdade descomplica",
    nivel: "tecnólogo",
  },
  {
    id: "programadorWeb",
    title: "Programador Web",
    institute: "ifrs",
    nivel: "curso aberto",
  },
];

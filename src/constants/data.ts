import React from "react";
import { BsBuildingCheck, BsDatabase } from "react-icons/bs";
import { AiOutlineLaptop } from "react-icons/ai";
import {
  FaReact,
  FaServer,
  FaTools,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export const links = [
  {
    name: "Início",
    link: "#",
  },
  {
    name: "Sobre",
    link: "#about",
  },
  {
    name: "Projetos",
    link: "#projects",
  },
  {
    name: "Experiência",
    link: "#experience",
  },
  {
    name: "Habilidades",
    link: "#skills",
  },
  {
    name: "Formação",
    link: "#school",
  },
];

export const projectsData = [
  {
    title: "Movies App",
    description:
      "Aplicativo que requisita dados da API The Movie Database, mostrando em tela os principais filmes do momento. Também há a opção de filtrar os resultados.",
    tags: ["Typescript", "React", "Axios", "TailwindCSS", "TMDB API"],
    imagePath: "",
    demo: "https://movies-app-matheus-ferreira1.vercel.app/",
    code: "https://github.com/matheus-ferreira1/movies-app",
  },
  {
    title: "Landing page de banco",
    description:
      "Uma página web simples  totalmente responsiva, criada para treinar os conceitos do TailwindCSS de Mobile-First",
    tags: [
      "Javascript",
      "React",
      "Mobile-First",
      "TailwindCSS",
      "responsive-web-design",
    ],
    imagePath: "",
    demo: "https://teuzobank.vercel.app/",
    code: "https://github.com/matheus-ferreira1/Financial-landing-page",
  },
  {
    title: "Aplicativo de clima",
    description:
      "Uma SPA onde o usuário pode procurar pelo nome de uma cidade e visualizar as  informações de clima do local, caso seja encontrada. Utiliza a API OpenWeatherMap.",
    tags: ["Typescript", "React", "OpenWeatherMap API", "TailwindCSS"],
    imagePath: "",
    demo: "https://weather-app-matheus.vercel.app/",
    code: "https://github.com/matheus-ferreira1/weather-app",
  },
  {
    title: "E-commerce frontend",
    description:
      "Interface moderna do frontend de um e-commerce. Produtos mostrados são requisitados da FakeStoreAPI, utilizando axios. Toda a funcionalidade de incluir e exluir no carrinho inclusa.",
    tags: [
      "React",
      "ContextAPI",
      "react-router-dom",
      "TailwindCSS",
      "FakeStoreAPI",
    ],
    imagePath: "",
    demo: "https://matheus-ecommerce-front.vercel.app/",
    code: "https://github.com/matheus-ferreira1/ecommerce-front",
  },
];

export const skillsData = [
  {
    id: 1,
    name: "front-end",
    Icon: FaReact,
    color: "#61DAFB",
    tools:
      "React, Next.js, Redux, Angular, HTML, CSS, SASS, Bootstrap, TailwindCSS, StyledComponents, API integration",
  },
  {
    id: 2,
    name: "back-end",
    Icon: FaServer,
    color: "#64B649",
    tools:
      "Node, Express, Nest, PHP, Java, Spring, GraphQL, SQL Server, MySQL, MongoDB, Firebird",
  },
  {
    id: 3,
    name: "ferramentas",
    Icon: FaTools,
    color: "#ECB71F",
    tools:
      "NPM, Yarn, Vite, Linux, FTP, Filezilla, Scrum, SQL Studio Management, IBExpert, Git, GitHub, SVN, Docker, AWS",
  },
];

export const schoolData = [
  {
    institute: "UFBA",
    nivel: "bacharelado",
    course: "Biotecnologia",
    dateInit: 2012,
    dateEnd: 2017,
  },
  {
    institute: "UFBA",
    nivel: "mestrado",
    course: "Engenharia Química",
    dateInit: 2017,
    dateEnd: 2018,
  },
  {
    institute: "Faculdade Descomplica",
    nivel: "tecnólogo",
    course: "Análise e Des. de Sistemas",
    dateInit: 2022,
    dateEnd: 2024,
  },
];

export const experienceData = [
  {
    company: "Javé Nessí",
    role: "Analista de Suporte e Desenvolvimento",
    description:
      "Atuação como programador fullstack, trabalhando em projetos como um ERP para operadoras/administradoras de saúde suplementar. Contribuo diretamente no desenvolvimento e manutenção de soluções utilizando Angular, PHP, SQL Server, Firebird, entre outras tecnologias.",
    keywords: [
      "Delphi",
      "HTML/CSS",
      "Angular",
      "PHP",
      "SQL Server",
      "Firebird",
      "Scrum",
    ],
    date: "2023 - presente",
    icon: React.createElement(BsDatabase),
  },
  {
    company: "TK Elevator",
    role: "Information Technology Intern",
    description:
      "Atuação como Analista de Suporte, responsável pelo atendimento direto das filiais do estado do Paraná, assim como usuários da América Latina (HelpDesk). Suporte a sistemas Microsoft Office 365 e Active Directory, gestão de Windows Server  e desenvolvimento de soluções para problemas e processos internos.",
    keywords: ["suporte", "helpdesk", "office 365", "windows server", "SQL"],
    date: "2022 - 2023",
    icon: React.createElement(BsBuildingCheck),
  },
  {
    company: "Freelancer",
    role: "Desenvolvedor",
    description:
      "Desenvolvimento de codificações sob demanda para a plataforma ProfitChart (Nelogica). Projetos desenvolvidos seguindo setups descritos na literatura ou o modelo do cliente, para automação de operações, screening, criação de regras de coloração, backtesting, etc. Tecnologia utilizada: NTSL (Nelogica Trading System Language).",
    keywords: ["lógica", "nelogica", "metatrader", "SQL"],
    date: "2021 - 2022",
    icon: React.createElement(AiOutlineLaptop),
  },
];

export const footerLinks = [
  {
    Icon: FaGithub,
    href: "https://github.com/matheus-ferreira1",
    id: 1,
  },
  {
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/in/matheus-ferreira33/",
    id: 2,
  },
  {
    Icon: HiMail,
    href: "mailto:matheusferreira.dev@outlook.com",
    id: 3,
  },
];

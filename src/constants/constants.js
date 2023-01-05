import { FaReact, FaNodeJs, FaTools } from "react-icons/fa";

export const navLinks = [
  {
    id: "home",
    title: "Início",
    path: "/",
  },
  {
    id: "projects",
    title: "Projetos",
    path: "/projects",
  },
  {
    id: "experience",
    title: "Experiência",
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
      "React, Redux, Angular, HTML, CSS, SASS/SCSS, Bootstrap, MaterialUI, TailwindCSS, StyledComponents",
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

export const experience = [
  {
    id: 1,
    company: "TK Elevator",
    role: "Information Technology Intern",
    description:
      "Atuação como Analista de Suporte e Desenvolvimento, atendendo diretamente as filiais do estado do Paraná, assim como usuários da América Latina (HelpDesk). Suporte a sistemas Microsoft AD e Azure, gestão de Windows Server  e desenvolvimento de soluções para problemas e processos internos.",
    keywords: ["helpdesk", "office 365", "windows server", "SQL"],
    dateInit: "2022",
    dateEnd: "atual",
  },
  {
    id: 2,
    company: "Freelancer",
    role: "desenvolvedor",
    description:
      "Desenvolvimento de codificações sob demanda para serem utilizadas na plataforma ProfitChart (Nelogica). Projetos desenvolvidos seguindo setups descritos na literatura ou o modelo do cliente, podendo ser utilizados para automação de operações, screening, criação de regras de coloração, backtesting, etc. Tecnologia utilizada: NTSL (Nelogica Trading System Language).",
    keywords: ["lógica", "nelogica", "metatrader", "SQL"],
    dateInit: "2021",
    dateEnd: "2022",
  },
  {
    id: 3,
    company: "Instituto Brasileiro de Geografia e Estatística",
    role: "Agente de Pesquisa e Mapeamento",
    description:
      "Pesquisador responsável pela realização de pesquisas econômicas e sociodemográficas, levantamentos geográficos e cartográficos, atuando visitando domicílios e estabelecimentos coletando dados para fins estatísticos. Coleta de dados através de banco de dados SQL para desenvolvimento das pesquisas amplamente divulgadas periodicamente.",
    keywords: ["pesquisa", "data", "SQL"],
    dateInit: "2018",
    dateEnd: "2021",
  },
];

export const formacao = [
  {
    id: 1,
    institute: "Faculdade Descomplica",
    nivel: "tecnólogo",
    course: "Análise e Des. de Sistemas",
    dateInit: 2022,
    dateEnd: 2024,
  },
  {
    id: 2,
    institute: "UFBA",
    nivel: "mestrado",
    course: "Engenharia Química",
    dateInit: 2017,
    dateEnd: 2018,
  },
  {
    id: 3,
    institute: "UFBA",
    nivel: "bacharel",
    course: "Biotecnologia",
    dateInit: 2012,
    dateEnd: 2017,
  },
];

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
    tools: "NPM, Yarn, Vite, Linux",
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
    keywords: ["pesquisa", "data-analysis", "SQL"],
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

export const courses = [
  {
    id: 1,
    title: "Lógica de Programação",
    institute: "Udemy",
    hours: 14,
  },
  {
    id: 2,
    title: "Responsive Web Design",
    institute: "freeCodeCamp",
    hours: 300,
  },
  {
    id: 3,
    title: "Desenvolvimento Web Completo",
    institute: "Udemy",
    hours: 114.5,
  },
  {
    id: 4,
    title: "Projetos ágeis com SCRUM",
    institute: "Digital One Innovation",
    hours: 2,
  },
  {
    id: 5,
    title: "Git - Básico ao avançado (2021)",
    institute: "Udemy",
    hours: 4,
  },
  {
    id: 6,
    title: "React: Using TypeScript",
    institute: "LinkedIn Learning",
    hours: 1,
  },
  {
    id: 7,
    title: "Curso Prático React e Next.js Essencial com Typescript",
    institute: "Udemy",
    hours: 12.5,
  },
];

export const languages = [
  {
    id: 1,
    name: "inglês",
    fluency: "fluente",
  },
  {
    id: 2,
    name: "espanhol",
    fluency: "básico",
  },
];

export const projects = [
  {
    id: 1,
    title: "Movies App",
    imagePath: "./src/assets/laptop.jpg",
    description:
      "Aplicativo que requisita dados da API The Movie Database, mostrando em tela os principais filmes do momento. Também há a opção de filtrar os resultados.",
    stack: [
      "Typescript",
      "React",
      "Axios",
      "TailwindCSS",
      "TheMovieDatabaseAPI",
    ],
    demo: "https://movies-app-matheus-ferreira1.vercel.app/",
    code: "https://github.com/matheus-ferreira1/movies-app",
  },
  {
    id: 2,
    title: "Landing page de banco",
    imagePath: "./src/assets/laptop.jpg",
    description:
      "Uma página web simples  totalmente responsiva, criada para treinar os conceitos do TailwindCSS de Mobile-First",
    stack: [
      "Javascript",
      "React",
      "Mobile-First",
      "TailwindCSS",
      "responsive-web-design",
    ],
    demo: "https://teuzobank.vercel.app/",
    code: "https://github.com/matheus-ferreira1/Financial-landing-page",
  },
  {
    id: 3,
    title: "Aplicativo de clima",
    imagePath: "./src/assets/laptop.jpg",
    description:
      "Uma SPA onde o usuário pode procurar pelo nome de uma cidade e visualizar as  informações de clima do local, caso seja encontrada. Utiliza a API OpenWeatherMap.",
    stack: ["Typescript", "React", "OpenWeatherMap API", "TailwindCSS"],
    demo: "https://weather-app-matheus.vercel.app/",
    code: "https://github.com/matheus-ferreira1/weather-app",
  },
  {
    id: 4,
    title: "E-commerce frontend",
    imagePath: "./src/assets/laptop.jpg",
    description:
      "Aplicação que simula o frontend de um e-commerce. Interface moderna com Hero Section com CTA. Produtos mostrados são requisitados da FakeStoreAPI, utilizando axios. Toda a funcionalidade de incluir e exluir no carrinho inclusa.",
    stack: [
      "React",
      "ContextAPI",
      "react-router-dom",
      "TailwindCSS",
      "FakeStoreAPI",
    ],
    demo: "https://matheus-ecommerce-front.vercel.app/",
    code: "https://github.com/matheus-ferreira1/ecommerce-front",
  },
];

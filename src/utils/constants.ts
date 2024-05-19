export type Video = {
  url: string;
};

export type Banner = {
  url: string;
};

export type Chapter = {
  id: string;
  name: string;
  video: Video;
};

export type PropsCourses = {
  id: string;
  author: string;
  name: string;
  free: boolean;
  description: string;
  demoUrl: string;
  banner: Banner;
  chapter: Chapter[];
  totalChapters: number;
  tag: string[];
  sourceCode?: string;
};

export const courseLists: PropsCourses[] = [
  {
    author: "Felipe Rocha",
    name: "Node.js Para Completos Iniciantes",
    id: "1",
    free: true,
    description:
      "Neste curso ensinarei para você TUDO o que você precisa saber para adquirir uma base sólida no NODE.JS, uma das tecnologias mais populares atualmente e que não para de crescer!",
    demoUrl: "https://www.youtube.com/@CursoemVideo",
    banner: {
      url: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with actual banner image URL
    },
    chapter: [
      {
        id: "1",
        name: "Node para Completos Iniciantes",
        video: {
          url: "https://youtu.be/IOfDoyP1Aq0?si=fQ040pNqwkrQvzkU",
        },
      },
    ],
    totalChapters: 1,
    tag: ["programacao", "javascript", "iniciantes", "node", "cursoemvideo"],
  },
  {
    author: "Felipe Rocha",
    name: "React para Completos Iniciantes",
    id: "2",
    free: false,
    description:
      "Neste curso ensinarei para você TUDO o que você precisa saber para adquirir uma base sólida no REACT, uma das tecnologias front-end mais populares atualmente!",
    demoUrl: "https://exemplo.com/demo-javascript-interativo",
    banner: {
      url: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with actual banner image URL
    },
    chapter: [
      {
        id: "1",
        name: "React para Completos Iniciantes",
        video: {
          url: "https://youtu.be/ErjWNvP6mko?si=KR2K5SeKydITzBjB",
        },
      },
    ],
    totalChapters: 1,
    sourceCode: "https://exemplo.com/codigo-fonte-javascript-interativo",
    tag: ["programacao", "javascript", "react", "interativo", "cursoemvideo"],
  },
  {
    author: "Victor Lima",
    name: "C# - Aprenda o essencial em 5 HORAS",
    id: "3",
    free: true,
    description:
      "Aprenda os conceitos básicos da química de forma descomplicada e divertida com este curso completo e gratuito do Professor Cabral. Abrange desde os átomos e moléculas até reações químicas, estequiometria e muito mais.",
    demoUrl: "https://exemplo.com/demo-quimica-cabral",
    banner: {
      url: "https://images.pexels.com/photos/11035478/pexels-photo-11035478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    chapter: [
      {
        id: "1",
        name: "Aprenda o essencial em 5 HORAS?",
        video: {
          url: "https://youtu.be/PKMm-cHe56g?si=KSeiAitkHr_d-IMK",
        },
      },
    ],
    totalChapters: 1,
    sourceCode: "https://exemplo.com/codigo-fonte-quimica-geral",
    tag: ["programação", "c#", "geral", "iniciantes", "backend"],
  },
  {
    author: "Prof. Dimitri",
    name: "Curso de HTML Completo",
    id: "4",
    free: true,
    description:
      "Neste curso de HTML completo vamos aprender como funciona a linguagem de marcação que forma a estrutura de toda web. Neste curso de HTML você vai aprender todos os fundamentos necessários e dominar os principais aspectos do HTML.",
    demoUrl: "https://exemplo.com/demo-quimica-cabral",
    banner: {
      url: "https://images.pexels.com/photos/11035371/pexels-photo-11035371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    chapter: [
      {
        id: "1",
        name: "Criando novo projeto",
        video: {
          url: "https://youtu.be/sj0p9O85AIg?si=8P5W9ilcIiBCdzMi",
        },
      },
      {
        id: "2",
        name: "Estrutura Básica",
        video: {
          url: "https://youtu.be/MOd8PCyEB88?si=3FnM3CuGw75CmU5V",
        },
      },
      {
        id: "3",
        name: "Meta Tags, Cabeçalho e Parágrafo",
        video: {
          url: "https://youtu.be/1ntb19o-2MI?si=Au3p7uqbb0IVmhjG",
        },
      },
      {
        id: "4",
        name: "Formatação de Texto",
        video: {
          url: "https://youtu.be/RiGo7BN1Wps?si=1Rrf3LVVewcmVjLV",
        },
      },
      {
        id: "5",
        name: "Elementos de Citação",
        video: {
          url: "https://youtu.be/bzWtE7GFi0Y?si=i9h1r9HhEs5N6o0_",
        },
      },
      {
        id: "6",
        name: "Comentários",
        video: {
          url: "https://youtu.be/Sl0edqPVrGg?si=tadgNJFPuww-Zmrb",
        },
      },
      {
        id: "7",
        name: "Links",
        video: {
          url: "https://youtu.be/eb5tPfOeexI?si=2zNr1Mm8AWm0rSh8",
        },
      },
      {
        id: "8",
        name: "Tudo Sobre Imagens",
        video: {
          url: "https://youtu.be/2FvW812Up1U?si=EXx_rmBqz0bjTPRE",
        },
      },
      {
        id: "9",
        name: "Tabelas",
        video: {
          url: "https://youtu.be/tTUdJlcjEo4?si=PRJACpdD3RN_fhMu",
        },
      },
      {
        id: "10",
        name: "Listas",
        video: {
          url: "https://youtu.be/0pShBr4Qmt0?si=CBAeHpgqdXMHsdbD",
        },
      },
      {
        id: "11",
        name: "iframes",
        video: {
          url: "https://youtu.be/448sdzWsnMs?si=JKLhvh_A4BDGswPY",
        },
      },
      {
        id: "12",
        name: "Formulários",
        video: {
          url: "https://youtu.be/7eZJFftCbVQ?si=VfwL3YA6tYlNsl4U",
        },
      },
      {
        id: "13",
        name: "Áudio",
        video: {
          url: "https://youtu.be/ImZoGl-pjVw?si=6ZuD_OeNca8ZJhSD",
        },
      },
      {
        id: "14",
        name: "Vídeos",
        video: {
          url: "https://youtu.be/BwDPP6mfdWU?si=D3e5yIgEVglSEIXo",
        },
      },
      {
        id: "15",
        name: "Div e HTML Semântico",
        video: {
          url: "https://youtu.be/B2ZiOfoQ4wI?si=nVNXzx7oEeICDpaB",
        },
      },
    ],
    totalChapters: 1,
    sourceCode: "https://exemplo.com/codigo-fonte-quimica-geral",
    tag: ["programação", "html", "geral", "iniciantes", "frontend"],
  },
  {
    author: "Bro Code",
    name: "Python Full Course",
    id: "5",
    free: false,
    description: "Python tutorial for beginners full course",
    demoUrl: "https://exemplo.com/demo-quimica-cabral",
    banner: {
      url: "https://images.pexels.com/photos/11035474/pexels-photo-11035474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    chapter: [
      {
        id: "1",
        name: "Python Full Course",
        video: {
          url: "https://youtu.be/XKHEtdqhLK8?si=6lDZnAqjeLHZEAAN",
        },
      },
    ],
    totalChapters: 1,
    sourceCode: "https://exemplo.com/codigo-fonte-quimica-geral",
    tag: ["programação", "python", "geral", "iniciantes", "backend"],
  },
  {
    author: "Matheus Battisti - Hora de Codar",
    name: "Curso de CSS para iniciantes 2024",
    id: "6",
    free: true,
    description: "Python tutorial for beginners full course",
    demoUrl: "https://exemplo.com/demo-quimica-cabral",
    banner: {
      url: "https://images.pexels.com/photos/11035386/pexels-photo-11035386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    chapter: [
      {
        id: "1",
        name: "Aprenda CSS com exercícios e projetos",
        video: {
          url: "https://youtu.be/ZkAeajAlfgM?si=CI1pHKuKK_YXLtWY",
        },
      },
    ],
    totalChapters: 1,
    sourceCode: "https://exemplo.com/codigo-fonte-quimica-geral",
    tag: ["programação", "CSS", "geral", "iniciantes", "frontend"],
  },
];

export const SideBannerList = [
  {
    id: "1",
    name: "quildev",
    banner: {
      id: "teste1",
      url: "/bannerquil.jpg",
    },
    url: "https://www.youtube.com/@quilcode",
  },
];

// Portfolio Images

import React_Todo from "../src/assets/portfolio/practice_project/1.png";
import React_Team from "../src/assets/portfolio/practice_project/2.png";
import React_Shopping from "../src/assets/portfolio/practice_project/3.png";
import React_Robofriend from "../src/assets/portfolio/practice_project/4.png";
import React_Moviehub from "../src/assets/portfolio/practice_project/5.png";
import React_Nike from "../src/assets/portfolio/practice_project/6.png";
import Angular_Weather from "../src/assets/portfolio/practice_project/7.png";
import Angular_News from "../src/assets/portfolio/practice_project/8.png";
import Angular_Todo from "../src/assets/portfolio/practice_project/9.png";
import React_Image from "../src/assets/portfolio/practice_project/10.png";

// Tech Stack

const data = {
  links: [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "Experience",
    },
    {
      id: 5,
      link: "Contact",
    },
  ],

  homeContent: [
    {
      h2: "I am a Frontend Developer",
    },

    {
      p: "I am creative frontend development, Currently contributing to open source and love to work on web applications",
    },
  ],
};

const portfolio = [
  {
    id: 1,
    name: "Todolist",
    src: React_Todo,
    demo: "https://todo-app-reactjs-vanshchavda.netlify.app/",
    code: "https://github.com/itsvanshchavda/todo-react",
    category: "React_Angular",
  },

  {
    id: 2,
    name: "Teampage",
    src: React_Team,
    demo: "https://teampage-sciastra-official.netlify.app/",
    code: "https://github.com/itsvanshchavda/team-page",
    category: "React_Angular",
  },

  {
    id: 3,
    name: "Shoppingcart",
    src: React_Shopping,
    demo: "https://shoping-cart-feature.netlify.app/",
    code: "https://github.com/itsvanshchavda/shopping-cart",
    category: "React_Angular",
  },

  {
    id: 10,
    name: "ReactImageGenerator",
    src: React_Image,
    demo: "https://image-generator-reactjs.netlify.app/",
    code: "https://github.com/itsvanshchavda/image-generator",
    category: "React_Angular",
  },

  {
    id: 4,
    name: "Robofriends",
    src: React_Robofriend,
    demo: "https://robo-friends-reactjs.netlify.app/",
    code: "https://github.com/itsvanshchavda/robofriends",
    category: "React_Angular",
  },

  {
    id: 5,
    name: "MovieHub",
    src: React_Moviehub,
    demo: "https://github.com/itsvanshchavda/movie-hub-react",
    code: "https://github.com/itsvanshchavda/movie-hub-react",
    category: "React_Angular",
  },

  {
    id: 6,
    name: "Nikewebsite",
    src: React_Nike,
    demo: "https://nike-website-react.netlify.app/",
    code: "https://github.com/itsvanshchavda/nike-website",
    category: "React_Angular",
  },

  {
    id: 7,
    name: "AngularTodo",
    src: Angular_Todo,
    demo: "https://angular-todo-firebase.netlify.app/",
    code: "https://github.com/itsvanshchavda/angular-todo-firebase",
    category: "React_Angular",
  },

  {
    id: 8,
    name: "AngularWeatherApp",
    src: Angular_Weather,
    demo: "https://weather-website-angular.netlify.app/",
    code: "https://github.com/itsvanshchavda/weather-website-angular",
    category: "React_Angular",
  },

  {
    id: 9,
    name: "AngularNewsApp",
    src: Angular_News,
    demo: "https://www.loom.com/share/8648c2758d31414cac3c784d4fb8c142?sid=11dccbea-e7b1-4d4a-9479-7e308d093aaf",
    code: "https://github.com/itsvanshchavda/news-website-angular",
    category: "React_Angular",
  },
];

const MERN = [
  {
    id: 1,
    p: "Comming Soon...",
  },
];

const TechStack = [
  {
    id: 1,
    name: "HTML",
    src: "../src/assets/techstack/html.png",
    alt: "logo 1",
    style: "shadow-orange-500",
  },

  {
    id: 2,
    name: "CSS",
    src: "../src/assets/techstack/css.png",
    alt: "logo 2",
    style: "shadow-blue-500",
  },

  {
    id: 3,
    name: "Javascript",
    src: "../src/assets/techstack/javascript.png",
    alt: "logo 3",
    style: "shadow-yellow-500",
  },

  {
    id: 4,
    name: "React Js",
    src: "../src/assets/techstack/react.png",
    alt: "logo 4",
    style: "shadow-cyan-600",
  },

  {
    id: 5,
    name: "Angular 16",
    src: "../src/assets/techstack/angular.svg",
    alt: "logo 4",
    style: "shadow-red-500",
  },

  {
    id: 6,
    name: "GitHub",
    src: "../src/assets/techstack/github.png",
    alt: "logo 5",
    style: "shadow-gray-400",
  },

  {
    id: 7,
    name: "Tailwind",
    src: "../src/assets/techstack/tailwind.png",
    alt: "logo 6",
    style: "shadow-cyan-600",
  },

  {
    id: 8,
    name: "Bootstrap",
    src: "../src/assets/techstack/bootstrap.png",
    alt: "logo 6",
    style: "shadow-purple-400",
  },

  {
    id: 9,
    name: "Redux",
    src: "../src/assets/techstack/redux.png",
    alt: "logo 7",
    style: "shadow-purple-400",
  },

  {
    id: 10,
    name: "Typescript",
    src: "../src/assets/techstack/TS.png",
    alt: "logo 7",
    style: "shadow-blue-500",
  },

  {
    id: 11,
    name: "Python",
    src: "../src/assets/techstack/python.png",
    alt: "logo 7",
    style: "shadow-yellow-600",
  },
];

export { data, portfolio, TechStack, MERN };

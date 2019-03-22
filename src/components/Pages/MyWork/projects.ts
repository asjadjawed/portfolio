import { makeFlatUniqueCountSortedArray } from "./tagFunctions";

import faceRecognitionThumb from "../../../images/projects/face-recognition.jpg";
import galleryThumb from "../../../images/projects/gallery.jpg";
import gradientThumb from "../../../images/projects/gradient.jpg";
import hackThumb from "../../../images/projects/hackathon-3k.jpg";
import notesThumb from "../../../images/projects/notes.jpg";
import portfolioThumb from "../../../images/projects/portfolio.jpg";
import roboThumb from "../../../images/projects/robo-inc.jpg";
import shoppingThumb from "../../../images/projects/shopping.jpg";
import todoThumb from "../../../images/projects/todo.jpg";
import weatherThumb from "../../../images/projects/weather.jpg";

export const projects = [
  {
    description: "Portfolio website built with React + TypeScript + Sass.",
    heading: "My Website",
    image: portfolioThumb,
    liveLink: "https://asjad.dev/",
    projectID: "portfolio",
    sourceLink: "https://github.com/asjadjawed/portfolio",
    tags: [
      "HTML5",
      "TypeScript",
      "Sass",
      "React",
      "React-Router",
      "Normalize.css",
      "Font Awesome",
      "portfolio",
      "website"
    ]
  },
  {
    description:
      "Built using Clarifai API, Node.js, Express, bcrypt, PostgreSQL & React. Deployed on Heroku.",
    heading: "Face Recognition App",
    image: faceRecognitionThumb,
    liveLink: "https://asjad.dev/face-recognition-app/",
    projectID: "faceRecognition",
    sourceLink: "https://github.com/asjadjawed/face-recognition-app/",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "React Tilt",
      "Particles.js",
      "Node.js",
      "Express",
      "JSON",
      "bcrypt",
      "PostgreSQL",
      "knex.js",
      "Clarifai API",
      "face recognition",
      "Heroku",
      "REST API"
    ]
  },
  {
    description:
      "Uses MapQuest + DarkSky API (async requests) running on Express & Handlebars on Heroku.",
    heading: "Weather Server",
    image: weatherThumb,
    liveLink: "https://secure-gorge-94341.herokuapp.com/",
    projectID: "weather",
    sourceLink: "https://github.com/asjadjawed/weather-server",
    tags: [
      "Node.js",
      "CSS3",
      "Express",
      "JSON",
      "request",
      "Handlebars",
      "MapQuest API",
      "DarkSky API",
      "Heroku",
      "weather",
      "REST API"
    ]
  },
  {
    description:
      "The Best Corporate Robots (doing ... something?!) Built with React, RoboHash API & Faker.",
    heading: "Robo Inc.",
    image: roboThumb,
    liveLink: "https://asjad.dev/corporate-robots/",
    projectID: "roboTeam",
    sourceLink: "https://github.com/asjadjawed/corporate-robots",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "RoboHash API",
      "faker",
      "funny"
    ]
  },
  {
    description:
      "Gradient generator - provides CSS linear gradient values. Vanilla JS + HTML5 + CSS3.",
    heading: "Gradient Generator",
    image: gradientThumb,
    liveLink: "https://asjad.dev/gradient-generator/",
    projectID: "gradient",
    sourceLink: "https://github.com/asjadjawed/gradient-generator",
    tags: ["HTML5", "CSS3", "JavaScript", "gradients"]
  },
  {
    description:
      "Dynamic Single Page App built with TypeScript OOP stores tasks in browser localStorage.",
    heading: "Todo App",
    image: todoThumb,
    liveLink: "https://asjad.dev/todo-list/",
    projectID: "todo",
    sourceLink: "https://github.com/asjadjawed/todo-list",
    tags: ["HTML5", "CSS3", "TypeScript", "Web Storage API", "todo"]
  },
  {
    description:
      "Hackathon 3K Landing Page. (note: sign up needs fixing before 2999).",
    heading: "(Broken) Hackathon SignUp",
    image: hackThumb,
    liveLink: "https://asjad.dev/hackathon-signup/",
    projectID: "hackathon3k",
    sourceLink: "https://github.com/asjadjawed/hackathon-signup",
    tags: ["HTML5", "CSS3", "Animate.css", "funny", "landing page"]
  },
  {
    description:
      "A command line app built using Node.js & yargs. Uses FS module and JSON to manage notes.",
    heading: "Notes Manager",
    image: notesThumb,
    liveLink: "https://github.com/asjadjawed/notes-node/blob/master/README.md",
    projectID: "notes",
    sourceLink:
      "https://github.com/asjadjawed/notes-node/blob/master/README.md",
    tags: ["Node.js", "JSON", "yargs", "chalk", "Command Line", "filesystem"]
  },
  {
    description:
      "Single Page App built with Vanilla JS & OOP stores via browser localStorage.",
    heading: "Shopping List",
    image: shoppingThumb,
    liveLink: "https://asjad.dev/shopping-list/",
    projectID: "shopping",
    sourceLink: "https://github.com/asjadjawed/shopping-list",
    tags: ["HTML5", "CSS3", "JavaScript", "Web Storage API", "list"]
  },
  {
    description:
      "A simple gallery layout using flexbox. Alternate thumbs randomly generated from Unsplash API.",
    heading: "Gallery Layout",
    image: galleryThumb,
    liveLink: "https://asjad.dev/pic-gallery-flexbox/",
    projectID: "gallery",
    sourceLink: "https://github.com/asjadjawed/pic-gallery-flexbox",
    tags: ["HTML5", "CSS3", "UnSplash API", "gallery"]
  }
];

export const tagsList = makeFlatUniqueCountSortedArray(
  projects.flatMap(({ tags }) => tags).sort()
);

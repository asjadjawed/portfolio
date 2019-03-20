import React from "react";

import Project from "../Project/Project";

import "./MyWork.scss";

import faceRecognitionThumb from "../../images/projects/face-recognition.jpg";
import galleryThumb from "../../images/projects/flexbox-gallery.jpg";
import gradientThumb from "../../images/projects/gradient-generator.jpg";
import hackThumb from "../../images/projects/hackathon3k.jpg";
import notesThumb from "../../images/projects/node-notes-cli.jpg";
import portfolioThumb from "../../images/projects/portfolio.jpg";
import roboThumb from "../../images/projects/robo-team.jpg";
import shoppingThumb from "../../images/projects/shopping-list.jpg";
import todoThumb from "../../images/projects/todo-list.jpg";
import weatherThumb from "../../images/projects/weather-app.jpg";

export default function MyWork() {
  return (
    <div className="MyWork">
      <h1 className="MyWork--heading">
        My <span className="MyWork--text-secondaryColor">Work</span>
      </h1>
      <h2 className="MyWork--subHeading">Check out some of my projects...</h2>
      <div className="MyWork--main">
        <Project
          projectID="portfolio"
          heading="My Website"
          description="Portfolio website built with React + Typescript + Sass."
          image={portfolioThumb}
          liveLink="https://asjad.dev/"
          sourceLink="https://github.com/asjadjawed/portfolio"
        />

        <Project
          projectID="faceRecognition"
          heading="Face Recognition App"
          description="Built using Clarifai API, Node.js, Express, bcrypt, PostgreSQL & React. Deployed on Heroku."
          image={faceRecognitionThumb}
          liveLink="https://asjad.dev/face-recognition-app/"
          sourceLink="https://github.com/asjadjawed/face-recognition-app/"
        />

        <Project
          projectID="todo"
          heading="Todo SPA - (No Frameworks)"
          description="Dynamic Single Page App built with Typescript OOP stores tasks in JSON in browser localStorage."
          image={todoThumb}
          liveLink="https://asjad.dev/todo-list/"
          sourceLink="https://github.com/asjadjawed/todo-list"
        />

        <Project
          projectID="weather"
          heading="Weather Server"
          description="Uses MapQuest + DarkSky API (async requests) running on Express & Handlebars on Heroku."
          image={weatherThumb}
          liveLink="https://secure-gorge-94341.herokuapp.com/"
          sourceLink="https://github.com/asjadjawed/weather-server"
        />

        <Project
          projectID="gradient"
          heading="Gradient Generator"
          description="Gradient generator - provides CSS linear gradient values. Vanilla JS + HTML5 + CSS3."
          image={gradientThumb}
          liveLink="https://asjad.dev/gradient-generator/"
          sourceLink="https://github.com/asjadjawed/gradient-generator"
        />

        <Project
          projectID="roboTeam"
          heading="Robo Inc."
          description="The Best Corporate Robots (doing complicated stuff!) Built with React, RoboHash API & Faker."
          image={roboThumb}
          liveLink="https://asjad.dev/corporate-robots/"
          sourceLink="https://github.com/asjadjawed/corporate-robots"
        />

        <Project
          projectID="hackathon3k"
          heading="(Broken) Hackathon SignUp"
          description="Hackathon 3K Landing Page. (note: sign up needs fixing before 2999)."
          image={hackThumb}
          liveLink="https://asjad.dev/hackathon-signup/"
          sourceLink="https://github.com/asjadjawed/hackathon-signup"
        />

        <Project
          projectID="notes"
          heading="Notes Manager"
          description="A command line app built using Node.js & yargs. Uses FS module and JSON to manage notes."
          image={notesThumb}
          liveLink="https://github.com/asjadjawed/notes-node/blob/master/README.md"
          sourceLink="https://github.com/asjadjawed/notes-node/blob/master/README.md"
        />

        <Project
          projectID="shopping"
          heading="Shopping List"
          description="Single Page App built with Vanilla JS & OOP stores via browser localStorage."
          image={shoppingThumb}
          liveLink="https://asjad.dev/shopping-list/"
          sourceLink="https://github.com/asjadjawed/shopping-list"
        />

        <Project
          projectID="gallery"
          heading="Gallery Layout"
          description="A simple gallery layout using flexbox. Alternate thumbs randomly generated from Unsplash API."
          image={galleryThumb}
          liveLink="https://asjad.dev/pic-gallery-flexbox/"
          sourceLink="https://github.com/asjadjawed/pic-gallery-flexbox"
        />
      </div>
    </div>
  );
}

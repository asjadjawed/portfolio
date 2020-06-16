import React from "react";

import "./Tech.scss";

import TechIcon from "../../components/TechIcon/TechIcon";
import skills from "./skills";

export default function Tech() {
  return (
    <div className="Tech">
      <h1 className="Tech__heading">
        Services &amp;<span className="Tech__text--secondaryColor">Tech</span>
      </h1>
      <h2 className="Tech__servicesHeading Tech__text--secondaryColor">
        <strong>I can help you with...</strong>
      </h2>

      <div className="Tech__servicesGrid">
        <div className="Tech__service">
          <i className="Tech__serviceIcon fas fa-ruler-combined"></i>
          <h3 className="Tech__serviceCaption">Solution Design</h3>
          <p className="Tech__serviceDetail">
            Designing complete customized solutions.
            <br /> Data modelling + Computational Logic.
            <br /> Tech Stack / Frameworks Selection.
          </p>
        </div>
        <div className="Tech__service">
          <i className="Tech__serviceIcon far fa-window-restore"></i>
          <h3 className="Tech__serviceCaption">Front-End Development</h3>
          <p className="Tech__serviceDetail">
            UI / UX Best Practices. <br />
            Web development: HTML+CSS+JS/TS.
            <br />
            Single Page Application using React+Redux+JS/TS.
          </p>
        </div>
        <div className="Tech__service">
          <i className="Tech__serviceIcon fas fa-server"></i>
          <h3 className="Tech__serviceCaption">Back-end Development</h3>
          <p className="Tech__serviceDetail">
            Design & Develop Complete n-tier solutions.
            <br />
            Database schema deign + data modelling (SQL/NO-SQL).
            <br />
            MVC / REST architecture / GraphQL ( Node.js & Django).
          </p>
        </div>
        <div className="Tech__service">
          <i className="Tech__serviceIcon fas fa-cloud"></i>
          <h3 className="Tech__serviceCaption">Deployment</h3>
          <p className="Tech__serviceDetail">
            Deploying on the cloud:
            <br /> (AWS, Netlify, Heroku, Digital Ocean).
            <br />
            Deployment on local servers.
            <br /> Version control + CI/CD + Git Workflow.
          </p>
        </div>
        <div className="Tech__service">
          <i className="Tech__serviceIcon fas fa-vial"></i>
          <h3 className="Tech__serviceCaption">Testing</h3>
          <p className="Tech__serviceDetail">
            Using TDD (Test-driven development) for development. <br /> Unit,
            Integration and End-End Testing.
          </p>
        </div>
        <div className="Tech__service">
          <i className="Tech__serviceIcon far fa-handshake"></i>
          <h3 className="Tech__serviceCaption">Consultation</h3>
          <p className="Tech__serviceDetail">
            Bringing legacy systems up to date.
            <br />
            Picking the right technology.
            <br />
            Industry best practices for front / backend development.
          </p>
        </div>
        <div className="Tech__service">
          <i className="Tech__serviceIcon fas fa-university"></i>
          <h3 className="Tech__serviceCaption">Training</h3>
          <p className="Tech__serviceDetail">
            Training in languages / frameworks (see below)
            <br />
            Clean Code (OOP Core Concepts, SOLID, DRY, Design Patterns).
            <br />
            Coding Best Practices. <br />
            Code Efficiency. <br />
            Setting up modern development environment.
          </p>
        </div>
      </div>

      <h2 className="Tech__servicesHeading Tech__text--secondaryColor">
        <strong>Experienced with the following tech:</strong>
      </h2>

      <div className="Tech__skillsSection">
        <div className="Tech__skillsGrid">
          <fieldset className="Tech__skillsBorder Tech__skillsBorder--frontEnd">
            <legend className="Tech__skillsHeading">-Front-End-</legend>
            <div className="Tech__skills">
              {skills.frontEnd.map((skill) => (
                <TechIcon
                  key={skill[0]}
                  name={skill[0]}
                  url={skill[1]}
                  image={skill[2]}
                />
              ))}
            </div>
          </fieldset>

          <fieldset className="Tech__skillsBorder Tech__skillsBorder--backEnd">
            <legend className="Tech__skillsHeading">-Back-End-</legend>
            <div className="Tech__skills">
              {skills.backEnd.map((skill) => (
                <TechIcon
                  key={skill[0]}
                  name={skill[0]}
                  url={skill[1]}
                  image={skill[2]}
                />
              ))}
            </div>
          </fieldset>

          <fieldset className="Tech__skillsBorder Tech__skillsBorder--devOps">
            <legend className="Tech__skillsHeading">-Dev-Ops | Other-</legend>
            <div className="Tech__skills">
              {skills.devOps.map((skill) => (
                <TechIcon
                  key={skill[0]}
                  name={skill[0]}
                  url={skill[1]}
                  image={skill[2]}
                />
              ))}
            </div>
          </fieldset>
        </div>
        <small
          style={{ marginTop: "1rem", display: "block", textAlign: "right" }}
        >
          i <span style={{ color: "#f00" }}>&hearts;</span> open-source.{" "}
        </small>
      </div>
    </div>
  );
}

import React from "react";

import "./Tech.scss";

import TechIcon from "../../components/TechIcon/TechIcon";
import skills from "./skills";

export default function Tech() {
  return (
    <div className="Tech">
      <h1 className="Tech__heading">
        Services &amp;<span className="Tech__text--secondaryColor"> Tech</span>
      </h1>
      <h2 className="Tech__subHeading">I can help you..</h2>

      <h2 className="Tech__services Tech__text--secondaryColor">
        <strong>DESIGN DEVELOP DEPLOY CONSULT TRAIN</strong>
      </h2>

      <div className="Tech__skillsSection">
        <div className="Tech__skillsGrid">
          <fieldset className="Tech__skillsBorder Tech__skillsBorder--frontEnd">
            <legend className="Tech__skillsHeading">-Front-End-</legend>
            <div className="Tech__skills">
              {skills.frontEnd.map(skill => (
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
              {skills.backEnd.map(skill => (
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
              {skills.devOps.map(skill => (
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

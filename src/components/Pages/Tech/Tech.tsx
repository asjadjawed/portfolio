import React from "react";

import "./Tech.scss";

import TechIcon from "../../TechIcon/TechIcon";
import skills from "./skills";

export default function Tech() {
  return (
    <div className="Tech">
      <h1 className="Tech--heading">
        Services &amp;<span className="Tech--text-secondaryColor"> Tech</span>
      </h1>
      <h2 className="Tech--subHeading">I can help you..</h2>

      <h2 className="Tech--services Tech--text-secondaryColor">
        <strong>DESIGN DEVELOP DEPLOY OPTIMIZE CONSULT TRAIN</strong>
      </h2>

      <div className="Tech--skillsSection">
        <div className="Tech--skillsGrid">
          <fieldset className="Tech--skillsBorder Tech--skillsBorder-frontEnd">
            <legend className="Tech--skillsHeading">-Front-End-</legend>
            <div className="Tech--skills">
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

          <fieldset className="Tech--skillsBorder Tech--skillsBorder-backEnd">
            <legend className="Tech--skillsHeading">-Back-End-</legend>
            <div className="Tech--skills">
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

          <fieldset className="Tech--skillsBorder Tech--skillsBorder-devOps">
            <legend className="Tech--skillsHeading">-Dev-Ops | Other-</legend>
            <div className="Tech--skills">
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

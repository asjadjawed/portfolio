import React from "react";

import "./AboutMe.scss";

import portrait from "../../../images/portrait.png";

import TechIcon from "../../TechIcon/TechIcon";
import skills from "./skills";

export default function AboutMe() {
  return (
    <div className="AboutMe">
      <h1 className="AboutMe--heading">
        About <span className="AboutMe--text-secondaryColor">Me</span>
      </h1>
      <h2 className="AboutMe--subHeading">Greetings! Here is some info...</h2>
      <div className="AboutMe--main">
        <h2 className="AboutMe--text-secondaryColor AboutMe--gridHeading">
          BIO
        </h2>
        <img src={portrait} alt="Asjad" className="AboutMe--image" />
        <div className="AboutMe--bio">
          <p>
            I am an Accountant (IMA-USA) turned{" "}
            <strong>Full-Stack Developer</strong> . My first programming
            experience, as a kid, was with GW-BASIC on an Intel 286 back in the{" "}
            <strong>90s</strong>. (
            <em>Computer have come a long way since...</em>).
          </p>
          <p>
            I have provided companies with in-house tech solutions for
            accounting, finance, inventory management etc. (
            <em>in addition to accounting services</em>).
          </p>
          <p>
            My skill set allows me to work with the widely popular{" "}
            <strong>LAMP</strong> (Linux / Apache / MySQL / PHP) stack, the
            cutting-edge <strong>MERN</strong> (MongoDB / Express / React /
            Node.js) stack as well as others.
          </p>
        </div>
      </div>

      <div className="AboutMe--skillsSection">
        <h2 className="AboutMe--skillsSectionHeading">Technical Skills</h2>

        <p className="AboutMe--services AboutMe--text-secondaryColor">
          <strong>
            ~ DESIGN / DEVELOP / DEPLOY / OPTIMIZE / CONSULT / TRAIN ~
          </strong>
        </p>

        <div className="AboutMe--skillsGrid">
          <fieldset className="AboutMe--skillsBorder AboutMe--skillsBorder-frontEnd">
            <legend className="AboutMe--skillsHeading">Front-End</legend>
            <div className="AboutMe--skills">
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

          <fieldset className="AboutMe--skillsBorder AboutMe--skillsBorder-backEnd">
            <legend className="AboutMe--skillsHeading">Back-End</legend>
            <div className="AboutMe--skills">
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

          <fieldset className="AboutMe--skillsBorder AboutMe--skillsBorder-devOps">
            <legend className="AboutMe--skillsHeading">Dev-Ops / Other</legend>
            <div className="AboutMe--skills">
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

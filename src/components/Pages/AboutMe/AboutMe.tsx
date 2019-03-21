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
            I am a Management Accountant (IMA-USA) turned{" "}
            <strong>Full-Stack Developer</strong> from Karachi. My first
            programming experience was with GW-BASIC on an Intel 286 back in the{" "}
            <strong>90s</strong>. (
            <em>Computer have come a long way since...</em>).
          </p>
          <p>
            During my career, I have provided companies with in-house tech
            solutions for accounting, finance, inventory management etc. (
            <em>in addition to accounting services</em>). In{" "}
            <strong>2018</strong>, I decided to follow my passion as a career,
            and started learning best industry / programming practices and the
            latest in-demand tech. I hope to keep on improving and learning.
          </p>
          <p />
        </div>
      </div>

      <div className="AboutMe--skillsSection">
        <h2 className="AboutMe--skillsSectionHeading AboutMe--text-secondaryColor">
          Technical Skills
        </h2>
        <p>
          As a <strong>Full-Stack developer</strong> I can help develop a
          project right from the <em>design</em> and mockup stage through
          (test-driven) <em>development</em> (both front-end and back-end) and
          up to final <em>deployment</em> of the project. I try to learn skills
          that can help me meet the demands of most project development stacks.
          This allows me to work with the widely popular <strong>LAMP</strong>{" "}
          (Linux / Apache / MySQL / PHP) stack, the cutting-edge{" "}
          <strong>MERN</strong> (MongoDB / Express / React / Node.js) stack as
          well as others in between.
        </p>

        <p>
          In addition to this I can consult in selecting the best technologies
          to provide an optimal solution. I also conduct training sessions for
          people looking to upgrade their skills.
        </p>

        <p>
          Below are some of the Programming Languages / Frameworks / Libraries /
          Tools I have experience in:
        </p>

        <fieldset className="AboutMe--skillsBorder">
          <legend className="AboutMe--skillsHeading">Front-End</legend>
          <div className="AboutMe--skills AboutMe--skills-frontEnd">
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

        <fieldset className="AboutMe--skillsBorder">
          <legend className="AboutMe--skillsHeading">Back-End</legend>
          <div className="AboutMe--skills AboutMe--skills-backEnd">
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

        <fieldset className="AboutMe--skillsBorder">
          <legend className="AboutMe--skillsHeading">DevOps & Other</legend>
          <div className="AboutMe--skills AboutMe--skills-devOps">
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
    </div>
  );
}

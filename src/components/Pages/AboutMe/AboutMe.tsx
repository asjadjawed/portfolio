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
      <h2 className="AboutMe--subHeading">Let me tell you a few things...</h2>
      <div className="AboutMe--main">
        <img src={portrait} alt="Asjad" className="AboutMe--image" />
        <div className="AboutMe--bio">
          <h2 className="AboutMe--text-secondaryColor">BIO</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi a
            saepe, voluptas earum sequi fugiat necessitatibus minus facilis
            aperiam? Corrupti fugit consequatur necessitatibus totam unde
            sapiente assumenda dicta iure veritatis.
          </p>
        </div>
      </div>
      <div className="AboutMe--icons">
        {/* {skills.backEnd.map(skill => (
          <TechIcon
            key={skill[0]}
            name={skill[0]}
            url={skill[1]}
            image={skill[2]}
          />
        ))} */}
        {/* {skills.devOps.map(skill => (
          <TechIcon
            key={skill[0]}
            name={skill[0]}
            url={skill[1]}
            image={skill[2]}
          />
        ))} */}
        {skills.frontEnd.map(skill => (
          <TechIcon
            key={skill[0]}
            name={skill[0]}
            url={skill[1]}
            image={skill[2]}
          />
        ))}
      </div>
    </div>
  );
}

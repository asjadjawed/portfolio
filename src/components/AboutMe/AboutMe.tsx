import React from "react";

import "./AboutMe.scss";

export default function AboutMe() {
  return (
    <div className="AboutMe">
      <h1 className="AboutMe--heading">
        About <span className="AboutMe--text-secondaryColor">Me</span>
      </h1>
      <h2 className="AboutMe--subHeading">
        Full-Stack Developer, Programmer, &amp; Tech Coach
      </h2>
    </div>
  );
}

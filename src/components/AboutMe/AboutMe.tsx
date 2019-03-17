import React from "react";

import "./AboutMe.scss";

export default function AboutMe() {
  return (
    <div className="AboutMe">
      <h1 className="AboutMe--heading">
        Asjad <span className="AboutMe--text-secondaryColor">Jawed</span>
      </h1>
      <h2 className="AboutMe--subHeading">
        Full-Stack Developer, Programmer, &amp; Tech Coach
      </h2>
      <a
        className="AboutMe--iconLink"
        href="https://twitter.com"
        target="_blank"
      >
        <i className="AboutMe--icon fab fa-twitter" />
      </a>
      <a
        className="AboutMe--iconLink"
        href="https://linkedin.com"
        target="_blank"
      >
        <i className="AboutMe--icon fab fa-linkedin-in" />
      </a>
      <a
        className="AboutMe--iconLink"
        href="https://github.com"
        target="_blank"
      >
        <i className="AboutMe--icon fab fa-github" />
      </a>
    </div>
  );
}

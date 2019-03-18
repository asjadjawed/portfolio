import React from "react";

import "./Home.scss";

export default function Home() {
  return (
    <div className="Home">
      <h1 className="Home--heading">
        Asjad <span className="Home--text-secondaryColor">Jawed</span>
      </h1>
      <h2 className="Home--subHeading">
        Full-Stack Developer, Programmer, &amp; Tech Coach
      </h2>
      <a className="Home--iconLink" href="https://twitter.com" target="_blank">
        <i className="Home--icon fab fa-twitter" />
      </a>
      <a className="Home--iconLink" href="https://linkedin.com" target="_blank">
        <i className="Home--icon fab fa-linkedin-in" />
      </a>
      <a className="Home--iconLink" href="https://github.com" target="_blank">
        <i className="Home--icon fab fa-github" />
      </a>
    </div>
  );
}

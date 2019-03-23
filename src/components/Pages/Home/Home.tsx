import React from "react";

import "./Home.scss";

export default function Home() {
  return (
    <div className="Home">
      <h1 className="Home--heading">
        Asjad <span className="Home--text-secondaryColor">Jawed</span>
      </h1>
      <h2 className="Home--subHeading">
        Full-Stack Developer, Consultant, &amp; Tech Coach
      </h2>
      <div>
        <a
          className="Home--iconLink"
          href="https://twitter.com/asjadjawed"
          target="_blank"
        >
          <i className="Home--icon fab fa-twitter" />
        </a>

        <a
          className="Home--iconLink"
          href="https://www.linkedin.com/in/asjadjawed"
          target="_blank"
        >
          <i className="Home--icon fab fa-linkedin-in" />
        </a>

        <a
          className="Home--iconLink"
          href="https://github.com/asjadjawed"
          target="_blank"
        >
          <i className="Home--icon fab fa-github" />
        </a>
      </div>
    </div>
  );
}

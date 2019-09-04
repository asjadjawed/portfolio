import React from "react";
import { NavLink } from "react-router-dom";

import "./Home.scss";

export default function Home() {
  return (
    <div className="Home">
      <h1 className="Home__heading">
        Asjad <span className="Home__text--secondaryColor">Jawed</span>
      </h1>
      <h2 className="Home__subHeading">
        Full-Stack Developer, Consultant, &amp; Tech Coach
      </h2>
      <div>
        <a
          className="Home__iconLink"
          href="https://twitter.com/asjadjawed"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="Home__icon fab fa-twitter" />
        </a>

        <a
          className="Home__iconLink"
          href="https://www.linkedin.com/in/asjadjawed"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="Home__icon fab fa-linkedin-in" />
        </a>

        <a
          className="Home__iconLink"
          href="https://github.com/asjadjawed"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="Home__icon fab fa-github" />
        </a>
      </div>
      <NavLink to="/skills" className="Home__cta">
        Let's Get Started &#8594;
      </NavLink>
    </div>
  );
}

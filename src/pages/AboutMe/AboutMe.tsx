import React from "react";

import "./AboutMe.scss";

export default function AboutMe() {
  return (
    <div className="AboutMe">
      <h1 className="AboutMe__heading">
        About <span className="AboutMe__text--secondaryColor">Me</span>
      </h1>
      <h2 className="AboutMe__subHeading">Greetings! Here is some info...</h2>
      <div className="AboutMe__main">
        <h2 className="AboutMe__text-secondaryColor AboutMe__gridHeading">
          BIO
        </h2>
        <i className="AboutMe__image AboutMe__text--secondaryColor fas fa-user-circle" />
        <div className="AboutMe__bio">
          <p>
            I am an Accountant (IMA-USA) turned{" "}
            <strong>Full-Stack Developer</strong> . My first programming
            experience, as a kid, was with GW-BASIC on an Intel 286 back in the{" "}
            <strong>90s</strong>. ( Computers have come a long way since...).
          </p>
          <p>
            I have provided companies with in-house tech solutions for
            accounting, finance, inventory management etc. ( in addition to
            accounting services).
          </p>
          <p>
            My skill set allows me to work with the widely popular{" "}
            <strong>LAMP</strong> (Linux / Apache / MySQL / PHP) stack, the
            cutting-edge <strong>MERN</strong> (MongoDB / Express / React /
            Node.js) stack as well as others.
          </p>
        </div>
      </div>
    </div>
  );
}

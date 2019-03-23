import React from "react";

import "./AboutMe.scss";

import portrait from "../../../images/portrait.png";

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
            <strong>90s</strong>. ( Computer have come a long way since...).
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

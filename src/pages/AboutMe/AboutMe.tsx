import React from "react";

import "./AboutMe.scss";

import myPic from "./images/my-pic.png";

export default function AboutMe() {
  return (
    <div className="AboutMe">
      <h1 className="AboutMe__heading">
        About <span className="AboutMe__text--secondaryColor">Me</span>
      </h1>
      <h2 className="AboutMe__subHeading">Greetings! Here is some info...</h2>
      <div className="AboutMe__main">
        {/* <h2 className="AboutMe__text--secondaryColor AboutMe__gridHeading">
          BIO
        </h2> */}
        <div className="AboutMe__image">
          <img src={myPic} alt="me" />
        </div>
        <div className="AboutMe__bio">
          <p>
            I am a qualified accountant and a{" "}
            <strong>Full-Stack Developer</strong>. I started programming with
            GW-BASIC on an Intel 286 back in the <strong>90s</strong> (
            computers have come a long way since...).
          </p>
          <p>
            I have provided companies with tech solutions for their accounting,
            finance, inventory management needs (in addition to accounting /
            business management services). I also freelance as a Full-Stack
            developer.
          </p>
          <p>
            I have worked with the LAMP stack, developed desktop apps with
            Microsoft's .net. Currently, I use Javascript, Typescript & Python
            to develop solutions best suited to client needs.
          </p>
        </div>
      </div>
    </div>
  );
}

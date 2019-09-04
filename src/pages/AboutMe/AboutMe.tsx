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
          <img src={myPic} alt="my picture" />
        </div>
        <div className="AboutMe__bio">
          <p>
            I am a qualified accountant (IMA-USA) turned{" "}
            <strong>Full-Stack Developer</strong>. My earliest programming
            experience, was with GW-BASIC on an Intel 286 back in the{" "}
            <strong>90s</strong> ( computers have come a long way since...).
          </p>
          <p>
            During my career, I have provided various companies with tech
            solutions for their accounting, finance, inventory management needs
            (in addition to accounting / business management services).
          </p>
          <p>
            My skill set allows me to work with the ubiquitous{" "}
            <strong>LAMP</strong> (Linux / Apache / MySQL / PHP) stack, the
            cutting-edge <strong>MERN</strong> (MongoDB / Express / React /
            Node.js), as well as <strong>Microsoft's .net</strong> solution for
            enterprises (C# / ASP.net / SQL Server / Azure) allowing me to
            deliver solutions as per the client's requirements.
          </p>
          <p>
            I work closely with my clients to deliver solutions (Native / Cloud)
            that are customized to their needs.
          </p>
        </div>
      </div>
    </div>
  );
}

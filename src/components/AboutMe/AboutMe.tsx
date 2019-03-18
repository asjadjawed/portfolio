import React from "react";

import "./AboutMe.scss";

import Card from "../Card/Card";

import portrait from "../../images/portrait.png";

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
        <Card cardID="front-end" heading="Front-end" subheading="">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            illo.
          </p>
        </Card>
        <Card cardID="back-end" heading="Back-end" subheading="">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            aperiam, alias hic pariatur vel expedita culpa asperiores provident
            voluptatibus possimus consequuntur magni ipsum quos quia
            repudiandae? Dolorum impedit ipsa modi.
          </p>
        </Card>
        <Card cardID="other" heading="Other" subheading="">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam,
            libero.
          </p>
        </Card>
      </div>
    </div>
  );
}

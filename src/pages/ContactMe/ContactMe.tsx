import React from "react";

import "./ContactMe.scss";

export default function ContactMe() {
  return (
    <div className="ContactMe">
      <h1 className="ContactMe__heading">
        Contact <span className="ContactMe__text--secondaryColor">Me</span>
      </h1>
      <h2 className="ContactMe__subHeading">You can reach me via...</h2>
      <div className="ContactMe__main">
        <div className="ContactMe__contact">
          <h3>
            <span className="ContactMe__text--secondaryColor">Email: </span>
            &#109;&#101;&#64;&#97;&#115;&#106;&#97;&#100;&#46;&#100;&#101;&#118;
          </h3>
        </div>

        <div className="ContactMe__contact">
          <h3>
            <span className="ContactMe__text--secondaryColor">Skype: </span>
            asjadjawed
          </h3>
        </div>

        <div className="ContactMe__contact">
          <h3>
            <span className="ContactMe__text--secondaryColor">Twitter: </span>
            @asjadjawed
          </h3>
        </div>
      </div>
    </div>
  );
}

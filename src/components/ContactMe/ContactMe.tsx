import React from "react";

import "./ContactMe.scss";

export default function ContactMe() {
  return (
    <div className="ContactMe">
      <h1 className="ContactMe--heading">
        Contact <span className="ContactMe--text-secondaryColor">Me</span>
      </h1>
      <h2 className="ContactMe--subHeading">You can reach me via...</h2>
      <div className="ContactMe--main">
        <div className="ContactMe--contact">
          <h3>
            <span className="ContactMe--text-secondaryColor">Email: </span>
            &#109;&#101;&#64;&#97;&#115;&#106;&#97;&#100;&#46;&#100;&#101;&#118;
          </h3>
        </div>
        <div className="ContactMe--contact">
          <h3>
            <span className="ContactMe--text-secondaryColor">Phone: </span>
            +92 (333) 2168446
          </h3>
        </div>
        <div className="ContactMe--contact">
          <h3>
            <span className="ContactMe--text-secondaryColor">Address: </span>
            Suite#206, PECHS Community Center, PECHS - 2, KHI - PK
          </h3>
        </div>
      </div>
    </div>
  );
}

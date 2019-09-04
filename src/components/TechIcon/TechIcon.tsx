import React from "react";

import "./TechIcon.scss";

interface ITechIconProps {
  name: string;
  url: string;
  image: string;
}

const TechIcon: React.SFC<ITechIconProps> = ({ name, url, image }) => {
  return (
    <div className={`TechIcon TechIcon__${name}`}>
      <a
        className="TechIcon__link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="TechIcon__icon">
          <img src={image} alt={name} title={name} style={{ width: "100%" }} />
        </div>
      </a>
      <small className="TechIcon__subtitle">{name}</small>
    </div>
  );
};

export default TechIcon;

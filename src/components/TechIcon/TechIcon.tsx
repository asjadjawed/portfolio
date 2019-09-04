import React from "react";

import "./TechIcon.scss";

interface ITechIconProps {
  name: string;
  url: string;
  image: string;
}

const TechIcon: React.SFC<ITechIconProps> = ({ name, url, image }) => {
  return (
    <div className={`TechIcon TechIcon--${name}`}>
      <a
        className="TechIcon--link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="TechIcon--icon">
          <img src={image} alt={name} title={name} style={{ width: "100%" }} />
        </div>
      </a>
      <small className="TechIcon--subtitle">{name}</small>
    </div>
  );
};

export default TechIcon;

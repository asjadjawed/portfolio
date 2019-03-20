import React, { Component } from "react";

import "./Project.scss";

interface IProjectProps {
  projectID: string;
  heading: string;
  description: string;
  image: string;
  liveLink: string;
  sourceLink: string;
}

export default class Project extends Component<IProjectProps> {
  public render() {
    const {
      projectID,
      heading,
      description,
      image,
      liveLink,
      sourceLink
    } = this.props;

    return (
      <div className={`Project Project--${projectID}`}>
        <h2 className="Project--heading">{heading}</h2>
        <a href={liveLink} target="_blank">
          <img className="Project--image" src={image} alt={heading} />
        </a>
        <p className="Project--description">{description}</p>
        <div className="Project--buttons">
          <div className="Project--live">
            <a href={liveLink} target="_blank">
              <i className="fas fa-external-link-alt" />
            </a>
          </div>
          <div className="Project--source">
            <a href={sourceLink} target="_blank">
              <i className="fas fa-code" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

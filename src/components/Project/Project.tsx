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
      <div className={`Project Project__${projectID}`}>
        <h2 className="Project__heading">{heading}</h2>
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          <img className="Project__image" src={image} alt={heading} />
        </a>
        <p className="Project__description">{description}</p>
        <div className="Project__buttons">
          <div className="Project__live">
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt" />
            </a>
          </div>
          <div className="Project__source">
            <a href={sourceLink} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-code" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

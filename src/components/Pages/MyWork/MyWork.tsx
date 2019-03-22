import React, { Component } from "react";

import Project from "../../Project/Project";
import { IProject, projects, tagsList } from "./projects";

import "./MyWork.scss";

interface IState {
  projects: IProject[];
  selectedTags: string[];
  tagsList: string[];
}

const removeFromArray = (parentArray: string[], subArray: string[]) => {
  return parentArray.filter(elem => {
    return subArray.indexOf(elem) === -1;
  });
};
const AddtoArray = (array: string[], value: string) => {
  return [...array, value];
};

const filterProjects = (projectList: IProject[], inputTags: string[]) => {
  return projectList.filter(({ tags }) =>
    inputTags.every(inputTag => tags.includes(inputTag))
  );
};

export default class MyWork extends Component {
  public state: IState = {
    projects,
    selectedTags: [],
    tagsList
  };

  public render() {
    const { projects: projectsList } = this.state;

    return (
      <div className="MyWork">
        <h1 className="MyWork--heading">
          My <span className="MyWork--text-secondaryColor">Work</span>
        </h1>
        <h2 className="MyWork--subHeading">Check out some of my projects...</h2>

        <div className="MyWork--selected">
          {this.state.selectedTags.map(tag => (
            <small
              className="MyWork--selectedTag"
              key={tag}
              onClick={e => {
                this.setState(
                  {
                    selectedTags: removeFromArray(this.state.selectedTags, [
                      e.currentTarget.textContent!
                    ]),
                    tagsList: AddtoArray(
                      this.state.tagsList,
                      e.currentTarget.textContent!
                    )
                  },
                  () => {
                    this.setState({
                      projects: filterProjects(
                        projects,
                        this.state.selectedTags
                      )
                    });
                  }
                );
              }}
            >
              {tag}
            </small>
          ))}
        </div>

        <div className="MyWork--suggestions">
          {this.state.tagsList.map(tag => (
            <small
              className="MyWork--tag"
              key={tag}
              onClick={e => {
                this.setState(
                  {
                    selectedTags: AddtoArray(
                      this.state.selectedTags,
                      e.currentTarget.textContent!
                    ),
                    tagsList: removeFromArray(this.state.tagsList, [
                      e.currentTarget.textContent!
                    ])
                  },
                  () => {
                    this.setState({
                      projects: filterProjects(
                        projects,
                        this.state.selectedTags
                      )
                    });
                  }
                );
              }}
            >
              {tag}
            </small>
          ))}
        </div>

        <div className="MyWork--main">
          {projectsList.map(
            ({
              description,
              heading,
              image,
              liveLink,
              projectID,
              sourceLink
            }) => {
              return (
                <Project
                  description={description}
                  heading={heading}
                  image={image}
                  key={projectID}
                  liveLink={liveLink}
                  projectID={projectID}
                  sourceLink={sourceLink}
                />
              );
            }
          )}
        </div>
      </div>
    );
  }
}

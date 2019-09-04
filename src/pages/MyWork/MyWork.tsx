import React, { Component } from "react";

import Project from "../../components/Project/Project";
import { IProject, projects, tagsList } from "./projects";
import {
  AddToArray,
  makeUniqueCountSortedArray,
  removeFromArray
} from "./tagFunctions";

import "./MyWork.scss";

interface IState {
  projects: IProject[];
  selectedTags: string[];
  tagsList: string[];
}

/**
 * Remove projects for given tags
 * @param projectList the projects list
 * @param inputTags the tags for which the projects will be removed
 */
export const filterProjects = (projectList: IProject[], inputTags: string[]) =>
  projectList.filter(({ tags }) =>
    inputTags.every(inputTag => tags.includes(inputTag))
  );
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
        <h1 className="MyWork__heading">
          My <span className="MyWork__text--secondaryColor">Work</span>
        </h1>
        <h2 className="MyWork__subHeading">Check out some of my projects...</h2>

        <div className="MyWork__selected">
          {this.state.selectedTags.map(tag => (
            <small
              className="MyWork__selectedTag"
              key={tag}
              onClick={e => {
                this.setState(
                  {
                    selectedTags: removeFromArray(this.state.selectedTags, [
                      e.currentTarget.textContent!
                    ])
                  },
                  () => {
                    this.setState(
                      {
                        projects: filterProjects(
                          projects,
                          this.state.selectedTags
                        )
                      },
                      () => {
                        this.setState({
                          tagsList: removeFromArray(
                            makeUniqueCountSortedArray(
                              // Using reduce because flatmap is not well supported
                              this.state.projects
                                .reduce(
                                  (
                                    flattenedArray: string[],
                                    { tags }
                                  ): string[] => flattenedArray.concat(...tags),
                                  []
                                )
                                .sort()
                            ),
                            this.state.selectedTags
                          )
                        });
                      }
                    );
                  }
                );
              }}
            >
              {tag}
            </small>
          ))}
        </div>

        <div className="MyWork__suggestions">
          {this.state.tagsList.map(tag => (
            <small
              className="MyWork__tag"
              key={tag}
              onClick={e => {
                this.setState(
                  {
                    selectedTags: AddToArray(
                      this.state.selectedTags,
                      e.currentTarget.textContent!
                    )
                  },
                  () => {
                    this.setState(
                      {
                        projects: filterProjects(
                          projects,
                          this.state.selectedTags
                        )
                      },
                      () => {
                        this.setState({
                          tagsList: removeFromArray(
                            makeUniqueCountSortedArray(
                              // Using reduce because flatmap is not well supported
                              this.state.projects
                                .reduce(
                                  (
                                    flattenedArray: string[],
                                    { tags }
                                  ): string[] => flattenedArray.concat(...tags),
                                  []
                                )
                                .sort()
                            ),
                            this.state.selectedTags
                          )
                        });
                      }
                    );
                  }
                );
              }}
            >
              {tag}
            </small>
          ))}
        </div>

        <div className="MyWork__main">
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

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

export default class MyWork extends Component {
  public state: IState = {
    projects,
    selectedTags: [],
    tagsList
  };

  /**
   * Returns project from main project list with the input tags
   */
  filterProjects = (projectList: IProject[], inputTags: string[]) =>
    projectList.filter(({ tags }) =>
      inputTags.every(inputTag => tags.includes(inputTag))
    );

  /**
   * Remove projects without the selected tags in state
   */
  updateProjectsProperty = (inputState: IState) => {
    Object.assign(inputState, {
      projects: this.filterProjects(projects, inputState.selectedTags)
    });

    return inputState;
  };

  /**
   * Rebuild suggested tags from selected projects
   */
  updateTagsProperty = (inputState: IState) => {
    Object.assign(inputState, {
      tagsList: removeFromArray(
        makeUniqueCountSortedArray(
          inputState.projects
            .reduce(
              (flattenedArray: string[], { tags }): string[] =>
                flattenedArray.concat(...tags),
              []
            )
            .sort()
        ),
        inputState.selectedTags
      )
    });

    return inputState;
  };

  refreshSelectedTags = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    let currentState = { ...this.state };
    // Removing selected tags
    Object.assign(currentState, {
      selectedTags: removeFromArray(currentState.selectedTags, [
        e.currentTarget.textContent!
      ])
    });
    // Filter projects as per new selected tags
    currentState = this.updateProjectsProperty(currentState);
    // Updating suggested tags as per selected projects
    currentState = this.updateTagsProperty(currentState);
    this.setState(currentState);
  };

  refreshSuggestedTags = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    let currentState = { ...this.state };
    // Add to selected tags from clicked suggested tags
    Object.assign(currentState, {
      selectedTags: AddToArray(
        currentState.selectedTags,
        e.currentTarget.textContent!
      )
    });
    // Filter projects as per new selected tags
    currentState = this.updateProjectsProperty(currentState);
    // Updating suggested tags as per selected projects
    currentState = this.updateTagsProperty(currentState);
    this.setState(currentState);
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
              onClick={this.refreshSelectedTags}
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
              onClick={this.refreshSuggestedTags}
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

import React, { Component } from "react";

import Project from "../Project/Project";
import { makeFlatUniqueCountSortedArray, projects, tagsList } from "./projects";

import "./MyWork.scss";

export default class MyWork extends Component {
  public state = {
    projects,
    search: [""],
    tagsList
  };

  private inputRef = React.createRef<HTMLInputElement>();

  public componentDidMount() {
    const searchInput = this.inputRef.current!;
    searchInput.focus();
  }

  public render() {
    const { projects: projectsList } = this.state;

    return (
      <div className="MyWork">
        <h1 className="MyWork--heading">
          My <span className="MyWork--text-secondaryColor">Work</span>
        </h1>
        <h2 className="MyWork--subHeading">Check out some of my projects...</h2>

        <input
          type="search"
          className="MyWork--search"
          onChange={e => this.inputAndFilter(e.currentTarget.value)}
          placeholder="search by comma separated tags"
          value={this.state.search}
          ref={this.inputRef}
        />

        <div className="MyWork--suggestions">
          {this.state.tagsList.map(tag => (
            <small
              className="MyWork--tag"
              key={tag}
              onClick={e =>
                this.inputAndFilter(
                  [
                    ...this.state.search.filter(value => value !== ""),
                    String(e.currentTarget.textContent) as string
                  ].join(",")
                )
              }
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

  private inputAndFilter = (inputString: string) => {
    // Make input an array of values trimmed and lowered
    this.setState(
      {
        search: inputString.split(",").map(value => value.toLowerCase())
      },
      this.filterTech
    );
  };

  private filterTech = () => {
    // copying state to search and filtering, as search also updates input field
    const search = [...this.state.search].map(value => value.trim());

    // check if there is an input
    if (search.length && search[0] !== "") {
      this.setState(
        {
          projects: projects.filter(({ tags }) => {
            // check if tech tag exists in input array OR behavior between tags
            // return tags.some(tag => search.includes(tag.toLowerCase()));

            // this behaves as the AND selector between tags
            return search.every(tag =>
              tags.map(inputTag => inputTag.toLowerCase()).includes(tag)
            );
          })
        }, // chained update of tag list making sure projects are filtered first
        () =>
          this.setState({
            tagsList: makeFlatUniqueCountSortedArray(
              this.state.projects
            ).filter(tag => !search.includes(tag.toLowerCase()))
          })
      );
    } else {
      // return state to initial state
      this.setState({ projects, tagsList });
    }
  };
}

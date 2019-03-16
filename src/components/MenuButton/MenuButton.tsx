import React, { Component } from "react";

import "./MenuButton.scss";

export default class MenuButton extends Component {
  public state = {
    active: false
  };

  public render() {
    return (
      <div
        className={
          this.state.active ? "MenuButton MenuButton-active" : "MenuButton"
        }
        onClick={() => this.setState({ active: !this.state.active })}
      >
        <div
          className={
            this.state.active
              ? "MenuButton--btnLine MenuButton--btnLine-active"
              : "MenuButton--btnLine"
          }
        />
        <div
          className={
            this.state.active
              ? "MenuButton--btnLine MenuButton--btnLine-active"
              : "MenuButton--btnLine"
          }
        />
        <div
          className={
            this.state.active
              ? "MenuButton--btnLine MenuButton--btnLine-active"
              : "MenuButton--btnLine"
          }
        />
      </div>
    );
  }
}

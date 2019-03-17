import React, { Component } from "react";

import "./MenuButton.scss";

interface IMenuStateProp {
  menuState: boolean;
}

export default class MenuButton extends Component<IMenuStateProp> {
  public render() {
    return (
      <div
        className={
          this.props.menuState ? "MenuButton MenuButton-active" : "MenuButton"
        }
      >
        <div
          className={
            this.props.menuState
              ? "MenuButton--btnLine MenuButton--btnLine-active"
              : "MenuButton--btnLine"
          }
        />
        <div
          className={
            this.props.menuState
              ? "MenuButton--btnLine MenuButton--btnLine-active"
              : "MenuButton--btnLine"
          }
        />
        <div
          className={
            this.props.menuState
              ? "MenuButton--btnLine MenuButton--btnLine-active"
              : "MenuButton--btnLine"
          }
        />
      </div>
    );
  }
}

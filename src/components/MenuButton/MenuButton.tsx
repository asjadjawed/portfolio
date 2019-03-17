import React, { Component } from "react";

import "./MenuButton.scss";

interface IMenuStateProp {
  menuState: boolean;
}

export default class MenuButton extends Component<IMenuStateProp> {
  public render() {
    const { menuState } = this.props;

    return (
      <div
        className={menuState ? "MenuButton MenuButton-active" : "MenuButton"}
      >
        <div
          className={
            menuState
              ? "MenuButton--btnLine MenuButton--btnLine-active"
              : "MenuButton--btnLine"
          }
        />
        <div
          className={
            menuState
              ? "MenuButton--btnLine MenuButton--btnLine-active"
              : "MenuButton--btnLine"
          }
        />
        <div
          className={
            menuState
              ? "MenuButton--btnLine MenuButton--btnLine-active"
              : "MenuButton--btnLine"
          }
        />
      </div>
    );
  }
}

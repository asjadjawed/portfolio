import React, { Component } from "react";

import "./MenuButton.scss";

interface IMenuStateProp {
  menuState: boolean;
}

export default class MenuButton extends Component<IMenuStateProp> {
  public render() {
    const { menuState } = this.props;
    const btnLine = (
      <div
        className={
          menuState
            ? "MenuButton__btnLine MenuButton__btnLine--active"
            : "MenuButton__btnLine"
        }
      />
    );

    return (
      <div
        className={menuState ? "MenuButton MenuButton--active" : "MenuButton"}
      >
        {btnLine}
        {btnLine}
        {btnLine}
      </div>
    );
  }
}

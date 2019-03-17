import React, { Component } from "react";
import "./Menu.scss";

import MenuButton from "../MenuButton/MenuButton";

export default class Menu extends Component {
  public state = {
    active: false
  };

  public render() {
    return (
      <div className="Menu">
        <div
          className="Menu--button"
          onClick={() => this.setState({ active: !this.state.active })}
        >
          <MenuButton />
        </div>
        <div
          className={
            this.state.active
              ? "Menu--overlay Menu--overlay-active"
              : "Menu--overlay"
          }
        >
          <div className="Menu--branding">
            <div className="Menu--portrait" />
          </div>
          <div className="Menu--nav">
            <ul className="Menu--ul">
              <li className="Menu--li">
                <a href="/" className="Menu--link">
                  About Me
                </a>
              </li>
              <li className="Menu--li">
                <a href="/" className="Menu--link">
                  My Work
                </a>
              </li>
              <li className="Menu--li">
                <a href="/" className="Menu--link">
                  My Skills
                </a>
              </li>
              <li className="Menu--li">
                <a href="/" className="Menu--link">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
